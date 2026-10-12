import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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
      <div className="bg-[#F5F6F8] border border-gray-200 rounded-2xl p-7 lg:p-8">
        <h3 className="text-lg font-bold text-[#101D36] mb-6 tracking-tight">Client Benefits</h3>

        {benefits && benefits.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={19} className="text-[#ff6b00] shrink-0 mt-0.5" />
                <span className="text-[#101D36]/85 text-[15px] font-medium leading-snug">{benefit}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">Benefits information is being compiled.</p>
        )}

        <div className="mt-8 pt-6 border-t border-gray-300/70">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">Need a custom approach?</p>
          <Link to="/" className="text-[#101D36] font-semibold text-sm flex items-center gap-1.5 hover:text-[#ff6b00] transition-colors group/link">
            Contact Solutions Architect
            <ArrowRight size={15} className="group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
