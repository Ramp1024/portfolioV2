import { ArrowUpRight } from "lucide-react";

export type Article = {
  title: string;
  date: string;
  readingTime: string;
  summary: string;
  url?: string;
};

export default function ArticleCard({
  title,
  date,
  readingTime,
  summary,
  url,
}: Article) {
  return (
    <article className="group rounded-lg p-4 transition-colors hover:bg-zinc-900/50">
      <a href={url ?? "#"} className="block">
        <div className="text-eyebrow flex items-center gap-3">
          <span>{date}</span>
          <span aria-hidden>·</span>
          <span>{readingTime}</span>
        </div>
        <h3 className="mt-2 flex items-center gap-1 font-medium text-zinc-100 group-hover:text-accent">
          {title}
          <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
        </h3>
        <p className="text-body mt-2 text-sm">{summary}</p>
      </a>
    </article>
  );
}
