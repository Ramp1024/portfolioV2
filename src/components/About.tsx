import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeading hideOnDesktop>About</SectionHeading>
      <div className="prose-width space-y-4">
        <p className="text-body">
          I&apos;m an engineer who enjoys building reliable systems and exploring
          the space where AI meets real-world infrastructure. Most of my work
          lives close to the intersection of thoughtful product design and
          solid engineering.
        </p>
        <p className="text-body">
          My focus right now is on shipping well-crafted software: readable
          code, sensible abstractions, and interfaces that stay out of the
          way. I care about the details that make a system pleasant to use and
          maintain.
        </p>
        <p className="text-body">
          Outside of engineering, I like reading about systems thinking,
          tinkering with side projects, and following interesting problems
          wherever they lead.
        </p>
      </div>
    </section>
  );
}
