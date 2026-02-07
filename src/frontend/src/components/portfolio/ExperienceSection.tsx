import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionShell from './SectionShell';
import { resumeContent } from '../../content/resumeContent';

export default function ExperienceSection() {
  return (
    <SectionShell id="experience" title="Professional Experience">
      <div className="grid gap-6 md:grid-cols-2">
        {resumeContent.experience.map((exp, index) => (
          <Card key={index} className="flex flex-col transition-all duration-200 hover:shadow-lg hover:border-primary/30">
            <CardHeader>
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  {index === 0 && (
                    <Badge variant="default" className="shrink-0">
                      Current Role
                    </Badge>
                  )}
                </div>
                <CardDescription className="flex flex-col gap-1 text-base">
                  <span className="flex items-center gap-2 font-medium text-foreground">
                    <Briefcase className="h-4 w-4" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  )}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-3">
                <h4 className="mb-2 text-sm font-semibold text-foreground">
                  Key Responsibilities:
                </h4>
              </div>
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
