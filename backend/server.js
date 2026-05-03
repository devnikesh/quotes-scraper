// Express server — single endpoint that triggers the scraper and returns results
import express from "express";
import cors from "cors";
import { scrapeQuotes } from "./scraper.js";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/quotes", async (req, res) => {
  try {
    console.log("Scraping started...");
    const quotes = await scrapeQuotes();
    res.json({
      quotes,
      lastUpdated: new Date().toISOString(),
    });
    console.log(`Done. Returned ${quotes.length} quotes.`);
  } catch (err) {
    console.error("Scrape failed:", err.message);
    res.status(500).json({ error: "Scraping failed", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
