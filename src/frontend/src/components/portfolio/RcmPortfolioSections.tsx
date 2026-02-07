import { CheckCircle2, Wrench, Workflow, TrendingUp, Code2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionShell from './SectionShell';
import { rcmCaseStudies, rcmSections } from '../../content/rcmPortfolioContent';

export default function RcmPortfolioSections() {
  return (
    <>
      {/* RCM Case Studies */}
      <SectionShell id="rcm-case-studies" title="RCM Case Studies">
        <div className="space-y-6">
          {rcmCaseStudies.map((study, index) => (
            <Card
              key={index}
              className="transition-all duration-200 hover:shadow-lg hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription className="text-base font-medium">
                    {study.subtitle}
                  </CardDescription>
                  {(study.role || study.scope) && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {study.role && (
                        <Badge variant="outline" className="font-normal">
                          {study.role}
                        </Badge>
                      )}
                      {study.scope && (
                        <Badge variant="outline" className="font-normal">
                          {study.scope}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {study.tools.length > 0 && (
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="secondary">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {study.responsibilities.length > 0 && (
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">
                      What I Did
                    </h4>
                    <ul className="space-y-1.5">
                      {study.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {study.impact.length > 0 && (
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">Impact</h4>
                    <ul className="space-y-1.5">
                      {study.impact.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-2 border-t border-border/50">
                  <p className="text-xs text-muted-foreground italic">
                    <span className="font-medium text-foreground">Portfolio Value:</span>{' '}
                    {study.portfolioValue}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionShell>

      {/* Systems & Tools */}
      <SectionShell id="systems-tools" title="Systems & Tools" className="bg-muted/20">
        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              <CardTitle>Technical Proficiency</CardTitle>
            </div>
            <CardDescription>
              Experienced with industry-standard RCM platforms and tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {rcmSections.systemsTools.map((tool, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </SectionShell>

      {/* Billing Workflows */}
      <SectionShell id="billing-workflows" title="Billing Workflows">
        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Workflow className="h-5 w-5 text-primary" />
              <CardTitle>End-to-End RCM Expertise</CardTitle>
            </div>
            <CardDescription>
              Comprehensive knowledge of the complete revenue cycle
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {rcmSections.billingWorkflows.map((workflow, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-md border border-border/50 bg-muted/30 p-3 transition-colors hover:bg-muted/50"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm font-medium">{workflow}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </SectionShell>

      {/* Process Improvements */}
      <SectionShell id="process-improvements" title="Process Improvements" className="bg-muted/20">
        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <CardTitle>Continuous Optimization</CardTitle>
            </div>
            <CardDescription>
              Focus on measurable improvements and efficiency gains
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {rcmSections.processImprovements.map((improvement, index) => (
                <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </SectionShell>

      {/* Tech + Billing Skills */}
      <SectionShell id="tech-billing-skills" title="Tech + Billing Skills">
        <Card className="border-primary/30 bg-primary/5 transition-all duration-200 hover:shadow-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              <CardTitle>Unique Hybrid Skillset</CardTitle>
            </div>
            <CardDescription>
              Combining medical billing expertise with technical knowledge
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {rcmSections.techBillingSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-md border border-primary/20 bg-background/80 p-3 transition-colors hover:bg-background"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-primary/10 p-4">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Differentiator:</span> This combination of
                billing expertise and technical skills positions me uniquely to bridge the gap
                between healthcare operations and technology solutions.
              </p>
            </div>
          </CardContent>
        </Card>
      </SectionShell>
    </>
  );
}
