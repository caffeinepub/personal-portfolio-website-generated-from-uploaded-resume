import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Code2, GraduationCap } from "lucide-react";
import { useState } from "react";
import { HEADSHOT_512, HEADSHOT_1280 } from "../../content/assetPaths";
import { resumeContent } from "../../content/resumeContent";
import HeadshotLightbox from "./HeadshotLightbox";
import ResumeDownloadButton from "./ResumeDownloadButton";

export default function HeroSection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-border/40"
      style={{
        backgroundImage:
          "url(/assets/generated/portfolio-hero-bg.dim_2400x1350.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "oklch(var(--muted))",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background" />
      <div className="container relative py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            {/* Headshot */}
            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="group relative block overflow-hidden rounded-full border-4 border-primary/20 shadow-xl transition-all hover:border-primary/40 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`View larger headshot of ${resumeContent.name}`}
              >
                <img
                  src={HEADSHOT_512}
                  alt={`Headshot of ${resumeContent.name}`}
                  className="h-52 w-52 object-cover transition-transform group-hover:scale-105 md:h-64 md:w-64 lg:h-80 lg:w-80"
                />
                <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/10" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-4 flex flex-wrap items-center justify-center gap-2 md:justify-start">
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
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="group transition-all hover:shadow-lg"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <ResumeDownloadButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeadshotLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc={HEADSHOT_1280}
        imageAlt={`Professional headshot of ${resumeContent.name}`}
      />
    </section>
  );
}
