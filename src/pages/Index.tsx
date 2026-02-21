import Navbar from "@/components/Navbar";
import TerminalHero from "@/components/TerminalHero";
import AboutSection from "@/components/AboutSection";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <TerminalHero />
      <AboutSection />
      <SkillsGrid />
      <ProjectShowcase />
      <ExperienceTimeline />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
