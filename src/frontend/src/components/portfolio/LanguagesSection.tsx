import { Languages, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionShell from './SectionShell';
import { resumeContent } from '../../content/resumeContent';

export default function LanguagesSection() {
  return (
    <SectionShell id="languages" title="Languages" className="bg-muted/20">
      <Card className="transition-all duration-200 hover:shadow-lg hover:border-primary/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Languages className="h-5 w-5 text-primary" />
            <CardTitle>Multilingual Communication</CardTitle>
          </div>
          <CardDescription>
            Effective communication across diverse patient and provider populations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {resumeContent.languages.map((lang, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/30 p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="font-medium">{lang.language}</span>
                </div>
                <Badge variant="secondary">{lang.proficiency}</Badge>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Cultural Competency:</span> Language
              skills enhance patient communication and support diverse healthcare teams.
            </p>
          </div>
        </CardContent>
      </Card>
    </SectionShell>
  );
}
