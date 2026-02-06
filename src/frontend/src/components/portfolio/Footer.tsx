import { Heart } from 'lucide-react';
import { SiLinkedin, SiGithub, SiX } from 'react-icons/si';
import { resumeContent } from '../../content/resumeContent';

export default function Footer() {
  const { contact, name } = resumeContent;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    contact.linkedin && { icon: SiLinkedin, href: contact.linkedin, label: 'LinkedIn' },
    contact.github && { icon: SiGithub, href: contact.github, label: 'GitHub' },
  ].filter(Boolean);

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center text-sm text-muted-foreground sm:text-left">
            <p>© {currentYear} {name}. All rights reserved.</p>
            <p className="mt-1">
              Built with <Heart className="inline h-3 w-3 fill-red-500 text-red-500" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:text-foreground"
              >
                caffeine.ai
              </a>
            </p>
          </div>
          {socialLinks.length > 0 && (
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                if (!link) return null;
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
