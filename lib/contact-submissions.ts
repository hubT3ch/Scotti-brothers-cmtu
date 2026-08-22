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
      "id, guest_name, email, phone, segment_heading, discussion, fields, submitted_at, status"
    )
    .order("submitted_at", { ascending: false });

  if (error) {
    throw error;
  }

  const submissions = data ?? [];

  const signedSubmissions = await Promise.all(
    submissions.map(async (submission) => {
      const { data: agreement, error: agreementError } = await supabase
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

      const { data: signedUrlData, error: signedUrlError } =
        await supabase.storage
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
    })
  );

  return signedSubmissions;
}
