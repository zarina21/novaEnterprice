# NEO - Nova Enterprice Online

Corporate website for Nova Enterprice Online. Built with TanStack Start, React 19, and Tailwind CSS v4. Deployed on Vercel.

**Live site:** [novaenterprice.online](https://novaenterprice.online)

## Tech Stack

- **Framework:** TanStack Start + React 19 + Vite
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI (shadcn/ui)
- **Forms:** react-hook-form + Zod
- **Email:** Web3Forms
- **Analytics:** Vercel Analytics + Google Analytics (optional)
- **Deployment:** Vercel (Nitro preset)

## Getting Started

```bash
# Clone
git clone https://github.com/zarina21/novaEnterprice.git
cd novaEnterprice

# Install
npm install

# Environment
cp .env.example .env
# Fill in your values

# Dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description | Example |
|---|---|---|
| `VITE_BASE_URL` | Production URL | `https://novaenterprice.online` |
| `VITE_WEB3FORMS_KEY` | Web3Forms access key | `784ce0ab-...` |
| `VITE_GA_ID` | Google Analytics ID (optional) | `G-XXXXXXXXXX` |

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx          # Root layout (HTML shell, SEO, nav, footer)
│   ├── _site.tsx           # Shared layout wrapper
│   ├── _site.index.tsx     # Home page
│   ├── _site.contact.tsx   # Contact form
│   ├── _site.projects.tsx  # Projects/portfolio
│   ├── _site.privacy.tsx   # Privacy policy
│   ├── _site.terms.tsx     # Terms & conditions
│   └── sitemap[.]xml.ts    # Dynamic sitemap
├── components/
│   ├── SiteChrome.tsx       # Nav + Footer
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── seo.config.ts        # SEO helpers (baseUrl, siteName, etc.)
│   └── contact.functions.ts # Contact form server function
├── assets/                  # Images, logos
└── styles.css               # Tailwind + custom CSS
public/
├── favicon.ico
├── neo-logo.png
├── robots.txt
└── albionforge-thumb.png
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, skills, about, featured projects, CTA |
| `/contact` | Contact form (Web3Forms → Zoho Mail) |
| `/projects` | Portfolio — Albion Forge, Nova Enterprice |
| `/privacy` | Privacy policy (GDPR, CCPA compliant) |
| `/terms` | Terms and conditions |
| `/sitemap.xml` | Dynamic XML sitemap |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Deployment

The project auto-deploys to Vercel on push to `main`.

1. Push to GitHub
2. Vercel detects the push and builds
3. Production site updates at `novaenterprice.online`

### Vercel Configuration

- **Framework:** Nitro (TanStack Start)
- **Build:** `vite build`
- **Security headers:** nosniff, DENY frame, strict referrer, restrictive permissions
- **Caching:** immutable for assets, 24h for static files

## Contact Form

Uses [Web3Forms](https://web3forms.com) for form submissions:

1. User submits form → Web3Forms API
2. Web3Forms sends email to `contact@novaenterprice.online`
3. Zoho Mail delivers the email

No server-side code needed. The access key is public-safe (rate-limited by Web3Forms).

## License

Private project. All rights reserved to Nova Enterprice Online.
