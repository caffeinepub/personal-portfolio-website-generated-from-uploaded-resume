import { ExternalLink, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionShell from './SectionShell';
import { resumeContent } from '../../content/resumeContent';

export default function ExperienceSection() {
  return (
    <SectionShell id="experience" title="Professional Experience">
      <div className="space-y-6">
        {resumeContent.experience.map((exp, index) => (
          <Card key={index} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-start gap-2">
                    <Badge variant="default" className="gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Current Role
                    </Badge>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">{exp.title}</CardTitle>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium">{exp.company}</span>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center hover:text-foreground"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:text-right">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="mb-3 text-sm font-semibold text-foreground">Key Responsibilities & Achievements:</h4>
              <ul className="space-y-2">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
