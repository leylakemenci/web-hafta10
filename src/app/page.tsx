import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Hobbies />
      <Contact />
      
      <footer className="text-center py-8 text-sm text-gray-600 border-t border-gray-800/30 mt-auto">
        <p>© {new Date().getFullYear()} Leyla. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
}
