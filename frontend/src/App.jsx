// Main app — fetches quotes from the backend and renders them in a card grid
import { useState, useEffect } from "react";

// Single quote card
function QuoteCard({ quote }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-3 hover:border-indigo-500 transition-colors duration-200">
      <p className="text-gray-100 text-base leading-relaxed italic">{quote.text}</p>
      <p className="text-indigo-400 font-semibold text-sm">— {quote.author}</p>
      <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-gray-800">
        {quote.tags.map((tag) => (
          <span key={tag} className="text-xs bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-800">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API = import.meta.env.VITE_API_URL;

  async function fetchQuotes() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setQuotes(data.quotes);
      setLastUpdated(data.lastUpdated);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-gray-950/80 backdrop-blur border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">Quotes Dashboard</h1>
          {lastUpdated && <p className="text-xs text-gray-500 mt-0.5">Last updated: {new Date(lastUpdated).toLocaleString()}</p>}
        </div>
        <button
          onClick={fetchQuotes}
          disabled={loading}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-150"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Scraping…
            </>
          ) : (
            "Refresh"
          )}
        </button>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Full-screen loading state (first load) */}
        {loading && quotes.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 gap-4 text-gray-400">
            <svg className="animate-spin h-8 w-8 text-indigo-500" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            <p className="text-sm">Logging in and scraping all pages…</p>
          </div>
        )}

        {/* Error state */}
        {error && <div className="bg-red-950 border border-red-800 text-red-300 rounded-xl px-5 py-4 text-sm mb-6">{error}</div>}

        {/* Quote count */}
        {quotes.length > 0 && <p className="text-gray-500 text-sm mb-6">{quotes.length} quotes found</p>}

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {quotes.map((quote, i) => (
            <QuoteCard key={i} quote={quote} />
          ))}
        </div>
      </main>
    </div>
  );
}
