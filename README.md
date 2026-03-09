# Presentation slides

26 HTML slides with a single viewer so you can present and move back and forth between slides.

## Local

- **Run on localhost:** from the project folder:
  ```bash
  npm install   # first time only
  npm run dev  # or: npm start
  ```
  Then open **http://localhost:3000** in your browser.
- **View full presentation (with navigation):** open `index.html` in your browser, or run:
  ```bash
  node run-in-browser.js index.html
  ```
- **Open one slide:** `node run-in-browser.js slide1.html` (or `slide2.html`, …, `slide26.html`). The script looks in the `slides/` folder automatically.

## Navigation (in `index.html`)

- **Buttons:** First, Previous, Next, Last.
- **Keyboard:** ← / → (or Space) for previous/next; Home/End for first/last.
- **Jump to slide:** Type the slide number (e.g. `2` then `6` for slide 26) and press Enter, or wait briefly after typing the number.
- **URL:** Use the hash to link to a slide, e.g. `index.html#5` for slide 5.

## Deploy (e.g. Vercel)

1. Push this repo to GitHub (or connect another Git provider).
2. In [Vercel](https://vercel.com), import the project and deploy. No build step; it’s static.
3. Your live URL will serve `index.html` at `/` and all slides under `/slides/`.

Other static hosts (Netlify, GitHub Pages, etc.) work the same: point the site root to this folder.

## Structure

```
/
  index.html          # Presentation viewer (iframe + nav)
  slides/
    slide1.html … slide26.html
  run-in-browser.js   # Local helper to open a slide in the browser
  vercel.json         # Optional Vercel config
```
