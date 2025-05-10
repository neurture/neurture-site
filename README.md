# Neurture Website

This is the codebase for the Neurture website, built with [Hugo](https://gohugo.io/).

## Getting Started

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (Extended version recommended)
- Git

### Local Development

1. Clone this repository

```bash
git clone https://github.com/your-username/neurture-site.git
cd neurture-site
```

2. Start the Hugo development server

```bash
hugo server -D
```

This will start a local development server at http://localhost:1313/ with hot reloading enabled.

## Site Structure

- `content/`: Contains all the content for the site
- `themes/neurture/`: Custom theme for the site
  - `layouts/`: HTML templates
  - `assets/`: CSS, JS, and other assets
- `static/`: Static files like images
- `hugo.toml`: Hugo configuration file

## Adding Content

### Creating a New Page

```bash
hugo new content/page-name/index.md
```

Then edit the generated markdown file with your content.

### Front Matter

Each content file starts with front matter:

```yaml
---
title: "Page Title"
date: 2023-11-25
draft: false
---
```

## Deployment

To build the site for production:

```bash
hugo --minify
```

This will generate the static site in the `public/` directory, which you can then deploy to your hosting provider.

## License

[MIT](LICENSE)
