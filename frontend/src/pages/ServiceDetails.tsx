import { useEffect, useState, useMemo, lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getServiceBySlug, type ServiceItem } from '../data/servicesData';
import { getServiceConfig } from '../config/serviceConfig';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getSEOConfig, siteUrl } from '../utils/seoConfig';
import {
  DefaultServiceContent,
  NetworkInfrastructureContent,
  EnterpriseNetworkingContent,
  CustomServerDesignContent,
  CustomNASContent,
  RackAndRollContent,
  CloudHostingContent,
  SmartWorkspacesContent,
  AIMachineLearningContent,
  CustomCRMContent,
  ProfessionalITConsultingContent,
  SecurityDataProtectionContent,
  CustomWebsitesDesignContent,
  OnlineMarketingContent,
  CustomMobileWebAppsContent
} from '../components/service-details';
// Real photography (Unsplash) for each service hero
const servicePhotos: Record<string, { src: string; alt: string }> = {
  'it-network-infrastructure': { src: '/images/services/network.webp', alt: 'Network patch panel with structured cabling' },
  'enterprise-networking': { src: '/images/hero-bg-security.webp', alt: 'Server racks with network cabling' },
  'custom-server-design-deployment': { src: '/images/hero-bg-infra.webp', alt: 'Engineers working in a server room' },
  'custom-nas-storage': { src: '/images/services/nas.webp', alt: 'Enterprise hard drive close-up' },
  'rack-and-roll-services': { src: '/images/services/rack-and-roll.webp', alt: 'Server racks in a data center' },
  'cloud-hosting-deployment': { src: '/images/hero-bg-cloud.webp', alt: 'Laptop showing application code' },
  'av-smart-workspaces': { src: '/images/services/av-room.webp', alt: 'Modern meeting room' },
  'ai-machine-learning': { src: '/images/hero-bg-ai.webp', alt: 'Engineer working at a hardware lab bench' },
  'custom-crm-erp-solutions': { src: '/images/services/crm.webp', alt: 'Team reviewing a business presentation' },
  'professional-it-consulting': { src: '/images/services/consulting.webp', alt: 'Consultants planning at a whiteboard' },
  'security-data-protection': { src: '/images/services/access-control.webp', alt: 'Smart access control on a door' },
  'custom-websites-design': { src: '/images/services/web-design.webp', alt: 'Website design on a desktop monitor' },
  'online-marketing-services': { src: '/images/hero-bg-marketing.webp', alt: 'Analytics dashboard on a laptop' },
  'custom-mobile-web-applications': { src: '/images/services/mobile-web.webp', alt: 'Laptop and phone running a web app' },
  'custom-ai-hardware': { src: '/images/services/ai-hardware.webp', alt: 'GPU accelerator cards' },
};
// Lazy load the modal
const ExpertFormModal = lazy(() => import('../components/ExpertFormModal'));
// Note: Additional custom service sections can be extracted following the NetworkInfrastructureContent pattern
// - ManagedAVServicesContent.tsx
// - etc.
const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  // Computed directly at render time (not in an effect) so this resolves
  // correctly during server-side rendering, not just after client hydration.
  const service = useMemo(() => (serviceId ? getServiceBySlug(serviceId) ?? null : null), [serviceId]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);
  // Service not found page
  if (!service) {
    return (
      <div className="min-h-screen bg-navy flex flex-col items-center justify-center pt-24 px-6">
        <SEO config={{ title: 'Service Not Found - BloomTechUSA', description: 'This service page does not exist or has been moved.' }} noindex />
        <h1 className="text-4xl font-black text-white mb-4">Service Not Found</h1>
        <p className="text-white/70 mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-orange-dark transition-colors shadow-lg">
           Return Home
        </Link>
      </div>
    );
  }
  // Get service configuration
  const config = getServiceConfig(service.slug);
  const heroPhoto = servicePhotos[service.slug] ?? { src: '/images/hero-bg-infra.webp', alt: 'Engineers working in a server room' };
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-orange selection:text-white">
      <SEO
        config={getSEOConfig('service', service.slug)}
        breadcrumbs={[
          { name: 'Home', url: `${siteUrl}/` },
          { name: service.name, url: `${siteUrl}/services/${service.slug}/` }
        ]}
      />
      <Navbar />
      {/* Hero — copy on the left, full-bleed real photo on the right (home page language) */}
      <section className="relative bg-navy overflow-hidden">
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
          <img src={heroPhoto.src} alt={heroPhoto.alt} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-navy to-transparent" />
        </div>
        <div className="relative w-full px-4 sm:px-8 lg:px-12 pt-32 lg:pt-40 pb-16 lg:pb-24 lg:min-h-[680px] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:w-1/2 lg:pr-16 xl:pr-24"
          >
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] font-medium text-white/45 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/25">/</span>
              <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
              <span className="text-white/25">/</span>
              <span className="truncate max-w-[200px] sm:max-w-none text-white/80">{service.name}</span>
            </nav>
            {config.tagline && (
              <p className="text-brand-orange font-bold tracking-widest text-sm uppercase mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-brand-orange" />
                {config.tagline.text}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
              {config.heroTitle || service.name}
            </h1>
            <p className="text-lg xl:text-xl text-white/75 leading-relaxed mb-10 max-w-xl">
              {config.heroDescription || service.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button type="button" onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold whitespace-nowrap transition-colors">
                {config.primaryCTA.text}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#details" className="group inline-flex items-center gap-2 whitespace-nowrap font-bold text-white hover:text-brand-orange transition-colors">
                {config.secondaryCTA.text}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="lg:hidden h-[320px] sm:h-[420px] relative">
          <img src={heroPhoto.src} alt={heroPhoto.alt} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>
      <div id="details" className="scroll-mt-20" />
      {/* Main Content Section */}
      {renderServiceContent(service, () => setIsModalOpen(true))}
      {/* Expert Form Modal */}
      <Suspense fallback={<div />}>
        {isModalOpen && (
          <ExpertFormModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            serviceName={service.name}
            serviceSlug={service.slug}
          />
        )}
      </Suspense>
      <Footer />
    </div>
  );
};
/**
 * Render service-specific content based on slug
 * Custom service sections are extracted to separate component files for better maintainability
 */
function renderServiceContent(service: ServiceItem, onOpenModal: () => void) {
  // Services with extracted custom content components
  switch (service.slug) {
    case 'it-network-infrastructure':
      return <NetworkInfrastructureContent onOpenModal={onOpenModal} />;
    case 'enterprise-networking':
      return <EnterpriseNetworkingContent onOpenModal={onOpenModal} />;
    case 'custom-server-design-deployment':
      return <CustomServerDesignContent onOpenModal={onOpenModal} />;
    case 'custom-nas-storage':
      return <CustomNASContent onOpenModal={onOpenModal} />;
    case 'rack-and-roll-services':
      return <RackAndRollContent onOpenModal={onOpenModal} />;
    case 'cloud-hosting-deployment':
      return <CloudHostingContent onOpenModal={onOpenModal} />;
    case 'av-smart-workspaces':
      return <SmartWorkspacesContent onOpenModal={onOpenModal} />;
    case 'ai-machine-learning':
      return <AIMachineLearningContent onOpenModal={onOpenModal} />;
    case 'custom-crm-erp-solutions':
      return <CustomCRMContent onOpenModal={onOpenModal} />;
    case 'professional-it-consulting':
      return <ProfessionalITConsultingContent onOpenModal={onOpenModal} />;
    case 'security-data-protection':
      return <SecurityDataProtectionContent onOpenModal={onOpenModal} />;
    case 'custom-websites-design':
      return <CustomWebsitesDesignContent onOpenModal={onOpenModal} />;
    case 'online-marketing-services':
      return <OnlineMarketingContent onOpenModal={onOpenModal} />;
    case 'custom-mobile-web-applications':
      return <CustomMobileWebAppsContent onOpenModal={onOpenModal} />;
    // TODO: Extract remaining custom service sections:
    // case 'cloud-hosting-deployment':
    // case 'custom-nas-storage':
    // case 'rack-and-roll-services':
    // case 'custom-ai-hardware':
    default:
      // Services without custom content use the default layout
      return (
        <DefaultServiceContent
          serviceName={service.name}
          longDesc={service.longDesc}
          features={service.features}
          benefits={service.benefits}
        />
      );
  }
}
export default ServiceDetails;
