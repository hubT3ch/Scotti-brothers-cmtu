import {
  createManagementSession,
  isManagementPasswordConfigured,
  MANAGEMENT_SESSION_COOKIE,
  MANAGEMENT_SESSION_MAX_AGE,
  verifyManagementPassword,
} from "@/lib/management-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isManagementPasswordConfigured()) {
    return Response.json(
      { error: "Management Hub authentication is not configured." },
      { status: 503 },
    );
  }

  const body = (await request.json().catch(() => null)) as {
    password?: string;
  } | null;

  if (!body?.password || !verifyManagementPassword(body.password)) {
    return Response.json({ error: "Invalid password." }, { status: 401 });
  }

  const response = Response.json({ authenticated: true });
  const secureAttribute = process.env.NODE_ENV === "production" ? "; Secure" : "";
  response.headers.append(
    "Set-Cookie",
    `${MANAGEMENT_SESSION_COOKIE}=${createManagementSession()}; Path=/; HttpOnly${secureAttribute}; SameSite=Strict; Max-Age=${MANAGEMENT_SESSION_MAX_AGE}`,
  );
  return response;
}