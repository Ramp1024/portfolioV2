const nowItems = [
  {
    heading: "Currently Building",
    items: ["Placeholder project or side project you are working on."],
  },
  {
    heading: "Currently Reading",
    items: ["Placeholder book or article title."],
  },
  {
    heading: "Currently Learning",
    items: ["Placeholder topic, tool, or skill you are exploring."],
  },
];

export default function Now() {
  return (
    <section id="now" className="scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-zinc-200">
        Now
      </h2>
      <dl className="space-y-6">
        {nowItems.map((group) => (
          <div key={group.heading}>
            <dt className="font-medium text-zinc-100">{group.heading}</dt>
            <dd className="mt-2">
              <ul className="space-y-1 text-sm text-zinc-400">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
