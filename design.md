# Portfolio UI/UX Design Blueprint (Neo-Brutalism / RetroUI)

## UI component from https://retroui.dev/

## 1. Core Visual Identity
- **Style:** Neo-brutalism / Retro Modern.
- **Vibe:** Bold, structured, sharp, highly professional, engineer-focused.
- **Key Characteristics:** No soft drop-shadows, no large border-radiuses. Use sharp edges, high-contrast borders, and hard solid shadows.

## 2. Color Palette (Strictly Enforced)
Do not use generic grays or standard purples. Stick to this core palette:
- **Primary Dark (Background/Text):** `#0F0F0F` (Pitch Black/Very Dark Gray)
- **Primary Light (Background/Text):** `#FAFAFA` (Off-White/Paper White)
- **Accent Color (Borders, Hard Shadows, Highlights):** `#000080` (Classic Navy) or `#0A192F` (Deep Navy).

## 3. Typography
- **Primary Font:** Space Grotesk, Syne, or Inter (Geometric Sans-Serif).
- **Headings:** Bold/Black weight (700-900), tight letter spacing, uppercase for section kickers.
- **Body Text:** Medium weight (500), highly legible, generous line height (1.6).

## 4. UI Components Rules (RetroUI implementation)
- **Borders:** Use solid, thick borders (`border-2` or `border-4` in Tailwind). Color: Black (in light mode) or Navy (in dark mode).
- **Hard Shadows (The Neo-brutalist signature):**
  Instead of standard `shadow-md`, use hard box-shadows. 
  *Example Tailwind class:* `shadow-[4px_4px_0px_0px_rgba(0,0,128,1)]` (Navy shadow).
- **Border Radius:** Keep it sharp (`rounded-none`) or extremely subtle (`rounded-sm`). Strictly NO `rounded-xl` or `rounded-full` (except for avatars).
- **Buttons:** 
  - *Primary:* Navy background, White text, Black border, hard Black shadow. On hover, translate X/Y by 2px and reduce shadow to simulate a physical button press.
  - *Secondary:* Transparent background, Navy text, Navy border, hard Navy shadow.

## 5. Layout & Grid
- Use asymmetric, broken grid layouts for the "Featured Projects" section to avoid the standard 3-column template look.
- **White Space:** Use extreme padding/margin (`py-24`, `gap-12`) to let the bold typography breathe. 
- Avoid scattered background particles (no dots/stars). Keep the background solid and distraction-free to emphasize the content containers.

## 6. Tech Stack Constraint
- Use React JS, Tailwind CSS, and shadcn/RetroUI concepts for all component generation.