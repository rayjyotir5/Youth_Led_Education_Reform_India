# Youth-Led Education Reform in India - Jekyll Blog

A comprehensive blog series examining how youth-led movements are advancing India's education sector through micro-improvement initiatives at the grassroots level.

## Features

- ✅ **6 comprehensive blog posts** covering the complete series
- ✅ **Search functionality** - Search across all posts
- ✅ **Table of Contents** - Auto-generated TOC for each post
- ✅ **Reading Time** - Estimated reading time for each post
- ✅ **Social Sharing** - Share buttons for Twitter, Facebook, LinkedIn, WhatsApp
- ✅ **Mobile Responsive** - Optimized for all devices
- ✅ **Series Navigation** - Easy navigation between posts

## Setup for GitHub Pages

### Prerequisites

- Ruby 3.1 or higher
- Bundler gem

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd Youth_Led_Education_Reform_India
```

2. Install dependencies:
```bash
bundle install
```

3. Update `_config.yml`:
   - Change `url` to your GitHub Pages URL (e.g., `https://yourusername.github.io`)
   - Update `baseurl` if your repo name differs
   - Update social media handles if applicable

4. Build and serve locally:
```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview your site.

### Deploy to GitHub Pages

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial Jekyll blog setup"
git push origin main
```

2. Enable GitHub Pages:
   - Go to your repository Settings
   - Navigate to Pages section
   - Select source: "GitHub Actions" or "main branch"
   - Your site will be available at `https://yourusername.github.io/Youth_Led_Education_Reform_India`

### Using GitHub Actions (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/jekyll.yml`) that will automatically build and deploy your site when you push to the main branch.

## Project Structure

```
Youth_Led_Education_Reform_India/
├── _config.yml          # Jekyll configuration
├── _posts/              # Blog posts (Jekyll format)
├── _layouts/            # Page layouts
├── _includes/           # Reusable components
├── assets/              # CSS, JS, images
│   ├── css/
│   └── js/
├── index.html           # Homepage
├── series-toc.md        # Series table of contents
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Customization

### Update Site Information

Edit `_config.yml` to update:
- Site title and description
- Author information
- Social media links
- Navigation menu

### Styling

Modify `assets/css/main.scss` to customize colors, fonts, and layout.

### Adding New Posts

Create new files in `_posts/` following the naming convention:
`YYYY-MM-DD-post-title.md`

Include front matter:
```yaml
---
layout: post
title: "Your Post Title"
subtitle: "Your Subtitle"
date: YYYY-MM-DD
author: "Author Name"
categories: [Category]
tags: [tag1, tag2]
series: 7
description: "Post description"
---
```

## License

This content is published under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0).

## Support

For questions or issues, please open an issue on GitHub or contact: grassrootseducation@blog.com
