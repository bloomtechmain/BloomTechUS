import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * ServiceBreadcrumb Component
 * Navigation breadcrumb for service detail pages
 */
interface ServiceBreadcrumbProps {
  serviceName: string;
}

export const ServiceBreadcrumb = ({ serviceName }: ServiceBreadcrumbProps) => {
  return (
    <div className="flex items-center gap-2 text-[13px] font-medium text-white/50 mb-8">
      <Link to="/" className="hover:text-white transition-colors">
        Home
      </Link>
      <ChevronRight size={13} className="text-white/25" />
      <span className="hover:text-white transition-colors">Services</span>
      <ChevronRight size={13} className="text-white/25" />
      <span className="truncate max-w-[160px] sm:max-w-none text-white/80">{serviceName}</span>
    </div>
  );
};
