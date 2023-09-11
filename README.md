# Playwright on Cloud Functions starter template
This starter kit makes you scraping websites by Playwright on Cloud Functions.

## Status

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/playwright-cloud-functions-starter)](https://github.com/Kazuki-tam/playwright-cloud-functions-starter/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/playwright-cloud-functions-starter)](https://github.com/Kazuki-tam/playwright-cloud-functions-starter/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2023)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/playwright-cloud-functions-starter)

## Features
- Built-in Functions Framework and Playwright
- Lint TypeScript files with ESLint

## Main dependencies

- [Cloud Functions](https://cloud.google.com/functions)
- [gcloud CLI](https://cloud.google.com/sdk/gcloud)
- [playwright-aws-lambda](https://github.com/JupiterOne/playwright-aws-lambda)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Pnpm](https://pnpm.io/)

## Prerequisites

- [Node.js v16 or higher](https://nodejs.org/en/)
- [gcloud CLI](https://cloud.google.com/sdk/gcloud)

Install [gcloud CLI](https://cloud.google.com/sdk/docs/install) at the first if you haven't done it yet.

## How to Use
Clone this repository and install dependencies.

```bash
pnpm install
```

Run gcloud init if you haven't initialize the gcloud CLI yet.

```bash
gcloud init
```

[Initializing the gcloud CLI](https://cloud.google.com/sdk/docs/initializing)

Develop locally.

```bash
pnpm pre-build
pnpm dev
```


## Available Commands
Start your project in development mode.

```bash
pnpm dev
```

Deploy your project for production.

```bash
pnpm deploy
```

Default settings in this template here.

```bash
gcloud functions deploy scrapeFunction --gen2 --runtime nodejs18 --trigger-http --allow-unauthenticated --memory=2GB --timeout=540s
```

## Contributes
Pull requests are always welcome.

## License
MIT