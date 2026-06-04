function QuoteCard({ quote }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-3 hover:border-indigo-500 transition-colors duration-200">
      <p className="text-gray-100 text-base leading-relaxed italic">{quote.text}</p>
      <p className="text-indigo-400 font-semibold text-sm">— {quote.author?.name}</p>
      <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-gray-800">
        {quote.tags.map((tag) => (
          <span key={tag._id} className="text-xs bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-800">
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default QuoteCard;
