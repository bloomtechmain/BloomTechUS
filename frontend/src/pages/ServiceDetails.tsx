import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { getServiceBySlug, ServiceItem } from '../data/servicesData';
import { getServiceConfig } from '../config/serviceConfig';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getSEOConfig } from '../utils/seoConfig';
import {
  ServiceBreadcrumb,
  ServiceTagline,
  ServiceCTA,
  ServiceHeroImage,
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

// Lazy load the modal
const ExpertFormModal = lazy(() => import('../components/ExpertFormModal'));

// Note: Additional custom service sections can be extracted following the NetworkInfrastructureContent pattern
// - ManagedAVServicesContent.tsx
// - etc.

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (serviceId) {
      const foundService = getServiceBySlug(serviceId);
      setService(foundService || null);
    }
  }, [serviceId]);

  // Service not found page
  if (!service) {
    return (
      <div className="min-h-screen bg-[#101D36] flex flex-col items-center justify-center pt-24 px-6">
        <h1 className="text-4xl font-black text-white mb-4">Service Not Found</h1>
        <p className="text-white/70 mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="flex items-center gap-2 bg-[#ff6b00] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#e65c00] transition-colors shadow-lg">
          <ArrowLeft size={18} /> Return Home
        </Link>
      </div>
    );
  }

  // Get service configuration
  const config = getServiceConfig(service.slug);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#ff6b00] selection:text-white">
      <SEO
        config={getSEOConfig('service', service.slug)}
        breadcrumbs={[
          { name: 'Home', url: 'https://bloomtechusa.com' },
          { name: 'Services', url: 'https://bloomtechusa.com/#services' },
          { name: service.name, url: `https://bloomtechusa.com/services/${service.slug}` }
        ]}
      />

      <Navbar />

      {/* Hero Section — contained dark band, not the whole page */}
      <section className="relative bg-[#101D36] pt-36 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        {/* Single restrained accent glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#ff6b00]/10 blur-[160px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start relative z-10 lg:col-span-7"
            >
              <ServiceBreadcrumb serviceName={service.name} />

              {config.tagline && (
                <ServiceTagline icon={config.tagline.icon} text={config.tagline.text} />
              )}

              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-6 max-w-2xl">
                {config.heroTitle || service.name}
              </h1>

              <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl mb-10">
                {config.heroDescription || service.desc}
              </p>

              <ServiceCTA
                primaryButton={{
                  text: config.primaryCTA.text,
                  icon: config.primaryCTA.icon,
                  onClick: () => setIsModalOpen(true)
                }}
                secondaryButton={{
                  text: config.secondaryCTA.text,
                  icon: config.primaryCTA.icon
                }}
              />
            </motion.div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5">
              <ServiceHeroImage imageUrl={service.imageUrl} serviceName={service.name} />
            </div>
          </div>
        </div>
      </section>

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
