import { LucideIcon } from 'lucide-react';

/**
 * ServiceTagline Component
 * Displays the service tagline
 */
interface ServiceTaglineProps {
  icon?: LucideIcon;
  text: string;
}

export const ServiceTagline = ({ text }: ServiceTaglineProps) => {
  return (
    <div className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-5">
      {text}
    </div>
  );
};
