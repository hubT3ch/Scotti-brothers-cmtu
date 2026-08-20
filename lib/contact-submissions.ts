import {
  getSupabaseAdminClient,
  SupabaseConfigurationError,
} from "@/lib/supabase-server";

const SUBMISSIONS_BUCKET = "cmtu-submissions";

export type ManagementSubmission = {
  submissionId: string;
  guestName: string;
  guestEmail: string;
  fields: Record<string, string>;
  agreementStoragePath: string;
  originalFilename: string;
  submittedAt: string;
  status: string;
  agreementUrl: string;
};

export type ContactSubmission = {
  submissionId: string;
  guestName: string;
  guestEmail: string;
  fields: Record<string, string>;
  agreementStoragePath: string;
  originalFilename: string;
  submittedAt: string;
  status: "submitted";
  agreement: File;
};

export class SubmissionStoreNotConfiguredError extends Error {
  constructor() {
    super("Contact submission storage is not configured.");
    this.name = "SubmissionStoreNotConfiguredError";
  }
}

export async function saveContactSubmission(
  submission: ContactSubmission,
) {
  let supabase;

  try {
    supabase = getSupabaseAdminClient();
  } catch (error) {
    if (error instanceof SupabaseConfigurationError) {
      throw new SubmissionStoreNotConfiguredError();
    }

    throw error;
  }

  const { error: uploadError } = await supabase.storage
    .from(SUBMISSIONS_BUCKET)
    .upload(submission.agreementStoragePath, submission.agreement, {
      contentType: "application/pdf",
      upsert: false,
    });

  if (uploadError) {
    throw new Error("The agreement could not be stored.", { cause: uploadError });
  }

  const { error: insertError } = await supabase.from("submissions").insert({
    submission_id: submission.submissionId,
    guest_name: submission.guestName,
    guest_email: submission.guestEmail,
    fields: submission.fields,
    agreement_storage_path: submission.agreementStoragePath,
    original_filename: submission.originalFilename,
    submitted_at: submission.submittedAt,
    status: submission.status,
  });

  if (insertError) {
    await supabase.storage
      .from(SUBMISSIONS_BUCKET)
      .remove([submission.agreementStoragePath]);

    throw new Error("The submission could not be recorded.", { cause: insertError });
  }
}

export async function listContactSubmissions(): Promise<ManagementSubmission[]> {
  let supabase;

  try {
    supabase = getSupabaseAdminClient();
  } catch (error) {
    if (error instanceof SupabaseConfigurationError) {
      throw new SubmissionStoreNotConfiguredError();
    }

    throw error;
  }

  const { data, error } = await supabase
    .from("submissions")
    .select(
      "submission_id, guest_name, guest_email, fields, agreement_storage_path, original_filename, submitted_at, status",
    )
    .order("submitted_at", { ascending: false });

  if (error) {
    throw new Error("The submissions could not be loaded.", { cause: error });
  }

  const submissions = data ?? [];
  const signedSubmissions = await Promise.all(
    submissions.map(async (submission) => {
      const { data: signedUrl, error: signedUrlError } = await supabase.storage
        .from(SUBMISSIONS_BUCKET)
        .createSignedUrl(submission.agreement_storage_path, 60 * 10);

      if (signedUrlError || !signedUrl?.signedUrl) {
        throw new Error("An agreement could not be opened.", {
          cause: signedUrlError,
        });
      }

      return {
        submissionId: submission.submission_id,
        guestName: submission.guest_name,
        guestEmail: submission.guest_email,
        fields: submission.fields ?? {},
        agreementStoragePath: submission.agreement_storage_path,
        originalFilename: submission.original_filename,
        submittedAt: submission.submitted_at,
        status: submission.status,
        agreementUrl: signedUrl.signedUrl,
      };
    }),
  );

  return signedSubmissions;
}