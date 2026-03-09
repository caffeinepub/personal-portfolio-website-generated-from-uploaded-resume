import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionShell from './SectionShell';
import { resumeContent } from '../../content/resumeContent';

export default function EducationSection() {
  return (
    <SectionShell id="education" title="Education">
      <div className="space-y-6">
        {resumeContent.education.map((edu, index) => (
          <Card key={index} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-start gap-2">
                    <GraduationCap className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  </div>
                  <p className="font-medium text-muted-foreground">{edu.institution}</p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:text-right">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            {edu.details && edu.details.length > 0 && (
              <CardContent>
                <ul className="space-y-2">
                  {edu.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
