---
name: Academic Chic
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c4a'
  on-secondary: '#ffffff'
  secondary-container: '#82f5c1'
  on-secondary-container: '#00714e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#85f8c4'
  secondary-fixed-dim: '#68dba9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  slate-heading: '#1E293B'
  emerald-accent: '#10B981'
  paper-white: '#FFFFFF'
  subtle-border: '#E2E8F0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  section-gap: 96px
---

## Brand & Style

This design system embodies the "Academic Chic" aesthetic—a sophisticated blend of traditional scholarly values and modern precision. It is designed for an academic research environment that prioritizes clarity, intellectual rigor, and institutional excellence.

The style is rooted in **Minimalism** with a focus on editorial-inspired layouts. It utilizes generous whitespace to allow complex research data and dense publications to "breathe." The visual language is defined by sharp contrast between rich, deep neutrals and a singular, vibrant accent color that signals innovation and scientific discovery. 

Key attributes include:
- **Intellectual Clarity:** High-contrast typography and a rigid grid system.
- **Modern Precision:** Ultra-thin dividers and systematic spacing.
- **Premium Feel:** Subtle depth through soft shadows and a refined, off-white background palette.

## Colors

The palette is designed to evoke the feeling of a premium physical journal. 

- **Primary:** A deep Slate Blue (#0F172A) used for maximum authority in headings and primary text. 
- **Secondary/Accent:** A professional Emerald Green (#059669) that represents growth, vitality, and scientific precision. This color is used sparingly for links, buttons, and decorative accents.
- **Neutral:** The background is a clean "Paper White" (#FFFFFF), while container backgrounds use a soft "Off-White" (#F8FAFC) to create subtle layering without heavy lines.
- **System Colors:** Borders and dividers utilize a low-contrast slate gray (#E2E8F0) to maintain an airy feel.

## Typography

The typography strategy leverages a high-contrast pairing between a classic serif and a utilitarian sans-serif.

- **Headlines:** Uses **Playfair Display**. This serif font provides an authoritative, traditional academic feel. For larger displays, a slight negative letter spacing is applied to maintain visual tension.
- **Body & Interface:** Uses **Inter**. Chosen for its exceptional legibility in technical contexts. It handles data, research abstracts, and small UI labels with neutral clarity.
- **Rhythm:** Line heights are intentionally generous (1.6x for body text) to support the reading of long-form academic content.

## Layout & Spacing

This design system uses a **Fixed Grid** model on desktop and a fluid model on mobile devices.

- **Grid:** A 12-column grid system with a 24px gutter. The maximum content width is capped at 1200px to ensure line lengths remain readable for research papers.
- **Sectioning:** Large vertical gaps (96px+) are used between major sections to emphasize the "Academic Chic" minimalist aesthetic.
- **Dividers:** Horizontal rules (HR) should be 1px thick in a subtle gray tone, often used to separate news items or publication entries.
- **Mobile Adaptivity:** At the 768px breakpoint, margins shrink to 16px and stack gaps reduce by 50% to maintain density on smaller screens.

## Elevation & Depth

To maintain a "flat" academic feel while still providing visual hierarchy, the system uses **Ambient Shadows** and **Tonal Layers**.

- **Cards:** For news items and featured research, use a very large, soft shadow (Blur: 20px, Y: 10px) with very low opacity (3-5%) using the primary color as the shadow tint. This creates a floating "paper" effect.
- **Surfaces:** Use subtle shifts in background color (White vs. Off-White) to define sidebars or contact sections rather than heavy borders.
- **Interactions:** Buttons and interactive cards should use a slight vertical lift (shadow increase) on hover to signal clickability.

## Shapes

The shape language is "Soft" and professional. While many academic sites use sharp corners, this system uses a minimal 0.25rem (4px) radius to make the interface feel modern and accessible without becoming overly "friendly" or consumer-grade.

- **Standard Elements:** 4px radius (Buttons, Input Fields).
- **Large Containers:** 8px radius (Feature Cards, Image Wrappers).
- **Interactive Triggers:** Small elements like tags or chips may use a slightly higher radius for distinctiveness.

## Components

- **Buttons:** Primary buttons use a solid Emerald Green background with white text. Secondary buttons use a Slate Blue outline with no fill. All buttons feature a 4px corner radius.
- **News Cards:** Large white blocks with soft ambient shadows. Typography within cards should lead with an Inter-bold label (Date/Category) followed by a Playfair Display title.
- **Input Fields:** Clean, minimal styling with a 1px border. Focus states are indicated by an Emerald Green border and a subtle inner glow.
- **Lists (Publications):** Systematic and tight. Use thin 1px dividers between entries. Authors' names are in standard weight, while the title of the paper is in a semi-bold Slate Blue.
- **Chips/Tags:** Used for research areas (e.g., "Optoelectronics"). These are small, light-gray backgrounds with uppercase Inter typography to differentiate them from body text.
- **Dividers:** Always 1px. Use them horizontally to separate chronological items in a timeline or news feed.