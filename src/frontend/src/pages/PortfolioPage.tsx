import CertificationsSection from "../components/portfolio/CertificationsSection";
import ContactSection from "../components/portfolio/ContactSection";
import EducationSection from "../components/portfolio/EducationSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import Footer from "../components/portfolio/Footer";
import HeroSection from "../components/portfolio/HeroSection";
import HighlightsSection from "../components/portfolio/HighlightsSection";
import LanguagesSection from "../components/portfolio/LanguagesSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import RcmPortfolioSections from "../components/portfolio/RcmPortfolioSections";
import SkillsSection from "../components/portfolio/SkillsSection";
import TopNav from "../components/portfolio/TopNav";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <HeroSection />
        <HighlightsSection />
        <ExperienceSection />
        <RcmPortfolioSections />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <EducationSection />
        <LanguagesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
