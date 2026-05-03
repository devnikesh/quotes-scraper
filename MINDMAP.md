Quotes Dashboard
├── Frontend (React + Tailwind)
│   ├── App.js
│   │   ├── fetchQuotes() — calls /api/quotes
│   │   ├── Loading state (spinner)
│   │   ├── Error state
│   │   └── Quote count + card grid
│   └── QuoteCard component
│       ├── Quote text (italic)
│       ├── Author name
│       └── Tag pills
├── Backend (Node + Express)
│   ├── server.js
│   │   └── GET /api/quotes → runs scraper, returns { quotes, lastUpdated }
│   └── scraper.js
│       ├── Launch headless Chromium
│       ├── Login (fill form, click submit, await URL change)
│       ├── Loop: extract quotes on current page
│       ├── Check for "Next" link → click and repeat
│       └── Return all quotes, close browser
└── Config
    ├── frontend proxy → http://localhost:3001
    └── backend cors() → allow all origins
