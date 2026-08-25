import About from "@/components/About";
import Experience from "@/components/Experience";
import Now from "@/components/Now";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import Writing from "@/components/Writing";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-12 md:px-12 lg:flex lg:justify-between lg:gap-12 lg:px-16 lg:py-0">
      <Sidebar />
      <main className="space-y-24 pt-16 lg:w-[65%] lg:py-24">
        <About />
        <Experience />
        <Projects />
        <Writing />
        <Now />
      </main>
    </div>
  );
}
