import { Link } from 'react-router-dom';
/**
 * ServiceBenefitsSidebar Component
 * Sidebar showing client benefits with sticky positioning
 */
interface ServiceBenefitsSidebarProps {
  benefits: string[];
}
export const ServiceBenefitsSidebar = ({ benefits }: ServiceBenefitsSidebarProps) => {
  return (
    <div className="sticky top-28">
      <div className="bg-navy-wash border border-gray-200 rounded-2xl p-7 lg:p-8">
        <h3 className="text-lg font-bold text-navy mb-6 tracking-tight">Client Benefits</h3>
        {benefits && benefits.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-2"></span>
                <span className="text-navy/85 text-[15px] font-medium leading-snug">{benefit}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">Benefits information is being compiled.</p>
        )}
        <div className="mt-8 pt-6 border-t border-gray-300/70">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">Need a custom approach?</p>
          <Link
            to="/"
            className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm flex items-center justify-center gap-2 px-5 py-3 rounded-xl shadow-sm shadow-orange-500/20 transition-all active:scale-[0.98] group/link"
          >
            Contact Solutions Architect
            <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
