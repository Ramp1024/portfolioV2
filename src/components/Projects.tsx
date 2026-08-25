const projects = [
  {
    title: "Placeholder Project One",
    description:
      "Placeholder description of the project, the problem it solves, and the technologies used to build it.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Placeholder Project Two",
    description:
      "Placeholder description of the project, the problem it solves, and the technologies used to build it.",
    tags: ["React", "Node.js"],
  },
  {
    title: "Placeholder Project Three",
    description:
      "Placeholder description of the project, the problem it solves, and the technologies used to build it.",
    tags: ["Python", "Systems"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-zinc-200">
        Projects
      </h2>
      <ul className="space-y-8">
        {projects.map((project) => (
          <li key={project.title}>
            <a href="#" className="group block">
              <h3 className="font-medium text-zinc-100 group-hover:text-teal-300">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                {project.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
