# Cinematic Noir Portfolio

An award-winning, cinematic noir-themed portfolio website showcasing creative work with stunning animations and a sophisticated design aesthetic.

## Features

- 🎬 Cinematic noir design with sophisticated color scheme
- ✨ Smooth animations powered by Framer Motion
- 📱 Fully responsive design
- 🎨 Custom film grain and spotlight effects
- 🎭 Interactive portfolio showcase
- 📧 Contact form with elegant styling
- 🌟 Award-winning UX/UI practices

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Playfair Display & Inter

## Color Scheme

The noir palette features:
- Deep blacks (#0a0a0a, #141414, #1a1a1a)
- Elegant grays (#2a2a2a, #4a4a4a)
- Luxurious gold (#d4af37)
- Dramatic crimson (#8b0000)
- Pure white (#f5f5f5)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/
│   ├── Navigation.tsx    # Sticky navigation with active section tracking
│   ├── Hero.tsx          # Cinematic hero section
│   ├── About.tsx         # About section with stats
│   ├── Portfolio.tsx     # Project showcase grid
│   ├── Contact.tsx       # Contact form and info
│   └── Footer.tsx        # Footer component
├── tailwind.config.js    # Tailwind configuration with custom theme
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Customization

### Update Portfolio Projects

Edit the `projects` array in `components/Portfolio.tsx` to add your own work.

### Modify Color Scheme

Adjust the noir color palette in `tailwind.config.js` under `theme.extend.colors.noir`.

### Add Real Images

Replace placeholder images in the portfolio and about sections with your actual images.

## License

Private - All rights reserved

