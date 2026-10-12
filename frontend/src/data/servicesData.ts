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
        name: 'Custom Mobile & Web Applications', 
        desc: 'High-performance, business-centric applications engineered for total operational control.',
        slug: 'custom-mobile-web-applications',
        longDesc: 'At BloomTech Corporation, we bridge the gap between sophisticated technological breakthroughs and the practical, day-to-day requirements of your business. We build high-performance, business-centric applications engineered to reflect your brand\'s prestige and provide total operational control.',
        features: [
          'Tailored Workflows: Systems that mimic your team\'s natural processes',
          'Conversion-First Design: Every pixel engineered for business purpose',
          'Proprietary Logic: You own the logic layer and data',
          'Performance-Driven Engineering: Sub-second load times',
          'Enterprise Ecosystems (CRM & ERP)',
          'High-Performance Commerce & Portals',
          'Intelligent Automation & Proximity',
          'Custom CI/CD Pipelines'
        ],
        benefits: [
          'Eliminate "Excel-and-Email" chaos',
          'No fluctuating per-user licensing fees',
          'Complete IP ownership',
          'Zero-downtime updates',
          'Enterprise-grade infrastructure support',
          'Seamless third-party integrations'
        ],
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
        longDesc: 'Deploy secure, lightning-fast enterprise networking solutions such as SD-WAN, multi-site VPNs, and highly redundant routing designed for maximum uptime and reliability. We connect every office, branch, and remote worker into one resilient, zero-downtime network.',
        features: [
          'SD-WAN & Multi-Site Architecture: Dynamic routing across ISPs and branches',
          'Redundant Routing & Automatic Failover: Dual-WAN and multi-carrier configurations',
          'Secure Multi-Site VPNs: Site-to-site IPsec tunnels and encrypted remote access',
          'Bandwidth Optimization & QoS: Traffic shaping that prioritizes business-critical apps'
        ],
        benefits: ['Zero-Downtime Reliability', 'Secure Data Transmission', 'Optimized Cloud Application Performance', 'Built for Multi-Site Growth'],
        imageUrl: '/images/Enterprise_Network.jpg'
      },
      { 
        name: 'Custom Server Design & Deployment',
        desc: 'Workstation-grade hardware for any task.',
        slug: 'custom-server-design-deployment',
        longDesc: 'Purpose-built server configurations optimized specifically for your workload, whether it be intensive AI rendering, database hosting, virtualization, or high-traffic web applications. Every build is sourced, assembled, stress-tested, and deployed on-site by our team.',
        features: [
          'Workload Profiling: Matching hardware to your actual compute, memory, and storage needs',
          'Custom Component Selection: AMD EPYC/Intel Xeon compute, ECC memory, NVMe/SAS storage',
          'Stress Testing & Burn-In QA: Extended load testing before anything ships',
          'On-Site Rack Assembly & Deployment: Installed, cabled, and configured production-ready'
        ],
        benefits: ['Maximum Price-to-Performance Ratio', 'Workload-specific Optimization', 'Extended Hardware Lifespan', 'Enterprise-Grade Components Only'],
        imageUrl: '/images/dc-hero.png'
      },
      { 
        name: 'Custom NAS (Network Attached Storage)',
        desc: 'Secure, private, and tiered storage.',
        slug: 'custom-nas-storage',
        longDesc: 'Deploy enterprise-grade Network Attached Storage solutions featuring advanced RAID configurations, automated backups, and tiered storage to ensure data integrity and instant accessibility — on platforms like Synology, QNAP, and TrueNAS.',
        features: [
          'High-Capacity Storage Arrays: RAID 5/6/10 or ZFS pools sized to your data',
          'Automated Snapshot Backups: Versioned backups with off-site/cloud replication',
          'SSD Caching & Performance Tiering: Fast access for hot data, affordable bulk storage',
          'Data Encryption at Rest & Access Control: Full-volume encryption, role-based permissions'
        ],
        benefits: ['Immutable Data Protection', 'Blazing Fast File Retrieval', 'Scalable Storage Capacity', 'Private, Self-Hosted Control'],
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
        desc: 'We help you choose and deploy to AWS, Azure, DigitalOcean, or Railway.',
        slug: 'cloud-hosting-deployment',
        longDesc: 'We design and manage high-performance cloud environments tailored for modern applications. Whether your platform needs the scale of AWS, the enterprise integration of Microsoft Azure, the cost-predictability of DigitalOcean, or the fast, simple deploys of Railway, we recommend and set up the right host, then handle containerized deployments (Docker/Kubernetes) and CI/CD so your application is always available and blazing fast.',
        features: [
          'Cloud Architecture & Platform Selection: AWS, Azure, DigitalOcean, Railway, and more',
          'Containerization & Orchestration: Docker and Kubernetes deployments',
          'CI/CD Pipeline Automation: Git-push to live deploy with staging environments',
          'Serverless & Managed Services: Managed databases, functions, and CDNs'
        ],
        benefits: ['Instant Scalability', 'High Availability & Failover', 'Reduced Infrastructure Overhead', 'The Right Platform for Your Budget'],
        imageUrl: '/images/Cloud_application_Deployment.jpg'
      },
    ]
  },
  {
    title: 'Smart Workspaces',
    items: [
      {
        name: 'Smart Workspaces',
        desc: 'Complete A-Z office setup, from site visit to final handover.',
        slug: 'av-smart-workspaces',
        longDesc: 'End-to-end office setup services, from a site visit and requirements assessment to a fully operational workspace. We handle furniture and workstation coordination, networking and connectivity, power and backup systems, meeting room AV, and security and automation, for new offices and upgrades to existing ones, customized to your space and budget.',
        features: [
          'Furniture, Workstations & Computers',
          'Networking, Wi-Fi & Connectivity',
          'Power Planning & UPS Backup',
          'Meeting Rooms, AV & Video Conferencing',
          'CCTV, Access Control & Automation'
        ],
        benefits: [
          'Single Point of Contact for the Entire Setup',
          'Customized to Your Space & Budget',
          'Site Visit, Planning & Full Installation',
          'Tested & Verified Before Handover'
        ],
        imageUrl: '/images/av-hero.png'
      },
    ],
    secondarySection: {
      title: 'Online Presence',
      items: [
        { 
          name: 'Custom Website Design', 
          desc: 'Bespoke digital experiences engineered to convert.',
          slug: 'custom-websites-design',
          longDesc: 'At BloomTech Corporation, we don\'t just build websites; we engineer high-performance business tools. From lightning-fast architecture to immersive UI/UX, we create digital storefronts and corporate portals that reflect the prestige of your brand. We position every project as a strategic balance of Art, Science, and Strategy.',
          features: [
            'High-Fidelity UI/UX Design using Canva Enterprise and Freepik Premium assets',
            'Performance-Driven Engineering optimized for Core Web Vitals',
            'SEO & Content Strategy with schema markup and AI-driven copywriting',
            'E-Commerce Powerhouses: Custom Shopify and WooCommerce integrations',
            'Corporate Identity Hubs: Professional multi-page architectures',
            'Custom Web Applications: Bespoke portals and member areas',
            'Landing Page Optimization: High-converting Lead Gen pages',
            'Enterprise Infrastructure: DNS, SSL, and Server-Side Caching management'
          ],
          benefits: [
            'Premium Brand Projection with User Intent-focused design',
            'Sub-Second Load Times and flawless mobile responsiveness',
            'Discoverable by Search Engines with built-in SEO foundation',
            'Enterprise-Grade Hosting on high-performance cloud infrastructure',
            'Professional Tech Stack: React.js, Next.js, Shopify Plus, WordPress (Headless)',
            'AI-Driven Content Optimization using Claude and GPT-4'
          ],
          imageUrl: '/images/graphic-design.jpg'
        },
        { 
          name: 'Online Marketing Services', 
          desc: 'Data-driven visibility and performance-led growth.',
          slug: 'online-marketing-services',
          longDesc: 'At BloomTech Corporation, we move beyond "likes" and "impressions" to deliver measurable ROI. By combining high-level technical SEO with aggressive digital marketing strategies, we ensure your business doesn\'t just rank—it dominates.',
          features: [
            'Technical SEO & Core Web Vitals: Sub-second load times, schema markup, enterprise hosting',
            'Strategic Content Marketing: AI-driven thought leadership and high-conversion content',
            'Precision Paid Acquisition (PPC): Targeted Google Ads and Meta campaigns with A/B testing',
            'Specialized E-Commerce Growth: Full-funnel optimization for Shopify storefronts',
            '4-Phase Growth Lifecycle: Audit, Infrastructure Hardening, Deployment, Optimization',
            'Advanced Analytics: GA4, GTM, Microsoft Clarity heatmaps',
            'Professional SEO Tools: Ahrefs, SEMRush, Screaming Frog',
            'AI-Powered Content: Claude-3.5-Sonnet for high-fidelity copywriting'
          ],
          benefits: [
            'Measurable ROI with performance-led strategies',
            'Sub-Second Load Times improving search rankings',
            'Thought Leadership through high-authority content',
            'Lowest Cost Per Acquisition (CPA) via continuous A/B testing',
            'Abandoned Cart Recovery and retargeting automation',
            'Multi-Channel Integration across SEO, PPC, content, and social',
            'Weekly Agile Optimization for maximum campaign efficiency'
          ],
          imageUrl: '/images/digital-marketing.jpg'
        },
      ]
    }
  },
  {
    title: 'AI Development',
    items: [
      {
        name: 'AI Platform Integration',
        desc: 'We integrate Claude and other AI platforms into your existing app via API, hosted on AWS.',
        slug: 'ai-machine-learning',
        longDesc: 'You don\'t need to rebuild your application to add AI to it. We take the software you already have and integrate a leading AI platform — like Anthropic\'s Claude — directly into it via API, then deploy and host the integration on AWS so it scales with your existing infrastructure. No rip-and-replace, no new platform to learn, just AI capability added to the app your team already uses.',
        features: [
          'API Integration Into Your Existing Application: No rebuild required',
          'Anthropic Claude & AWS Bedrock: Direct API or managed Bedrock access',
          'AWS Hosting & Infrastructure: Lambda, ECS/Fargate, and Bedrock deployments',
          'Prompt & Context Engineering: Tuned to your data and business logic',
          'Security & Access Control: API key management, IAM, and audit logging'
        ],
        benefits: [
          'No Rebuild of Your Existing App',
          'Enterprise AWS Reliability & Scale',
          'Platform-Agnostic (Claude, GPT, and more)',
          'Your Data Stays Inside Your AWS Environment'
        ],
        imageUrl: '/images/ai-hero.png'
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
