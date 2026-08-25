const experiences = [
  {
    period: "2024 — Present",
    role: "Software Engineer",
    company: "Placeholder Company",
    description:
      "Placeholder description of your responsibilities, impact, and the technologies you worked with in this role.",
  },
  {
    period: "2022 — 2024",
    role: "Software Engineer",
    company: "Placeholder Company",
    description:
      "Placeholder description of your responsibilities, impact, and the technologies you worked with in this role.",
  },
  {
    period: "2020 — 2022",
    role: "Junior Engineer",
    company: "Placeholder Company",
    description:
      "Placeholder description of your responsibilities, impact, and the technologies you worked with in this role.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-zinc-200">
        Experience
      </h2>
      <ol className="space-y-10">
        {experiences.map((exp) => (
          <li key={exp.period} className="grid gap-2 sm:grid-cols-[8rem_1fr]">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              {exp.period}
            </p>
            <div>
              <h3 className="font-medium text-zinc-100">
                {exp.role} · {exp.company}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">{exp.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
