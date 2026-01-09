# Customization Guide

This guide will help you personalize your website with your own information.

## Quick Start Checklist

- [ ] Update site configuration in `lib/constants.ts`
- [ ] Add your projects in `lib/projects.ts`
- [ ] Update About page content in `app/about/page.tsx`
- [ ] Add your resume PDF to `/public` folder
- [ ] Update contact information in `app/contact/page.tsx`
- [ ] Add favicon and OG image to `/public` folder
- [ ] Test the site locally
- [ ] Deploy to Vercel

## Step-by-Step Customization

### 1. Site Configuration (`lib/constants.ts`)

```typescript
export const SITE_CONFIG = {
  name: "Your Name",                    // Change to your name
  title: "Your Name - Computer Science Student & Developer",  // Update page title
  description: "Computer Science student building scalable systems and applied AI.",  // Your tagline
  url: "https://yourname.com",          // Your domain (after deployment)
  author: {
    name: "Your Name",                  // Your name again
    email: "your.email@example.com",    // Your email
    github: "https://github.com/yourusername",     // Your GitHub
    linkedin: "https://linkedin.com/in/yourusername",  // Your LinkedIn
  },
  // Navigation is auto-generated, no changes needed
};
```

**Update the highlights array:**

```typescript
export const HIGHLIGHTS = [
  {
    icon: "trophy",  // Options: trophy, microscope, briefcase, users
    title: "Your Achievement",
    description: "Brief description of your achievement.",
  },
  // Add 3-4 highlights
];
```

### 2. Projects (`lib/projects.ts`)

Replace the example projects with your own:

```typescript
{
  id: "unique-project-id",              // Unique identifier
  name: "Project Name",                 // Display name
  description: "One-line description",  // Short tagline
  problem: "What problem does this solve?",      // Problem statement
  solution: "How did you solve it? Include metrics if possible.",  // Your solution
  techStack: ["React", "Node.js", "PostgreSQL"],  // Technologies used
  category: "web",  // Options: "systems", "ai-ml", "web", "blockchain"
  github: "https://github.com/username/repo",    // Optional
  demo: "https://project-demo.com",              // Optional
  featured: true,  // Set to true for your best projects
}
```

**Tips:**
- Add 4-8 projects minimum
- Include metrics in solutions ("reduced latency by 10x", "handles 1000 req/s")
- Use the `featured` flag for your top 2-3 projects
- Categories help users filter - distribute projects across categories

### 3. About Page (`app/about/page.tsx`)

#### Update Your Bio

Replace the bio paragraphs (lines ~20-30):

```typescript
<p>
  Write 2-3 sentences about your background, what you're studying,
  and what you're passionate about.
</p>
<p>
  Add a second paragraph about your goals, what you're currently
  learning, or what excites you about technology.
</p>
```

#### Update Technical Interests

Find the "Technical Interests" section and modify the lists to match your actual interests:

```typescript
<div className="space-y-3">
  <h3 className="font-semibold text-lg">Your Category</h3>
  <ul className="space-y-2 text-foreground/70">
    <li>• Your specific interest</li>
    <li>• Another interest</li>
  </ul>
</div>
```

#### Update Tools

Replace the tools arrays with technologies you actually use:

```typescript
{["TypeScript", "Python", "Go", "..."].map((tool) => (
  // Replace with your languages
))}
```

#### Update "How I Work" Values

Modify the three value cards to reflect your actual working principles.

### 4. Home Page (`app/page.tsx`)

#### Update Hero Section

Change lines ~20-30:

```typescript
<h1>Your Name</h1>
<p>Your one-line tagline</p>
<p>
  2-3 sentences about what you do, what you care about,
  and what you're looking for.
</p>
```

### 5. Resume Page

1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place it in `/public/resume.pdf`
4. Update `app/resume/page.tsx` line ~30:
   - Uncomment the iframe
   - Update the download button to link to `/resume.pdf`

```typescript
// Replace the alert with:
onClick={() => window.open('/resume.pdf', '_blank')}
```

### 6. Contact Page (`app/contact/page.tsx`)

#### Update Location

Find the location card (~line 100) and update:

```typescript
<p className="text-sm text-foreground/80">Your City/Region</p>
```

#### Optional: Add Contact Form

If you want a contact form, integrate one of these services:

**Option 1: Formspree**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Add the form component:

```typescript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

**Option 2: EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Follow their React integration guide

### 7. Static Assets (`/public` folder)

Add these files to the `/public` folder:

#### Favicon
- Name: `favicon.ico`
- Size: 32x32px or 16x16px
- Tool: Use [favicon.io](https://favicon.io) to generate from text or image

#### Open Graph Image
- Name: `og-image.png`
- Size: 1200x630px (required for social media previews)
- Content: Your name + tagline on a clean background

#### Resume
- Name: `resume.pdf`
- Keep it updated!

### 8. Colors & Styling (Optional)

If you want to customize the color scheme, edit `styles/globals.css`:

```css
:root {
  --background: 0 0% 100%;     /* white */
  --foreground: 0 0% 3.9%;     /* near-black */
  --border: 0 0% 89.8%;        /* light gray */
}

/* For dark theme (optional):
@media (prefers-color-scheme: dark) {
  :root {
    --background: 0 0% 10%;
    --foreground: 0 0% 98%;
    --border: 0 0% 20%;
  }
}
*/
```

### 9. Testing Locally

Before deploying, test everything:

```bash
# Run dev server
npm run dev

# Test these pages:
# http://localhost:3000 (Home)
# http://localhost:3000/projects
# http://localhost:3000/about
# http://localhost:3000/resume
# http://localhost:3000/contact

# Build for production (must succeed!)
npm run build

# Test production build
npm start
```

**Check:**
- [ ] All links work
- [ ] Projects display correctly
- [ ] Resume PDF loads (if added)
- [ ] Contact info is correct
- [ ] Mobile responsive (test in browser dev tools)
- [ ] No console errors

### 10. Deployment

#### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Customize personal website"
git push
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js - just click "Deploy"
6. Your site will be live in ~2 minutes!

#### After Deployment

1. Update `SITE_CONFIG.url` in `lib/constants.ts` with your Vercel domain
2. Add custom domain (optional):
   - Go to Vercel project settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### 11. SEO & Analytics (Optional)

#### Add to Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (your website URL)
3. Verify ownership via Vercel integration

#### Add Analytics
Consider adding [Plausible](https://plausible.io) (privacy-friendly) or [Google Analytics](https://analytics.google.com).

For Plausible, add to `app/layout.tsx`:
```typescript
<Script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js" />
```

## Common Issues

### Build Fails
- Check for TypeScript errors: `npm run build`
- Ensure all imports are correct
- Verify no missing files

### Resume Not Showing
- Confirm `resume.pdf` is in `/public` folder (not `/public/public`)
- Check browser console for 404 errors
- Ensure iframe is uncommented

### Projects Not Filtering
- Check category strings match exactly: "systems", "ai-ml", "web", "blockchain"
- Verify CATEGORIES array in `lib/projects.ts`

### Fonts Not Loading
- Google Fonts are loaded via `next/font` automatically
- If issues persist, check browser console

## Need Help?

- Check the main [README.md](./README.md)
- Review Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Open an issue on GitHub if you encounter problems

---

Good luck with your website! 🚀
