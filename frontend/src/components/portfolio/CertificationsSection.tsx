import { Award, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionShell from './SectionShell';
import { resumeContent } from '../../content/resumeContent';

export default function CertificationsSection() {
  return (
    <SectionShell id="certifications" title="Certifications & Training">
      <div className="space-y-6">
        {resumeContent.training.map((training, index) => (
          <Card key={index} className="transition-all duration-200 hover:shadow-lg hover:border-primary/30">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{training.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {training.organization}
                  </CardDescription>
                </div>
                <Badge variant="outline">Certified</Badge>
              </div>
            </CardHeader>
          </Card>
        ))}

        <Card className="border-primary/30 bg-primary/5 transition-all duration-200 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Professional Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Comprehensive training in medical billing and denial management</span>
              </li>
              <li className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Proficient in ICD-10, CPT, and HCPCS coding systems</span>
              </li>
              <li className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Specialized AR and denial management expertise</span>
              </li>
              <li className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Continuous learning in web development and programming</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}
