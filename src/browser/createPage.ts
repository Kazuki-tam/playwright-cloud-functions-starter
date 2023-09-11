import * as playwright from "playwright-aws-lambda";
/**
 * Function to create a new page from a browser instance.
 *
 * @param browser - An instance of playwright.Browser.
 * @returns Promise<playwright.Page> - A Promise that resolves to the new page object.
 * @throws May throw an exception if any errors occur.
 */
async function createPage({
  browser,
}: {
  browser: playwright.Browser;
}): Promise<playwright.Page> {
  const context = await browser.newContext({
    ignoreHTTPSErrors: true,
    viewport: null,
  });
  return await context.newPage();
}

export { createPage };
