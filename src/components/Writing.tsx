import { ArrowUpRight } from "lucide-react";
import ArticleCard, { type Article } from "./ArticleCard";
import SectionHeading from "./SectionHeading";

const articles: Article[] = [
  {
    title: "Placeholder Article One",
    date: "Feb 2025",
    readingTime: "6 min read",
    summary:
      "A short placeholder summary of the article. Introduce the topic and hint at the key takeaway a reader can expect.",
    url: "#",
  },
  {
    title: "Placeholder Article Two",
    date: "Jan 2025",
    readingTime: "4 min read",
    summary:
      "A short placeholder summary of the article. Introduce the topic and hint at the key takeaway a reader can expect.",
    url: "#",
  },
  {
    title: "Placeholder Article Three",
    date: "Nov 2024",
    readingTime: "8 min read",
    summary:
      "A short placeholder summary of the article. Introduce the topic and hint at the key takeaway a reader can expect.",
    url: "#",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="scroll-mt-24">
      <SectionHeading>Rabbit Holes</SectionHeading>
      <div className="-mx-4 space-y-4">
        {articles.slice(0, 2).map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <a href="#" className="text-nav inline-flex items-center gap-1.5">
          more
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
