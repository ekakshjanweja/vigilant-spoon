import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { bearer, openAPI } from "better-auth/plugins";
import { db } from "../db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  plugins: [openAPI(), bearer()],
  emailAndPassword: { enabled: true },
  user: {
    deleteUser: {
      enabled: true,
      sendDeleteAccountVerification: async (
        { user, url, token }: { user: any; url: string; token: any },
        request: any
      ) => {
        console.log(
          `Sending email to ${user.email} with token ${token} and url ${url}: ${request}`
        );

        await sendEmail({
          to: user.email,
          subject: "Delete your account",
          text: `Click this link to delete your account: ${url}`,
        });
      },
    },
  },
  emailVerification: {
    sendVerificationEmail: async (
      { user, url, token }: { user: any; url: string; token: any },
      request: any
    ) => {
      await sendEmail({
        to: user.email,
        subject: "Verify your email",
        text: `\n\nClick this link to verify your email: ${url}\n\n Token: ${token}`,
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});

async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
  console.log(
    `Verification Email\n To: ${to}\n Subject: ${subject}\n Text: ${text}`
  );
}
