const articles = [
  {
    title: "Placeholder Article One",
    date: "2025",
    description: "Placeholder summary of the article and what it covers.",
  },
  {
    title: "Placeholder Article Two",
    date: "2025",
    description: "Placeholder summary of the article and what it covers.",
  },
  {
    title: "Placeholder Article Three",
    date: "2024",
    description: "Placeholder summary of the article and what it covers.",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-zinc-200">
        Writing
      </h2>
      <ul className="space-y-8">
        {articles.map((article) => (
          <li key={article.title}>
            <a href="#" className="group block">
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {article.date}
              </p>
              <h3 className="mt-1 font-medium text-zinc-100 group-hover:text-teal-300">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                {article.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
