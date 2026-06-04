import React, { useEffect, useState } from "react";
import { useQuotes } from "../hooks/useQuotes";
import QuoteHeader from "../features/quotes/QuoteHeader";
import QuoteCard from "../components/QuoteCard";

const QuotePage = () => {
  const { loading, error, quotes, lastUpdated, refetch: loadQuotes } = useQuotes();

  return (
    <>
      <QuoteHeader loading={loading} />
      <div className="min-h-screen bg-gray-950 text-white">
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
        </main>
      </div>
    </>
  );
};

export default QuotePage;
