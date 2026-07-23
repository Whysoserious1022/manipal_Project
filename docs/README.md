# Dharmapura Lab — Official Website

The official academic website of the **Murthy Dharmapura Research Group** at Manipal Institute of Technology (MIT), Manipal Academy of Higher Education (MAHE).

**Live Site:** [https://dayanandsg.github.io/manipal_Project](https://dayanandsg.github.io/manipal_Project)

---

## About

The Dharmapura Lab focuses on **Semiconductor Design for Energy and Optoelectronics** — designing functional materials for solar fuels, photocatalysis, sensors, and optoelectronics.

**PI:** Dr. Murthy Dharmapura, Associate Professor, Department of Chemistry, MIT Manipal.

---

## Design System — Academic Chic

| Token         | Value                                       |
|---------------|---------------------------------------------|
| Primary font  | Playfair Display (headings, serif)          |
| Body font     | Inter (body & UI, sans-serif)               |
| Accent color  | Emerald Green `#006c4a` / `#10B981`         |
| Heading color | Slate `#1E293B`                             |
| Background    | Off-White `#f7f9fb` / Paper White `#ffffff` |
| Container max | 1200px                                      |

See [`design-system/academic-chic.md`](../design-system/academic-chic.md) for full token reference.

---

## Project Structure

```
manipal_Project/
├── index.html                    # Root entry — redirects to home
├── design-system/
│   ├── academic-chic.css         # Full design system stylesheet
│   ├── academic-chic.md          # Design token documentation
│   └── shared-nav.js             # Shared header, footer & scroll-to-top
├── pages/
│   ├── home/                     # Landing page (hero, news, contact form)
│   ├── members/                  # PI profile + lab member grid
│   ├── research/                 # Research vision, infrastructure, collaborations
│   ├── publications/             # Journal articles & patents
│   ├── projectsandfundings/      # Active & past funded projects
│   └── gallery/                  # Photo gallery with lightbox
└── docs/
    └── README.md                 # This file
```

---

## Pages

| Page                 | Path                          | Description                                      |
|----------------------|-------------------------------|--------------------------------------------------|
| Home                 | `pages/home/`                 | Hero, bento research grid, news, contact form    |
| Members              | `pages/members/`              | PI profile, 6 grad students/postdoc, open positions |
| Research             | `pages/research/`             | Research vision, lab infrastructure, collaborations |
| Publications         | `pages/publications/`         | Journal articles (2025–2026) & patents           |
| Projects & Fundings  | `pages/projectsandfundings/`  | MNRE, DST-OeAD, Ernst Mach, and past grants      |
| Gallery              | `pages/gallery/`              | 6-image photo gallery with full-screen lightbox  |

---

## Features

- **Responsive design** — mobile hamburger drawer, desktop nav
- **Lightbox gallery** — keyboard navigation (← →), captions, Escape to close
- **Contact form** — honeypot bot protection, input validation, XSS-safe DOM rendering
- **Scroll-to-top** button on all pages
- **Skip-to-content** link for keyboard/screen-reader accessibility
- **Content Security Policy (CSP)** on every page — prevents XSS, clickjacking
- **Lazy loading** on all below-fold images

---

## Security

| Measure | Details |
|---------|---------|
| Content Security Policy | `frame-ancestors 'none'`, `connect-src 'none'`, allowlisted CDN |
| XSS protection | Form output built via `textContent` / DOM API only — no `innerHTML` with user data |
| Referrer Policy | `strict-origin-when-cross-origin` |
| X-Content-Type-Options | `nosniff` |
| External links | `rel="noopener noreferrer"` on all `target="_blank"` links |
| Bot protection | Honeypot hidden field on contact form |
| Lightbox URL validation | Only `https://cdn.sanity.io` origin allowed |

---

## Tech Stack

Pure **HTML5 + Vanilla CSS + Vanilla JavaScript** — no frameworks, no build tools, no dependencies. Opens directly from `file://` or any static hosting (GitHub Pages, Netlify, etc.).

**Fonts:** Google Fonts (Playfair Display, Inter)  
**Icons:** Material Symbols Outlined  
**Images:** Sanity CDN

---

## Local Development

```bash
# Clone the repo
git clone https://github.com/DayanandaSG/manipal_Project.git
cd manipal_Project

# Open in browser (no build step needed)
start index.html        # Windows
open index.html         # macOS
```

Or use VS Code Live Server for the best local development experience.

---

## License

© 2026 Murthy Dharmapura Lab, Manipal Academy of Higher Education (MAHE). All rights reserved.
