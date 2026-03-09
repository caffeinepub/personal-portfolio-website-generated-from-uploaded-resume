import TopNav from '../components/portfolio/TopNav';
import HeroSection from '../components/portfolio/HeroSection';
import HighlightsSection from '../components/portfolio/HighlightsSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import RcmPortfolioSections from '../components/portfolio/RcmPortfolioSections';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import CertificationsSection from '../components/portfolio/CertificationsSection';
import EducationSection from '../components/portfolio/EducationSection';
import LanguagesSection from '../components/portfolio/LanguagesSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';

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
