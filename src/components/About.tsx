import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeading hideOnDesktop>Who I Am</SectionHeading>
      <div className="prose-width">
        <p className="text-body">
          Engineer who enjoys building reliable systems where AI meets
          real-world infrastructure — focused on shipping well-crafted,
          maintainable software.
        </p>
      </div>
    </section>
  );
}
