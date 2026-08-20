import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";

export const MANAGEMENT_SESSION_COOKIE = "cmtu_management_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

function getSessionSecret() {
  return process.env.MANAGEMENT_HUB_SESSION_SECRET;
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("base64url");
}

export function isManagementPasswordConfigured() {
  return Boolean(process.env.MANAGEMENT_HUB_PASSWORD && getSessionSecret());
}

export function verifyManagementPassword(password: string) {
  const expectedPassword = process.env.MANAGEMENT_HUB_PASSWORD;

  return Boolean(expectedPassword && password === expectedPassword);
}

export function createManagementSession() {
  const secret = getSessionSecret();

  if (!secret) {
    throw new Error("Management Hub session secret is not configured.");
  }

  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS;
  const value = String(expiresAt);

  return `${value}.${sign(value, secret)}`;
}

export function isManagementSessionValid(value: string | undefined) {
  const secret = getSessionSecret();

  if (!value || !secret) {
    return false;
  }

  const [expiresAt, signature] = value.split(".");
  const expectedSignature = sign(expiresAt ?? "", secret);

  if (!signature || signature.length !== expectedSignature.length) {
    return false;
  }

  return (
    timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature)) &&
    Number(expiresAt) > Math.floor(Date.now() / 1000)
  );
}

export const MANAGEMENT_SESSION_MAX_AGE = SESSION_MAX_AGE_SECONDS;