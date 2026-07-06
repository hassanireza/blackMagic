# Black Magic

[![Build and deploy to GitHub Pages](https://github.com/hassanireza/blackMagic/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/hassanireza/blackMagic/actions/workflows/deploy.yml)
[![Deployed on GitHub Pages](https://img.shields.io/badge/deployed-github%20pages-4f7dff)](https://hassanireza.github.io/blackMagic)
[![React](https://img.shields.io/badge/react-18.3-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![styled--components](https://img.shields.io/badge/styled--components-6.4-db7093?logo=styledcomponents&logoColor=white)](https://styled-components.com/)
[![Node](https://img.shields.io/badge/node-20.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-add%20one-lightgrey)](#license)

An interactive teaser site for Black Magic, built as a single scroll free experience where a mosaic image reassembles itself as the visitor moves their cursor or finger across the screen.

<img src="docs/architecture.svg" alt="Black Magic component architecture diagram" width="100%" />

## Table of contents

- [Overview](#overview)
- [Live experience](#live-experience)
- [Design system](#design-system)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Deployment](#deployment)
- [Rebrand and asset notes](#rebrand-and-asset-notes)
- [Browser support](#browser-support)
- [License](#license)

## Overview

Black Magic is a small, self contained React application. There is no router, no backend and no build time content pipeline beyond Create React App. The entire experience lives in a handful of styled components:

- A hero mosaic made of twenty four tiles that drift apart at rest and snap together into a single image as the visitor's cursor approaches the center of the screen.
- A wordmark and emblem in the header, drawn as a single inline SVG so it stays crisp at any size.
- A footer that frames the gathering dates for the next event.
- A sign up modal with a lightweight form and a follow up screen with social links.

## Live experience

The interaction is driven by one calculation. On every pointer or touch move, the app measures how close the cursor is to the center of the viewport and turns that distance into a value between zero and one. That value:

1. Spreads or gathers the twenty four mosaic tiles.
2. Deepens or lifts the background color, so the whole page breathes with the motion.
3. Triggers a soft glow animation once the tiles are fully aligned.

## Design system

<img src="docs/color-system.svg" alt="Black Magic color tokens and typography" width="100%" />

The palette moved from a flat, saturated blue to a deep, near black navy with an electric blue signal color. This keeps full attention on the mosaic image while still giving buttons, links and the modal enough contrast to stay usable.

| Token | Value | Used for |
| --- | --- | --- |
| Void | `#05070f` | Page background |
| Depth | `#0c1636` | Gradient shadows on the emblem |
| Ink blue | `#24408f` | Modal text and interactive borders |
| Signal | `#4f7dff` | Primary accent, glow shadow |
| Glow | `#7fc4ff` | Hover states, gradient highlight |
| Paper | `#f5f7ff` | Body copy and light surfaces |

Typography pairs a serif display face with a modern grotesque:

- **Cinzel** for the wordmark, the sign up button and headings, giving the brand its ceremonial, engraved feel.
- **Manrope** for body copy, labels and form fields, keeping longer text easy to read.

Both fonts are loaded from Google Fonts in `public/index.html` with a `preconnect` hint so they do not block the first paint.

## Tech stack

- [React 18](https://react.dev/) with [Create React App](https://create-react-app.dev/) for the build toolchain.
- [styled-components](https://styled-components.com/) for scoped, themeable CSS in JavaScript.
- Inline SVG for every icon and the logo, imported as React components through Create React App's built in SVGR support.
- [Testing Library](https://testing-library.com/) and Jest for component tests.
- GitHub Actions for continuous integration and deployment to GitHub Pages.

## Project structure

```
public/
  favicon.ico            App icon for browser tabs, generated from brand/emblem.svg
  image.webp             Hero mosaic photograph
  logo192.webp           App icon, 192x192, used in manifest.json
  logo512.webp           App icon, 512x512, used in manifest.json
  index.html             HTML shell, fonts and meta tags
  manifest.json          Web app manifest

src/
  components/
    Header/              Wordmark and emblem
    Footer/              Gathering dates
    ImgBox/               A single mosaic tile
    Modal/                Overlay shell and close control
    ModalInner/           Sign up form and success state
    Form/                 Name and email fields
  App.jsx                 Pointer tracking and layout composition
  styles.js               Global styles, palette and shared primitives

docs/
  architecture.svg        Component diagram used in this README
  color-system.svg        Palette and type reference used in this README

brand/
  emblem.svg              Source file for the favicon and app icons

.github/workflows/
  deploy.yml               Build, test and deploy pipeline
```

## Getting started

You will need Node.js 20 or newer and npm.

```bash
npm install
npm start
```

The app runs at `http://localhost:3000`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the app in development mode with hot reload |
| `npm test` | Runs the Jest and Testing Library suite in watch mode |
| `npm run build` | Produces an optimized, production ready bundle in `build/` |

## Deployment

This repository deploys to GitHub Pages automatically through `.github/workflows/deploy.yml`. Every push to `main` will:

1. Install dependencies with `npm ci`.
2. Run the test suite with `CI=true`.
3. Build the production bundle with `npm run build`.
4. Upload the bundle as a Pages artifact and publish it with `actions/deploy-pages`.

To enable this in your own GitHub repository:

1. Push this project to a repository under your account.
2. In the repository settings, open **Pages** and set the source to **GitHub Actions**.
3. Update the `homepage` field in `package.json` so it matches your repository, for example `https://your-username.github.io/your-repo-name`. Create React App uses this value to set the correct base path for every asset in the production build.
4. Push to `main`. The workflow will build and publish the site automatically.

## Rebrand and asset notes

This project went through a full visual and technical pass:

- The wordmark and app icons were redrawn from scratch as vector artwork and now live in `brand/emblem.svg` and `src/components/Header/logo.svg`.
- All raster images were converted to WebP. There are no PNG or JPG files anywhere in the source tree, keeping the shipped bundle smaller without any visible quality loss.
- The favicon remains an ICO file, since that format still has the widest browser support for tab icons and cannot be replaced by WebP.
- The social and success icons were rebuilt as a consistent, single color line art set that inherits `currentColor`, so they always match the surrounding text.
- The color system moved from a bright, flat blue to a layered dark palette so the hero photograph reads clearly against the background.
- A broken nested style block in the sign up form was fixed, an invalid `for` attribute on the form labels was corrected to `htmlFor`, and the sign up form now calls `preventDefault` so submitting it never reloads the page.
- The default Create React App test and a stale `package-lock.json` entry pointing at an untrusted mirror registry were both removed.

## Browser support

The site targets the last version of Chrome, Firefox and Safari in development, and the wider `>0.2%, not dead, not op_mini all` browserslist target in production, matching the configuration in `package.json`.

## License

This project is provided as is for Black Magic. Add your preferred license here before making the repository public, then update the license badge at the top of this file to match.
