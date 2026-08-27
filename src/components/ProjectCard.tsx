import { Award as AwardIcon, Code, ExternalLink } from "lucide-react";

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
    <div className="group grid gap-3 rounded-lg p-4 transition-colors hover:bg-zinc-900/50">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium text-zinc-100 group-hover:text-accent">
            {title}
          </h3>
          {subtitle && <p className="text-muted mt-0.5">{subtitle}</p>}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          {github && (
            <a
              href={github}
              aria-label={`${title} source on GitHub`}
              className="text-zinc-500 transition-colors hover:text-accent"
            >
              <Code className="h-5 w-5" />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              aria-label={`${title} live demo`}
              className="text-zinc-500 transition-colors hover:text-accent"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

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
          <AwardIcon className="h-4 w-4 text-accent" />
          {award}
        </p>
      )}

      <ul className="mt-1 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <li key={tech} className="tag">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
