import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import SectionShell from './SectionShell';
import { resumeContent } from '../../content/resumeContent';

export default function SkillsSection() {
  return (
    <SectionShell id="skills" title="Core Competencies">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {resumeContent.skills.map((skillCategory, index) => (
          <Card key={index} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                {skillCategory.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 rounded-lg border border-border/60 bg-muted/30 p-6 text-center">
        <p className="text-sm font-medium text-foreground">
          Versatile skill set combining healthcare expertise with emerging technical capabilities
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Committed to continuous professional development and staying current with industry best practices
        </p>
      </div>
    </SectionShell>
  );
}
