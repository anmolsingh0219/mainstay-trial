# Mainstay Partners — Website

Single-page marketing site built with **React + Vite + Tailwind CSS**, with subtle
scroll/entrance animations via **Framer Motion**.

## Run locally

```bash
cd website
npm install      # first time only
npm run dev      # http://localhost:5173
```

## Build for production

```bash
npm run build    # outputs to website/dist
npm run preview  # preview the production build
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, S3, etc.).

## Structure

```
website/
├── index.html                 # HTML shell + Google Fonts (Fraunces + Inter)
├── src/
│   ├── App.jsx                # page layout: Approach, Focus, About, Contact, Footer
│   ├── components/
│   │   ├── Header.jsx         # sticky nav, turns navy on scroll
│   │   ├── Hero.jsx           # full-bleed mountain hero + slow zoom animation
│   │   ├── Logo.jsx           # brand mark + wordmark
│   │   └── Reveal.jsx         # reusable fade-up-on-scroll wrapper
│   └── index.css             # Tailwind entry + brand tokens
├── public/assets/
│   ├── hero-mountains.jpg     # free Unsplash mountain photo (royalty-free)
│   └── logo-mark.svg          # favicon / mark
└── tailwind.config.js         # brand colors (navy, accent orange, mist) + fonts
```

## Notes / things to swap in

- **Logo**: `src/components/Logo.jsx` recreates the mark as inline SVG so it's crisp at
  any size. To use the exact brand file instead, drop `logo.png` (or `.svg`) into
  `public/assets/` and reference it with an `<img>` in `Logo.jsx`.
- **Team photos**: currently styled placeholder blocks (matching the design mockup).
  Drop headshots into `public/assets/` and set them as the `team-photo` background.
- **Hero image**: `hero-mountains.jpg` is a free-to-use Unsplash photo. Replace the file
  to change it (keep the same name, or update the path in `Hero.jsx`).
- **Contact email**: update `hello@mainstaypartners.com` in `src/App.jsx` if it differs.
```
