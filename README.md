This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Contact submissions

The Contact page submits inquiry fields and the guest-completed agreement as
`multipart/form-data` to `/api/contact-submissions`. The route validates the
required fields and PDF before delegating persistence to
`lib/contact-submissions.ts`.

The password-protected Management Hub is available at `/management`. Configure
the server-only variables `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`,
`MANAGEMENT_HUB_PASSWORD`, and `MANAGEMENT_HUB_SESSION_SECRET` before deploying.
The service-role key is never sent to the browser. Hub reads generate ten-minute
signed URLs for the private `cmtu-submissions` bucket.

The existing `submissions` table must contain `submission_id`, `guest_name`,
`guest_email`, `fields` (JSON), `agreement_storage_path`, `original_filename`,
`submitted_at`, and `status`; the `cmtu-submissions` storage bucket must also
exist and remain private. No migration files are present in this repository, so
an existing deployment must apply that schema and bucket configuration through
its approved Supabase migration process rather than creating a second workflow.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
