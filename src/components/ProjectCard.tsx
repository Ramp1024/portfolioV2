import { Award as AwardIcon, ChevronDown, Code, ExternalLink } from "lucide-react";

export type ProjectCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  award?: string;
};

export default function ProjectCard({
  title,
  subtitle,
  description,
  achievements,
  technologies,
  github,
  demo,
  award,
}: ProjectCardProps) {
  return (
    <details className="group rounded px-4 py-3 transition-colors hover:bg-black/5">
      <summary className="flex cursor-pointer list-none flex-col gap-3 marker:hidden">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-bold text-zinc-900 group-hover:underline">
              {title}
            </h3>
            {subtitle && <p className="text-muted mt-0.5">{subtitle}</p>}
          </div>
          <ChevronDown className="mt-1 h-4 w-4 shrink-0 text-zinc-500 transition-transform group-open:rotate-180" />
        </div>

        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
      </summary>

      <div className="mt-3 space-y-3 border-t border-black/10 pt-3">
        <p className="text-body text-sm">{description}</p>

        {achievements.length > 0 && (
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-body flex gap-2 text-sm">
                <span
                  aria-hidden
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}

        {award && (
          <p className="text-muted flex items-center gap-2">
            <AwardIcon className="h-4 w-4 text-zinc-600" />
            {award}
          </p>
        )}

        {(github || demo) && (
          <div className="flex items-center gap-4">
            {github && (
              <a
                href={github}
                className="text-muted inline-flex items-center gap-1.5 lowercase transition-colors hover:text-zinc-900"
              >
                <Code className="h-4 w-4" />
                code
              </a>
            )}
            {demo && (
              <a
                href={demo}
                className="text-muted inline-flex items-center gap-1.5 lowercase transition-colors hover:text-zinc-900"
              >
                <ExternalLink className="h-4 w-4" />
                demo
              </a>
            )}
          </div>
        )}
      </div>
    </details>
  );
}
