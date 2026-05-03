// Scrapes quotes.toscrape.com — logs in, then walks all paginated pages
import { chromium } from 'playwright';

export async function scrapeQuotes() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  

  await browser.close();
  return quotes;
}
