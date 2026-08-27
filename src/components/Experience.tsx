import { portfolio } from "@/data/portfolio";
import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeading>Experience</SectionHeading>
      <div className="-mx-4 space-y-4">
        {portfolio.experience.map((exp) => (
          <ExperienceCard
            key={`${exp.company}-${exp.start}`}
            role={exp.role}
            company={exp.company}
            duration={`${exp.start} — ${exp.end}`}
            highlights={exp.highlights}
          />
        ))}
      </div>
    </section>
  );
}
