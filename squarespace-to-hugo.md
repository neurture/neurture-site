# Squarespace → Hugo Migration Cheat-Sheet (Cursor-Ready)

> **Current Status**: We've activated the virtual environment, cloned exitwp-for-hugo, installed dependencies including Go, and successfully converted the Squarespace XML to markdown files in the content_raw directory. We've also copied all the content files to the Hugo content directory. All files already have front-matter, which has been converted from YAML to TOML format. The Hugo site already has a custom 'neurture' theme configured. The Hugo server is running and you can browse to http://localhost:1313 to view the site.

> Copy everything between the lines into Cursor and run the steps straight from the editor.
> _Bold lines that begin with → are direct commands_ you can highlight and **Run Selection**.
> Lines marked **💡** are good places to just tell Cursor what you want instead of typing shell.

---

## Legend

- 🖥️ **CLI / Editor** – shell commands Cursor can run.
- 💡 **Cursor-able** – describe the goal in natural language and let Cursor write/run the code.
- 🌐 **UI** – do it in a browser/dashboard.
- 👤 **Manual** – needs human eyes or judgment.

---

## Phase 2 – Convert Squarespace content

1. ✅ **(optional) create & activate a virtual-env** 🖥️
   → `python3 -m venv .venv && source .venv/bin/activate`

2. ✅ **Get content out of the XML export** 💡
   "Clone Orthogaffe/exitwp-for-hugo into tooling/exitwp, install its requirements, and run it against `squarespace-backup/export.xml` so Markdown lands in `content_raw/`."

   _If you don't have an XML file, instead say:_
   "Write and run a script that loops over every HTML file in `squarespace-backup/`, converts it to Markdown with Pandoc, and saves it in `content_raw/`."

   > **Note**: We cloned wooni005/exitwp-for-hugo (not Orthogaffe's), installed requirements, and ran the tool. The output was in tooling/exitwp/build/hugo/neurtureapp.com/ which we copied to content_raw/.

3. ✅ **Copy content & assets into Hugo** 🖥️
   → `cp -R content_raw/*.md content/`
   → `cp -R content_raw/static/* static/`

   > **Note**: We created the necessary directories in the content folder and copied each file to its proper location.

4. ✅ **Add front-matter where missing** 💡
   "Write and run a Python script that scans every `*.md` in `content/`; if a file doesn't start with `---`, prepend YAML front-matter with `title`, today's `date`, and `draft: true`."

   > **Note**: We wrote the script, but all files already had front-matter from the exitwp conversion.

5. ✅ **(optional) convert YAML → TOML** 🖥️
   → `hugo convert toTOML --unsafe`

6. ✅ **Install a theme and point config at it** 💡
   "Add PaperMod as a git submodule and append `theme = "papermod"` to `hugo.toml`."

   > **Note**: The site already has a custom 'neurture' theme configured in hugo.toml.

7. ⏳ **Run the site locally and eyeball** 🖥️ + 🌐
   → `hugo server -D` (then browse to [http://localhost:1313](http://localhost:1313))

   > **Note**: The Hugo server is now running in the background. Browse to http://localhost:1313 to see how the site looks with the migrated content.

8. **Commit the work** 🖥️
   → `git add . && git commit -m "Phase 2 – content migrated"`

---

## Phase 3 – Rebuild layout & functionality (iterate)

- **Sprint A – Navigation & chrome** 🖥️👤
  Edit `layouts/partials/header.html`, `footer.html`; define menus in `hugo.toml`.

- **Sprint B – Home & section lists** 🖥️👤
  Create/tweak `layouts/_default/list.html`; map Squarespace index pages to Hugo sections.

- **Sprint C – Blocks → shortcodes** 💡
  "Generate a Hugo shortcode `gallery.html` that outputs an image grid; replace any gallery HTML in Markdown with the shortcode call."

- **Sprint D – CSS & JS** 💡👤
  Ask Cursor to move your CSS into `assets/scss/` and wire up Hugo Pipes, or generate a Tailwind config.

- **Sprint E – Forms & comments** 🌐
  Set up Netlify Forms/Formspree; drop the embed snippets that Cursor can generate.

- **Sprint F – SEO & redirects** 💡🖥️
  "Insert canonical/meta tags in `layouts/_default/baseof.html`; add aliases to old URLs in front-matter."

- **Sprint G – Image optimisation** 💡
  "Bulk-replace `![](/images/…)` with a `figure` shortcode using `resources.Get` and output WebP + lazy-loading attrs."

After each sprint:
→ `git add . && git commit -m "Sprint <letter>: <focus>"`

---

## Phase 4 – Deploy

1. **Push repo** 🖥️
   → `git remote add origin git@github.com:YOU/mysite.git && git push -u origin main`

2. **Create site on Netlify/Cloudflare/Vercel** 🌐

   - Build command: `hugo --minify`
   - Publish dir: `public`

3. **Wire up custom domain & HTTPS** 🌐

4. **Run a link check** 🖥️
   → `linkchecker https://yourdomain.com`

5. **Monitor for a week, then cancel Squarespace** 🌐

---

### Quick Cursor Prompts You'll Probably Use

```
Cursor: scan every markdown file; if there's no date in front-matter, add one with today's date.
Cursor: create a Hugo shortcode called youtube.html that outputs a responsive iframe; replace raw YouTube iframes with the shortcode.
Cursor: bulk-rename any image files with spaces to kebab-case and update the links in markdown.
```

Happy migrating—shout if you hit a snag!
