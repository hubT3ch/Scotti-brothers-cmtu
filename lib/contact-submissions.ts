import {
  getSupabaseAdminClient,
  SupabaseConfigurationError,
} from "@/lib/supabase/admin";

const CONTACT_SUBMISSIONS_TABLE = "cmtu_contact_submissions";
const RELEASE_AGREEMENTS_TABLE = "cmtu_release_agreements";
const SUBMISSIONS_BUCKET = "cmtu-submissions";

export class SubmissionStoreNotConfiguredError extends Error {
  constructor() {
    super("The submission store is not configured.");
    this.name = "SubmissionStoreNotConfiguredError";
  }
}

export interface ManagementSubmission {
  submissionId: string;
  guestName: string | null;
  guestEmail: string | null;
  guestPhone: string | null;
  segmentHeading: string | null;
  discussion: string | null;
  fields: Record<string, unknown>;
  agreementStoragePath?: string;
  originalFilename?: string;
  submittedAt: string;
  status: string;
  agreementUrl?: string;
}

export interface SaveContactSubmissionInput {
  submissionId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  segmentHeading: string;
  discussion: string;
  fields: Record<string, unknown>;
  submittedAt: string;
  status: string;
  agreement?: File;
  agreementStoragePath?: string;
  originalFilename?: string;
}

export async function saveContactSubmission(
  submission: SaveContactSubmissionInput,
): Promise<void> {
  let supabase;

  try {
    supabase = getSupabaseAdminClient();
  } catch (error) {
    if (error instanceof SupabaseConfigurationError) {
      throw new SubmissionStoreNotConfiguredError();
    }

    throw error;
  }

  const { error: insertError } = await supabase
    .from(CONTACT_SUBMISSIONS_TABLE)
    .insert({
      id: submission.submissionId,
      guest_name: submission.guestName,
      email: submission.guestEmail,
      phone: submission.guestPhone,
      segment_heading: submission.segmentHeading,
      discussion: submission.discussion,
      fields: submission.fields,
      submitted_at: submission.submittedAt,
      status: submission.status,
    });

  if (insertError) {
    throw new Error("The submission could not be recorded.", {
      cause: insertError,
    });
  }

  if (
    !submission.agreement ||
    !submission.agreementStoragePath ||
    !submission.originalFilename
  ) {
    return;
  }

  const agreementBytes = await submission.agreement.arrayBuffer();

  const { error: uploadError } = await supabase.storage
    .from(SUBMISSIONS_BUCKET)
    .upload(
      submission.agreementStoragePath,
      agreementBytes,
      {
        contentType: submission.agreement.type,
        upsert: false,
      },
    );

  if (uploadError) {
    await supabase
      .from(CONTACT_SUBMISSIONS_TABLE)
      .delete()
      .eq("id", submission.submissionId);

    throw new Error("The agreement could not be stored.", {
      cause: uploadError,
    });
  }

  const { error: agreementInsertError } = await supabase
    .from(RELEASE_AGREEMENTS_TABLE)
    .insert({
      submission_id: submission.submissionId,
      storage_path: submission.agreementStoragePath,
      document_name: submission.originalFilename,
      submitted_at: submission.submittedAt,
      status: submission.status,
    });

  if (agreementInsertError) {
    await Promise.all([
      supabase
        .from(CONTACT_SUBMISSIONS_TABLE)
        .delete()
        .eq("id", submission.submissionId),

      supabase.storage
        .from(SUBMISSIONS_BUCKET)
        .remove([submission.agreementStoragePath]),
    ]);

    throw new Error("The agreement could not be recorded.", {
      cause: agreementInsertError,
    });
  }
}

export async function listContactSubmissions(): Promise<
  ManagementSubmission[]
> {
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
      "id, guest_name, email, phone, segment_heading, discussion, fields, submitted_at, status",
    )
    .order("submitted_at", { ascending: false });

  if (error) {
    throw error;
  }

  const submissions = data ?? [];

  const signedSubmissions = await Promise.all(
    submissions.map(async (submission) => {
      const { data: agreement, error: agreementError } =
        await supabase
          .from(RELEASE_AGREEMENTS_TABLE)
          .select("storage_path, document_name")
          .eq("submission_id", submission.id)
          .maybeSingle();

      if (agreementError && agreementError.code !== "PGRST116") {
        throw agreementError;
      }

      if (!agreement) {
        return {
          submissionId: submission.id,
          guestName: submission.guest_name,
          guestEmail: submission.email,
          guestPhone: submission.phone,
          segmentHeading: submission.segment_heading,
          discussion: submission.discussion,
          fields: submission.fields ?? {},
          submittedAt: submission.submitted_at,
          status: submission.status,
        };
      }

      const {
        data: signedUrlData,
        error: signedUrlError,
      } = await supabase.storage
        .from(SUBMISSIONS_BUCKET)
        .createSignedUrl(agreement.storage_path, 60 * 10);

      if (signedUrlError || !signedUrlData?.signedUrl) {
        return {
          submissionId: submission.id,
          guestName: submission.guest_name,
          guestEmail: submission.email,
          guestPhone: submission.phone,
          segmentHeading: submission.segment_heading,
          discussion: submission.discussion,
          fields: submission.fields ?? {},
          agreementStoragePath: agreement.storage_path,
          originalFilename: agreement.document_name,
          submittedAt: submission.submitted_at,
          status: submission.status,
        };
      }

      return {
        submissionId: submission.id,
        guestName: submission.guest_name,
        guestEmail: submission.email,
        guestPhone: submission.phone,
        segmentHeading: submission.segment_heading,
        discussion: submission.discussion,
        fields: submission.fields ?? {},
        agreementStoragePath: agreement.storage_path,
        originalFilename: agreement.document_name,
        submittedAt: submission.submitted_at,
        status: submission.status,
        agreementUrl: signedUrlData.signedUrl,
      };
    }),
  );

  return signedSubmissions;
}
