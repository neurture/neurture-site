## 1 · Content — from “it compiles” to “production ready”

### 1-A Address structure and slugs

1. Decide on the canonical URL pattern you want (`/posts/<slug>/` vs `/blog/<slug>/`).
2. Rename every post directory so each is a **page bundle**: `content/posts/<slug>/index.md`.
3. In front-matter, add or update:

   ```toml
   aliases = ["/old-squarespace-url/"]
   slug    = "how-habits-actually-start"
   ```

### 1-B Taxonomy, dates, authors

- Normalise `tags` and `categories` that came from the Squarespace XML.
- Make sure every file has a `date`. You can batch-add missing dates with a quick `yq` one-liner.
- Create reusable author files under `data/authors/<name>.toml`.

### 1-C Media and shortcodes

- Replace `<img>` tags with a `figure` shortcode that outputs responsive images.
- Create a `youtube.html` shortcode for YouTube embeds and replace raw iframes.
- Use `resources.Get` with `images.Resize` and `images.WebP` to serve multiple widths and lazy-loading.

### 1-D Content QA script

Write a small script (Go or Python) to:

- fail if an image exists in `static/images` but is never referenced,
- warn if any internal Markdown link 404s,
- check that every page summary is 160 characters or less.

Add it as `scripts/qa.go` (or `.py`) and run it in `npm run lint-content`.

---

## 2 · Styling — transplanting the Squarespace look-and-feel

### 2-A Harvest the live CSS

1. Open the live Squarespace site in Chrome DevTools → Network.
2. Filter for `*.css`, save the largest file via **Save all as HAR with content**.
3. Extract the CSS from the HAR.

### 2-B De-minify and slice into SCSS partials

```bash
mkdir -p assets/scss/vendor
npx css-beautify site.min.css -o assets/scss/vendor/_squarespace.scss
```

Manually cut that file into logical partials: variables, layout, components, and so on.

### 2-C Wire up Hugo Pipes

1. In `hugo.toml`, enable `build.writeStats` and point to a PostCSS script.
2. Add `postcss` and `build` npm scripts that compile `assets/scss/main.scss`.
3. Create `postcss.config.cjs` with `postcss-import`, `autoprefixer`, and optionally `postcss-nested`.

### 2-D Override theme assets without forking

Place project-level templates in `layouts/partials/` (for example `head.html` and `footer.html`) so Hugo loads them before anything inside `themes/neurture`. Use Hugo Pipes to fingerprint and serve the compiled CSS and JS.

### 2-E Fonts and icons

- Download Google Fonts locally with `google-webfonts-helper`, store them in `static/fonts/`, and add `@font-face` rules.
- Swap any Squarespace icon sprite for a self-hosted alternative such as Lucide or Font Awesome.

### 2-F JavaScript migration

- Replace Squarespace’s small interactive scripts with Alpine.js or vanilla JS modules.
- Concatenate, minify, and fingerprint them through Hugo Pipes, then include the bundle in `footer.html`.

---

## 3 · Build and deployment pipeline

- **Local development** — run `npm run dev`, which starts `hugo server` and proxies through Browsersync for live reload.
- **Production build** — run `npm run build` (`hugo --minify`).
- **CI** — use a GitHub Actions workflow with `peaceiris/actions-hugo@v3` (extended) and cache Node modules.
- **Hosting** — point Netlify (or Cloudflare Pages / Vercel) to `hugo --gc --minify` and publish the `public/` directory.

---

## 4 · Post-migration QA checklist

1. Compare Squarespace and Hugo side by side in multiple viewports.
2. Aim for a Lighthouse performance score of 95 or higher on the production build.
3. Run `npx broken-link-checker http://localhost:1313` to catch internal 404s.
4. Confirm `robots.txt` and `sitemap.xml` are generated.
5. Re-add analytics and, if needed, a GDPR consent banner.

---

## 5 · Suggested repo tweaks

- Keep **all site-specific code** (templates, assets, translations) in the project root so the `neurture` theme can be updated without a merge headache.
- Track SCSS source, not compiled CSS; let Hugo Pipes rebuild.
- Add a pre-commit hook that runs both the Hugo build (`hugo --gc --minify --quiet`) and your content QA script.

---

## TL;DR workflow for future changes

```bash
# 1 · Create or edit content
npm run dev      # hot-reloads

# 2 · If you need another Squarespace page
#    copy HTML, Pandoc → markdown, drop into /content

# 3 · Tweak SCSS partials; Hugo recompiles on save

# 4 · Commit
git add .
git commit -m "feat: about page & hero styles"

# 5 · Push
#    your CI / Netlify build runs automatically
```

Follow this playbook and you’ll reach content parity, pixel parity, and retain an upgrade-friendly Hugo code-base. Happy shipping!
