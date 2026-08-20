import { cookies } from "next/headers";

import {
  listContactSubmissions,
  SubmissionStoreNotConfiguredError,
} from "@/lib/contact-submissions";
import {
  isManagementSessionValid,
  MANAGEMENT_SESSION_COOKIE,
} from "@/lib/management-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get(MANAGEMENT_SESSION_COOKIE)?.value;

  if (!isManagementSessionValid(session)) {
    return Response.json({ error: "Authentication required." }, { status: 401 });
  }

  try {
    return Response.json({ submissions: await listContactSubmissions() });
  } catch (error) {
    if (error instanceof SubmissionStoreNotConfiguredError) {
      return Response.json(
        { error: "Submission storage is not configured." },
        { status: 503 },
      );
    }

    return Response.json(
      { error: "The submissions could not be loaded." },
      { status: 500 },
    );
  }
}