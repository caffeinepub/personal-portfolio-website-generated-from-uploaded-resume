import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionShell from './SectionShell';
import { resumeContent } from '../../content/resumeContent';

export default function ProjectsSection() {
  return (
    <SectionShell id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {resumeContent.projects.map((project, index) => (
          <Card key={index} className="flex flex-col transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      title="View on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      title="View project"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="mb-4 space-y-2">
                {project.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
