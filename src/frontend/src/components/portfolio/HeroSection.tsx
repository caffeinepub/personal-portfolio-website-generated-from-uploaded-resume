import { ArrowRight, Download, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { resumeContent } from '../../content/resumeContent';
import ResumeDownloadButton from './ResumeDownloadButton';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-border/40"
      style={{
        backgroundImage: 'url(/assets/generated/portfolio-hero-bg.dim_2400x1350.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'oklch(var(--muted))',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background" />
      <div className="container relative py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
            <Badge variant="outline" className="gap-1">
              <Briefcase className="h-3 w-3" />
              Medical Billing Professional
            </Badge>
            <Badge variant="outline" className="gap-1">
              <GraduationCap className="h-3 w-3" />
              BSCS Student
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Code2 className="h-3 w-3" />
              Aspiring Developer
            </Badge>
          </div>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {resumeContent.name}
          </h1>
          <p className="mb-4 text-xl font-medium text-foreground sm:text-2xl md:text-3xl">
            {resumeContent.title}
          </p>
          <p className="mb-8 text-base font-normal text-foreground/90 sm:text-lg md:text-xl">
            {resumeContent.summary}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" onClick={scrollToContact} className="group transition-all hover:shadow-lg">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <ResumeDownloadButton />
          </div>
        </div>
      </div>
    </section>
  );
}
