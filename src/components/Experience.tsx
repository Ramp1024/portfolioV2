import ExperienceCard, { type ExperienceEntry } from "./ExperienceCard";
import SectionHeading from "./SectionHeading";

const experiences: ExperienceEntry[] = [
  {
    duration: "2024 — Present",
    role: "Software Engineer",
    organization: "Placeholder Company",
    description:
      "Lead work on placeholder systems and services, focusing on reliability and developer experience. Describe a concrete outcome or impact you delivered here.",
    skills: ["TypeScript", "Next.js", "PostgreSQL", "AWS"],
  },
  {
    duration: "2022 — 2024",
    role: "Software Engineer",
    organization: "Placeholder Company",
    description:
      "Built and maintained placeholder features across the stack. Collaborated with a small team to ship user-facing improvements and internal tooling.",
    skills: ["React", "Node.js", "GraphQL"],
  },
  {
    duration: "2020 — 2022",
    role: "Junior Engineer",
    organization: "Placeholder Company",
    description:
      "Contributed to placeholder projects, learned the fundamentals of building production software, and grew into owning larger pieces of work.",
    skills: ["Python", "Docker", "REST"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeading>Experience</SectionHeading>
      <div className="-mx-4 space-y-4">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.duration} {...exp} />
        ))}
      </div>
    </section>
  );
}
