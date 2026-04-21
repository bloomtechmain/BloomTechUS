export interface ServiceItem {
  name: string;
  desc: string;
  slug: string;
  longDesc?: string;
  features?: string[];
  benefits?: string[];
  imageUrl?: string;
}

export interface MegaMenuColumn {
  title: string;
  items: ServiceItem[];
  secondarySection?: {
    title: string;
    items: ServiceItem[];
  };
}

export const megaMenuData: MegaMenuColumn[] = [
  {
    title: 'Consulting & Custom Software Solutions',
    items: [
      { 
        name: 'Professional IT Consulting', 
        desc: 'Strategic advisory and technical precision for global business excellence.',
        slug: 'professional-it-consulting',
        longDesc: 'In an era where technology is the primary driver of competitive advantage, BloomTech Corporation provides high-impact IT consulting and professional services designed to align your digital infrastructure with your long-term business goals. We don\'t just recommend technology; we engineer success.',
        features: [
          'Discovery & Assessment: Audit your tech stack and identify technical debt',
          'Strategic Roadmap: Design scalable blueprints for high-impact initiatives',
          'Execution & Integration: Implement custom solutions with seamless interoperability',
          'Continuous Optimization: Monitor and refine as your business evolves',
          'Digital Transformation Consulting',
          'Cloud & Infrastructure Services',
          'Data & Analytics Advisory',
          'IT Strategy & Governance (vCISO/vCTO Services)'
        ],
        benefits: [
          'Certified Expertise: CISA, AWS, Salesforce, and PMP certified consultants',
          'Industry Agility: Deep experience across Logistics, Finance, and Enterprise Tech',
          'Outcome-Based Delivery: Focus on KPIs that reduce downtime and lower TCO',
          'Strategic Technology Leadership without full-time overhead'
        ],
        imageUrl: '/images/IT_Consolting.jpg'
      },
      { 
        name: 'Custom CRM & ERP Solutions', 
        desc: 'Integrated enterprise planning and client lifecycle management.',
        slug: 'custom-crm-erp-solutions',
        longDesc: 'Our unified CRM and ERP systems are built from the ground up to integrate all facets of your operation—including sales pipelines, marketing funnels, supply chain tracking, human resources, and financial management into a single source of truth.',
        features: ['Lead & Sales Pipeline Tracking', 'Financial & HR Management', 'Supply Chain & Inventory Integration', 'Automated Marketing & Reporting'],
        benefits: ['Centralized Enterprise Data', 'improved Customer Retention', 'Streamlined Multi-departmental Workflows'],
        imageUrl: '/images/CRM_&_ERP.jpg'
      },
      { 
        name: 'Security & Data Protection', 
        desc: 'Shielding your IP from modern threats.',
        slug: 'security-data-protection',
        longDesc: 'Comprehensive cybersecurity frameworks designed to detect, prevent, and respond to cyber threats while ensuring compliance with global data protection regulations.',
        features: ['Next-Gen Firewalls', 'Zero Trust Network Architecture', 'Ransomware Protection', 'Employee Security Training'],
        benefits: ['Protection Against Data Breaches', 'Regulatory Compliance', 'Safeguarded Corporate Reputation'],
        imageUrl: '/images/security-hero.png'
      },
      { 
        name: 'Asset Lifecycle Management', 
        desc: 'From procurement to secure decommissioning.',
        slug: 'asset-lifecycle-management',
        longDesc: 'End-to-end management of your corporate hardware estate. We handle the procurement, staging, deployment, tracking, and eventual secure, eco-friendly destruction of IT assets.',
        features: ['Automated Inventory Tracking', 'Standardized Procurement', 'Secure Hard Drive Shredding', 'Eco-friendly Recycling'],
        benefits: ['Optimized Hardware Spend', 'Data Security at EOL', 'Simplified Onboarding Processing'],
        imageUrl: '/images/Asset_Life_cycle.png'
      },
    ]
  },
  {
    title: 'Infrastructure & Data Centres',
    items: [
      { 
        name: 'IT Network & Infrastructure', 
        desc: 'Building the backbone of your digital empire.',
        slug: 'it-network-infrastructure',
        longDesc: 'In the modern enterprise, a robust network is the backbone of every digital operation. BloomTech Corporation specializes in designing, deploying, and managing resilient network architectures that ensure high availability, ironclad security, and seamless scalability. Our engineering team is CompTIA Network+ Certified, ensuring that your infrastructure is built on industry-standard best practices and managed by professionals with a deep understanding of core networking technologies.',
        features: [
          'Enterprise Architecture Design: LAN/WAN, SD-WAN, VLAN Segmentation',
          'Wireless Networking & Mobility: Heat Mapping, Secure Guest Access, Mesh Networks',
          'Network Security & Perimeter Defense: NGFW, VPN/Remote Access, IDS/IPS',
          'Infrastructure Hardware Management: Switching/Routing, Structured Cabling, Rack Design'
        ],
        benefits: [
          'CompTIA Network+ Certified Engineering Team',
          'Hardware Vendor Neutrality (Cisco, Juniper, Ubiquiti)',
          'Security-First Architecture & Configuration',
          'Systematic Troubleshooting & Rapid Issue Resolution'
        ],
        imageUrl: '/images/IT_network_and_Inferstructure.jpg'
      },
      { 
        name: 'Enterprise Networking', 
        desc: 'High-speed, redundant connectivity solutions.',
        slug: 'enterprise-networking',
        longDesc: 'Deploy secure, lightning-fast enterprise networking solutions such as SD-WAN, multi-site VPNs, and highly redundant routing designed for maximum uptime and reliability.',
        features: ['SD-WAN Implementation', 'Redundant Connectivity', 'Bandwidth Optimization', 'Secure Multi-site VPNs'],
        benefits: ['Zero-Downtime Reliability', 'Secure Data Transmission', 'Optimized Cloud Application Performance'],
        imageUrl: '/images/Enterprise_Network.jpg'
      },
      { 
        name: 'Custom Server Design & Deployment', 
        desc: 'Workstation-grade hardware for any task.',
        slug: 'custom-server-design-deployment',
        longDesc: 'Purpose-built server configurations optimized specifically for your workload, whether it be intensive AI rendering, database hosting, or high-traffic web applications.',
        features: ['Workload Profiling', 'Custom Component Selection', 'Stress Testing & QA', 'On-site Rack Assembly'],
        benefits: ['Maximum Price-to-Performance Ratio', 'Workload-specific Optimization', 'Extended Hardware Lifespan'],
        imageUrl: '/images/dc-hero.png'
      },
      { 
        name: 'Custom NAS (Network Attached Storage)', 
        desc: 'Secure, private, and tiered storage.',
        slug: 'custom-nas-storage',
        longDesc: 'Deploy enterprise-grade Network Attached Storage solutions featuring advanced RAID configurations, automated backups, and tiered storage to ensure data integrity and instant accessibility.',
        features: ['High-capacity Storage Arrays', 'Automated Snapshot Backups', 'SSD Caching Layers', 'Data Encryption at Rest'],
        benefits: ['Immutable Data Protection', 'Blazing Fast File Retrieval', 'Scalable Storage Capacity'],
        imageUrl: '/images/Custom_Nas_Design.jpg'
      },
      { 
        name: 'Rack & Roll Services', 
        desc: 'Turnkey server room deployment from dock to first ping.',
        slug: 'rack-and-roll-services',
        longDesc: 'Efficiently scaling your data center or on-site server room requires more than just unboxing hardware. BloomTech Corporation provides comprehensive Rack & Roll services—a turnkey solution for businesses that need high-density server deployments executed with precision, speed, and professional organization. From the moment your equipment arrives at the dock to the second the first "ping" is sent, our team handles the physical and logical integration of your infrastructure.',
        features: [
          'Logistics & Receiving: Inspection, inventory verification, and asset tagging',
          'Precision Rack Integration: Strategic U-space placement, rail kit installation, PDU/UPS integration',
          'Professional Structured Cabling: Color-coded patching, Velcro management, end-to-end labeling',
          'Basic Configuration & Burn-In: POST verification, firmware updates, IPMI/OOB management setup'
        ],
        benefits: [
          'Optimized Airflow (Hot/Cold Aisle) adhering to ASHRAE standards',
          'AMD EPYC & High-Density Expertise with specialized cooling solutions',
          'Network+ Certified Integration meeting Cat6 and Fiber Optic standards',
          'Reduced Downtime with deployment time reduced by up to 40%'
        ],
        imageUrl: '/images/rack_and_roll.jpg'
      },
      { 
        name: 'Cloud Hosting & Application Deployment', 
        desc: 'Scalable, performant, and secure cloud ecosystems.',
        slug: 'cloud-hosting-deployment',
        longDesc: 'We design and manage high-performance cloud environments tailored for modern applications. From serverless architectures to containerized deployments (Docker/Kubernetes), we ensure your applications are always available and blazing fast.',
        features: ['Cloud Architecture Design', 'Containerization & Orchestration', 'CI/CD Pipeline Automation', 'Serverless Implementations'],
        benefits: ['Instant Scalability', 'High Availability & Failover', 'Reduced Infrastructure Overhead'],
        imageUrl: '/images/Cloud_application_Deployment.jpg'
      },
    ]
  },
  {
    title: 'AV & Smart Workspaces',
    items: [
      { 
        name: 'AV & Smart Workspaces', 
        desc: 'Transforming workplaces through intelligent audiovisual and collaboration technology.',
        slug: 'av-smart-workspaces',
        longDesc: 'Comprehensive audiovisual and smart workspace solutions that bridge the gap between physical and digital work environments. From immersive meeting experiences to intelligent office automation, we create environments where technology enhances human collaboration.',
        features: [
          'Custom Audio Visual (AV) Setup',
          'Managed AV Services', 
          'Unified Collaboration',
          'Hybrid Workplace Solutions',
          'Smart Workspaces'
        ],
        benefits: [
          'Seamless Remote & In-Office Collaboration',
          'Reduced Energy & Operational Costs',
          'Enhanced Employee Experience',
          'Future-Proof Technology Integration'
        ],
        imageUrl: '/images/av-hero.png'
      },
    ],
    secondarySection: {
      title: 'Online Presence',
      items: [
        { 
          name: 'Custom Website Design', 
          desc: 'Stunning, high-performance digital experiences.',
          slug: 'custom-websites-design',
          longDesc: 'We create bespoke web experiences that combine elite design aesthetics with technical excellence. From conversion-optimized landing pages to complex multi-layered platforms, we build to impress.',
          features: ['UI/UX Design Strategy', 'Performance (Core Web Vitals) Optimization', 'Responsive & Adaptive Layouts', 'SEO-First Architecture'],
          benefits: ['Premium Brand Image', 'Superior User Engagement', 'High Conversion Rates'],
          imageUrl: '/images/graphic-design.jpg'
        },
        { 
          name: 'Online Marketing Services', 
          desc: 'Empowering your brand through data-driven growth.',
          slug: 'online-marketing-services',
          longDesc: 'Data-driven digital marketing campaigns encompassing SEO, SEM, and social media management to maximize your online visibility and lead generation.',
          features: ['Search Engine Optimization (SEO)', 'Pay-Per-Click Campaigns (SEM)', 'Social Media Management', 'Conversion Rate Optimization'],
          benefits: ['Increased Qualified Leads', 'Higher Brand Visibility', 'Measurable ROI on Marketing Spend'],
          imageUrl: '/images/digital-marketing.jpg'
        },
      ]
    }
  },
  {
    title: 'AI Development',
    items: [
      { 
        name: 'AI & Machine Learning (ML)', 
        desc: 'Agentic intelligence and domain-specific precision.',
        slug: 'ai-machine-learning',
        longDesc: 'In 2026, general-purpose AI is a commodity, but Custom AI is a competitive advantage. At BloomTech Corporation, we don\'t just "plug in" chatbots; we architect Agentic AI and domain-specific models designed to live within your unique enterprise ecosystem. Our mission is to help you transition from experimental AI pilots to production-grade intelligence that drives measurable ROI and automates complex, multi-step business workflows.',
        features: [
          'Agentic AI & Autonomous Workflows: Multi-system orchestration and proactive task initiation',
          'Domain-Specific Model Tuning: RAG, Fine-tuning, and Context Engineering',
          'Multi-Modal Intelligence: Vision AI, Audio Analysis, and Fusion Systems',
          'AI Governance Framework: HITL, Model Observability, Bias Testing',
          'Transformer Architecture Implementation: Latest 2026 breakthroughs',
          'Security-First Deployment: On-Premise, Hybrid, or Private Cloud options'
        ],
        benefits: [
          'Proprietary Data Isolation - Your data never leaves your control',
          'Deep Legacy System Integration - Not just API access',
          'Complete IP Ownership - You own the logic layer',
          'Compounding Strategic ROI - Long-term competitive advantage'
        ],
        imageUrl: '/images/ai-hero.png'
      },
      { 
        name: 'AI Custom Development for Automation', 
        desc: 'Smart agent orchestration for your workflows.',
        slug: 'ai-custom-development-automation',
        longDesc: 'Custom-built artificial intelligence agents and automation tools designed specifically to streamline your unique business workflows, reduce manual data entry, and orchestrate complex tasks seamlessly.',
        features: ['Intelligent Robotic Process Automation', 'Custom AI Agents', 'Workflow Orchestration', '24/7 Automated Operations'],
        benefits: ['Significant Cost Reduction', 'Elimination of Human Error', 'Scalable Operations'],
        imageUrl: '/images/Custom_AI_Development.jpg'
      },
      { 
        name: 'Custom AI Hardware', 
        desc: 'Purpose-built infrastructure for AI workloads.',
        slug: 'custom-ai-hardware',
        longDesc: 'For organizations with strict data privacy requirements or intensive compute needs, the public cloud isn\'t always the answer. BloomTech Corporation specializes in "Cloud Repatriation," helping you move your most intensive AI workloads to custom, on-premise hardware to reduce monthly OPEX by up to 60% while increasing performance. We design and build purpose-built server solutions—from high-VRAM GPU nodes to AMD EPYC virtualization clusters—engineered specifically for your local AI model requirements.',
        features: [
          'High-Density Compute Clusters: AMD EPYC 8004/9004 Series with massive ECC DDR5 memory pools',
          'GPU-Accelerated Nodes: Multi-GPU configurations with custom thermal engineering',
          'Enterprise NVMe Storage: Samsung PM Series arrays for high-speed IOPS',
          'Redundant Power Systems: Titanium-rated 1+1 PSUs for maximum uptime',
          'Remote Management: Dedicated IPMI/BMC hardware for BIOS-level control',
          'CISA-Certified Security: 72-hour burn-in testing and TPM 2.0 integration'
        ],
        benefits: [
          'Zero Data Leakage - Your proprietary data never leaves your internal network',
          'Low Latency - Instant response times by eliminating cloud round-trips',
          'Cost Predictability - Fixed hardware investment vs. fluctuating per-token costs',
          'Full Hardware Control - Own your compute power and tune every component'
        ],
        imageUrl: '/images/AI_Hardware.jpg'
      },
    ]
  }
];

export const getAllServices = (): ServiceItem[] => {
  return megaMenuData.flatMap(column => {
    const mainItems = column.items;
    const secondaryItems = column.secondarySection?.items || [];
    return [...mainItems, ...secondaryItems];
  });
};

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return getAllServices().find(service => service.slug === slug);
};
