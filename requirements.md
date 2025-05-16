## 5 Wire Tailwind into Hugo Pipes

Inside **`layouts/partials/head.html`** (or wherever you currently load `main.css`):

```gohtml
{{/* Compile SCSS first, then run PostCSS/Tailwind, then minify & fingerprint */}}
{{ $sass   := resources.Get "scss/main.scss" | toCSS }}
{{ $styles := $sass | postCSS (dict "config" "postcss.config.js") | minify | fingerprint }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}" integrity="{{ $styles.Data.Integrity }}">
```

If you decide to keep Tailwind separate from SCSS:

```gohtml
{{ $tw := resources.Get "tailwind/tailwind.css" | postCSS | minify | fingerprint }}
<link rel="stylesheet" href="{{ $tw.RelPermalink }}" integrity="{{ $tw.Data.Integrity }}">
```

Hugo automatically reruns the PostCSS pipeline on every change when you use `hugo server`, so **no external watcher is required** (but see §7 if you prefer the standalone CLI). ([Hugo][3])

---

## 6 PostCSS config (already generated)

```js
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

> Because Tailwind handles its own “purge” these days (JIT mode), you don’t need PurgeCSS or extra PostCSS plugins. ([Tailwind CSS][4])

---

## 7 Handy Yarn scripts (optional)

```jsonc
{
  "scripts": {
    "clean": "rm -rf public resources/_gen",
    "dev": "hugo server --disableFastRender --gc --bind 0.0.0.0",
    "dev:cli": "tailwindcss -i ./assets/tailwind/tailwind.css -o ./assets/tailwind/tailwind.generated.css --watch",
    "build": "NODE_ENV=production hugo --gc --minify",
    "build:cli": "NODE_ENV=production tailwindcss -i ./assets/tailwind/tailwind.css -o ./assets/tailwind/tailwind.generated.css --minify"
  }
}
```

- Use `dev` alone when relying on Hugo Pipes.
- Use `dev:cli` or `build:cli` if you prefer the standalone Tailwind watcher (e.g. you ship the generated file from **static/**).

---

## 8 Integrating Tailwind into existing SCSS

Inside **`assets/scss/main.scss`** _before_ any variables that affect Tailwind:

```scss
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

// …your own SCSS afterwards…
```

The import form works because Hugo pipes the Sass output **into** PostCSS, which then resolves the Tailwind directives.

---

## 9 Verify everything

```bash
yarn dev          # or hugo server
# open http://localhost:1313 and inspect. You should see Tailwind utility classes working.
NODE_ENV=production yarn build   # test a production build
```

• If you see **“failed to run PostCSS”**, confirm you’re running the **extended** Hugo build.
• If classes are not purged, double-check the `content:` array in `tailwind.config.js`.

---

## 10. Next steps & best practices

| Task                     | Tip                                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| **Design tokens**        | Extend Tailwind’s theme to match your brand colours and spacing system rather than hard-coding utilities everywhere. |
| **Component extraction** | Use Hugo partials for repeatable UI chunks; Tailwind’s @apply inside SCSS can tidy up long class strings.            |
| **Accessibility**        | Pair Tailwind with the `@tailwindcss/typography` and `@tailwindcss/forms` plugins for sensible defaults.             |
| **Caching**              | Keep the `fingerprint` pipe so users always get the new asset while enjoying long-term-cache hashes in production.   |

## 11. Just to Be Certain

Make sure your asset pipeline still finishes with `| minify | fingerprint`, e.g.:

```gohtml
{{ $sass   := resources.Get "scss/main.scss" | toCSS }}
{{ $styles := $sass | postCSS | minify | fingerprint }}

<link rel="stylesheet" href="{{ $styles.RelPermalink }}" integrity="{{ $styles.Data.Integrity }}">
```

Hugo will now:

1. Convert your SCSS to plain CSS.
2. Run Tailwind + Autoprefixer via PostCSS.
3. Minify the result with its built-in compressor.
4. Add a cache-busting fingerprint.

You’re all set! Drop Tailwind classes into your templates or MD files and enjoy utility-first styling inside your existing Hugo theme without sacrificing your SCSS investment. Happy building 🎉

[1]: https://tailwindcss.com/docs/installation/tailwind-cli?utm_source=chatgpt.com "Tailwind CLI - Installation"
[2]: https://tailwindcss-v0.netlify.app/docs/installation/?utm_source=chatgpt.com "Installation - Tailwind CSS"
[3]: https://gohugo.io/functions/css/tailwindcss/?utm_source=chatgpt.com "css.TailwindCSS - Hugo"
[4]: https://tailwindcss.com/blog/standalone-cli?utm_source=chatgpt.com "Standalone CLI: Use Tailwind CSS without Node.js"
