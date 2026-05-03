# Quotes Dashboard

Web scraping dashboard — logs into quotes.toscrape.com, scrapes all quotes, and displays them in a React UI.

## Stack

- **Frontend**: React + Tailwind CSS (via CDN)
- **Backend**: Node.js + Express
- **Scraper**: Playwright (headless Chromium)

## Prerequisites

- Node.js 18+
- npm

## Install & Run

### 1. Backend

```bash
cd backend
npm install
npx playwright install chromium
node server.js
```

Server starts at `http://localhost:3001`.

### 2. Frontend (new terminal)

```bash
cd frontend
npm install
npm start
```

App opens at `http://localhost:3000`.

## Usage

- The dashboard loads automatically and begins scraping on page open.
- Click **Refresh** to re-run the scraper and update the data.
- Scraping takes ~10–15 seconds (it walks 10 pages).
