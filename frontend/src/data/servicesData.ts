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
}

export const megaMenuData: MegaMenuColumn[] = [
  {
    title: 'Software & AI Development',
    items: [
      { 
        name: 'AI & Machine Learning (ML)', 
        desc: 'Predictive intelligence and neural networking.',
        slug: 'ai-machine-learning',
        longDesc: 'Harness the power of artificial intelligence and machine learning to unlock predictive insights, automate complex decision-making, and create highly intelligent systems tailored to your business needs.',
        features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning Models'],
        benefits: ['Increased Operational Efficiency', 'Data-Driven Decision Making', 'Enhanced Customer Experiences'],
        imageUrl: '/images/ai-hero.png'
      },
      { 
        name: 'AI Custom Development for Automation', 
        desc: 'Smart agent orchestration for your workflows.',
        slug: 'ai-custom-development-automation',
        longDesc: 'Custom-built artificial intelligence agents and automation tools designed specifically to streamline your unique business workflows, reduce manual data entry, and orchestrate complex tasks seamlessly.',
        features: ['Intelligent Robotic Process Automation', 'Custom AI Agents', 'Workflow Orchestration', '24/7 Automated Operations'],
        benefits: ['Significant Cost Reduction', 'Elimination of Human Error', 'Scalable Operations'],
        imageUrl: '/images/ai-hero.png'
      },
      { 
        name: 'Custom CRM and ERP Solutions', 
        desc: 'Integrated enterprise planning and client lifecycle management.',
        slug: 'custom-crm-erp-solutions',
        longDesc: 'Our unified CRM and ERP systems are built from the ground up to integrate all facets of your operation—including sales pipelines, marketing funnels, supply chain tracking, human resources, and financial management into a single source of truth.',
        features: ['Lead & Sales Pipeline Tracking', 'Financial & HR Management', 'Supply Chain & Inventory Integration', 'Automated Marketing & Reporting'],
        benefits: ['Centralized Enterprise Data', 'improved Customer Retention', 'Streamlined Multi-departmental Workflows'],
        imageUrl: '/images/ai-hero.png'
      },
      { 
        name: 'Employee Time Management Systems', 
        desc: 'Next-gen tracking and performance metrics.',
        slug: 'employee-time-management',
        longDesc: 'Modernize how you track employee attendance, billable hours, and project time allocations with highly intuitive, mobile-friendly time tracking and performance management systems.',
        features: ['Biometric & Geo-fenced Punch In', 'Leave Management', 'Billable Hours Tracking', 'Performance Analytics'],
        benefits: ['Accurate Payroll Processing', 'Increased Productivity', 'Transparent Work Cultures'],
        imageUrl: '/images/ai-hero.png'
      },
      { 
        name: 'Custom websites design', 
        desc: 'Stunning, high-performance digital experiences.',
        slug: 'custom-websites-design',
        longDesc: 'We create bespoke web experiences that combine elite design aesthetics with technical excellence. From conversion-optimized landing pages to complex multi-layered platforms, we build to impress.',
        features: ['UI/UX Design Strategy', 'Performance (Core Web Vitals) Optimization', 'Responsive & Adaptive Layouts', 'SEO-First Architecture'],
        benefits: ['Premium Brand Image', 'Superior User Engagement', 'High Conversion Rates'],
        imageUrl: '/images/ai-hero.png'
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
        longDesc: 'Design, implement, and maintain robust and scalable IT infrastructures that form the reliable backbone of modern corporate digital environments.',
        features: ['Network Architecture Design', 'Hardware Procurement', 'Infrastructure Auditing', '24/7 Network Monitoring'],
        benefits: ['High Availability', 'Future-proof Scalability', 'Optimized Performance'],
        imageUrl: '/images/dc-hero.png'
      },
      { 
        name: 'Enterprise Networking', 
        desc: 'High-speed, redundant connectivity solutions.',
        slug: 'enterprise-networking',
        longDesc: 'Deploy secure, lightning-fast enterprise networking solutions such as SD-WAN, multi-site VPNs, and highly redundant routing designed for maximum uptime and reliability.',
        features: ['SD-WAN Implementation', 'Redundant Connectivity', 'Bandwidth Optimization', 'Secure Multi-site VPNs'],
        benefits: ['Zero-Downtime Reliability', 'Secure Data Transmission', 'Optimized Cloud Application Performance'],
        imageUrl: '/images/dc-hero.png'
      },
      { 
        name: 'Data Centre Operations', 
        desc: 'Powering your workload with expert care.',
        slug: 'data-centre-operations',
        longDesc: 'Comprehensive data centre management services covering everything from cooling and power efficiency to physical security and server lifecycle administration.',
        features: ['Environmental Monitoring', 'Power Redundancy Systems', 'Physical Access Control', 'Server Maintenance'],
        benefits: ['Maximum Uptime Assured', 'Reduced Energy Costs', 'Enterprise-grade Security'],
        imageUrl: '/images/dc-hero.png'
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
        imageUrl: '/images/dc-hero.png'
      },
      { 
        name: 'Rack & Roll Services', 
        desc: 'Efficient global deployment of server racks.',
        slug: 'rack-and-roll-services',
        longDesc: 'A fully managed logistics and deployment service where we configure, test, and ship fully assembled server racks to any data centre location globally, ready to plug in and go.',
        features: ['Pre-deployment Configuration', 'Global Logistics Management', 'Cable Management & Labeling', 'Plug-and-Play Delivery'],
        benefits: ['Rapid Deployment Timelines', 'Standardized Configurations', 'Reduced On-site Staffing Needs'],
        imageUrl: '/images/dc-hero.png'
      },
      { 
        name: 'Cloud Hosting & Application Deployment', 
        desc: 'Scalable, performant, and secure cloud ecosystems.',
        slug: 'cloud-hosting-deployment',
        longDesc: 'We design and manage high-performance cloud environments tailored for modern applications. From serverless architectures to containerized deployments (Docker/Kubernetes), we ensure your applications are always available and blazing fast.',
        features: ['Cloud Architecture Design', 'Containerization & Orchestration', 'CI/CD Pipeline Automation', 'Serverless Implementations'],
        benefits: ['Instant Scalability', 'High Availability & Failover', 'Reduced Infrastructure Overhead'],
        imageUrl: '/images/dc-hero.png'
      },
    ]
  },
  {
    title: 'AV & Smart Workspaces',
    items: [
      { 
        name: 'Custom Audio Visual (AV) Setup', 
        desc: 'Immersive media environments for the office.',
        slug: 'custom-av-setup',
        longDesc: 'Design and installation of state-of-the-art audiovisual systems for boardrooms, huddle spaces, and auditoriums to facilitate seamless presentations and communication.',
        features: ['High-Fidelity Audio Systems', '4K Video Displays', 'Acoustic Treatments', 'Integrated Control Interfaces'],
        benefits: ['Professional Presentations', 'Crystal Clear Communication', 'Enhanced Corporate Image'],
        imageUrl: '/images/av-hero.png'
      },
      { 
        name: 'Managed AV Services', 
        desc: 'Proactive support for all visual assets.',
        slug: 'managed-av-services',
        longDesc: 'Proactive monitoring, maintenance, and technical support for your entire fleet of AV equipment, ensuring every meeting room is online and fully functional 100% of the time.',
        features: ['Remote Monitoring', 'Preventative Maintenance', 'On-call Technical Support', 'Equipment Lifecycle Swaps'],
        benefits: ['Elimination of "Technical Difficulties"', 'Extended Equipment Lifespan', 'Predictable Maintenance Costs'],
        imageUrl: '/images/av-hero.png'
      },
      { 
        name: 'Unified Collaboration', 
        desc: 'Connecting teams across any device or location.',
        slug: 'unified-collaboration',
        longDesc: 'Implementation of unified communication tools (like Teams, Zoom, or Webex) integrated with your physical office spaces to bridge the gap between in-office and remote workers seamlessly.',
        features: ['Softphone Integration', 'Video Conferencing Solutions', 'Digital Whiteboarding', 'Cross-platform Compatibility'],
        benefits: ['Seamless Global Communication', 'Increased Team Collaboration', 'Reduced Travel Expenditures'],
        imageUrl: '/images/av-hero.png'
      },
      { 
        name: 'Hybrid Workplace Solutions', 
        desc: 'The bridge between home and office.',
        slug: 'hybrid-workplace-solutions',
        longDesc: 'Holistic technology solutions designed to make the transition between remote work and the physical office completely frictionless for the modern employee.',
        features: ['Hot-desking Booking Systems', 'Cloud-based File Access', 'Secure Remote Access (VPN/ZTNA)', 'Endpoint Device Management'],
        benefits: ['Empowered Remote Teams', 'Flexible Space Utilization', 'Consistent Employee Experience'],
        imageUrl: '/images/av-hero.png'
      },
      { 
        name: 'Smart Workspaces', 
        desc: 'IoT-enabled office spaces for the future.',
        slug: 'smart-workspaces',
        longDesc: 'Leverage Internet of Things (IoT) technology to create intelligent office environments that automatically adjust lighting, climate, and ambiance based on occupancy and preferences.',
        features: ['Occupancy Sensors', 'Automated Climate Control', 'Smart Lighting Systems', 'Digital Signage Integration'],
        benefits: ['Reduced Energy Consumption', 'Enhanced Comfort & Wellbeing', 'Modern "Wow" Factor for Clients'],
        imageUrl: '/images/av-hero.png'
      },
    ]
  },
  {
    title: 'Security & Managed IT',
    items: [
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
        name: 'Comprehensive Managed Services', 
        desc: '24/7 IT oversight for total peace of mind.',
        slug: 'comprehensive-managed-services',
        longDesc: 'Outsource your entire IT department to our team of experts. We provide round-the-clock helpdesk support, proactive maintenance, and strategic IT guidance.',
        features: ['24/7 Helpdesk Support', 'Proactive Server Maintenance', 'Patch Management', 'vCIO Strategic Planning'],
        benefits: ['Predictable Monthly IT Spend', 'Focus on Core Business Objects', 'Access to Elite Technical Talent'],
        imageUrl: '/images/security-hero.png'
      },
      { 
        name: 'Professional IT Services', 
        desc: 'Advisory and technical implementation expertise.',
        slug: 'professional-it-services',
        longDesc: 'Project-based IT consulting and implementation services for complex migrations, infrastructure upgrades, or compliance auditing.',
        features: ['Cloud Migrations', 'IT Infrastructure Audits', 'Compliance Assessments', 'Disaster Recovery Planning'],
        benefits: ['Flawless Project Execution', 'Risk Mitigation', 'Strategic Technological Advantage'],
        imageUrl: '/images/security-hero.png'
      },
      { 
        name: 'Asset Lifecycle Management', 
        desc: 'From procurement to secure decommissioning.',
        slug: 'asset-lifecycle-management',
        longDesc: 'End-to-end management of your corporate hardware estate. We handle the procurement, staging, deployment, tracking, and eventual secure, eco-friendly destruction of IT assets.',
        features: ['Automated Inventory Tracking', 'Standardized Procurement', 'Secure Hard Drive Shredding', 'Eco-friendly Recycling'],
        benefits: ['Optimized Hardware Spend', 'Data Security at EOL', 'Simplified Onboarding Processing'],
        imageUrl: '/images/security-hero.png'
      },
      { 
        name: 'Online Marketing Services', 
        desc: 'Empowering your brand through data-driven growth.',
        slug: 'online-marketing-services',
        longDesc: 'Data-driven digital marketing campaigns encompassing SEO, SEM, and social media management to maximize your online visibility and lead generation.',
        features: ['Search Engine Optimization (SEO)', 'Pay-Per-Click Campaigns (SEM)', 'Social Media Management', 'Conversion Rate Optimization'],
        benefits: ['Increased Qualified Leads', 'Higher Brand Visibility', 'Measurable ROI on Marketing Spend'],
        imageUrl: '/images/security-hero.png'
      },
    ]
  }
];

export const getAllServices = (): ServiceItem[] => {
  return megaMenuData.flatMap(column => column.items);
};

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return getAllServices().find(service => service.slug === slug);
};
