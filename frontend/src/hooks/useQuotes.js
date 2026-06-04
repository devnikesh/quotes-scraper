import { useEffect, useState } from "react";
import { fetchQuotes } from "../services/quotesService";

export const useQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const loadQuotes = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchQuotes();
      setQuotes(data.quotes);
      setLastUpdated(data.lastUpdated);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  return {
    loading,
    error,
    quotes,
    lastUpdated,
    refetch: loadQuotes,
  };
};
