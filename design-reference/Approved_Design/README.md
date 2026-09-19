# Peculiar Pioneers — approved design handoff
Saved September 14, 2026.

## What this package is
The approved interactive design and reviewed teaching content for integration into the existing Next.js website. This ZIP is a design/content handoff, not a deployable Next.js project. Open Approved_Design_Preview.html in a browser to explore it; external fonts/images may require internet access. Approved_Design_Fragment.html is the editable original fragment.

## Preserve these decisions
- Preview 02 layout; white background, navy panels, subtle neutral borders, warm butter-yellow accents (#FFF4CD; primary buttons #FFE79A).
- Readable white text on navy, navy text/icons on yellow buttons including “Open the 1844 study.”
- Compact navigation and closely spaced two-row topic links.
- Ten selectable study topics with seven readings, seven cards and seven quiz questions each (70 of each).
- American spelling: practice and practicing.
- Dedicated 1844 & the Sanctuary study, accessible through Study navigation; preserve /prophecy/1844.
- Preserve reviewed About, beliefs, videos, Evidence, Bible-app announcement and family-service vision.

## Backup provenance
The separate Original_Export ZIP is an exact copy of the originally supplied project archive, not a newly verified production backup. Its extracted repository is on master at b2b1168 with GitHub remote mikep8732/peculiar-pioneers and Vercel metadata. Study and prophecy additions are untracked relative to that commit. A tag of that commit alone would omit them.
Original export SHA-256: c2b265f5b45d39b92ed729e3518a3a16c916257850186f71ae3a36a87694284b

## Implementation and release steps
1. In the actual current VS Code repository, confirm Git status, remote, deployed commit and Vercel production branch. Make a fresh full backup outside the deployed project. Preserve untracked source and reconcile any newer live changes. Keep backups private and out of public/.
2. Establish a reviewed Git baseline including intended source files; do not blindly stage credentials, local dependencies or build output. Record a rollback tag and existing production deployment.
3. Create a redesign branch. Integrate this approved design and content into the existing Next.js routes/components; retain working URLs, metadata and video destinations. Do not replace the application with the preview HTML.
4. Address existing review findings. Confirm production contact behavior, study progress expectations and any placeholder assets. The preview contact form is a demonstration; it does not send messages. Preview study progress is not an account-backed service.
5. Build and test actual pages on desktop/mobile, keyboard navigation, source links, all lesson transitions and quiz feedback. Complete framework/dependency release checks. Earlier interaction checks were DOM-based; a full visual browser check remains necessary.
6. Create a Vercel Preview deployment on a non-production branch in the existing project. Confirm deployment settings first; a push to the configured production branch can publish immediately.
7. Review the concrete preview, then merge/deploy to the confirmed production branch after approval. Verify the live domain and retain the prior deployment and Git checkpoint for rollback.

## Content review limits
The language and historical review reports contain unresolved sourcing issues. Most timeline historical entries still require individual historical sources; some EGW quotation placements await verification. Video descriptions were reviewed, not the recordings. Do not represent this package as a completed historical audit. Ministry plans are not promises of an existing app or assistance program.

Deployment references:
https://vercel.com/docs/deployments/environments
https://vercel.com/docs/instant-rollback
