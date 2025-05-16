# Neurture website

## TODO

- Fix homepage styling
- Remove Blog from nav
- set header color to #140f35
- make a color palette
- set small screen breakpoint to 800px
- header:
  - set hamburger menu to show on small screens
  - [small screen] padding: 48px;
  - [medium screen] padding: 8.8px 16px;

### Maybe

#### Component extraction

Use Hugo partials for repeatable UI chunks; Tailwind’s @apply inside SCSS can tidy up long class strings.

#### Accessibility

Pair Tailwind with the `@tailwindcss/typography` and `@tailwindcss/forms` plugins for sensible defaults.

#### Caching

Keep the `fingerprint` pipe so users always get the new asset while enjoying long-term-cache hashes in production.
