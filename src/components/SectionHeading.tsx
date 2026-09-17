type SectionHeadingProps = {
  children: React.ReactNode;
  /** Visually hide on desktop (used for About where the sidebar provides context). */
  hideOnDesktop?: boolean;
};

export default function SectionHeading({
  children,
  hideOnDesktop = false,
}: SectionHeadingProps) {
  return (
    <h2
      className={`section-title mb-5 flex items-center gap-3 ${hideOnDesktop ? "lg:sr-only" : ""}`}
    >
      <span aria-hidden className="h-px w-6 shrink-0 bg-accent" />
      {children}
    </h2>
  );
}
