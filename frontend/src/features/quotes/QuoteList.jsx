import React, { useEffect, useMemo } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import QuoteCard from "../../components/QuoteCard";

const QuoteList = ({ quotes, loading }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {quotes.map((quote, i) => (
        <QuoteCard key={`${quote.author} ${i} ${quote.text.slice(10, 4)}`} quote={quote} />
      ))}
    </div>
  );
};

export default QuoteList;
