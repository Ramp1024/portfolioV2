export type ExperienceEntry = {
  role: string;
  company: string;
  duration: string;
  highlights: string[];
};

export default function ExperienceCard({
  role,
  company,
  duration,
  highlights,
}: ExperienceEntry) {
  return (
    <div className="group grid gap-3 rounded-lg p-4 transition-colors hover:bg-zinc-900/50 sm:grid-cols-[9rem_1fr] sm:gap-6">
      <p className="text-eyebrow pt-1">{duration}</p>
      <div>
        <h3 className="font-medium text-zinc-100">
          {role} · <span className="text-zinc-300">{company}</span>
        </h3>
        <ul className="mt-3 space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-body flex gap-2 text-sm">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
