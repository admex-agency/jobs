# FIREBEAT V29 — popup image and activation repair

Combo popup images must display at intrinsic aspect ratio, width 100% and height auto. Do not put a landscape photo inside a fixed 230px contain box: that creates padded sidebars at some viewport widths. No image crop, stretch, duplicate blurred fill, or new serving quantities.

The combo visual and its existing detail CTA must open the same combo dialog using the shared data-combo handler. The visual must have a descriptive accessible name, role button, tabindex 0, aria-haspopup dialog and aria-controls. Enter/Space must trigger once, Space must prevent page scroll, and opening/closing must preserve focus. Pointer/touch must open the corresponding item. Native combo CTA remains unchanged.

All dialog .button.dialog-close controls must use the same explicit red background / cream text pair, with darker red hover/active and existing visible keyboard focus. Decorative images introduce no disabled/loading/error behavior; existing content and empty/error handling remains unchanged.

QA: script syntax; live image and CTA activation, Enter/Space, Escape and close button; image intrinsic/rendered aspect ratio; computed button contrast. Physical mobile verification is unavailable in the current browser environment. Supplied screenshots were read from local attachments and used to identify fixed-height image sidebars and a dark-on-dark close CTA.
