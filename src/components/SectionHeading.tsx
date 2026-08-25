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
    <h2 className={`section-title mb-8 ${hideOnDesktop ? "lg:sr-only" : ""}`}>
      {children}
    </h2>
  );
}
