import ProjectArchive from "./ProjectArchive";
import ProjectCard, { type Project } from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const projects: Project[] = [
  {
    title: "Placeholder Project One",
    description:
      "A featured placeholder project. Describe what it does, the problem it solves, and the interesting engineering decisions behind it.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Placeholder Project Two",
    description:
      "A featured placeholder project. Describe what it does, the problem it solves, and the interesting engineering decisions behind it.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "#",
  },
  {
    title: "Placeholder Project Three",
    description:
      "A featured placeholder project. Describe what it does, the problem it solves, and the interesting engineering decisions behind it.",
    technologies: ["Python", "FastAPI", "Redis"],
    githubUrl: "#",
    demoUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeading>Projects</SectionHeading>
      <div className="-mx-4 space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <ProjectArchive />
    </section>
  );
}
