# Homepage design QA

final result: passed

## Evidence and comparison state

- Source visual truth: `/workspace/generated_images/exec-f78dfecb-3bd3-45f0-8486-f3b9b88a9462.png`.
- Final implementation screenshot: `/workspace/scratch/homepage-design/final-zh-CN-897.png`.
- Viewport: 897 × 1000 CSS px, deviceScaleFactor 1, Chinese, light theme, top of page. Source: 897 × 1752 px; final browser capture: 897 × 2050 px. Both images use the same pixel width and density, with natural full-page height; no stretching or density scaling.
- Final full-page comparison: `/workspace/scratch/homepage-design/comparison-pass3-full.png`.
- Final focused hero comparison: `/workspace/scratch/homepage-design/comparison-pass3-hero.png`.
- Large desktop: `/workspace/scratch/homepage-design/final-zh-CN-1440.png` and `/workspace/scratch/homepage-design/final-en-US-1440.png`.
- Mobile: `/workspace/scratch/homepage-design/final-zh-CN-390.png` and `/workspace/scratch/homepage-design/final-en-US-390.png`.
- Browser-rendered captures used headless Chromium because in-app browser automation was not exposed. The source and implementation were assembled into the same comparison frame, then the hero was compared at readable resolution.

## Findings

No remaining actionable P0/P1/P2 findings in the implemented visual target.

The page retains the user-selected original paper color, display font, fine rules and blue paper artwork, with the selected editorial work layout. The original art's 4:3 ratio, actual research captures, native-width thesis image, verified copy and existing theme capability take precedence over artifacts in the generated mock. These are intentional differences, not replacement imagery or fabricated project data. The formal headshot is absent because its source has not been provided; no placeholder or invented person is displayed.

## Required fidelity surfaces

1. **Fonts and typography:** Georgia/Times is the original display stack; Helvetica/Arial/PingFang/YaHei remains the original professional body stack. Mono is confined to metadata. The generated mock's heavier English display weight is resolved in favor of the user's preferred original font treatment. Body text is 16px on mobile and large desktops, 14px in the compact tablet layout. Chinese and English prose have separate wrapping and line-height adjustments. Both versions remain readable at 200% text size.
2. **Spacing and layout rhythm:** The two-column introduction, image caption, paired research/practice line, editorial Board and thesis rows, restrained secondary projects and footer follow the target's hierarchy. The tablet research section now begins at y=779, close to the target's research-section entrance, rather than y=957 in the initial implementation. The page uses a continuous surface and hairline separators without generic cards or elevation. Mobile becomes a readable single-column sequence.
3. **Colors and tokens:** The requested original `#f3f2eb` paper, `#20251f` ink, `#62695f` secondary text, `#d3d6cd` rules and `#2948ab` accent are present. The initial view is light regardless of system color scheme. Dark is an explicit retained user preference, using a charcoal-green surface rather than pure black.
4. **Images and icons:** The original generated paper-loop asset is used without redrawing or distortion. Board uses a real 1440px browser screenshot, replacing the generated mock's invented charts. The real 681 × 383 thesis excerpt is not enlarged beyond its native width on desktop; its idealized-backtest context is clearly captioned. Controls use standard Phosphor assets, with their license retained. No sea portrait, cartoon avatar, fake photo or decorative CSS/SVG replacement appears.
5. **Copy and content:** Both languages use verified education, anonymous practice experience and project facts. The English name is the only name published. Board and SparseLeadLag have substantive edited paragraphs; Open Invest Research Skills and WorthMatch remain secondary. The page has no invented performance, employer identities, collaboration pitch or hobby panel.

## Interaction and responsive validation

Verified Chinese and English at widths 320, 390, 768, 897 and 1440, with no horizontal overflow, clipped navigation controls, console errors or failed resources. Tested browser-language defaults, explicit language selection and reload persistence, theme selection and persistence, all internal anchor targets, real project destinations, and loaded image assets. The thesis excerpt opens as a native modal, supports Escape and the close button, keeps background controls inert and restores focus to the trigger. The native image link remains usable without JavaScript. Storage-denied mode still permits language changes. Text at 200% was verified in both languages at mobile, tablet and desktop widths.

## Comparison history

1. **Initial pass, blocked:** `/workspace/scratch/homepage-design/comparison-pass1-full.png` and `comparison-pass1-hero.png` exposed two P2 issues: excessive tablet header/hero spacing and a hero image starting too far right.
2. **First fixes:** Reduced tablet header height, display line height, paragraph density and hero spacing; adjusted hero tracks/gap and editorial image tracks. `/workspace/scratch/homepage-design/comparison-pass2-full.png` and `comparison-pass2-hero.png` confirmed improved alignment. Behavior testing also found English navigation overflow at 200% text size; header wrapping and bounded practice columns fixed it. The modal focus test was corrected to account for native browser-chrome traversal without treating it as application focus escape.
3. **Final pass, passed:** A final compacting of tablet margins brought the research entrance into the intended rhythm. `/workspace/scratch/homepage-design/comparison-pass3-full.png` and `comparison-pass3-hero.png` were opened and compared after the fixes. Chinese and English tablet captures have no overflow or resource errors; the unchanged behavior checks and full responsive/text-size checks passed.

## Follow-up polish

- P3: A higher-resolution original thesis slide would improve fine chart-label sharpness; the supplied source is preserved without fabricated detail.
- The requested optional small formal portrait can be added after the user supplies the actual photo or its location.

## Implementation checklist

- [x] Resolve the user-selected combination into a revised visual target.
- [x] Use supplied artwork and real research screenshots.
- [x] Fix the blocking typography/layout/reflow findings and capture the revised page.
- [x] Verify both languages, primary interactions, fallback behavior and responsive states.
- [x] Pass visual QA before publishing.
