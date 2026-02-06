import { Languages, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionShell from './SectionShell';
import { resumeContent } from '../../content/resumeContent';

export default function LanguagesSection() {
  const getProficiencyColor = (proficiency: string) => {
    const lower = proficiency.toLowerCase();
    if (lower === 'native') return 'bg-green-600';
    if (lower === 'fluent') return 'bg-blue-600';
    if (lower === 'advanced') return 'bg-purple-600';
    return 'bg-gray-600';
  };

  return (
    <SectionShell id="languages" title="Languages">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resumeContent.languages.map((lang, index) => (
          <Card key={index} className="transition-shadow hover:shadow-md">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="rounded-full bg-primary/10 p-3">
                <Languages className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{lang.language}</h3>
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <Badge variant="outline" className="mt-1 text-xs">
                  {lang.proficiency}
                </Badge>
              </div>
              <div className={`h-2 w-2 rounded-full ${getProficiencyColor(lang.proficiency)}`} />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-border/60 bg-muted/30 p-4 text-center">
        <p className="text-sm text-muted-foreground">
          Multilingual professional capable of effective communication across diverse teams and stakeholders
        </p>
      </div>
    </SectionShell>
  );
}
