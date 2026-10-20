# Portfolio UI update

This update keeps the existing React + Vite + Tailwind CSS project structure and project/content components. It simplifies the first impression with a calmer dark navy/cyan palette, a simpler responsive navbar, a static portrait card, and a cleaner hero section with direct project/resume actions and social links.

## Files changed
- `src/components/Navbar/Navbar.jsx`: simpler desktop navigation, compact mobile menu, and direct Contact CTA; removed the decorative live clock panel.
- `src/components/Hero/Hero.jsx`: cleaner responsive two-column layout.
- `src/components/Hero/HeroContent.jsx`: clearer full-stack + React Native positioning, direct calls to action, simpler highlights, and working mailto social link.
- `src/components/Hero/HeroImage.jsx`: removed spinning rings and mouse tilt; added a simple portrait card.
- `src/components/Hero/BackgroundEffects.jsx`: replaced moving particles and multiple glows with subtle static background accents.
- `src/index.css`, `src/styles/global.css`, `src/styles/theme.css`: normalized typography, focus states, reduced-motion handling, and a restrained blue/cyan palette.

## Run locally
```bash
npm install
npm run dev
```

## Build check
A production build could not be verified in this environment because the pre-existing `node_modules` has a missing Linux-specific optional Rollup dependency (`@rollup/rollup-linux-x64-gnu`). On Windows, after extracting the ZIP, run `npm install` and `npm run build` to verify the build with your local platform dependencies.
