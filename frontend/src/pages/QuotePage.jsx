import React, { useEffect, useState } from "react";
import { useQuotes } from "../hooks/useQuotes";
import QuoteHeader from "../features/quotes/QuoteHeader";
import QuoteCard from "../components/QuoteCard";
import QuoteList from "../features/quotes/QuoteList";
import Spinner from "../features/ui/Spinner";

const QuotePage = () => {
  const { loading, error, quotes, lastUpdated, refetch } = useQuotes();

  return (
    <>
      <QuoteHeader loading={loading} refetch={refetch} lastUpdated={lastUpdated} />
      <div className="min-h-screen bg-gray-950 text-white">
        {/* Main content */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          {/* Full-screen loading state (first load) */}
          {loading && quotes.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 gap-4 text-gray-400">
              <Spinner size={"lg"} />
              <p className="text-sm">Logging in and scraping all pages…</p>
            </div>
          )}

          {/* Error state */}
          {error && <div className="bg-red-950 border border-red-800 text-red-300 rounded-xl px-5 py-4 text-sm mb-6">{error}</div>}

          {/* Quote count */}
          {quotes.length > 0 && <p className="text-gray-500 text-sm mb-6">{quotes.length} quotes found</p>}

          {/* Card grid */}
          <QuoteList quotes={quotes} loading={loading} />
        </main>
      </div>
    </>
  );
};

export default QuotePage;
