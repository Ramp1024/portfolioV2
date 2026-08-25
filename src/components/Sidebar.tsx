import { FileText } from "lucide-react";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "now", label: "Now" },
];

const socialLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Email", href: "#" },
];

export default function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[35%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Ramprakash
        </h1>
        <p className="mt-4 max-w-xs text-lg text-zinc-400">
          Engineer exploring AI, systems, and interesting problems.
        </p>

        <nav className="mt-16 hidden lg:block" aria-label="Section navigation">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm font-medium uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-100"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-100"
        >
          <FileText className="h-4 w-4" />
          Resume
        </a>
      </div>
    </header>
  );
}
