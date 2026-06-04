export const fetchQuotes = async () => {
  const API = import.meta.env.VITE_API_URL;
  const res = await fetch(API);

  if (!res.ok) throw new Error(`Server error: ${res.status}`);

  return res.json();
};
