import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { PracticeAreas } from "@/app/components/PracticeAreas";
import { Attorneys } from "@/app/components/Attorneys";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <Attorneys />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
