---
title: Installation
description: Get started with RetroUI — a neobrutalist registry for the shadcn CLI. Add bold, playful components to your project in minutes.
---

RetroUI is a registry for the `shadcn` CLI. Every component ships in two variants —
**Radix UI** and **Base UI** — so you can install the one that fits your stack and
start building unique, playful interfaces in minutes.

## Quick Start

Add the RetroUI registries to your `components.json`:

```json title="components.json"
{
  "registries": {
    "@retroui": "https://retroui.dev/r/radix/{name}.json",
    "@retroui-base": "https://retroui.dev/r/base/{name}.json"
  }
}
```

Then add any component by name:

```bash
npx shadcn@latest add @retroui/button
```

Prefer the **Base UI** primitives? Install the same component from the
`@retroui-base` namespace instead:

```bash
npx shadcn@latest add @retroui-base/button
```

Or skip the config entirely and install straight from the URL:

```bash
npx shadcn@latest add https://retroui.dev/r/radix/button.json
```

## Fonts & Theme

RetroUI uses bold, playful typography and vibrant colors. Here is how to get the
signature look — you can tweak any of it later to match your brand.

### 1. Add fonts

We use `Archivo Black` for headings and `Space Grotesk` for body text. With
Next.js, load them from `next/font/google`:

```tsx title="app/layout.tsx"
import { Archivo_Black, Space_Grotesk } from "next/font/google"

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${archivoBlack.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  )
}
```

### 2. Add the theme

RetroUI is a Tailwind v4 theme. Add these tokens to your `globals.css` — the hard
offset shadows and square corners are what give RetroUI its neobrutalist edge:

```css title="globals.css"
@import "tailwindcss";

@theme inline {
  --font-head: var(--font-head);
  --font-sans: var(--font-sans);
  --radius: var(--radius);

  --shadow-xs: 1px 1px 0 0 var(--border);
  --shadow-sm: 2px 2px 0 0 var(--border);
  --shadow: 3px 3px 0 0 var(--border);
  --shadow-md: 4px 4px 0 0 var(--border);
  --shadow-lg: 6px 6px 0 0 var(--border);
  --shadow-xl: 10px 10px 0 1px var(--border);
  --shadow-2xl: 16px 16px 0 1px var(--border);

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary-hover: var(--primary-hover);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
}

:root {
  --radius: 0;
  --background: #fff7e8;
  --foreground: #000;
  --card: #fff;
  --card-foreground: #000;
  --primary: #ffdc58;
  --primary-hover: #ffd12e;
  --primary-foreground: #000;
  --secondary: #000;
  --secondary-foreground: #fff;
  --muted: #efe7d6;
  --muted-foreground: #6b6355;
  --accent: #ffe7a3;
  --accent-foreground: #000;
  --destructive: #e63946;
  --destructive-foreground: #fff;
  --border: #000;
  --input: #fff;
  --ring: #000;
}

.dark {
  --background: #1a1815;
  --foreground: #f5f0e6;
  --card: #262320;
  --card-foreground: #f5f0e6;
  --primary: #ffdc58;
  --primary-hover: #ffd12e;
  --primary-foreground: #000;
  --secondary: #3a352f;
  --secondary-foreground: #f5f0e6;
  --muted: #2e2a24;
  --muted-foreground: #b3ac9e;
  --accent: #38342b;
  --accent-foreground: #f5f0e6;
  --destructive: #ff6b6b;
  --destructive-foreground: #1a1815;
  --border: #000;
  --input: #262320;
  --ring: #ffdc58;
}
```

Setting up a fresh project? Follow the framework guides for
[Next.js](/docs/installation/nextjs) or [Vite](/docs/installation/vite).

## Installing Components

Add any component from the registry with `shadcn add`. Use `@retroui/<name>` for
the Radix variant or `@retroui-base/<name>` for the Base UI variant:

```bash
npx shadcn@latest add @retroui/card
```

Browse everything available on the [components](/docs/components) page.

## Discovery & Search

The `shadcn` CLI can explore the RetroUI registry without installing anything.

**Preview a component** before you add it:

```bash
npx shadcn@latest view @retroui/button
```

**Search** the registry:

```bash
npx shadcn@latest search @retroui
```

**List** every available component:

```bash
npx shadcn@latest list @retroui
```

## Monorepo Support

Working in a monorepo? Point the CLI at your workspace with the `-c` / `--cwd`
option:

```bash
npx shadcn@latest init -c ./apps/web
```

Then add components the same way:

```bash
npx shadcn@latest add @retroui/button -c ./apps/web
```

## Need Help?

Join the community or reach out — we are happy to help.

- → [Discord Community](https://discord.com/invite/Z9NVtNE7bj)
- → [Twitter / X](https://x.com/DovAzencot)
