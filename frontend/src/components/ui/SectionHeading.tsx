import { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  light?: boolean;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  light = false,
  align = 'left',
  className = '',
}: SectionHeadingProps) => {
  const alignClass = align === 'center' ? 'mx-auto text-center' : '';
  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-4 block">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-5xl font-bold leading-tight tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg mt-5 leading-relaxed ${light ? 'text-white/70' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
