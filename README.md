# Personal Website

A clean, modern, high-performance personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with elegant desktop layouts
- **Performance Optimized**: Static generation, optimized fonts, minimal JavaScript
- **Accessible**: WCAG AA compliant with proper semantic HTML and ARIA labels
- **SEO Ready**: Comprehensive metadata and OpenGraph support
- **Smooth Animations**: Subtle, purposeful animations with Framer Motion
- **Project Showcase**: Filterable project gallery with detailed descriptions
- **Easy to Customize**: Well-structured code with centralized configuration

## Pages

- **Home** - Hero section with tagline and key highlights
- **Projects** - Filterable showcase of your work with GitHub/demo links
- **About** - Your background, interests, and technical expertise
- **Resume** - PDF embed with download capability
- **Contact** - Multiple contact methods with clear CTAs

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd personalwebsite
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### 1. Update Your Information

Edit `lib/constants.ts` to update:
- Your name and title
- Social media links (GitHub, LinkedIn)
- Email address
- Site URL
- Highlights

### 2. Add Your Projects

Edit `lib/projects.ts` to add your projects with:
- Name and description
- Problem/solution framing
- Tech stack
- GitHub and demo links
- Category (systems, ai-ml, web, blockchain)

### 3. Customize About Page

Edit `app/about/page.tsx` to update:
- Your bio
- Technical interests
- Tools and technologies
- Working values

### 4. Add Your Resume

1. Place your `resume.pdf` in the `/public` folder
2. Uncomment the iframe in `app/resume/page.tsx`
3. Update the download button functionality

### 5. Update Contact Information

Edit `app/contact/page.tsx` to:
- Update location
- Modify contact methods
- Add a contact form (optional integrations provided)

### 6. Add Favicon and OG Image

Place these files in `/public`:
- `favicon.ico` - Browser tab icon
- `og-image.png` - Social media preview image (1200x630px recommended)

## Project Structure

```
personalwebsite/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── resume/            # Resume page
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Button.tsx         # Button component
│   ├── Section.tsx        # Animated section wrapper
│   └── ProjectCard.tsx    # Project display card
├── lib/                   # Utility functions and data
│   ├── constants.ts       # Site configuration
│   └── projects.ts        # Project data
├── styles/               # Global styles
│   └── globals.css       # Tailwind and custom CSS
└── public/               # Static assets
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository at [vercel.com](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy
4. Update `SITE_CONFIG.url` in `lib/constants.ts` with your domain

### Deploy to Other Platforms

Build the production bundle:
```bash
npm run build
npm start
```

Compatible with: Netlify, Cloudflare Pages, AWS Amplify, and any Node.js hosting.

## Performance

This site is optimized for performance:
- ✅ Static page generation where possible
- ✅ Optimized font loading with `next/font`
- ✅ Minimal JavaScript bundle
- ✅ Efficient animations (GPU-accelerated)
- ✅ Semantic HTML for better parsing

Target Lighthouse scores: 95+

## Accessibility

- ✅ WCAG AA contrast ratios
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Proper heading hierarchy
- ✅ ARIA labels on interactive elements

## Tech Stack Details

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (primary), JetBrains Mono (monospace)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub or contact me directly.

---

Built with ❤️ using Next.js and TypeScript
