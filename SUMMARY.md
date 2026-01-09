# Personal Website - Shilin Chhabra

## Overview

Your personal website is now fully customized with all your information and ready to deploy!

## What's Been Customized

### ✅ Site Configuration
- **Name**: Shilin Chhabra
- **Email**: chhabra7@wisc.edu
- **GitHub**: https://github.com/shilinchhabra
- **LinkedIn**: https://linkedin.com/in/shilinchhabra
- **Domain**: shilinchhabra.com (update after deployment)

### ✅ Home Page
- Hero section with your name and tagline
- Subtitle: "Building cloud-native systems and ML infrastructure at scale"
- Bio highlighting UW-Madison, NSF NCAR, and your focus areas
- Four highlight cards:
  - NCCA National Champion (Badger Cricket Club)
  - Research at NSF NCAR
  - Production Systems (150+ researchers)
  - House Fellow Leadership (Core Values Award)

### ✅ Projects Page
- **SkyWash**: Production PM₂.₅ analytics platform (Live: https://skywash.k8s.ucar.edu/)
- **Loan Approval Predictor**: ML system with Apache Spark (89.3% accuracy)
- **Kubernetes HPC Platform**: Cloud-native infrastructure for atmospheric research
- **Inventory Management System**: Full-stack web app with MongoDB
- All projects have problem/solution framing and tech stacks
- Filterable by: All, Systems, AI/ML, Web

### ✅ About Page
- Updated bio with UW-Madison background and NSF NCAR experience
- Technical interests aligned with your experience:
  - Cloud & Systems Engineering (Kubernetes, HPC, CI/CD)
  - Data Science & Machine Learning (Spark, ML models, analytics)
  - Full-Stack Development (React, Node.js, FastAPI)
  - Research Interests (Algorithms, OS, AI, Cryptography)
- Languages: Python, Java, C, C++, C#, JavaScript, TypeScript, R, MySQL
- Technologies: Docker, Kubernetes, Spark, AWS, GCP, React, MongoDB, etc.
- "How I Work" values:
  - Production-First Mindset
  - Impact Through Code
  - Team Player & Leader

### ✅ Resume Page
- Key focus areas updated to match your experience
- Ready for you to add resume.pdf to /public folder
- Instructions included in the page

### ✅ Contact Page
- Location: Madison, WI
- Open to remote and relocation
- Seeking internships and full-time roles starting December 2026
- Email, LinkedIn, GitHub contact cards
- Response time information

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (primary), JetBrains Mono (code)

## Build Status

✅ Production build successful
✅ All pages static (optimal performance)
✅ TypeScript types valid
✅ ESLint passing
✅ Bundle sizes optimized

## Next Steps

### 1. Add Your Resume
- Export your resume as PDF
- Name it `resume.pdf`
- Place it in `/public/resume.pdf`
- Uncomment the iframe in `app/resume/page.tsx` (line ~60)
- Update download button to link to `/resume.pdf`

### 2. Add Favicon & OG Image
Place these in `/public` folder:
- `favicon.ico` (32x32px) - Use https://favicon.io
- `og-image.png` (1200x630px) - Social media preview with your name

### 3. Update Social Links
Make sure your actual GitHub and LinkedIn URLs are correct in:
- `lib/constants.ts` lines 9-10

### 4. Test Locally
```bash
npm run dev
# Visit http://localhost:3000
```

Check all pages:
- Home: http://localhost:3000
- Projects: http://localhost:3000/projects
- About: http://localhost:3000/about
- Resume: http://localhost:3000/resume
- Contact: http://localhost:3000/contact

### 5. Deploy to Vercel

#### Step 1: Commit to Git
```bash
git add .
git commit -m "Customize personal website with my information"
git push origin main
```

#### Step 2: Deploy
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your `personalwebsite` repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"
7. Wait ~2 minutes - your site will be live!

#### Step 3: Add Custom Domain (Optional)
1. Go to project settings on Vercel
2. Click "Domains"
3. Add `shilinchhabra.com`
4. Update DNS records at your domain registrar
5. Update `lib/constants.ts` with your domain

### 6. Optional Enhancements

#### Add a Blog (MDX)
- Create `app/blog` directory
- Add MDX support for writing posts

#### Dark Mode Toggle
- Add theme switcher component
- Implement dark mode styles

#### Analytics
- Add Plausible Analytics (privacy-friendly)
- Or Google Analytics

#### Contact Form
- Integrate Formspree, Getform, or EmailJS
- Instructions in the Contact page

## File Structure

```
personalwebsite/
├── app/                      # All pages
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page
│   ├── projects/page.tsx    # Projects page
│   ├── resume/page.tsx      # Resume page
│   └── contact/page.tsx     # Contact page
├── components/              # Reusable components
│   ├── Header.tsx           # Navigation
│   ├── Footer.tsx           # Footer with social links
│   ├── Button.tsx           # Button component
│   ├── Section.tsx          # Animated section wrapper
│   └── ProjectCard.tsx      # Project card
├── lib/                     # Data and utilities
│   ├── constants.ts         # Your info (NAME, EMAIL, etc.)
│   └── projects.ts          # Your projects array
├── styles/
│   └── globals.css          # Global styles
├── public/                  # Static assets
│   └── .gitkeep
├── README.md                # Documentation
├── CUSTOMIZATION.md         # Customization guide
└── SUMMARY.md              # This file
```

## Key Files You Updated

1. ✅ `lib/constants.ts` - Your name, email, GitHub, LinkedIn, highlights
2. ✅ `lib/projects.ts` - Your 4 projects with real data
3. ✅ `app/page.tsx` - Home page hero text
4. ✅ `app/about/page.tsx` - Your bio, interests, tools, values
5. ✅ `app/contact/page.tsx` - Location and job search info
6. ✅ `app/resume/page.tsx` - Key focus areas

## Performance Metrics

Current bundle sizes:
- Home: 3.12 KB
- Projects: 3.33 KB
- About: 387 B
- Resume: 2.03 KB
- Contact: 387 B

All pages are statically generated for maximum performance.
Expected Lighthouse score: 95+

## Your Website URL

Development: http://localhost:3000
Production (after deploy): https://shilinchhabra.vercel.app
Custom Domain: https://shilinchhabra.com (after DNS setup)

## Support

If you need to make changes:
- Refer to `CUSTOMIZATION.md` for detailed instructions
- Check `README.md` for technical documentation
- Run `npm run build` to verify changes compile

## Final Checklist

- [ ] Test all pages locally
- [ ] Add resume.pdf to /public
- [ ] Add favicon.ico to /public
- [ ] Add og-image.png to /public
- [ ] Verify GitHub and LinkedIn URLs are correct
- [ ] Commit all changes to Git
- [ ] Deploy to Vercel
- [ ] Test live site
- [ ] Share with recruiters and professors!

---

Your website is professional, performant, and ready to impress. Good luck with your job search! 🚀
