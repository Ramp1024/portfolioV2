import { portfolio } from "@/data/portfolio";
import ProjectArchive from "./ProjectArchive";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const featuredProjects = portfolio.projects.filter(
  (project) => project.featured,
);

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeading>Projects</SectionHeading>
      <div className="-mx-4 space-y-4">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            achievements={project.achievements}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            award={project.award}
          />
        ))}
      </div>
      <ProjectArchive />
    </section>
  );
}
