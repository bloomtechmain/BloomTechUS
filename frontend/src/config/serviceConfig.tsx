import { LucideIcon, Zap, Shield, Cpu, Cloud, Monitor, Bot, Sparkles, Package, ShieldAlert, Database, Truck, Search, Activity, Rocket, BrainCircuit, Layers, PenTool } from 'lucide-react';

/**
 * Service Configuration
 * Centralized configuration for service-specific content
 */

export interface ServiceConfig {
  tagline?: {
    icon: LucideIcon;
    text: string;
  };
  heroTitle: string;
  heroDescription: string;
  primaryCTA: {
    text: string;
    icon: LucideIcon;
  };
  secondaryCTA: {
    text: string;
  };
}

export const serviceConfigs: Record<string, ServiceConfig> = {
  'it-network-infrastructure': {
    tagline: {
      icon: Zap,
      text: 'The Vision'
    },
    heroTitle: 'Future-Proof Infrastructure. Engineered for Performance.',
    heroDescription: 'We design, deploy, and manage resilient IT networks that serve as the backbone of your business. From high-density local networks to global hybrid-cloud architectures, we build for the speed of tomorrow.',
    primaryCTA: {
      text: 'Get a Free Infrastructure Audit',
      icon: Zap
    },
    secondaryCTA: {
      text: 'View Our Tech Stack'
    }
  },
  'managed-av-services': {
    tagline: {
      icon: Monitor,
      text: 'Precision Communication'
    },
    heroTitle: 'Immersive AV. Seamless Collaboration. Engineering the Experience.',
    heroDescription: 'Beyond the screen and the speaker, we design high-impact audiovisual environments. From executive boardrooms to enterprise-wide live events, we blend studio-grade audio precision with world-class video infrastructure.',
    primaryCTA: {
      text: 'Schedule a Site Survey',
      icon: Monitor
    },
    secondaryCTA: {
      text: 'Explore Collaboration Solutions'
    }
  },
  'asset-lifecycle-management': {
    tagline: {
      icon: Package,
      text: 'Strategic Control'
    },
    heroTitle: 'Maximize Value. Minimize Risk. Master Your IT Lifecycle.',
    heroDescription: 'From initial procurement to secure certified destruction, we manage every stage of your hardware and software journey. Stop losing track of your investments and start optimizing your ROI.',
    primaryCTA: {
      text: 'Request an Asset Audit',
      icon: Package
    },
    secondaryCTA: {
      text: 'View Compliance Frameworks'
    }
  },
  'ai-custom-development-automation': {
    tagline: {
      icon: Sparkles,
      text: 'Intelligence in Motion'
    },
    heroTitle: 'Bespoke AI Solutions. Automate the Mundane. Command Your Data.',
    heroDescription: 'We bridge the gap between raw data and actionable intelligence. From custom LLM implementations to automated data pipelines, we build AI tools that reclaim your time and turn "noise" into insight.',
    primaryCTA: {
      text: 'Book an AI Strategy Session',
      icon: Bot
    },
    secondaryCTA: {
      text: 'Explore Automation Use Cases'
    }
  },
  'ai-machine-learning': {
    tagline: {
      icon: BrainCircuit,
      text: 'Agentic Intelligence. Domain-Specific Precision.'
    },
    heroTitle: 'Custom AI & Machine Learning. Built for Your Business Logic.',
    heroDescription: 'We bridge the gap between raw data and actionable intelligence. From custom LLM implementations to automated data pipelines, we build AI tools that reclaim your time and turn "noise" into insight.',
    primaryCTA: {
      text: 'Book an AI Strategy Session',
      icon: BrainCircuit
    },
    secondaryCTA: {
      text: 'Explore AI Use Cases'
    }
  },
  'custom-crm-solutions': {
    tagline: {
      icon: Layers,
      text: 'Total Operational Control'
    },
    heroTitle: 'Unified Systems. Unlimited Growth. Custom CRM & ERP Solutions.',
    heroDescription: 'Stop fighting your software and start fueling your business. We build bespoke CRM and ERP platforms designed to unify your data, automate your workflows, and provide a single source of truth for your entire operation.',
    primaryCTA: {
      text: 'Talk to an Expert',
      icon: Zap
    },
    secondaryCTA: {
      text: 'View Case Studies'
    }
  },
  'custom-server-design-deployment': {
    heroTitle: 'Purpose-Built Servers. Enterprise-Grade Performance.',
    heroDescription: 'Stop overpaying for generic cloud instances and under-powered workstations. We design, build, and deploy high-density server solutions—from AMD EPYC virtualization clusters to high-VRAM GPU nodes—engineered for your specific workload.',
    primaryCTA: {
      text: 'Build Your Custom Spec',
      icon: Cpu
    },
    secondaryCTA: {
      text: 'Consult an Infrastructure Engineer'
    }
  },
  'online-marketing-services': {
    heroTitle: 'Data-Driven Visibility. Performance-Led Growth.',
    heroDescription: 'We move beyond "likes" and "impressions" to deliver measurable ROI. By combining high-level technical SEO with aggressive digital marketing strategies, we ensure your business don\'t just rank—it dominates.',
    primaryCTA: {
      text: 'Get a Free SEO Audit',
      icon: Search
    },
    secondaryCTA: {
      text: 'View Strategy Framework'
    }
  },
  'professional-it-consulting': {
    tagline: {
      icon: Shield,
      text: 'Elite Strategy & Execution'
    },
    heroTitle: 'Strategic Advisory. Technical Precision. Global Perspective.',
    heroDescription: 'We provide high-level consultancy and specialized professional services for organizations that demand absolute integrity. From IT auditing and risk mitigation to international business operations, we bridge the gap between complex strategy and flawless execution.',
    primaryCTA: {
      text: 'Consult with an Expert',
      icon: Zap
    },
    secondaryCTA: {
      text: 'View Service Frameworks'
    }
  },
  'security-data-protection': {
    tagline: {
      icon: ShieldAlert,
      text: 'Absolute Resilience'
    },
    heroTitle: 'Zero Trust. Total Integrity. CISA-Certified Security.',
    heroDescription: 'In an era of evolving threats, "good enough" security is a liability. We design multi-layered defense architectures that protect your data, ensure your compliance, and guarantee your business continuity—no matter what.',
    primaryCTA: {
      text: 'Request a Security Audit',
      icon: ShieldAlert
    },
    secondaryCTA: {
      text: 'View Our Compliance Framework'
    }
  },
  'cloud-hosting-deployment': {
    tagline: {
      icon: Cloud,
      text: 'Scalable. Secure. Seamless.'
    },
    heroTitle: 'Enterprise Cloud Hosting. High-Performance Deployment.',
    heroDescription: 'Stop worrying about server maintenance and start focusing on growth. We design and manage high-availability cloud environments and automated deployment pipelines that ensure your applications are always fast, always online, and always secure.',
    primaryCTA: {
      text: 'Get a Hosting Audit',
      icon: Activity
    },
    secondaryCTA: {
      text: 'View Deployment Frameworks'
    }
  },
  'custom-websites-design': {
    tagline: {
      icon: PenTool,
      text: 'Conversion-First Design'
    },
    heroTitle: 'Bespoke Digital Experiences. Engineered to Convert.',
    heroDescription: "We don't just build websites; we build high-performance business tools. From lightning-fast architecture to immersive UI/UX, we create digital storefronts and corporate portals that reflect the prestige of your brand.",
    primaryCTA: {
      text: 'Start Your Project',
      icon: Rocket
    },
    secondaryCTA: {
      text: 'View Our Portfolio'
    }
  },
  'custom-nas-storage': {
    heroTitle: 'Beyond the Cloud. Enterprise-Grade Custom NAS Solutions.',
    heroDescription: 'Stop renting space for your most valuable assets. We design and deploy high-performance Network Attached Storage systems that offer lightning-fast local speeds, impenetrable security, and zero monthly subscription fees.',
    primaryCTA: {
      text: 'Build Your Storage Spec',
      icon: Database
    },
    secondaryCTA: {
      text: 'Schedule a Data Consultation'
    }
  },
  'rack-and-roll-services': {
    tagline: {
      icon: Truck,
      text: 'Turnkey Deployment'
    },
    heroTitle: 'From Dock to First Ping. Professional Server Deployment.',
    heroDescription: 'We handle the complete physical and logical integration of your server infrastructure. From receiving equipment at the dock to the moment the first ping is sent, our team ensures precision deployment, professional cabling, and optimized performance for your mission-critical data center operations.',
    primaryCTA: {
      text: 'Request Deployment Quote',
      icon: Truck
    },
    secondaryCTA: {
      text: 'View Deployment Options'
    }
  },
  'custom-ai-hardware': {
    tagline: {
      icon: Cpu,
      text: 'Cloud Repatriation. On-Premise Power.'
    },
    heroTitle: 'Own Your AI Infrastructure. Eliminate Cloud Lock-In.',
    heroDescription: 'For organizations with strict data privacy requirements or intensive compute needs, the public cloud isn\'t always the answer. We design and build purpose-built AI hardware—from high-VRAM GPU nodes to AMD EPYC clusters—engineered to run your models locally with zero per-token costs.',
    primaryCTA: {
      text: 'Calculate Your Cloud Savings',
      icon: Cpu
    },
    secondaryCTA: {
      text: 'Explore AI Hardware Solutions'
    }
  }
};

/**
 * Get service configuration by slug
 * Returns default configuration if service not found
 */
export const getServiceConfig = (slug: string): ServiceConfig => {
  return serviceConfigs[slug] || {
    heroTitle: '',
    heroDescription: '',
    primaryCTA: {
      text: 'Talk to an Expert',
      icon: Zap
    },
    secondaryCTA: {
      text: 'View Case Studies'
    }
  };
};
