import {
  saveContactSubmission,
  SubmissionStoreNotConfiguredError,
} from "@/lib/contact-submissions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_AGREEMENT_BYTES = 10 * 1024 * 1024;
const REQUIRED_FIELDS = [
  "fullName",
  "email",
  "phone",
  "storyTopic",
  "story",
  "appearanceType",
  "agreementRead",
  "recordingConsent",
  "informationAccurate",
] as const;

function errorResponse(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

function normalizePdfFilename(filename: string) {
  return filename.replace(/(?:\.pdf)+$/i, ".pdf");
}

async function parseFormData(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  const lowerContentType = contentType.toLowerCase();

  if (lowerContentType.includes("multipart/form-data")) {
    return request.formData();
  }

  if (lowerContentType.includes("application/x-www-form-urlencoded")) {
    const body = await request.text();
    const data = new FormData();

    for (const [key, value] of new URLSearchParams(body)) {
      data.append(key, value);
    }

    return data;
  }

  if (!contentType) {
    return request.formData();
  }

  throw new Error("Unsupported content type.");
}

export async function POST(request: Request) {
  let formData: FormData;

  try {
    formData = await parseFormData(request);
  } catch {
    return errorResponse("The submission could not be read. Please try again.", 400);
  }

  for (const fieldName of REQUIRED_FIELDS) {
    const value = formData.get(fieldName);

    if (typeof value !== "string" || !value.trim()) {
      return errorResponse("Please complete all required fields.", 400);
    }
  }

  const email = String(formData.get("email"));
  const appearanceType = String(formData.get("appearanceType"));
  const agreement = formData.get("agreementFile");

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return errorResponse("Please provide a valid email address.", 400);
  }

  if (!["Live", "Virtual", "Either"].includes(appearanceType)) {
    return errorResponse("Please choose a valid appearance format.", 400);
  }

  if (agreement instanceof File) {
    if (agreement.size === 0) {
      return errorResponse("Please upload a valid agreement PDF if you are submitting one.", 400);
    }

    const filename = agreement.name.trim();
    const hasPdfExtension = filename.toLowerCase().endsWith(".pdf");
    const hasSafeFilename = filename.length > 0 && !/[\\/\0]/.test(filename);
    const header = new Uint8Array(await agreement.slice(0, 5).arrayBuffer());
    const isPdf = new TextDecoder().decode(header) === "%PDF-";

    if (!hasPdfExtension || !hasSafeFilename || !isPdf) {
      return errorResponse("The agreement must be a valid PDF file.", 400);
    }

    if (agreement.size > MAX_AGREEMENT_BYTES) {
      return errorResponse("The agreement PDF must be 10 MB or smaller.", 413);
    }
  }

  const submissionId = crypto.randomUUID();
  const fields = Object.fromEntries(
    Array.from(formData.entries()).filter(
      ([name, value]) => name !== "agreementFile" && typeof value === "string",
    ),
  ) as Record<string, string>;

  const submissionPayload = {
    submissionId,
    guestName: String(formData.get("fullName")),
    guestEmail: email,
    guestPhone: String(formData.get("phone")),
    segmentHeading: String(formData.get("storyTopic")),
    discussion: String(formData.get("story")),
    fields,
    submittedAt: new Date().toISOString(),
    status: "new",
  } as const;

  try {
    await saveContactSubmission({
      ...submissionPayload,
      ...(agreement instanceof File ? {
        agreementStoragePath: `contact-submissions/${submissionId}/agreement.pdf`,
        originalFilename: normalizePdfFilename(agreement.name.trim()),
        agreement,
      } : {}),
    });
  } catch (error) {
    console.error("Contact submission persistence failed", {
      submissionId,
      error,
    });

    if (error instanceof SubmissionStoreNotConfiguredError) {
      return errorResponse(
        "Submissions are temporarily unavailable. Please try again later.",
        503,
      );
    }

    return errorResponse("The submission could not be completed. Please try again.", 500);
  }

  return Response.json({ submissionId, status: "submitted" });
}