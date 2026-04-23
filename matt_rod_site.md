# Personal Website — Product Requirements Document

## Overview

A personal website with three pages: a landing/about page, an experience page, and an interests page. The site should feel personal, polished, and distinctive — not a generic developer portfolio template. Design should be clean and modern with strong typography and intentional layout choices.

---

## General Design Principles

- **No bloated frameworks** — vanilla HTML/CSS/JS or a lightweight framework (e.g. Astro, Next.js, or plain HTML)
- **Mobile-first** — fully responsive across all screen sizes
- **Fast** — minimal dependencies, optimized assets
- **Cohesive** — consistent color palette, type scale, and spacing system across all pages
- **Personality-forward** — the site should feel like a person, not a résumé

### Design Tokens (fill in your preferences)
- **Primary font:** Sofia Pro
- **Primary color:** #FFFDF7
- **Accent color:** #7C6AF7
- **Background:** #18181B
- **Website Vibe Description:** Ivory background, near-black text, purple accent

---

## Navigation

- Persistent top navbar or minimal sidebar with links to all three pages
- Active page should be visually indicated
- On mobile: hamburger menu or simple stacked links
- Logo/name in top-left that links back to home

---

## Page 1 — Landing / About Me

**Purpose:** First impression. Should communicate who I am and make someone want to keep exploring.

### Content Sections

#### Hero
- Matthew Rodrigues (large, confident — but not a generic centered H1)
- A short tagline or one-liner that describes you in your own words
  - *Placeholder: "Developer, lifter, car person."
- Optional: a photo or avatar (if included, make it feel intentional — not a LinkedIn headshot crop)

#### About
- 2–4 paragraphs written in first person, conversational tone
- Should cover: who you are, what you do, what drives you
- *Placeholder: Working on this rn

#### Quick Facts / At a Glance (optional)
- 2 years into college
- Based in the Bay Area
- Gladly out of 10 years of competitive swimming
- I currently have tennis elbow, lifting progress has taken a huge hit :(
- A compact block of punchy facts or stats


#### Call to Action
- Subtle CTA pointing to the Experience or Interests page
- *Example: "See what I've been up to →"*

---

## Page 2 — Experience

**Purpose:** A more interesting, readable version of a résumé. Should not look like a PDF export.

### Content Sections

#### Education
- School name, degree, graduation year
- Optional: relevant coursework, honors, activities
- *Placeholder:*
  ```
  [University Name] — [Degree, Major] — [Year]
  [Any notable details]
  ```

#### Work Experience
- Each role presented as a card or timeline entry
- Fields per role:
  - Company name
  - Job title
  - Date range (e.g. "Jun 2023 – Present")
  - 2–4 bullet points on what you did / impact
- *Placeholder:*
  ```
  [Company] — [Title] — [Date Range]
  - [What you did]
  - [Impact or outcome]

  [Company] — [Title] — [Date Range]
  - [What you did]
  - [Impact or outcome]
  ```

### Design Notes
- Use a vertical timeline or card grid — avoid a plain bulleted list
- Company logos optional but add polish if available
- Keep dates subtle (not the focal point)

---

## Page 3 — Interests

**Purpose:** Show personality. This is the most personal page — it should feel fun and lived-in.

### Section 1 — Cool Cars

- A curated grid or gallery of cars you think are cool
- Each car entry should include:
  - Car name / make / model / year
  - An image (either a photo you provide or a placeholder)
  - 1–2 sentence note on why you like it (optional but adds character)
- Layout: responsive image grid (2–3 columns on desktop, 1–2 on mobile)
- *Placeholder cars — replace with your actual list:*
  ```
  [Car 1 — e.g. 1992 Mazda RX-7 FD]
  [Car 2 — e.g. Porsche 911 GT3 RS]
  [Car 3 — e.g. Ford GT40]
  [Add more as needed]
  ```

### Section 2 — Lifting PRs

- A clean, scannable display of your personal records
- Suggested lifts to include:
  - Squat
  - Bench Press
  - Deadlift
  - Overhead Press (optional)
  - Any other lifts you track
- Layout: stat cards or a compact table — make the numbers feel like achievements, not data
- *Placeholder:*
  ```
  Squat:      [X] lbs
  Bench:      [X] lbs
  Deadlift:   [X] lbs
  OHP:        [X] lbs
  ```

### Section 3 — Socials & Spotify

- Links to your social profiles
- Suggested platforms (include only what you actually use):
  - GitHub
  - LinkedIn
  - Twitter / X
  - Instagram
  - Any others
- **Spotify:** Embed your Spotify profile or a favorite playlist using Spotify's iframe embed widget
  - Embed code format: `https://open.spotify.com/embed/playlist/[PLAYLIST_ID]`
  - *Placeholder: `[Paste your Spotify profile URL or playlist URL here]`*
- Layout: clean icon + label links, or social cards — nothing that looks like a Linktree clone

---

## Technical Requirements

- **Pages:** 3 (index / experience / interests)
- **Routing:** Multi-page site or single-page with anchor/hash routing — your choice
- **Images:** Optimized (WebP preferred), lazy-loaded
- **Fonts:** Loaded via Google Fonts or self-hosted — no system font fallback issues
- **No broken links** — all social links should open in a new tab
- **Accessibility:** Semantic HTML, alt text on images, keyboard navigable
- **Deployment-ready:** Should work on Vercel, Netlify, or GitHub Pages with no config changes

---

## Out of Scope (for v1)

- Blog / writing section
- Contact form with backend
- CMS integration
- Authentication
- Dark mode toggle *(can be added in v2)*

---

## Prompting Notes for Claude Code

When building this site, ask Claude Code to:

1. **Start with structure first** — build the HTML skeleton and routing before any styling
2. **Use CSS custom properties** for all colors, fonts, and spacing so theming is easy to change
3. **Build one page at a time** — don't try to generate all three at once
4. **Show a design decision** — ask it to explain why it made a layout choice and push back if it's too generic
5. **Iterate on the Interests page last** — it needs your real content (car list, PRs, links) to look good

---

*Fill in all placeholder sections marked with `[brackets]` before handing this PRD to Claude Code.*