import { ReactNode } from 'react';

interface SectionShellProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function SectionShell({ id, title, children, className = '' }: SectionShellProps) {
  return (
    <section id={id} className={`border-b border-border/40 py-16 md:py-24 ${className}`}>
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <div className="mx-auto max-w-5xl">{children}</div>
      </div>
    </section>
  );
}
