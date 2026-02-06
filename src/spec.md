# Specification

## Summary
**Goal:** Serve the resume PDF directly from the Motoko backend and have the frontend “Download Resume” button trigger a direct file download from that backend route.

**Planned changes:**
- Persist a single resume PDF (bytes/blob) in Motoko stable state and expose an `http_request` download route that returns the PDF with `Content-Type: application/pdf` and `Content-Disposition: attachment; filename="Hamza-Ali-Arshad-Resume-20251211-(1).pdf"`.
- Seed the backend with the provided resume PDF (`Hamza-Ali-Arshad-Resume-20251211-(1).pdf`) so the download works immediately after deployment without manual upload steps.
- Update the frontend “Download Resume” button to fetch/download from the backend route (replacing the current `/assets/resume/...` link) and update the availability (HEAD) check to target the backend route while keeping the existing loading/disabled states and English button text.

**User-visible outcome:** Visitors can click “Download Resume” and their browser directly downloads the resume PDF from the backend; the button shows loading/unavailable states when the backend route is not available or the resume is not set.
