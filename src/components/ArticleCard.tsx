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
  url,
}: Article) {
  return (
    <a
      href={url ?? "#"}
      className="group flex items-start justify-between gap-4 rounded px-4 py-3 transition-colors hover:bg-black/5"
    >
      <div>
        <div className="text-eyebrow flex items-center gap-3">
          <span>{date}</span>
          <span aria-hidden>·</span>
          <span>{readingTime}</span>
        </div>
        <h3 className="mt-1 font-bold text-zinc-900 group-hover:underline">
          {title}
        </h3>
      </div>
      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-zinc-500 transition-colors group-hover:text-zinc-900" />
    </a>
  );
}
