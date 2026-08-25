import { Code, ExternalLink } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
}: Project) {
  return (
    <div className="group grid gap-3 rounded-lg p-4 transition-colors hover:bg-zinc-900/50">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-medium text-zinc-100 group-hover:text-accent">
          {title}
        </h3>
        <div className="flex shrink-0 items-center gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              aria-label={`${title} source on GitHub`}
              className="text-zinc-500 transition-colors hover:text-accent"
            >
              <Code className="h-5 w-5" />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              aria-label={`${title} live demo`}
              className="text-zinc-500 transition-colors hover:text-accent"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      <p className="text-body text-sm">{description}</p>
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
