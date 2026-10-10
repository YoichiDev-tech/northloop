# OpsRook — operational software for teams that move

This is a fictional portfolio case study for an independent tech product website; it is not a live service.

We built it as a **case-study project** for PrismWave Studio — the standard of site we deliver
for small and medium tech businesses that need to look credible, take demo requests, 
and explain a product without drowning visitors in jargon.

It is not a live client. It is a realistic example of what we ship: clear structure, 
product-led copy, working enquiry flow, and a stack that is easy to host and hand over.


## Stack

- **Next.js 15** (App Router)
- **React 19 + TypeScript**
- **Tailwind CSS** (custom ink / signal palette)
- **Supabase** (demo request storage)
- **lucide-react** for icons

No page builders. No heavy design system lock-in. Code a junior can open and understand.


## What is included

| **Home** | Problem, product snapshot, primary CTA |
| **Product** | Capability blocks in plain language |
| **Solutions** | Field service, multi-site, logistics, support |
| **Pricing** | Three clear plans, no “contact us for everything” |
| **About** | Company voice, independent UK product team |
| **Contact** | Demo request form + email |

Also included:

- Sticky header with mobile menu and "Book a demo" CTA
- Footer with product links and contact
- Demo form -> API route -> Supabase `demo_requests` table
- Contact API validates requests and fails explicitly if Supabase is not configured
- Accessibility basics (focus rings, labels, semantic structure)
- Per-page metadata, Open Graph/Twitter cards, sitemap and robots rules
- Motion-safe card hover and focus feedback, with keyboard focus moving to real controls rather than informational cards
- Baseline security response headers


## Project structure

```
src/
  app/
    page.tsx           -> Home
    product/           -> Product
    solutions/         -> Solutions
    pricing/           -> Pricing
    about/             -> About
    contact/           -> Contact + demo form
    api/contact/       -> Server route -> Supabase
  components/
    Header.tsx
    Footer.tsx
    DemoForm.tsx
  lib/
    site.ts            -> Product copy & nav in one place
    supabase.ts        -> Browser client + types
```

We keep shared product text in `src/lib/site.ts` so the team can change tagline, email, or feature blurbs without hunting through every page.


## Why this site exists (PrismWave)

Tech company sites often fall into two traps:

- Generic "AI-powered platform" language that says nothing
- Or a template that looks like every other SaaS landing page

This project goes the other way: specific problem, specific audience (service and field teams), one primary action (book a demo), and pricing that does not hide behind a form.

Use it when you talk to leads:

- "This is the kind of site we build for independent product companies."
- "It demonstrates the product story and enquiry flow; backend, abuse protection, and legal/domain checks remain pre-launch tasks."


## Production hand-off

- Replace the dark product panel on the home page with real product screenshots when available.
- Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS domain used for deployment.
- Configure `NEXT_PUBLIC_SUPABASE_URL` and the required server-only `SUPABASE_SERVICE_ROLE_KEY`. The API does not fall back to the public anon key. Never expose the service-role key with a `NEXT_PUBLIC_` prefix.
- Apply `supabase-schema.sql` in the production Supabase project and verify a submitted request reaches `demo_requests`.
- Configure an email notification workflow if demo requests need to alert the team; the current API stores requests but does not send email.
- Add provider-backed rate limiting, email notifications, and a production privacy notice before collecting real customer data.
- Run `npm run lint` and `npm run build` before deployment.
- Comments in the code are written in first person so intent is clear when someone else opens the project.
- Pricing numbers are illustrative for the case study — adjust for a real product.


**Built by PrismWave Studio**  
Web sites and revamps for small and medium businesses — including independent tech companies.
