import { cookies } from "next/headers";

import ManagementClient from "@/app/management/management-client";
import {
  isManagementSessionValid,
  MANAGEMENT_SESSION_COOKIE,
} from "@/lib/management-auth";

export const dynamic = "force-dynamic";

export default async function ManagementPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(MANAGEMENT_SESSION_COOKIE)?.value;

  return (
    <ManagementClient
      initialAuthenticated={isManagementSessionValid(session)}
    />
  );
}
