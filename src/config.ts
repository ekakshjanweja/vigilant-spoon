import * as dotenv from "dotenv";

export function loadEnv() {
  dotenv.config();

  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is required");
  }

  if (!BETTER_AUTH_SECRET) {
    throw new Error("BETTER_AUTH_SECRET is required");
  }

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is required");
  }

  if (!GOOGLE_CLIENT_ID) {
    throw new Error("GOOGLE_CLIENT_ID is required");
  }

  if (!GOOGLE_CLIENT_SECRET) {
    throw new Error("GOOGLE_CLIENT_SECRET is required");
  }
}

export const DATABASE_URL = process.env.DATABASE_URL;
export const JWT_SECRET = process.env.JWT_SECRET;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const BETTER_AUTH_SECRET = process.env.BETTER_AUTH_SECRET;
