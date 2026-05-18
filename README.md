# Resume Website

個人履歷網站，使用 Vue.js 3 + Vite 製作，作為前端作品集與 GitHub Pages 部署練習。

網站內容包含個人簡介、技能、工作經歷、個人專案，以及互動式龍形游標效果。

## Tech Stack

- Vue.js 3
- Vite
- JavaScript
- HTML / CSS
- GitHub Actions
- GitHub Pages

## Project Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Local URL:

```text
http://localhost:5173/resume-website/
```

## Build

```bash
npm run build
```

Build output:

```text
dist/
```

## Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for GitHub Pages.

The Vite base path is set in `vite.config.js`:

```js
base: '/resume-website/',
```

If the GitHub repository name changes, update this value to match the new repository name.

Deployment is handled by GitHub Actions:

```text
.github/workflows/deploy.yml
```

In GitHub repository settings, enable:

```text
Settings -> Pages -> Source -> GitHub Actions
```

## Content Editing

Resume content is managed in:

```text
src/data/resumeData.js
```

Main sections:

- `profile`
- `skills`
- `experiences`
- `projects`

## Notes

The dragon cursor is implemented as a Vue component:

```text
src/components/DragonCursor.vue
```

Image assets are stored in:

```text
src/assets/dragon-cursor/
```
