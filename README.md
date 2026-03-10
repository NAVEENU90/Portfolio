# Naveen U — MERN Stack Developer Portfolio

Modern, glassmorphism-inspired portfolio for MERN Full Stack Developer **Naveen U**, built with **React (Vite)**, **Tailwind CSS**, **GSAP**, and **Framer Motion**.

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS (dark theme, glassmorphism, gradients)
- **Animations**: GSAP (scroll reveal), Framer Motion (micro-interactions)
- **Icons**: Lucide React, React Icons
- **Routing**: React Router (SPA structure)
- **Email**: EmailJS for contact form automation

## Getting Started

```bash
pnpm install   # or npm install / yarn
pnpm dev       # start dev server on http://localhost:5173
```

## EmailJS Setup

1. Go to [`https://www.emailjs.com`](https://www.emailjs.com) and create an account.
2. Add an **Email Service** (e.g. Gmail) and note the **Service ID**.
3. Create an **Email Template** with fields: `name`, `email`, `message` and note the **Template ID**.
4. Go to **Account → API Keys** and copy your **Public Key**.
5. Open `src/components/Contact.jsx` and replace:

```js
const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
```

with your actual values.

6. In EmailJS, set the template variables to match the form field names (`name`, `email`, `message`).

## Project Structure

```bash
src/
  animations/        # GSAP hooks and scroll animations
  components/        # Reusable UI sections
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Testimonials.jsx
    Contact.jsx
    Footer.jsx
  data/
    projects.js      # Project & testimonial data
  pages/
    Home.jsx         # Single-page layout composition
  App.jsx
  main.jsx
  index.css          # Tailwind + global styles
```

## Deployment (Vercel)

1. Push this project to a Git provider (GitHub, GitLab, Bitbucket).
2. Go to [`https://vercel.com`](https://vercel.com), create a new project, and import the repo.
3. Framework preset: **Vite** (or Vercel will auto-detect).
4. Build command: `vite build`
5. Output directory: `dist`
6. Deploy — Vercel will give you a live production URL.

## Customization

- Update **social links**, **email address**, and **resume link** in:
  - `Hero.jsx`
  - `Contact.jsx`
  - `Footer.jsx`
- Replace placeholder **project links** and descriptions in `src/data/projects.js`.
- Swap the profile image placeholder in `About.jsx` with a real image if desired.

