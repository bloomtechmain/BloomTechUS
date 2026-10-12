import { CheckCircle2 } from 'lucide-react';

/**
 * ServiceFeatureCard Component
 * Displays a single capability as a clean, bordered row
 */
interface ServiceFeatureCardProps {
  feature: string;
  index?: number;
}

export const ServiceFeatureCard = ({ feature }: ServiceFeatureCardProps) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 flex items-start gap-3.5 hover:border-[#ff6b00]/40 hover:shadow-sm transition-all">
      <CheckCircle2 size={20} className="text-[#ff6b00] shrink-0 mt-0.5" />
      <span className="font-semibold text-[#101D36] leading-snug">{feature}</span>
    </div>
  );
};
