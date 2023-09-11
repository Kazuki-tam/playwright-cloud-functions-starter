import * as playwright from "playwright-aws-lambda";
import { createBrowser, createPage } from "../browser";

/**
 * Scrapes the specified URL and returns the inner text of the h1 element.
 * @param url - The URL to scrape.
 * @returns The inner text of the h1 element.
 * @throws If any error occurs during scraping.
 */
async function scrape(url: string): Promise<string> {
  let browser: playwright.Browser | null = null;
  try {
    browser = await createBrowser();

    /**
     * Creates a new page using the browser.
     */
    const page = await createPage({ browser });

    // Navigate to the specified URL.
    await page.goto(url);

    // Locate the h1 element.
    const h1Locator = page.locator("h1");

    // Return the inner text of the h1 element.
    return await h1Locator.innerText();
  } catch (error) {
    throw error;
  } finally {
    if (browser) {
      // Close the browser when finished.
      await browser.close();
    }
  }
}

export { scrape };
