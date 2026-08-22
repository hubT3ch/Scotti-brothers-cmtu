import {
  getSupabaseAdminClient,
  SupabaseConfigurationError,
} from "@/lib/supabase-server";

const SUBMISSIONS_BUCKET = "cmtu-submissions";
const CONTACT_SUBMISSIONS_TABLE = "cmtu_contact_submissions";
const RELEASE_AGREEMENTS_TABLE = "cmtu_release_agreements";

export type ManagementSubmission = {
  submissionId: string;
  guestName: string;
  guestEmail: string;
  fields: Record<string, string>;
  agreementStoragePath?: string;
  originalFilename?: string;
  submittedAt: string;
  status: string;
  agreementUrl?: string;
};

export type ContactSubmission = {
  submissionId: string;
  guestName: string;
  guestEmail: string;
  fields: Record<string, string>;
  agreementStoragePath?: string;
  originalFilename?: string;
  submittedAt: string;
  status: string;
  agreement?: File;
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

  const { error: insertError } = await supabase.from(CONTACT_SUBMISSIONS_TABLE).insert({
    submission_id: submission.submissionId,
    guest_name: submission.guestName,
    guest_email: submission.guestEmail,
    fields: submission.fields,
    submitted_at: submission.submittedAt,
    status: submission.status,
  });

  if (insertError) {
    throw new Error("The submission could not be recorded.", { cause: insertError });
  }

  if (!submission.agreement || !submission.agreementStoragePath || !submission.originalFilename) {
    return;
  }

  const agreementBytes = await submission.agreement.arrayBuffer();
  const { error: uploadError } = await supabase.storage
    .from(SUBMISSIONS_BUCKET)
    .upload(submission.agreementStoragePath, agreementBytes, {
      contentType: submission.agreement.type,
      upsert: false,
    });

  if (uploadError) {
    await supabase.from(CONTACT_SUBMISSIONS_TABLE)
      .delete()
      .eq("submission_id", submission.submissionId);

    throw new Error("The agreement could not be stored.", { cause: uploadError });
  }

  const { error: agreementInsertError } = await supabase
    .from(RELEASE_AGREEMENTS_TABLE)
    .insert({
      submission_id: submission.submissionId,
      agreement_storage_path: submission.agreementStoragePath,
      original_filename: submission.originalFilename,
      submitted_at: submission.submittedAt,
      status: submission.status,
    });

  if (agreementInsertError) {
    await Promise.all([
      supabase.from(CONTACT_SUBMISSIONS_TABLE).delete().eq("submission_id", submission.submissionId),
      supabase.storage.from(SUBMISSIONS_BUCKET).remove([submission.agreementStoragePath]),
    ]);

    throw new Error("The agreement could not be recorded.", {
      cause: agreementInsertError,
    });
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
    .from(CONTACT_SUBMISSIONS_TABLE)
    .select(
      "submission_id, guest_name, guest_email, fields, submitted_at, status",
    )
    .order("submitted_at", { ascending: false });

  if (error) {
    throw new Error("The submissions could not be loaded.", { cause: error });
  }

  const submissions = data ?? [];
  const signedSubmissions = await Promise.all(
    submissions.map(async (submission) => {
      const { data: agreement, error: agreementError } = await supabase
        .from(RELEASE_AGREEMENTS_TABLE)
        .select("agreement_storage_path, original_filename")
        .eq("submission_id", submission.submission_id)
        .maybeSingle();

      if (agreementError && agreementError.code !== "PGRST116") {
        throw new Error("An agreement could not be loaded.", {
          cause: agreementError,
        });
      }

      if (!agreement) {
        return {
          submissionId: submission.submission_id,
          guestName: submission.guest_name,
          guestEmail: submission.email,
          fields: submission.fields ?? {},
          submittedAt: submission.submitted_at,
          status: submission.status,
        };
      }

      const { data: signedUrl, error: signedUrlError } = await supabase.storage
        .from(SUBMISSIONS_BUCKET)
        .createSignedUrl(agreement.agreement_storage_path, 60 * 10);

      if (signedUrlError || !signedUrl?.signedUrl) {
        return {
          submissionId: submission.submission_id,
          guestName: submission.guest_name,
          guestEmail: submission.email,
          fields: submission.fields ?? {},
          agreementStoragePath: agreement.agreement_storage_path,
          originalFilename: agreement.original_filename,
          submittedAt: submission.submitted_at,
          status: submission.status,
        };
      }

      return {
        submissionId: submission.submission_id,
        guestName: submission.guest_name,
        guestEmail: submission.email,
        fields: submission.fields ?? {},
        agreementStoragePath: agreement.agreement_storage_path,
        originalFilename: agreement.original_filename,
        submittedAt: submission.submitted_at,
        status: submission.status,
        agreementUrl: signedUrl.signedUrl,
      };
    }),
  );

  return signedSubmissions;
}