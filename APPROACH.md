# Approach

## Why Playwright?

Playwright handles the full browser lifecycle — cookies, sessions, JS-rendered pages. The target site sets a session cookie after login, and Playwright carries that cookie naturally across page navigations. Alternatives like `axios` + `cheerio` can't do that without manually managing cookies, which is fragile.

## How Login Works

Playwright opens the `/login` page, fills in the username and password fields by their `name` attributes, clicks submit, then waits for the URL to change to `/`. At that point the session is live, and all subsequent page requests are authenticated.

## How Pagination Works

After login, the scraper enters a loop:

1. Extract all `.quote` elements on the current page.
2. Check for a `li.next > a` link.
3. If found, click it and wait for the next page to load.
4. If not found, the loop ends.

This walks all 10 pages without hardcoding URLs — it follows the site's own navigation.

## How Frontend Connects to Backend

The frontend is a CRA app with `"proxy": "http://localhost:3001"` in its `package.json`. That means a `fetch('/api/quotes')` in the React code is proxied to `http://localhost:3001/api/quotes` during development — no CORS config needed on the frontend side. The backend also has `cors()` middleware so it works if the proxy isn't used (e.g. in production).
