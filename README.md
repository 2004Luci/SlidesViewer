# SlidesViewer

An HTML slide presentation with a single-page viewer. Navigate between slides and run full-screen.

---

## Quick start

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## Local development

| Task                           | Command                                      |
| ------------------------------ | -------------------------------------------- |
| Run viewer on localhost        | `npm run dev` or `npm start`                 |
| Open viewer in default browser | `node scripts/run-in-browser.js index.html`  |
| Open a single slide            | `node scripts/run-in-browser.js slide1.html` |

The script resolves `slideN.html` from the `slides/` folder, so you can run it from the project root.

---

## Viewer controls

**Navigation**

- **Buttons** — First · Previous · Next · Last (top bar)
- **Keyboard** — ← / → or **Space** for previous/next
- **Home / End** — First or last slide
- **Jump** — Type slide number (e.g. `26`) then **Enter**, or wait ~1 second after typing

**Full-screen (slide only)**

- **F** — Toggle presentation mode (hides top bar and footer)
- **Esc** — Exit presentation mode

**URL** — Use the hash to open or share a slide: `index.html#5` for slide 5.

---

## Project structure

```
├── index.html          Viewer (iframe + nav)
├── slides/
│   ├── slide1.html
│   ├── ...
│   └── slide26.html
├── scripts/
│   └── run-in-browser.js
├── package.json
├── vercel.json
└── README.md
```

---

## Tech

- Plain HTML/CSS/JS; slides use Tailwind and custom styles.
- Viewer: single `index.html` that loads slides in an iframe and scales to fit.
- Local server: [serve](https://github.com/vercel/serve) on port 3000.
