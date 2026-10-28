# AI Clip Studio — Reuse-First Upgrade Plan

## Decision

Use `Kustom665/Ai-Studio-Content-optimizer-1` as the primary starting point for an original OpusClip-inspired application. It already contains a React + TypeScript + Vite interface, a video studio, video project UI, Zustand stores, and dependencies for React Player, FFmpeg.wasm, waveform visualization, drag-and-drop uploads, and OpenAI-compatible API calls.

Do not start from scratch and do not replace the existing application wholesale.

## Existing assets to preserve

- `src/App.tsx`: existing application shell and feature sections.
- `src/components/video/VideoStudio.tsx`: existing upload/preview and generation interface; refactor carefully rather than deleting.
- `src/components/video/Templates.tsx` and `RecentProjects.tsx`: reusable UI starting points; replace mock data with real project state in a later phase.
- `src/stores/videoStore.ts`: inspect before changing state ownership.
- `src/services/videoService.ts`: inspect and separate AI avatar generation from clip extraction.
- Existing `@ffmpeg/ffmpeg`, `@ffmpeg/util`, `react-player`, `wavesurfer.js`, `react-dropzone`, and Zustand dependencies.

The separate `screen-capture-proV1` repository can be treated as a future optional source for screen-recording input, not as the core clipping application.

## Product target

Build an original, mobile-friendly AI clip editor with these workflows:

1. Import a local video file.
2. Preview it and show duration and metadata.
3. Create, rename, and delete clip candidates with start/end timestamps.
4. Transcribe speech and retain word/sentence timestamps.
5. Suggest highlight windows using configurable heuristics first; add model-assisted ranking only behind an explicit service interface.
6. Export selected ranges in vertical 9:16, square 1:1, and landscape 16:9 formats.
7. Generate editable captions and allow the user to choose a caption style.
8. Save projects and exports with visible job status, errors, and retry actions.
9. Make the app installable as a PWA for iPhone Home Screen access.

## Architecture principles

- Keep browser UI responsive; use background workers or a server-side job worker for long media tasks.
- Treat FFmpeg.wasm as an optional local path, not a guarantee that every device can process large files reliably.
- For larger files, prefer a controlled backend worker with FFmpeg installed and bounded job concurrency.
- Keep provider keys on a server; never ship private API keys in Vite client bundles or commit secrets.
- Define provider interfaces for transcription and highlight scoring so models can be changed without rewriting the UI.
- Use deterministic, testable clip metadata: source ID, start/end seconds, aspect ratio, caption settings, score, and processing status.
- Preserve current features until their replacements pass tests.

## Phased implementation

### Phase 0 — Safety and baseline
- Confirm default branch, dependencies, environment variable handling, and current build/lint status.
- Inspect the existing video store, video service, upload component, and config for mock responses and browser-only assumptions.
- Ensure `.env` and credentials are not tracked; rotate any exposed credentials if confirmed.
- Create changes on a feature branch and use a pull request; do not commit directly to `main`.

### Phase 1 — Real clip workspace
- Add a dedicated Clip Studio view alongside the existing tools.
- Implement local video selection, metadata inspection, preview, and a timestamped clip-candidate list.
- Let the user edit start/end points and reject invalid or out-of-range timestamps.
- Persist non-sensitive project metadata locally until a durable backend is selected.

### Phase 2 — Reliable export
- Implement actual clip rendering with FFmpeg, with progress, cancellation, and recoverable errors.
- Verify output duration, playable container, selected aspect ratio, and download behavior.
- Do not label a clip “exported” until a real media file exists and validation passes.

### Phase 3 — Transcription and captions
- Add a provider interface for timestamped transcription.
- Store transcript segments with start/end times and editable text.
- Render captions during export; provide a manual fallback when no transcription provider is configured.

### Phase 4 — Highlight intelligence
- Rank candidate moments using transparent signals such as speech boundaries, pauses, emphasis, topic shifts, and user-defined preferences.
- Add an optional model adapter for semantic ranking and hook suggestions.
- Treat predicted virality scores as heuristic estimates, never as guaranteed performance.

### Phase 5 — Mobile, projects, and publishing
- Add responsive mobile navigation and PWA install metadata.
- Replace mock recent projects with actual project records.
- Add export presets and optional platform integrations only after authentication and permissions are implemented.

## Required verification

For every phase, record:
- files changed;
- build and lint results;
- automated/manual tests performed;
- features that are genuinely functional;
- known limitations and external API costs.

Never claim deployment, successful export, working AI analysis, or account integration unless verified.
