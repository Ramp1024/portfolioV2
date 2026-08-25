import SectionHeading from "./SectionHeading";

const nowGroups = [
  {
    heading: "Currently Building",
    items: [
      "This portfolio — a typography-first, content-focused personal site.",
      "A placeholder side project exploring an idea I care about.",
    ],
  },
  {
    heading: "Currently Reading",
    items: [
      "Placeholder Book Title — Author",
      "A placeholder long-form article or paper.",
    ],
  },
  {
    heading: "Currently Learning",
    items: [
      "Placeholder topic — going deeper on fundamentals.",
      "A placeholder tool or framework I want to master.",
    ],
  },
  {
    heading: "Upcoming",
    items: [
      "Placeholder goal or milestone for the next few months.",
      "A placeholder event, talk, or project I'm looking forward to.",
    ],
  },
];

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
