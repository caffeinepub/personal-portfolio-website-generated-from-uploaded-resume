import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionShell from './SectionShell';
import { resumeContent } from '../../content/resumeContent';

export default function SkillsSection() {
  return (
    <SectionShell id="skills" title="Skills & Competencies" className="bg-muted/20">
      <div className="grid gap-6 md:grid-cols-2">
        {resumeContent.skills.map((skillCategory, index) => (
          <Card key={index} className="transition-all duration-200 hover:shadow-lg hover:border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                {skillCategory.category}
              </CardTitle>
              <CardDescription>
                {skillCategory.category === 'Medical Billing & RCM'
                  ? 'Core competencies in revenue cycle management'
                  : skillCategory.category === 'Programming & Web'
                  ? 'Software development and web design skills'
                  : skillCategory.category === 'Software & Tools'
                  ? 'Technical proficiencies and platforms'
                  : skillCategory.category === 'Soft Skills'
                  ? 'Professional and interpersonal abilities'
                  : 'Additional capabilities'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="transition-colors hover:bg-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Continuous Learner:</span> Actively
          expanding technical skills while maintaining excellence in medical billing operations.
          Committed to bridging healthcare and technology for improved outcomes.
        </p>
      </div>
    </SectionShell>
  );
}
