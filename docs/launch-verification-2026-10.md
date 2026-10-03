# Launch copy verification — 3 October 2026

This record supports the launch claims added to `data/marketing-claims.json`
(CB-MKT-017 to CB-MKT-021 and the revised CB-MKT-001, 007 and 010). Each
statement was checked against the CognaBright application repository
(`cognabright-staging`, branch `develop`, commit `fcbb3156`) and public sources
on the date above.

## Availability (CB-MKT-019)

| Channel | Verified state | Evidence |
| --- | --- | --- |
| Web app | Available now | `https://app.cognabright.com/sign-in` returns HTTP 200; family plans are sold through production RevenueCat web billing. |
| Google Play | Coming soon | The package is `com.cognabright.app` (`android/app/build.gradle`). `https://play.google.com/store/apps/details?id=com.cognabright.app` returned HTTP 404 in AU, BR and US on 3 October 2026. The marketing launch plan (`marketing/social/facebook-launch-plan.md`) uses "Google Play & App Store · coming soon". |
| Apple App Store | Coming soon | iOS release work is deferred (`docs/audits/PRODUCTION_LAUNCH_GATE_AUDIT_2026-09-09.md`). No App Store listing exists. |

When the Google Play listing is public, follow "Switching Google Play to
available" in `docs/deployment.md`.

## Product capabilities

| Claim | Source in the application repository |
| --- | --- |
| Visual routines, Routine Builder, Guided Session (CB-MKT-018, 007) | Help Centre articles "Create and edit a routine in Routine builder" and Session guidance in `src/features/help-centre/helpCentre.familyArticles.ts`; launch video narration. |
| Build a Sentence, played aloud (CB-MKT-007) | "Use Sentence builder and record communication"; `src/features/sentence-builder/useSentenceBuilderController.ts` uses the selected language's speech locale. |
| Nine supported languages; read aloud where a device voice exists (CB-MKT-017, 018) | `src/i18n/index.ts` enables en-AU, en-US, pt-BR, es-ES, fr-FR, it-IT, de-DE, da-DK and sv-SE for interface and content. `src/services/speech.ts` uses device speech synthesis, so audio depends on an installed voice. |
| Goals, micro goals, pinning to the Care-team Workspace | "Create, review and connect goals"; Goals screen ("Up to five active Micro goals can be pinned"). |
| Care-team Workspace (plan, daily timeline, handover, support snapshot) | "Use Care-team workspace with support workers". |
| Care-team Connect (recommendations and conversations; the family accepts or declines) | "Review recommendations and conversations in Care-team connect". |
| Organisation access only after a parent or guardian accepts; revocable (CB-MKT-020) | "Review Organisation access and consent": accept, decline or revoke; Pending, Active and Previous relationships. Direct Family invitations are retired, so professionals connect through an organisation. |
| Rewards: stars, Token Cards, Prize memory | "Use Rewards and Prize memory". |
| Pain & Care does not diagnose (CB-MKT-021) | "Use Pain & care"; the in-app Pain & Care header states it "does not diagnose a medical condition". |
| Print Studio: First / Then boards, cards, labels on or off | "Create printable resources in Print studio"; Print studio screen. |

## Organisation identity

- Legal entity: COGNABRIGHT PTY LTD, ABN 54 701 887 774, main business
  location QLD (Australian Business Register, ABN Lookup, 3 October 2026).
- Public contact used across the site and app legal pages:
  `developer@cognabright.com`.
- Official channels, each checked on 3 October 2026:
  - YouTube: `https://www.youtube.com/@CognaBright` (channel
    `UCuiqoGlnz4uWfibl_ZOoVIw`, author of both launch videos).
  - Facebook: `https://www.facebook.com/cognabright/`.
  - Instagram: `https://www.instagram.com/cognabright`.
  - TikTok: `https://www.tiktok.com/@cognabright.official`.
  - No LinkedIn company page could be verified; none is linked.

## Product imagery

Screens in `assets/screens/` are crops of the Brand Kit captures committed in
the application repository (`marketing/Brand Kit/Assets`, commit `16ed4ffc`),
the same captures used in the public launch videos. They show fictional demo
profiles only.
