import { LucideIcon } from 'lucide-react';

/**
 * ServiceTagline Component
 * Displays the service tagline with icon
 */
interface ServiceTaglineProps {
  icon: LucideIcon;
  text: string;
}

export const ServiceTagline = ({ icon: Icon, text }: ServiceTaglineProps) => {
  return (
    <div className="text-[#ff6b00] text-sm font-semibold uppercase tracking-widest mb-5 flex items-center gap-2">
      <Icon size={16} className="text-[#ff6b00]" />
      {text}
    </div>
  );
};
