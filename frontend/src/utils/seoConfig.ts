// SEO Configuration for all pages
// This centralizes meta tags, Open Graph data, and schema markup

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  schema?: any;
}

const baseUrl = 'https://bloomtechusa.com';
const defaultOGImage = `${baseUrl}/bloomtech-logo.png`;

// Social Media URLs
export const socialMedia = {
  facebook: 'https://www.facebook.com/profile.php?id=61563215399815',
  twitter: 'https://x.com/BloomtechU8895',
  linkedin: 'https://linkedin.com/company/bloomtech-usa',
  instagram: 'https://www.instagram.com/bloomtech_usa',
  whatsapp: '17373298158', // Format for WhatsApp link
  phone: '+1 737 329 8158',
  email: 'info@bloomtechusa.com'
};

// Organization Schema (used globally)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BloomTechUSA',
  alternateName: 'BloomTech Corporation',
  url: baseUrl,
  logo: `${baseUrl}/bloomtech-logo.png`,
  description: 'Enterprise IT Solutions, AI Development, Cloud Infrastructure, and Custom Server Design',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11801 Domain Blvd',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '78758',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: socialMedia.phone,
    contactType: 'Customer Service',
    areaServed: 'US',
    availableLanguage: 'English'
  },
  sameAs: [
    socialMedia.facebook,
    socialMedia.twitter,
    socialMedia.linkedin,
    socialMedia.instagram
  ]
};

// Local Business Schema
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BloomTechUSA',
  image: `${baseUrl}/bloomtech-logo.png`,
  '@id': baseUrl,
  url: baseUrl,
  telephone: socialMedia.phone,
  priceRange: '$$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11801 Domain Blvd',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '78758',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.4011,
    longitude: -97.7261
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00'
  },
  sameAs: [
    socialMedia.facebook,
    socialMedia.twitter,
    socialMedia.linkedin,
    socialMedia.instagram
  ]
};

// SEO Configurations for each page
export const seoConfigs: Record<string, SEOConfig> = {
  home: {
    title: 'BloomTechUSA - Enterprise IT, AI & Cloud Solutions',
    description: 'BloomTechUSA delivers enterprise IT solutions, custom AI development, cloud infrastructure, and high-performance server design. CISA-certified experts providing bespoke technology solutions for businesses.',
    keywords: 'enterprise IT solutions, AI development, cloud infrastructure, custom server design, machine learning, IT consulting, cybersecurity, Austin TX',
    canonical: baseUrl,
    ogImage: defaultOGImage,
    ogType: 'website',
    schema: organizationSchema
  },
  company: {
    title: 'About BloomTechUSA - CISA-Certified IT & AI Experts',
    description: 'Learn about BloomTechUSA\'s mission to deliver enterprise-grade IT solutions, custom AI development, and cloud infrastructure. CISA-certified professionals with expertise in cybersecurity and compliance.',
    keywords: 'about bloomtech, IT company Austin, CISA certified, enterprise technology, company profile',
    canonical: `${baseUrl}/company`,
    ogImage: defaultOGImage,
    ogType: 'website'
  },
  contact: {
    title: 'Contact BloomTechUSA - Schedule Your IT Consultation',
    description: 'Get in touch with BloomTechUSA for enterprise IT solutions, AI development, and cloud infrastructure. Located in Austin, TX. Call (737) 329-8158 or schedule a consultation today.',
    keywords: 'contact bloomtech, IT consultation, Austin IT company, enterprise technology support',
    canonical: `${baseUrl}/contact`,
    ogImage: defaultOGImage,
    ogType: 'website',
    schema: localBusinessSchema
  },
  login: {
    title: 'Client Login - BloomTechUSA Portal Access',
    description: 'Access your BloomTechUSA client portal for project management, service requests, and account information.',
    canonical: `${baseUrl}/login`,
    ogImage: defaultOGImage
  },
  register: {
    title: 'Register - Create Your BloomTechUSA Account',
    description: 'Create your BloomTechUSA account to access our client portal, request services, and manage your IT projects.',
    canonical: `${baseUrl}/register`,
    ogImage: defaultOGImage
  },
  dashboard: {
    title: 'Dashboard - BloomTechUSA Client Portal',
    description: 'Manage your BloomTechUSA services, view projects, and access expert support through your client dashboard.',
    canonical: `${baseUrl}/dashboard`,
    ogImage: defaultOGImage
  }
};

// Service-specific SEO configurations
export const serviceSEO: Record<string, SEOConfig> = {
  'ai-machine-learning': {
    title: 'Custom AI & Machine Learning Solutions - BloomTechUSA',
    description: 'Enterprise AI development and machine learning solutions. Custom AI agents, on-premise AI hosting, document intelligence, and automation for business operations. Transform data into actionable intelligence.',
    keywords: 'custom AI development, machine learning, AI agents, on-premise AI, document intelligence, AI automation',
    canonical: `${baseUrl}/services/ai-machine-learning`,
    ogImage: `${baseUrl}/images/Custom_AI_Development.jpg`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'AI & Machine Learning Solutions',
      provider: organizationSchema,
      areaServed: 'US',
      description: 'Custom AI development, machine learning solutions, and intelligent automation for enterprise businesses.'
    }
  },
  'ai-custom-development-automation': {
    title: 'AI Custom Development & Automation Services - BloomTechUSA',
    description: 'Bespoke AI development for business automation. Custom intelligent agents, workflow automation, and AI-powered process optimization to multiply your workforce effectiveness.',
    keywords: 'AI automation, custom AI development, intelligent agents, business automation, workflow optimization',
    canonical: `${baseUrl}/services/ai-custom-development-automation`,
    ogImage: `${baseUrl}/images/Custom_AI_Development.jpg`
  },
  'custom-ai-hardware': {
    title: 'Custom AI Hardware & High-Performance Computing - BloomTechUSA',
    description: 'Purpose-built AI hardware solutions. High-density GPU servers, custom workstations for machine learning, and on-premise AI infrastructure for secure, high-performance computing.',
    keywords: 'AI hardware, GPU servers, machine learning hardware, custom AI workstations, high-performance computing',
    canonical: `${baseUrl}/services/custom-ai-hardware`,
    ogImage: `${baseUrl}/images/AI_Hardware.jpg`
  },
  'it-network-infrastructure': {
    title: 'Enterprise IT Network & Infrastructure Solutions - BloomTechUSA',
    description: 'Enterprise-grade network infrastructure design and deployment. L3 switching, SD-WAN, high-availability networks, and future-proof IT infrastructure solutions.',
    keywords: 'enterprise networking, IT infrastructure, L3 switching, SD-WAN, network design, high-availability',
    canonical: `${baseUrl}/services/it-network-infrastructure`,
    ogImage: `${baseUrl}/images/Enterprise_Network.jpg`
  },
  'custom-server-design-deployment': {
    title: 'Custom Server Design & Deployment Services - BloomTechUSA',
    description: 'Purpose-built server solutions optimized for virtualization and AI workloads. High-density server design, AMD EPYC platforms, and enterprise deployment services.',
    keywords: 'custom servers, server design, AMD EPYC, virtualization, high-density servers, server deployment',
    canonical: `${baseUrl}/services/custom-server-design-deployment`,
    ogImage: `${baseUrl}/images/IT_network_and_Inferstructure.jpg`
  },
  'custom-nas-storage': {
    title: 'Custom NAS Storage Solutions with ZFS - BloomTechUSA',
    description: 'Enterprise-grade network attached storage with ZFS integration. Custom NAS design for data integrity, high-availability storage, and scalable file systems.',
    keywords: 'custom NAS, ZFS storage, network storage, enterprise NAS, data integrity, file server',
    canonical: `${baseUrl}/services/custom-nas-storage`,
    ogImage: `${baseUrl}/images/Custom_Nas_Design.jpg`
  },
  'rack-and-roll-services': {
    title: 'Rack & Roll Server Deployment Services - BloomTechUSA',
    description: 'Turnkey server room deployment and integration. High-density rack design, cable management, cooling solutions, and complete data center setup services.',
    keywords: 'server deployment, rack installation, data center setup, server room design, rack and roll',
    canonical: `${baseUrl}/services/rack-and-roll-services`,
    ogImage: `${baseUrl}/images/rack_and_roll.jpg`
  },
  'cloud-hosting-deployment': {
    title: 'Cloud Hosting & Application Deployment - BloomTechUSA',
    description: 'High-performance cloud hosting and automated deployment. CI/CD pipelines, container orchestration, managed cloud infrastructure, and scalable application hosting.',
    keywords: 'cloud hosting, application deployment, CI/CD, container orchestration, managed hosting, DevOps',
    canonical: `${baseUrl}/services/cloud-hosting-deployment`,
    ogImage: `${baseUrl}/images/Cloud_application_Deployment.jpg`
  },
  'custom-crm-erp-solutions': {
    title: 'Custom CRM & ERP Solutions - BloomTechUSA',
    description: 'Bespoke CRM and ERP platforms for unified business operations. Custom workflow automation, data integration, and single source of truth for enterprise resource planning.',
    keywords: 'custom CRM, custom ERP, business automation, workflow automation, enterprise software',
    canonical: `${baseUrl}/services/custom-crm-erp-solutions`,
    ogImage: `${baseUrl}/images/CRM_&_ERP.jpg`
  },
  'asset-lifecycle-management': {
    title: 'IT Asset Lifecycle Management Services - BloomTechUSA',
    description: 'Strategic IT asset management from procurement to certified destruction. Complete lifecycle control, compliance tracking, and IT investment optimization.',
    keywords: 'asset lifecycle management, IT asset management, procurement, IT compliance, asset tracking',
    canonical: `${baseUrl}/services/asset-lifecycle-management`,
    ogImage: `${baseUrl}/images/Asset_Life_cycle.png`
  },
  'professional-it-consulting': {
    title: 'Professional IT Consulting & Strategic Advisory - BloomTechUSA',
    description: 'CISA-certified IT consulting services. Strategic advisory, IT governance, risk management, fractional CTO/CISO services, and compliance consulting.',
    keywords: 'IT consulting, CISA certified, IT governance, risk management, fractional CTO, CISO services',
    canonical: `${baseUrl}/services/professional-it-consulting`,
    ogImage: `${baseUrl}/images/IT_Consolting.jpg`
  },
  'security-data-protection': {
    title: 'Cybersecurity & Data Protection Services - BloomTechUSA',
    description: 'Multi-layered security architecture and data protection. Zero Trust security, EDR implementation, perimeter hardening, and compliance with SOC2, HIPAA, PCI-DSS, and NIST.',
    keywords: 'cybersecurity, data protection, Zero Trust, EDR, SOC2, HIPAA, PCI-DSS, security consulting',
    canonical: `${baseUrl}/services/security-data-protection`,
    ogImage: `${baseUrl}/images/IT_Consolting.jpg`
  },
  'av-smart-workspaces': {
    title: 'AV & Smart Workspace Solutions - BloomTechUSA',
    description: 'Immersive audiovisual environments and smart workspace technology. Executive boardrooms, collaboration spaces, and enterprise AV integration.',
    keywords: 'AV integration, smart workspaces, boardroom technology, collaboration spaces, audiovisual',
    canonical: `${baseUrl}/services/av-smart-workspaces`,
    ogImage: `${baseUrl}/images/rack_and_roll.jpg`
  },
  'custom-websites-design': {
    title: 'Custom Website Design & Development - BloomTechUSA',
    description: 'Conversion-focused website design and development. Clean, optimized code, responsive design, and high-performance web applications built for business growth.',
    keywords: 'website design, web development, custom websites, responsive design, web applications',
    canonical: `${baseUrl}/services/custom-websites-design`,
    ogImage: `${baseUrl}/images/digital-marketing.jpg`
  },
  'online-marketing-services': {
    title: 'SEO & Online Marketing Services - BloomTechUSA',
    description: 'Data-driven digital marketing and SEO services. Technical SEO, AI-powered content strategy, and online visibility optimization for business growth.',
    keywords: 'SEO services, online marketing, digital marketing, content strategy, search optimization',
    canonical: `${baseUrl}/services/online-marketing-services`,
    ogImage: `${baseUrl}/images/digital-marketing.jpg`
  }
};

// Helper function to get SEO config
export const getSEOConfig = (page: string, serviceId?: string): SEOConfig => {
  if (serviceId && serviceSEO[serviceId]) {
    return serviceSEO[serviceId];
  }
  return seoConfigs[page] || seoConfigs.home;
};
