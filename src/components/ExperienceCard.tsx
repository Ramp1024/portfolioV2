export type ExperienceEntry = {
  role: string;
  organization: string;
  duration: string;
  description: string;
  skills: string[];
};

export default function ExperienceCard({
  role,
  organization,
  duration,
  description,
  skills,
}: ExperienceEntry) {
  return (
    <div className="group grid gap-3 rounded-lg p-4 transition-colors hover:bg-zinc-900/50 sm:grid-cols-[9rem_1fr] sm:gap-6">
      <p className="text-eyebrow pt-1">{duration}</p>
      <div>
        <h3 className="font-medium text-zinc-100">
          {role} · <span className="text-zinc-300">{organization}</span>
        </h3>
        <p className="text-body mt-2 text-sm">{description}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill} className="tag">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
