import * as playwright from "playwright-aws-lambda";
import type { Browser } from "playwright-core";

/**
 * Create and launch a Chromium browser instance with specific configurations.
 *
 * @returns Promise<Browser> - A Promise that resolves to the browser instance.
 * @throws May throw an error if the browser fails to launch.
 */
async function createBrowser(): Promise<Browser> {
  return await playwright.launchChromium({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--disable-gpu",
      "--disable-background-timer-throttling",
      "--disable-backgrounding-occluded-windows",
      "--disable-renderer-backgrounding",
    ],
  });
}

export { createBrowser };
