# Design System Document: Tactical Intelligence & Digital Craft

## 1. Overview & Creative North Star: "The Sentinel’s Veil"

This design system moves beyond the cliché "hacker" aesthetic of neon-on-black. Instead, we are building **"The Sentinel’s Veil"**—a high-end, editorial experience that balances the precision of code with the sophistication of a security firm.

The "Template Look" is our enemy. We break the rigid, modular grid by using intentional asymmetry, overlapping technical readouts, and a typography scale that feels like a redacted intelligence briefing. The UI should feel like a custom-built command deck: layered, deep, and authoritative. We prioritize tonal depth over structural lines, creating an environment where security isn't just a feature, but an atmosphere.

---

## 2. Colors & Atmospheric Depth

Our palette is rooted in the deep void of `surface` (#041329), illuminated by the clinical precision of `primary` cyber-green accents.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. High-end design breathes. To separate content, utilize background shifts. A section might move from `surface` to `surface-container-low` to signify a transition in narrative.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-opaque materials. 
- **Base Layer:** `surface` (#041329) for the global background.
- **Mid Layer:** `surface-container-low` for large content blocks.
- **Top Layer:** `surface-container-highest` (#27354c) for the most interactive elements, such as terminal windows or code snippets.

### The "Glass & Gradient" Rule
To achieve the "innovative" personality, use **Glassmorphism** for floating navigation and overlays.
- **Tokens:** Use `surface-container` with a `backdrop-blur` of 12px-20px and 60% opacity.
- **Signature Textures:** Apply a linear gradient from `primary` (#ffffff) to `primary-container` (#5ffbd6) at a 45-degree angle for hero CTAs to create a "glowing lead" effect that feels energized.

---

## 3. Typography: Technical Authority

We pair the brutalist, geometric shapes of **Space Grotesk** with the utilitarian precision of **Inter**.

- **Display & Headline (Space Grotesk):** These are your "Editorial Statements." Use `display-lg` for hero headlines with tight letter-spacing (-0.02em) to evoke a sense of high-tech urgency.
- **Body & Titles (Inter):** For complex information. `body-md` is our workhorse. It must remain legible against dark backgrounds; always use `on-surface` or `on-surface-variant` to ensure AAA contrast.
- **Monospaced Accents:** While not in the primary scale, use a mono-font (like Roboto Mono) sparingly for "Technical Metadata" (e.g., IP addresses, timestamps, or system logs) using the `label-sm` size.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows feel "web-standard." We use **Tonal Layering** to define space.

- **The Layering Principle:** Instead of a shadow, place a `surface-container-lowest` card inside a `surface-container-low` section. The slight darkening creates a "recessed" or "inset" feel that suggests a secure, carved-out space.
- **Ambient Shadows:** For floating modals, use a "Glow Shadow." Use the `surface-tint` (#38debb) at 5% opacity with a 40px blur. This mimics the light emitted from a high-end monitor in a dark room.
- **The Ghost Border:** If a boundary is required for accessibility, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
- **Subtle Grid Patterns:** Apply a repeating 24px grid using `outline-variant` at 5% opacity to the background. This provides a "blueprint" feel without cluttering the visual hierarchy.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`). High contrast text (`on-primary`). No border. `md` roundedness (0.375rem).
- **Secondary:** `surface-container-highest` background with a `primary` "Ghost Border."
- **Tertiary/Ghost:** No background. `on-surface` text. On hover, a subtle `surface-variant` background bleed-in.

### Terminal Cards (The Signature Component)
For ethical hacking, use a "Terminal Card" instead of standard cards.
- **Background:** `surface-container-lowest`.
- **Header:** A thin `surface-container-high` bar with three `primary` colored dots (0.25rem size) to mimic a software window.
- **Content:** No dividers. Use `body-sm` for content, separated by 1.5rem of vertical white space.

### Input Fields
- **State:** `surface-container-low` background. 
- **Focus:** No heavy borders. Instead, use a 1px `primary` bottom-border and a subtle `surface-tint` outer glow (4px blur).
- **Error:** Use `error` (#ffb4ab) for text and `error_container` for the background fill at 10% opacity.

---

## 6. Do’s and Don'ts

### Do:
- **Do** use `primary` (#ffffff) for massive, bold headlines to create a striking high-contrast editorial look.
- **Do** allow elements to overlap. A "glowing accent" image should sit 20% over a content card to break the "boxed" feel.
- **Do** use `surface-bright` for subtle hover states on large interactive areas.

### Don't:
- **Don't** use 100% white (#ffffff) for long-form body text; use `on-surface-variant` (#bacac3) to reduce eye strain in dark mode.
- **Don't** use standard 1px dividers between list items. Use 24px of white space or a 4px background shift.
- **Don't** use "Drop Shadows" that are black or grey. Only use shadows that are tinted with the background or accent colors to maintain the "Cyber" atmosphere.
- **Don't** over-round corners. Stick to the `md` (0.375rem) or `sm` (0.125rem) scale to keep the aesthetic "technical" and "sharp." Avoid `full` rounding except for status indicators.