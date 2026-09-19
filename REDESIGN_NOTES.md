# Approved redesign implementation

Implemented locally from Approved Preview 02 on `redesign/approved-preview-02`, starting at checkpoint `dfb8d1b8a6ff58f0330582b124c77272b100f862`. Rollback tag: `backup/pre-redesign-2026-09-18`.

## Handoff and implementation

The requested handoff directory was absent initially. The supplied `Peculiar_Pioneers_Approved_Design_2026-09-14.zip` was read and restored under `design-reference/Approved_Design/`. Its HTML previews and review reports remain reference documents, outside `public/`; `.vercelignore` also excludes them from deployment uploads. The application uses native Next.js routes and React components. The only embedded frames are existing YouTube video players.

The approved white/navy/butter-yellow layout, Manrope typography, compact navigation, topic strip, reviewed ministry copy, 1844 study, Bible-app announcement, and future vision for families are retained. Secondary text was darkened slightly where browser accessibility checks found insufficient contrast. Manrope is served locally with its OFL license.

All 30 existing video identities, titles, dates, slugs, categories, durations, series information, and featured flags are preserved. Nine descriptions use the handoff's reviewed wording. The home page draws its latest video and video count from the current catalog.

`content/studies.json` is identical to `Study_Content.json`: ten topics, each with seven readings, seven flashcards, and seven questions. Activities retain Bible and EGW references, individual answer feedback, scores, missed-answer review, and retakes. Progress uses the existing `quiz-progress` storage key with separate `study:<topic>` paths. Original path/module/section/card/question identifiers remain intact. Previously advertised unfinished course URLs redirect to complete relevant studies. The original sanctuary introduction remains available.

Contact prepares an email in the visitor's email app and retains the local draft. The website does not claim delivery. Giving actions lead to contact information; there is no invented payment service. The Bible app and family assistance remain described as development plans and a future vision.

## Verification

- Production build and TypeScript checking.
- `node scripts/check-redesign.mjs` checks study counts, source references, unique video destinations, chronology count, exact handoff study content, and reference isolation from public assets.
- Chrome desktop and mobile comparison against the approved HTML preview.
- All ten study journeys: seven readings and cards, a six-of-seven quiz result with missed-answer review, reload persistence, then a seven-of-seven retake. Seeded original-course progress remained unchanged.
- Original-course final flashcard persistence, review-only filtering, keyboard flip, all quiz question formats, and retakes.
- Navigation, archive search including the featured video, Evidence filters and corrected records, contact draft persistence, and use when local storage is unavailable.
- Responsive checks at 320, 390, 768, 1024, and 1440 pixels; automated WCAG A/AA checks supplement visual and keyboard inspection.
- All 73 checked local routes/link destinations resolve, including all 30 video pages and legacy study URLs. Six private/unknown paths return 404. Production traces exclude the handoff and PDFs.
- No detected WCAG A/AA violations on ten main pages and five additional mobile/course states; no browser JavaScript errors.
- Final screenshots, build output, and structured results are saved in `design-reference/Implementation_Review_2026-09-18/`.

## Dependency fixes and Preview preparation

Updated to Next.js 16.3.5, React/React DOM 19.3.0, PostCSS 8.5.28, and patched transitive dependencies. The full `npm audit` (including development dependencies) reports zero vulnerabilities. Next.js asynchronous route parameters and TypeScript settings were migrated; `npm run build` and `npm run typecheck` pass. Node 24 matches the existing Vercel project.

The homepage header, hero and topic strip extend to the browser edges. Internal content and artwork remain bounded, with the compact menu used at narrow tablet widths. Browser geometry checks cover 13 widths from 320 to 2560 pixels with no horizontal overflow.

Verified existing Vercel project: `peculiar-pioneers` (`prj_5j6Fx1U4x9Fpn2nFR9VayQI0JovC`). The linked GitHub repository is `mikep8732/peculiar-pioneers`; its production branch is `master`. The redesign branch is `redesign/approved-preview-02`. Only a Preview deployment is authorized. Production domains and project-wide protection settings must remain unchanged.

Preview deployments currently require Vercel Authentication. The deployment Share menu supports invited collaborators (sign-in required) or a deployment-specific shareable link for anyone with that link. Creating a shareable link does not require disabling project-wide protection. See [Vercel sharing documentation](https://vercel.com/docs/deployments/sharing-deployments).

## Editorial and service limitations

Historical sourcing remains limited as documented in the handoff: the chronology is a selected collection of 566 entries, not evidence of a statistical trend. Individual historical sources remain pending for most entries. Forty-six inherited quotation placements require verification; the two reviewed Great Controversy placements are distinguished. These limits appear in the site and must remain visible.

No direct email delivery service or payment processor is configured. The interface accurately describes its email/contact actions. No app launch date, pricing, active family service, or testimonial has been added.

The initial implementation remained local. The current request authorizes a local commit and Vercel Preview deployment only, with no push, merge to `master`, Production deployment, or production domain changes. Unrelated `.claude/` and `PDFs/` files remain intact and are excluded from the commit and upload. Credentials, local tool settings, reference documents, dependencies and local build output are explicitly excluded from deployment uploads.
