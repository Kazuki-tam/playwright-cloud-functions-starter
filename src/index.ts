import * as ff from "@google-cloud/functions-framework";
import { scrape } from "./scraper";

/**
 * HTTP endpoint that uses the scrape function to get the text of the h1 element from a specified URL.
 * Responds with the scraped text or an error message if the scraping fails.
 */
ff.http("scrapeFunction", async (req: ff.Request, res: ff.Response) => {
  try {
    // URL to scrape.
    const url = "https://pure-liquid-dev.netlify.app/";

    // Use the scrape function to get the text of the h1 element.
    const resultTexts = await scrape(url);

    // Respond with the scraped text.
    res.send(resultTexts);
  } catch (error) {
    // Respond with an error status and message if the scraping fails.
    res.status(500).send("An error occurred while processing the request.");
  }
});
