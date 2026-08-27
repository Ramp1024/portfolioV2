import { portfolio } from "@/data/portfolio";
import type { Experience as ExperienceItem } from "@/types/portfolio";
import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatDate(value: string) {
  const match = value.match(/^(\d{2})\/(\d{4})$/);
  if (!match) return value; // e.g. "Present"
  const [, month, year] = match;
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

// Group roles by company, preserving order, so promotions sit together.
const groups = portfolio.experience.reduce<
  { company: string; roles: ExperienceItem[] }[]
>((acc, exp) => {
  const existing = acc.find((group) => group.company === exp.company);
  if (existing) existing.roles.push(exp);
  else acc.push({ company: exp.company, roles: [exp] });
  return acc;
}, []);

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeading>Where I&apos;ve worked</SectionHeading>
      <div className="-mx-4 space-y-6">
        {groups.map((group) => (
          <div key={group.company}>
            <h3 className="section-title px-4">{group.company}</h3>
            <div className="mt-1 space-y-1">
              {group.roles.map((role) => (
                <ExperienceCard
                  key={`${role.role}-${role.start}`}
                  role={role.role}
                  duration={`${formatDate(role.start)} — ${formatDate(role.end)}`}
                  highlights={role.highlights}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
