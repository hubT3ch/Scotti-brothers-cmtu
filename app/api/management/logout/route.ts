import { MANAGEMENT_SESSION_COOKIE } from "@/lib/management-auth";

export async function POST() {
  const response = Response.json({ authenticated: false });
  const secureAttribute = process.env.NODE_ENV === "production" ? "; Secure" : "";
  response.headers.append(
    "Set-Cookie",
    `${MANAGEMENT_SESSION_COOKIE}=; Path=/; HttpOnly${secureAttribute}; SameSite=Strict; Max-Age=0`,
  );
  return response;
}