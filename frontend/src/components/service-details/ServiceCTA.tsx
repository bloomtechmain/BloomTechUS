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
  const PrimaryIcon = primaryButton.icon;

  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        onClick={primaryButton.onClick}
        className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-7 py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-colors active:scale-[0.98] flex items-center gap-2 group"
      >
        {primaryButton.text} <PrimaryIcon size={16} className="group-hover:translate-x-0.5 transition-transform" />
      </button>
      <button className="border border-white/25 hover:border-white/50 text-white/90 hover:text-white px-7 py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-colors active:scale-[0.98]">
        {secondaryButton.text}
      </button>
    </div>
  );
};
