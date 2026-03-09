#!/usr/bin/env node
/**
 * run-in-browser.js - Open any HTML file in this folder in the default browser
 * Usage: node run-in-browser.js <filename>
 * Example: node run-in-browser.js slide1.html
 *          node run-in-browser.js slide2.html
 */

const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const filename = process.argv[2];

if (!filename) {
  console.error('Usage: node run-in-browser.js <filename>');
  console.error('Example: node run-in-browser.js slide1.html');
  process.exit(1);
}

// Resolve path from project root (parent of scripts/). Slides live in ./slides/.
const projectRoot = path.join(__dirname, '..');
const slidesDir = path.join(projectRoot, 'slides');
let filePath = path.isAbsolute(filename)
  ? filename
  : path.resolve(projectRoot, filename);
if (!path.isAbsolute(filename) && !fs.existsSync(filePath) && fs.existsSync(slidesDir)) {
  const inSlides = path.join(slidesDir, path.basename(filename));
  if (fs.existsSync(inSlides)) filePath = inSlides;
}

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

const ext = path.extname(filePath).toLowerCase();
if (ext !== '.html' && ext !== '.htm') {
  console.error('Only .html or .htm files are supported.');
  process.exit(1);
}

function openInBrowser(targetPath) {
  const platform = process.platform;
  let command;

  if (platform === 'win32') {
    // Windows: use path directly; start opens with default app
    command = `start "" "${targetPath.replace(/"/g, '\\"')}"`;
  } else {
    // macOS/Linux: use file:// URL
    const fileUrl = 'file://' + targetPath.replace(/\\/g, '/');
    command = platform === 'darwin' ? `open "${fileUrl}"` : `xdg-open "${fileUrl}"`;
  }

  exec(command, (err) => {
    if (err) {
      console.error('Failed to open browser:', err.message);
      process.exit(1);
    }
    console.log(`Opened ${path.basename(filePath)} in browser`);
  });
}

openInBrowser(filePath);
