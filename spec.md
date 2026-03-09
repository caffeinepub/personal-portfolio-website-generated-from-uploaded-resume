# Specification

## Summary
**Goal:** Replace the portfolio headshot images with the newly uploaded photo and ensure the updated headshot reliably loads by cache-busting.

**Planned changes:**
- Overwrite the existing static headshot assets in `frontend/public/assets/generated/` with square-cropped PNGs derived from `Profile picture (2)-4.png`, keeping the exact filenames and required dimensions (512x512 and 1280x1280).
- Increment `HEADSHOT_VERSION` in `frontend/src/content/assetPaths.ts` to force a cache refresh via query-string changes while keeping filenames the same.
- Audit headshot usage across portfolio components to ensure all renders use `HEADSHOT_512` / `HEADSHOT_1280` constants (no hard-coded headshot paths).

**User-visible outcome:** After refresh, the portfolio displays the new headshot everywhere it appears (including the hero headshot and the lightbox), without showing a cached older image.
