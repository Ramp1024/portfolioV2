import { FileText } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const navItems = [
  { id: "about", label: "Who I Am" },
  { id: "experience", label: "Where I've Worked" },
  { id: "projects", label: "What I've Built" },
  { id: "writing", label: "Rabbit Holes" },
  { id: "now", label: "Current Quests" },
];

const { profile, socials } = portfolio;

export default function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[35%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-hero">{profile.name}</h1>
        <p className="mt-3 text-sm text-zinc-700">
          engineer exploring ai, systems, and interesting problems.
        </p>
        <p className="text-muted mt-2 lowercase">{profile.location}</p>

        <nav className="mt-10 lg:mt-16" aria-label="Section navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:flex-col lg:gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-nav">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 lg:mt-8">
        {socials.map((link) => (
          <a
            key={link.label}
            href={link.url}
            className="text-sm lowercase text-zinc-500 transition-colors hover:text-zinc-900"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded border border-zinc-400 px-3 py-1.5 text-sm lowercase text-zinc-800 transition-colors hover:border-zinc-900 hover:text-zinc-900"
        >
          <FileText className="h-4 w-4" />
          resume
        </a>
      </div>
    </header>
  );
}
