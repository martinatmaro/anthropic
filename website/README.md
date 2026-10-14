# Maro marketing site

Static homepage (plain HTML/CSS/JS, no build step), hosted on Cloudflare Pages
as the `maro-website` project: https://maro-website.pages.dev

Deploy:

    npx wrangler pages deploy website --project-name maro-website --branch main

Links to other pages (Illinois, California, Blog, etc.) still point to the
existing Framer site at www.meetmaro.com until those pages are rebuilt.
