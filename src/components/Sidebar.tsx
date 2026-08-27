import { FileText } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "now", label: "Now" },
];

const { profile, socials } = portfolio;

export default function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[35%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-hero">{profile.name}</h1>
        <p className="mt-3 text-lg font-medium text-zinc-300">
          Engineer exploring AI, systems, and interesting problems.
        </p>
        <p className="text-muted mt-2">{profile.location}</p>

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
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-100"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-accent hover:text-accent"
        >
          <FileText className="h-4 w-4" />
          Resume
        </a>
      </div>
    </header>
  );
}
