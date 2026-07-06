# CEKAY Studio

Premium dark-mode Next.js marketing site scaffold for an ad film production studio.

## Stack

- Next.js 16 App Router
- Tailwind CSS 4
- Static content model ready to swap to Sanity later
- Contact and brief API routes ready for Zapier webhooks
- SEO metadata, sitemap, robots, and custom 404 included

## Local development

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_LINKEDIN_PARTNER_ID`
- `NEXT_PUBLIC_WHATSAPP_URL`
- `CONTACT_EMAIL`
- `ZAPIER_CONTACT_WEBHOOK_URL`
- `ZAPIER_BRIEF_WEBHOOK_URL`

## Production handoff notes

- Replace placeholder copy, founder details, team details, and social handles.
- Replace sample Vimeo IDs with real showreel and case-study videos.
- Add licensed `Clash Display` locally if you want the exact headline font instead of fallback CSS.
- Swap `src/lib/content.ts` to Sanity queries when the CMS model is ready.
- If you want cookie consent, WhatsApp floating chat, or richer scroll-triggered motion, those can be layered in next.
