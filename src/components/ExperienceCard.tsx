export type ExperienceEntry = {
  role: string;
  duration: string;
  highlights: string[];
};

export default function ExperienceCard({
  role,
  duration,
  highlights,
}: ExperienceEntry) {
  return (
    <div className="group grid gap-3 rounded px-4 py-2 transition-colors hover:bg-black/5 sm:grid-cols-[9rem_1fr] sm:gap-6">
      <p className="text-eyebrow pt-1">{duration}</p>
      <div>
        <h3 className="font-bold text-zinc-900">{role}</h3>
        <ul className="mt-2 space-y-2">
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
