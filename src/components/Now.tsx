import { portfolio } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const nowGroups = [
  { heading: "Currently Building", items: portfolio.now.building },
  { heading: "Currently Reading", items: portfolio.now.reading },
  { heading: "Currently Learning", items: portfolio.now.learning },
  { heading: "Currently Exploring", items: portfolio.now.exploring },
].filter((group) => group.items.length > 0);

export default function Now() {
  return (
    <section id="now" className="scroll-mt-24">
      <SectionHeading>Now</SectionHeading>
      <div className="grid gap-8 sm:grid-cols-2">
        {nowGroups.map((group) => (
          <div key={group.heading}>
            <h3 className="text-eyebrow">{group.heading}</h3>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-body text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
