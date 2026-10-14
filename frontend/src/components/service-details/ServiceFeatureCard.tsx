
/**
 * ServiceFeatureCard Component
 * Displays a single capability as a clean, bordered row
 */
interface ServiceFeatureCardProps {
  feature: string;
  index?: number;
}
export const ServiceFeatureCard = ({ feature, index = 0 }: ServiceFeatureCardProps) => {
  return (
    <div className={`bg-navy-wash p-5 ${index % 2 === 0 ? 'card-shape-a' : 'card-shape-b'} border border-gray-200 flex items-start gap-3.5 hover:border-brand-orange/40 hover:shadow-sm transition-all`}>
      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-2"></span>
      <span className="font-semibold text-navy leading-snug">{feature}</span>
    </div>
  );
};
