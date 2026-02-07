import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SectionShell from './SectionShell';
import { resumeContent } from '../../content/resumeContent';

export default function ContactSection() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: resumeContent.contact.email,
      href: `mailto:${resumeContent.contact.email}`,
    },
    ...(resumeContent.contact.phone
      ? [
          {
            icon: Phone,
            label: 'Phone',
            value: resumeContent.contact.phone,
            href: `tel:${resumeContent.contact.phone}`,
          },
        ]
      : []),
    {
      icon: MapPin,
      label: 'Location',
      value: resumeContent.contact.location,
      href: undefined,
    },
    ...(resumeContent.contact.linkedin
      ? [
          {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Connect on LinkedIn',
            href: resumeContent.contact.linkedin,
          },
        ]
      : []),
    ...(resumeContent.contact.github
      ? [
          {
            icon: Github,
            label: 'GitHub',
            value: 'View GitHub Profile',
            href: resumeContent.contact.github,
          },
        ]
      : []),
    ...(resumeContent.contact.website
      ? [
          {
            icon: Globe,
            label: 'Website',
            value: 'Visit Website',
            href: resumeContent.contact.website,
          },
        ]
      : []),
  ];

  return (
    <SectionShell id="contact" title="Get in Touch">
      <div className="mx-auto max-w-4xl">
        <p className="mb-8 text-center text-muted-foreground">
          I'm always open to discussing new opportunities, collaborations, or answering any questions you may have.
          Feel free to reach out through any of the channels below.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <Card
                key={index}
                className={`transition-all duration-200 ${
                  item.href ? 'cursor-pointer hover:shadow-lg hover:border-primary/50 hover:-translate-y-0.5' : ''
                }`}
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                    <p className="truncate text-sm font-medium">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            );

            return item.href ? (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
              >
                {content}
              </a>
            ) : (
              content
            );
          })}
        </div>
        <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
          <h3 className="mb-2 text-lg font-semibold">Ready to Connect?</h3>
          <p className="text-sm text-muted-foreground">
            Whether you're looking for a dedicated medical billing professional or interested in my technical journey,
            I'd love to hear from you. Let's discuss how I can contribute to your team's success.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
