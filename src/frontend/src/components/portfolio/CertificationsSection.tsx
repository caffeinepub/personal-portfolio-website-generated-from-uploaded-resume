import { Award, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionShell from './SectionShell';
import { resumeContent } from '../../content/resumeContent';

export default function CertificationsSection() {
  return (
    <SectionShell id="certifications" title="Certifications & Training">
      <div className="grid gap-6 md:grid-cols-2">
        {resumeContent.training.map((training, index) => (
          <Card key={index} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{training.title}</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">{training.organization}</p>
                </div>
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="text-xs">
                Professional Training
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 rounded-lg border border-border/60 bg-muted/30 p-6">
        <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
          <Award className="h-5 w-5 text-primary" />
          Additional Qualifications
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span>Proficient in multiple EHR systems including CollaborateMD, AdvancedMD, TherapyNotes, and SimplePractice</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span>Experienced with major clearinghouses: Waystar, Office Ally, and eProviderSolutions</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span>Strong understanding of U.S. healthcare billing regulations and compliance requirements</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span>Continuous learner with growing expertise in web development and programming</span>
          </li>
        </ul>
      </div>
    </SectionShell>
  );
}
