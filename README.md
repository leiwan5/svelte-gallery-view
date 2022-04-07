# Svelte Gallery View

## A Svalte component that provides a Google Photos / 500px style photo gellery view.

[![](https://github.com/leiwan5/svelte-gallery-view/workflows/Node%20CI/badge.svg)](https://github.com/leiwan5/svelte-gallery-view/actions?query=workflow%3A%22Node+CI%22)
[![Known Vulnerabilities](https://snyk.io/test/github/leiwan5/svelte-gallery-view/badge.svg)](https://snyk.io/test/github/leiwan5/svelte-gallery-view)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

## Table of Contents

1. [Features](#features)
1. [Getting started](#getting-started)
1. [APIs](#apis)
1. [Developing](#developing)
1. [Testing](#testing)
1. [Publishing to npm](#publishing-to-npm)
1. [Frequently Asked Questions](#frequently-asked-questions)

## Features

-   [Preprocessing](https://github.com/sveltejs/svelte-preprocess/blob/main/README.md)
-   [Formating](https://github.com/sveltejs/prettier-plugin-svelte)
-   [Linting](https://github.com/sveltejs/eslint-plugin-svelte3)
-   [Storybook](https://storybook.js.org/docs/svelte/get-started/introduction)
-   [Testing](https://storybook.js.org/docs/svelte/workflows/testing-with-storybook)

## Getting Started

1. Install the module:

Option #1: Clone it with Github's "Use this template" option:

```bash
npm install svelte-gallery-view
```

2. Import the module:

```javascript
import { GalleryView } from 'svelte-gallery-view'
```

2. Add GalleryView to your view:

```javascript
<GalleryView photos={photos} gap={2} baseHeight={200} />
```

## APIs

1. GalleryView

## Developing

1. Start [SvelteKit](https://kit.svelte.dev/):

```bash
npm run dev
```

2. Edit the component files in `src/lib`, save it and watch the magic happens.

3. Navigate to [localhost:3000](http://localhost:3000) to see the components live.

## Testing

### Interaction testing

This is a simple and intuitive method that can be done through Storybook, with the help of [Cypress](https://cypress.io).
And example and pre-made test scripts can be found in this repository, and more info can be found in [Storybook's docs](https://storybook.js.org/docs/svelte/workflows/interaction-testing).

### Snapshot testing

In this repo you'll find a [basic workflow](.github/chromatic.yml) that uses [Chromatic](https://www.chromatic.com/) for snapshot testing.

