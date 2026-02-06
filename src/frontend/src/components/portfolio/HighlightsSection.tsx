import { Award, Building2, Code2, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function HighlightsSection() {
  const highlights = [
    {
      icon: Building2,
      label: 'Practices Managed',
      value: '22+',
      description: 'U.S. Healthcare Practices',
    },
    {
      icon: Award,
      label: 'Specialization',
      value: 'RCM & Denial Management',
      description: 'Medical Billing Expert',
    },
    {
      icon: Users,
      label: 'Experience',
      value: 'Current',
      description: 'Active Professional',
    },
    {
      icon: Code2,
      label: 'Tech Skills',
      value: '10+ EHR Systems',
      description: 'Multi-Platform Proficiency',
    },
  ];

  return (
    <section className="border-b border-border/40 bg-muted/30 py-12">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="border-border/60 bg-background/50 backdrop-blur-sm transition-all hover:shadow-md">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-3 rounded-full bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="mb-1 text-2xl font-bold">{highlight.value}</p>
                  <p className="mb-1 text-sm font-medium text-foreground">{highlight.label}</p>
                  <p className="text-xs text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
