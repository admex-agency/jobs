# FIREBEAT V23 — Map controls

Search, map tools and the zone rail share a 48px control row on desktop. All circular map/zone buttons must keep a 44×44px hit area and must not shrink. At 761–1000px, map tools should wrap below search; at 760px and below, search and tools must form two full rows.

Map image must retain its original 1514:1372 ratio. ResizeObserver fits it within the available stage; zoom, reset, pan and hotspots remain unchanged. Help text must remain in normal flow below the stage. Existing focus-visible, selected and disabled states must remain legible. Search status must announce updates without moving the toolbar. Keyboard, pointer and touch must use the same controls. No new loading or error states are introduced.

QA: circular dimensions, shared desktop center line, stage bounds and help separation verified in Chrome at 320,390,768,1366,1440,1920 CSS px. No horizontal body overflow observed. Physical phones and Safari were not tested.
