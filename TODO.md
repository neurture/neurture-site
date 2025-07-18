# Neurture Site - Next.js Migration TODO

## ✅ Completed Tasks

- [x] Research latest Next.js installation and setup requirements
- [x] Analyze current site structure and content to plan migration  
- [x] Set up new Next.js project with latest version (Next.js 15 + React 19)
- [x] Create Next.js pages structure mirroring current site
- [x] Migrate static assets (images, favicon, etc.) to public directory
- [x] Convert HTML/CSS to React components (Header, Footer, FAQ)
- [x] Implement all main page sections (hero, newsletter, video, features, reviews, experts, QR codes, FAQ)
- [x] Add responsive design with mobile/desktop layouts
- [x] Set up interactive FAQ component with accordion functionality
- [x] Configure Google Fonts integration (Lato and Merriweather)
- [x] Create page routing for team, privacy-policy, press-kit, mental-health-awareness-month-2025

## 🚧 In Progress

- [ ] **Fix styling to match original design exactly** (PRIORITY)
  - Current styles are functional but don't match original design closely
  - Need to improve typography, spacing, and visual polish
  - Consider switching from Tailwind arbitrary values to more structured CSS approach

## 📋 Remaining Tasks

### High Priority
- [ ] **Configure Next.js for static site generation**
  - Add `output: 'export'` to next.config.ts
  - Configure for GitHub Pages deployment
  - Test static build process

- [ ] **Set up GitHub Actions for deployment to GitHub Pages**
  - Create `.github/workflows/deploy.yml`
  - Configure automatic deployment on push to main
  - Set up proper GitHub Pages settings

- [ ] **Test deployment and verify all functionality works**
  - Ensure all images load correctly
  - Verify all links work
  - Test interactive components (FAQ accordion)
  - Check responsive design on various devices

### Medium Priority
- [ ] **Style improvements**
  - Match original design typography exactly
  - Fix spacing and layout issues
  - Improve button styling
  - Polish FAQ section appearance
  - Ensure consistent font loading

- [ ] **Content migration for sub-pages**
  - Migrate actual content for `/team` page
  - Migrate actual content for `/privacy-policy` page  
  - Migrate actual content for `/press-kit` page
  - Migrate actual content for `/mental-health-awareness-month-2025` page

- [ ] **Performance optimizations**
  - Optimize images with next/image
  - Add proper loading states
  - Implement SEO improvements

### Low Priority
- [ ] **Additional features**
  - Add proper error pages (404, 500)
  - Implement proper meta tags for social sharing
  - Add analytics integration if needed
  - Consider adding a sitemap

## 🔧 Technical Notes

### Current Stack
- **Next.js 15.4.1** with App Router
- **React 19.1.0**  
- **TypeScript 5**
- **Tailwind CSS v4**
- **Turbopack** for fast development

### Development Commands
```bash
yarn dev          # Start development server with Turbopack
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
```

### Known Issues
1. **Styling** - Current implementation uses Tailwind but doesn't match original design closely
2. **Newsletter iframe** - May need styling adjustments for better integration
3. **FAQ transitions** - Could be smoother with better CSS transitions

### Future Considerations
- Consider implementing a proper design system
- May need to add CMS integration for content management
- Could benefit from automated testing setup