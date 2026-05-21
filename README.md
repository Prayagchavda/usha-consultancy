# Usha Consultancy — Official Website

<div align="center">
  <img src="./public/logo.png" alt="Usha Consultancy Logo" width="200" />
  <br /><br />
  <p><strong>Premium web presence for Usha Consultancy — a global technology consulting firm delivering world-class web, mobile, and cloud solutions.</strong></p>
  <br />
  <a href="https://ushaconsultancy.com" target="_blank"><img src="https://img.shields.io/badge/Live%20Site-ushaconsultancy.com-0392EA?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Site" /></a>
  &nbsp;
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  &nbsp;
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  &nbsp;
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</div>

---

## 🌟 Overview

Usha Consultancy is a premium technology consulting agency serving clients across the **USA** and **India**. This repository contains the full source code for the company's marketing website — built with a focus on performance, accessibility, and a world-class visual experience.

The site showcases:
- Company services across 6 key verticals
- A rich technology stack the team works with
- Client case studies and success stories
- A contact/inquiry form for potential clients

---

## ✨ Features

- 🎨 **Premium Light Theme** — Clean, professional white-and-blue design with glassmorphism effects and smooth micro-animations
- 📱 **Fully Responsive** — Mobile-first layout with a slide-in drawer navigation on small screens
- 🗂️ **Mega-Dropdown Navigation** — Kadders-inspired Technologies mega-menu with 6 categorized tech stacks, icon cards, and hover-activated category switching
- ⚡ **Next.js App Router** — File-based routing with server components and metadata API
- 🔍 **SEO Optimized** — Full Open Graph tags, descriptive meta titles/descriptions on every page
- 🖋️ **Mona Sans Typography** — Premium variable font from GitHub/Google Fonts
- 🚀 **Static Generation** — All pages statically pre-rendered for instant load times
- 🌐 **Custom Favicon** — High-resolution Usha Consultancy branded favicon in PNG + ICO

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Font** | [Mona Sans](https://github.com/github/mona-sans) (Google Fonts) |
| **Tech Logos** | [Devicons CDN](https://devicon.dev/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Homepage — Hero, Stats, Services, Technologies, Approach, Case Studies, Contact |
| `/about` | About Us — Mission, Team, Values |
| `/case-studies` | Client case studies and project showcases |
| `/contact` | Full contact/inquiry form |
| `/services/web-development` | Web Development service detail page |
| `/services/shopify-ecommerce` | Shopify E-Commerce service detail page |
| `/services/product-design` | Product Design (UI/UX) service detail page |
| `/services/cloud-devops` | Cloud & DevOps service detail page |
| `/services/qa-testing` | QA & Testing service detail page |
| `/services/digital-marketing` | Digital Marketing service detail page |

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata & font config
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design tokens, animations, utilities
│   ├── icon.png            # Custom favicon (PNG)
│   ├── favicon.ico         # Custom favicon (ICO)
│   ├── about/
│   │   └── page.tsx        # About Us page
│   ├── case-studies/
│   │   └── page.tsx        # Case Studies page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── services/
│       └── [service]/
│           └── page.tsx    # Dynamic service detail pages
└── components/
    ├── Navbar.tsx           # Navigation with mega-dropdowns
    ├── Footer.tsx           # Site footer
    ├── Logo.tsx             # Animated SVG logo
    ├── HeroSection.tsx      # Homepage hero
    ├── ServicesSection.tsx  # Services grid cards
    ├── StatsSection.tsx     # Animated stats bar
    ├── ApproachSection.tsx  # Our approach section
    ├── CaseStudiesSection.tsx # Case study cards
    └── ContactForm.tsx      # Multi-field contact form
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or later
- **npm** 9 or later

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Prayagchavda/usha-consultancy.git

# 2. Navigate to the project directory
cd usha-consultancy

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| Primary | `#0392EA` | CTAs, links, active states |
| Primary Hover | `#037AC3` | Button hover states |
| Primary Glow | `rgba(3,146,234,0.15)` | Glow effects, shadows |
| Secondary | `#00F2FE` | Gradient accents |
| Background | `#ffffff` | Page background |
| Navy | `#011d2f` | Dark text, dark sections |

### Typography

- **Font**: Mona Sans (variable font, weights 200–900)
- **Fallback**: System UI, sans-serif

---

## 🌍 Company Info

**Usha Consultancy**

- 🇺🇸 **USA**: 5900 Balcones Drive, Suite 100, Austin, TX 78731 — `+1 (512) 254-9606`
- 🇮🇳 **India**: Ahmedabad, Gujarat — `+91 63582 63796`
- 📧 **Email**: hello@ushaconsultancy.com

---

## 📝 License

This project is proprietary software owned by **Usha Consultancy**. All rights reserved.

---

<div align="center">
  <p>Built with ❤️ by the Usha Consultancy Engineering Team</p>
  <p>
    <a href="https://ushaconsultancy.com">Website</a> ·
    <a href="mailto:hello@ushaconsultancy.com">Contact</a>
  </p>
</div>
