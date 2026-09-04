# Swag Labs Test Automation

End-to-end UI tests for [Sauce Demo](https://www.saucedemo.com/) using Playwright and TypeScript.

## Prerequisites

- Node.js 18 or later
- npm

## Setup

```bash
npm install
npx playwright install
```

## Run tests

Run the full test suite in Chromium, Firefox, and WebKit:

```bash
npx playwright test
```

Run the standard checkout test only:

```bash
npx playwright test tests/standard-checkout.spec.ts
```

View the HTML report after a test run:

```bash
npx playwright show-report
```

## Project structure

```text
tests/
  Login.spec.ts                Login coverage
  standard-checkout.spec.ts    Standard-user checkout coverage
  helpers/                     Reusable test actions
  objects/                     Page selectors
  globalvariables/             URL and test credentials
playwright.config.ts           Playwright configuration
```

The test suite is configured to run against Chromium, Firefox, and WebKit. The standard checkout test verifies the Sauce Labs Backpack cart price is `$29.99` before checkout.
