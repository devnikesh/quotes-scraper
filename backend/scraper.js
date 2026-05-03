// Scrapes quotes.toscrape.com — logs in, then walks all paginated pages
import { chromium } from "playwright";

export async function scrapeQuotes() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Log in
  await page.goto("https://quotes.toscrape.com/login");
  await page.fill('input[name="username"]', "admin");
  await page.fill('input[name="password"]', "admin");
  await page.click('input[type="submit"]');
  await page.waitForURL("https://quotes.toscrape.com/");

  const quotes = [];

  // Walk through pages until there's no "Next" button
  while (true) {
    const pageQuotes = await page.$$eval(".quote", (nodes) =>
      nodes.map((node) => ({
        text: node.querySelector(".text")?.innerText ?? "",
        author: node.querySelector(".author")?.innerText ?? "",
        tags: [...node.querySelectorAll(".tag")].map((t) => t.innerText),
      })),
    );

    quotes.push(...pageQuotes);

    const nextBtn = await page.$("li.next > a");
    if (!nextBtn) break;

    await nextBtn.click();
    await page.waitForLoadState("networkidle");
  }

  await browser.close();
  return quotes;
}
