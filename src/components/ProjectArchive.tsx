import { ArrowUpRight, ChevronDown } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const archive = portfolio.projects
  .filter((project) => !project.featured)
  .map((project) => ({
    name: project.title,
    year: project.date.split("/").pop() ?? project.date,
    tags: project.technologies,
    url: project.github ?? project.demo,
  }));

export default function ProjectArchive() {
  if (archive.length === 0) return null;

  return (
    <details className="group mt-10 rounded-lg border border-zinc-800/80">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 text-nav marker:hidden">
        View project archive
        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
      </summary>

      <ul className="divide-y divide-zinc-800/80 border-t border-zinc-800/80">
        {archive.map((entry, index) => (
          <li key={`${entry.name}-${index}`}>
            <a
              href={entry.url ?? "#"}
              className="group/row grid grid-cols-[3.5rem_1fr_auto] items-center gap-4 px-4 py-3 hover:bg-zinc-900/50 sm:grid-cols-[4rem_1fr_1fr_auto]"
            >
              <span className="text-eyebrow">{entry.year}</span>
              <span className="font-medium text-zinc-200 group-hover/row:text-accent">
                {entry.name}
              </span>
              <ul className="hidden flex-wrap gap-2 sm:flex">
                {entry.tags.map((tag) => (
                  <li key={tag} className="text-muted">
                    {tag}
                  </li>
                ))}
              </ul>
              <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover/row:text-accent" />
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
