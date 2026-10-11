# Angelo Romano Studio — Portfolio

I built my studio website to present web development, IT consulting and selected software projects in five languages.

[Live project](https://angeloromanostudio.it) · Public portfolio edition

![Desktop preview](.github/screenshots/desktop.png)

## Stack and features

Next.js, React, TypeScript and Tailwind CSS.

- Five-language pages and case study routing
- Shared page components, service pages and contact form layouts
- Metadata, language alternates and a generated sitemap

## Run locally

Use Node.js 22 and npm:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000/it`. No account, service keys or environment configuration are required. Use fictional data when exploring forms.

## Public edition

The contact hooks only show a demo message. The WhatsApp endpoint returns 503. CV files and client screenshots are replaced with a short profile and example illustrations. Fonts are served locally with their licence notice.

This repository starts from a separate source snapshot and contains no production Git history, hosting configuration, backups or operational reports. Public content and page structure are retained where useful; demo assets and sample contacts replace client materials. The live project runs from its separate private repository.

## Checks

```bash
npm run build
npm run lint
```

The CI workflow runs the build and TypeScript checks. Dependency update requests are configured through Dependabot. Production services are outside the scope of these checks.

## Assets

The SVG illustrations in this edition are simple geometric examples supplied with the source. Client artwork, photographs, membership documents and CV PDFs are not distributed. Third-party font licences are kept alongside the font files where used.
