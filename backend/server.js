// Express server — single endpoint that triggers the scraper and returns results
import express from "express";

const app = express();
const PORT = 3001;

app.get("/", async (req, res) => {
  res.send("API running");
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
