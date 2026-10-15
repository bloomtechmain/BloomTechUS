import { LucideIcon } from 'lucide-react';
/**
 * ServiceCTA Component
 * Call-to-action button group for service pages
 */
interface CTAButton {
  text: string;
  icon: LucideIcon;
  primary?: boolean;
  onClick?: () => void;
}

interface ServiceCTAProps {
  primaryButton: CTAButton;
  secondaryButton: CTAButton;
}

export const ServiceCTA = ({ primaryButton, secondaryButton }: ServiceCTAProps) => {

  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        onClick={primaryButton.onClick}
        className="bg-brand-orange hover:bg-brand-orange-dark text-white px-7 py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-colors active:scale-[0.98] flex items-center gap-2 group"
      >
        {primaryButton.text} 
      </button>
      <button className="border border-white/25 hover:border-white/50 text-white/90 hover:text-white px-7 py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-colors active:scale-[0.98]">
        {secondaryButton.text}
      </button>
    </div>
  );
};
