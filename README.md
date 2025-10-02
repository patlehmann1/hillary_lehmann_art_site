# Hillary Anne Lehmann - Artist Portfolio

A static art portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Main Page**: Hero section, About section, and Contact section
- **Gallery Page**: Separate categories for Acrylic on Canvas and Black Ink on Paper
- **Image Protection**: Watermarked images with right-click and drag protection
- **Responsive Design**: Mobile-first approach
- **Static Export**: Optimized for Cloudflare Pages deployment

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Building for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Deployment to Cloudflare Pages

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Log in to Cloudflare Dashboard
3. Go to Pages → Create a project
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
6. Deploy

## Customization

### Updating Content

- **Email**: Update in `components/Contact.tsx`
- **About text**: Edit `components/About.tsx`
- **Hero tagline**: Modify `components/Hero.tsx`

### Adding Artwork

Replace placeholder images in `public/gallery/`:
- `acrylic-1.jpg`, `acrylic-2.jpg`, `acrylic-3.jpg`
- `ink-1.jpg`, `ink-2.jpg`, `ink-3.jpg`

To add more pieces, update the arrays in `app/gallery/page.tsx`.

### Color Palette

Colors are defined in `tailwind.config.ts`:
- Navy: `#4E598C`
- Peach Light: `#F9C784`
- Peach: `#FCAF58`
- Orange: `#FF8C42`

## Development Guidelines

See `CLAUDE.md` for code standards and best practices.
