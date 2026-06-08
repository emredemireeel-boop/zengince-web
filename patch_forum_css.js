const fs = require('fs');
const path = require('path');

// 1. Fix forum.css
const forumCssPath = path.join(__dirname, 'public', 'forum.css');
let forumCssContent = fs.readFileSync(forumCssPath, 'utf8');

// Replace the root variables to enforce dark theme by default
const oldRoot = `:root {
  --forum-card-bg: #ffffff;
  --forum-card-border: #e2e8f0;
  --forum-hover-primary: rgba(212, 175, 55, 0.1);
  --forum-primary: #D4AF37;
  --forum-secondary: #f0f2f5;
  --forum-foreground: #1a1a2e;
  --forum-text-muted: #64748b;
  --forum-success: #22c55e;
  --forum-danger: #ef4444;
  --forum-card-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.04), 0 2px 8px -2px rgba(0, 0, 0, 0.02);
  --forum-card-shadow-hover: 0 16px 32px -4px rgba(212, 175, 55, 0.15), 0 8px 16px -4px rgba(212, 175, 55, 0.08);
}`;

const newRoot = `:root {
  --forum-card-bg: #111111;
  --forum-card-border: #222222;
  --forum-hover-primary: rgba(212, 175, 55, 0.15);
  --forum-primary: #D4AF37;
  --forum-secondary: #1a1a1a;
  --forum-foreground: #ededed;
  --forum-text-muted: #888888;
  --forum-success: #22c55e;
  --forum-danger: #ef4444;
  --forum-card-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.4), 0 2px 8px -2px rgba(0, 0, 0, 0.2);
  --forum-card-shadow-hover: 0 16px 32px -4px rgba(212, 175, 55, 0.15), 0 8px 16px -4px rgba(212, 175, 55, 0.08);
}`;

forumCssContent = forumCssContent.replace(oldRoot, newRoot);

// Remove the body.dark-theme block since it's now default
forumCssContent = forumCssContent.replace(/body\.dark-theme,[\s\S]*?\}/, '');

fs.writeFileSync(forumCssPath, forumCssContent, 'utf8');
console.log('forum.css patched to default dark theme.');

// 2. Fix style.css variables if missing
const styleCssPath = path.join(__dirname, 'public', 'style.css');
let styleCssContent = fs.readFileSync(styleCssPath, 'utf8');

// We need to inject common missing variables into :root
const missingVars = `
  /* Global UI Missing Vars */
  --card-bg: #111111;
  --card-border: #222222;
  --top-bar-bg: #0a0a0a;
  --foreground: #e8e8e3;
  --background: #0a0a0a;
  --success: #22c55e;
  --danger: #ef4444;
`;

if (!styleCssContent.includes('--card-bg:')) {
    styleCssContent = styleCssContent.replace(':root {', ':root {' + missingVars);
    fs.writeFileSync(styleCssPath, styleCssContent, 'utf8');
    console.log('style.css patched with missing global variables.');
} else {
    console.log('style.css already has --card-bg.');
}

console.log('Done.');
