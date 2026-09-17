import { FileText } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const { profile, socials } = portfolio;

export default function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[35%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-hero">{profile.name}</h1>
        <p className="mt-3 text-sm text-zinc-700">{profile.tagline}</p>
        <p className="text-muted mt-2 lowercase">{profile.location}</p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 lg:mt-8">
        {socials.map((link) => (
          <a
            key={link.label}
            href={link.url}
            className="text-sm lowercase text-zinc-500 transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded border border-accent px-3 py-1.5 text-sm lowercase text-accent transition-colors hover:bg-accent hover:text-paper"
        >
          <FileText className="h-4 w-4" />
          resume
        </a>
      </div>
    </header>
  );
}
