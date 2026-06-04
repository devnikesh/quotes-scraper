import React, { useState } from "react";
import { fetchQuotes } from "../../services/quotesService";

const QuoteHeader = ({ loading, lastUpdated }) => {
  const [currentPage, setCurrentPage] = useState("");

  return (
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
  );
};

export default QuoteHeader;
