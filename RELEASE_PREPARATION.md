# Peculiar Pioneers release preparation

Prepared September 19, 2026, at approximately 04:35 UTC. All preparation is local. No push, pull request, merge, deployment, promotion, domain change, or protection change was performed during this preparation.

## Release version

Branch: `redesign/approved-preview-02`. The release is the commit containing this document and the final shared-header changes. Obtain its full identifier with `git rev-parse HEAD` before following the publish steps below.

The final source changes remove the Bible icon and its reserved spacing from the shared header, preserve the stacked wordmark and homepage link, use balanced horizontal padding (20px minimum, 48px maximum), and keep desktop navigation grouped at the right. The compact menu now appears at a header container width of 900px or below, before the white links crowd the homepage's navy boundary. Closed and open menu buttons retain readable colors. Other design and functionality are unchanged.

## Validation carried forward

The successful checks already cover the final application source; no application changes followed those checks. Only this release document was added afterward, so the build and browser suites were not repeated.

- Final production build passed after the header changes.
- The header was checked in Chrome on all 52 content routes at desktop and mobile sizes, plus 44 responsive checks on home and About between 320px and 2560px.
- Desktop grouping, balanced padding, wordmark home link, Study dropdown, mobile menu, Escape handling, navigation contrast, and absence of horizontal overflow passed. Nine focused accessibility scans had no violations. Desktop, mobile, and expanded tablet-menu screenshots were inspected.
- Earlier full redesign validation passed: TypeScript, content/source checks, all ten study journeys, flashcards, scoring, missed-answer review, retakes, saved and legacy progress, video search, Evidence filters, contact behavior, and 73 route/destination checks. Those features were unchanged by the header refinement.
- A fresh full `npm audit` on September 19 reports **0 vulnerabilities**, including development dependencies. `package.json` and `package-lock.json` are unchanged from the tested Preview commit `b2e5201991d2274d7c6b162dbc2059f82435d1b7`.
- `git diff --check` passed for the remaining source changes.

## GitHub and production reconciliation

GitHub repository: `mikep8732/peculiar-pioneers`.

Fetched and independently checked GitHub `master`: `b2b1168ad4f16338ca773b8407baefba55dbba65`. It is an ancestor of the release, with no remote-only commits. GitHub's default branch is `master`; merge commits are enabled, and no branch protection/rules require additional checks. No settings were changed.

Vercel project: `peculiar-pioneers` (`prj_5j6Fx1U4x9Fpn2nFR9VayQI0JovC`), team `mikep8732s-projects` (`team_78KAN1Xy09Zn409FRrKxBMUw`). It is linked to the repository above, uses `master` as its Production branch and Node.js 24, has Git deployment creation enabled, and has automatic custom-domain assignment enabled.

Current production was created by the CLI and has no recorded Git source SHA. It contains changes beyond GitHub master: seven changed source files and twenty additional application/content files, including newer videos, theme changes, `/prophecy/1844`, and quiz functionality. Comparing the deployed source inventory's content hashes against the backup checkpoint showed **all 59 tracked application/configuration files are identical to that checkpoint**. The only additional source file is generated `next-env.d.ts`, which is intentionally untracked. The release descends from this checkpoint and retains these changes through the reviewed redesign. There are no unaccounted-for production source changes requiring reconciliation.

The public domain responds HTTP 200 after redirecting `https://peculiarpioneers.com/` to `https://www.peculiarpioneers.com/`.

## Recorded rollback targets

- Local Git tag: `backup/pre-redesign-2026-09-18`.
- Tag commit: `dfb8d1b8a6ff58f0330582b124c77272b100f862`; verified present and an ancestor of this release.
- Current Vercel production deployment: **`dpl_44JqnkLFLezQGz7fWmsC6JC1mtcz`**, status `READY`.
- Deployment URL: `https://peculiar-pioneers-f1tbo7ucy-mikep8732s-projects.vercel.app`.
- [Deployment dashboard](https://vercel.com/mikep8732s-projects/peculiar-pioneers/44JqnkLFLezQGz7fWmsC6JC1mtcz).
- Current aliases include `peculiarpioneers.com` and `www.peculiarpioneers.com`. These remain unchanged.

The Git tag is a source checkpoint; the Vercel deployment is the exact currently serving build to restore if the new release needs rollback. Reconfirm the production target immediately before release if anyone else may have deployed in the meantime.

## Remaining release conditions and known limitations

No known technical blocker remains from the completed local checks. Publishing still requires the owner's authorization. The existing shared Preview (`dpl_FgMMxS4Xrdi5TKRxPGzMS7YkQS2f`, commit `b2e5201991d2274d7c6b162dbc2059f82435d1b7`) does **not** include the final header changes. The release steps create and check a Preview for the final commit before the Production merge.

Preview protection remains Vercel Authentication (`all_except_custom_domains`). Reviewers need appropriate access or a deployment-specific shareable link; do not change project-wide protection to obtain review access.

Existing disclosed editorial/service limits remain: historical citations and inherited quotations still have verification gaps, contact opens an email app rather than delivering a form submission, and giving leads to contact rather than a payment processor. These are represented honestly in the site; this release does not add a delivery or payment service. See `REDESIGN_NOTES.md` for the detailed sourcing limits.

Unrelated `.claude/`, `PDFs/`, and `design-reference/Implementation_Review_2026-09-18/` remain untracked and intact. All 84 files in the earlier unrelated-file checksum snapshot still match. Credentials, dependencies, build output, and local tool configuration are not part of the release commit. Handoff/reference documents remain outside public assets and application production bundles, and `.vercelignore` excludes them from CLI uploads.

## Exact publishing steps — only after authorization

1. From this repository, confirm `git branch --show-current` reports `redesign/approved-preview-02`, `git rev-parse HEAD` is the recorded release commit, and `git diff HEAD --` is empty. Fetch `master` again with `git fetch --no-tags origin master`. Run `git merge-base --is-ancestor origin/master HEAD`. If the remote moved beyond the recorded master commit, review and preserve its changes before proceeding. Recheck the Vercel production target against the rollback record above.
2. Push the release branch and the explicit backup tag (not unrelated refs):

   ```sh
   git push -u origin redesign/approved-preview-02
   git push origin refs/tags/backup/pre-redesign-2026-09-18
   ```

3. In GitHub, open a pull request in `mikep8732/peculiar-pioneers` with base `master` and compare `redesign/approved-preview-02`. Use title `Release approved Peculiar Pioneers redesign`. Include the release commit, validation summary, and rollback deployment from this document in the description.
4. In the existing Vercel project, wait for the branch's new **Preview** to reach `Ready`. Confirm its Git commit is the final release commit, not the older shared Preview. Review the final desktop/mobile header and perform a short hosted smoke check of Watch, Study → 1844, one study with saved progress, and contact behavior. Reuse the completed local suites; rerun broader checks only if a hosted failure or new change warrants it.
5. After final approval, use GitHub's **Create a merge commit** to merge that PR into `master`. **This is the publishing trigger**: the existing Vercel integration builds the Production branch and assigns the production domains when ready. Do not promote the older Preview or separately run `vercel --prod`.
6. In Vercel, verify the resulting **Production** deployment is `Ready`, identifies the new master merge commit, and serves both `peculiarpioneers.com` and `www.peculiarpioneers.com`. Check the live homepage header, Watch, Study/1844, quiz progress, and contact. Keep existing domain/DNS and protection settings. Record the new deployment ID alongside the rollback target.

Vercel documents branch Preview deployments and automatic production-domain updates on merges to the configured Production branch in [its GitHub integration guide](https://vercel.com/docs/git/vercel-for-github).

## Rollback if the release fails

In the same Vercel project's Production Deployment panel, choose **Instant Rollback** and select `dpl_44JqnkLFLezQGz7fWmsC6JC1mtcz`, confirming that both production domains are included. Alternatively, from the linked repository:

```sh
vercel rollback dpl_44JqnkLFLezQGz7fWmsC6JC1mtcz --scope mikep8732s-projects
```

Verify the live domains after rollback. This restores the existing build; it does not revert GitHub master. Reconcile Git separately before a later release. Vercel disables automatic production-domain assignment after an Instant Rollback; intentionally restore normal deployment behavior when the corrected release is ready. See [Instant Rollback](https://vercel.com/docs/instant-rollback) and [CLI rollback](https://vercel.com/docs/cli/rollback).
