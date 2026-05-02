import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Cpu, Server, Briefcase, Globe, ShieldCheck, Brain, CheckCircle2, Zap, Award, Users, Target, Phone, MapPin, Clock, BadgeCheck, Headphones, Sparkles, FileCode, Cloud, Lock, Building2, Database, Megaphone, HardDrive, Monitor, FolderKanban, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs } from '../utils/seoConfig';

// Hero background videos - Desktop (1080p)
import heroBg1 from '../assets/hero_bg_1.mp4';
import heroBg2 from '../assets/hero_bg_2.mp4';
import heroBg3 from '../assets/hero_bg_3.mp4';

// WebM versions for better compression (modern browsers)
import heroBg1Webm from '../assets/hero_bg_1.webm';
import heroBg2Webm from '../assets/hero_bg_2.webm';
import heroBg3Webm from '../assets/hero_bg_3.webm';

// Mobile optimized versions (720p)
import heroBg1Mobile from '../assets/hero_bg_1_mobile.mp4';
import heroBg2Mobile from '../assets/hero_bg_2_mobile.mp4';
import heroBg3Mobile from '../assets/hero_bg_3_mobile.mp4';

// Poster images for instant loading
import heroBg1Poster from '../assets/hero_bg_1.webp';
import heroBg2Poster from '../assets/hero_bg_2.webp';
import heroBg3Poster from '../assets/hero_bg_3.webp';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Default to desktop during SSR
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video sources with format and size variants
  const videoSlides = [
    { webm: heroBg1Webm, mp4: heroBg1, mobile: heroBg1Mobile, poster: heroBg1Poster },
    { webm: heroBg2Webm, mp4: heroBg2, mobile: heroBg2Mobile, poster: heroBg2Poster },
    { webm: heroBg3Webm, mp4: heroBg3, mobile: heroBg3Mobile, poster: heroBg3Poster },
  ];

  // Detect screen size changes (client-side only)
  useEffect(() => {
    // Set initial mobile state
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load video on component mount for better performance
  useEffect(() => {
    setIsVideoLoaded(true);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [videoSlides.length]);

  const statsData = [
    {
      icon: Sparkles,
      number: '20+',
      label: 'Service Pillars',
      color: 'from-[#ff6b00] to-orange-600'
    },
    {
      icon: BadgeCheck,
      label: 'CISA',
      sublabel: 'Certified Expertise',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      label: '24/7',
      sublabel: 'Monitoring & Support',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Server,
      label: 'On-Prem',
      sublabel: 'AI Deployment Available',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const servicesGrid = [
    {
      number: '01',
      title: 'Custom Web & Mobile Development',
      description: 'Bespoke CRMs, ERPs, e-commerce powerhouses, and secure client portals built on clean, scalable architecture with zero bloat.',
      tags: ['React / Next.js', 'Django / FastAPI', 'Node.js'],
      icon: FileCode,
      color: 'from-[#ff6b00] to-orange-600',
      link: '/services/custom-mobile-web-applications'
    },
    {
      number: '02',
      title: 'Custom AI & Machine Learning',
      description: 'Agentic AI workflows, domain-specific RAG systems, and on-premise LLM deployments. Intelligence built for your data, not the public cloud.',
      tags: ['Anthropic Claude', 'LangChain / CrewAI', 'GPT-4o / Llama 3'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      link: '/services/ai-machine-learning'
    },
    {
      number: '03',
      title: 'IT Network & Infrastructure Design',
      description: 'CompTIA Network+ certified architecture — SD-WAN, VLAN segmentation, next-gen firewalls, and enterprise Wi-Fi with zero dead zones.',
      tags: ['Cisco / Ubiquiti', 'pfSense / Fortinet', 'Zero Trust'],
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      link: '/services/it-network-infrastructure'
    },
    {
      number: '04',
      title: 'Custom Server Design & Deployment',
      description: 'Purpose-built AMD EPYC compute clusters, GPU AI nodes, and enterprise NAS/SAN storage — engineered with 72-hour burn-in testing.',
      tags: ['AMD EPYC', 'Proxmox VE', 'Supermicro'],
      icon: Server,
      color: 'from-orange-500 to-red-500',
      link: '/services/custom-server-design-deployment'
    },
    {
      number: '05',
      title: 'Cloud Hosting & Application Deployment',
      description: 'Managed cloud infrastructure, CI/CD pipelines, Docker/Kubernetes containerization, and DDoS-hardened WAF deployments across AWS, Azure, and GCP.',
      tags: ['AWS / Azure / GCP', 'Kubernetes', 'CI/CD Pipelines'],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      link: '/services/cloud-hosting-deployment'
    },
    {
      number: '06',
      title: 'Security & Data Protection',
      description: 'CISA-certified defense-in-depth — Zero Trust IAM, EDR/behavioral AI endpoint protection, immutable backups, and SOC2/HIPAA compliance alignment.',
      tags: ['CrowdStrike / SentinelOne', 'Okta / Entra ID', 'SIEM / Wazuh'],
      icon: Lock,
      color: 'from-red-500 to-pink-500',
      link: '/services/security-data-protection'
    },
    {
      number: '07',
      title: 'Custom CRM & ERP',
      description: 'Lean, high-velocity CRM and ERP systems integrating inventory, HR, order processing, and supply chain logistics into one seamless dashboard.',
      tags: ['Python / Django', 'PostgreSQL', 'QuickBooks / Stripe'],
      icon: Building2,
      color: 'from-indigo-500 to-purple-500',
      link: '/services/custom-crm-erp-solutions'
    },
    {
      number: '08',
      title: 'Online Marketing & SEO',
      description: 'Technical SEO, Core Web Vitals optimization, precision PPC, and AI-powered content strategy — engineered to dominate, not just rank.',
      tags: ['Ahrefs / SEMRush', 'GA4 / GTM', 'Google Ads / Meta'],
      icon: Megaphone,
      color: 'from-pink-500 to-rose-500',
      link: '/services/online-marketing-services'
    },
    {
      number: '09',
      title: 'Custom NAS Solutions',
      description: 'Enterprise NAS with 10G–100G throughput, ZFS/TrueNAS integrity, immutable snapshots, and encryption at rest — zero monthly subscription.',
      tags: ['AMD EPYC', 'OpenZFS / TrueNAS', 'Mellanox / Intel'],
      icon: Database,
      color: 'from-teal-500 to-green-500',
      link: '/services/custom-nas-storage'
    },
    {
      number: '10',
      title: 'Managed AV & Collaboration',
      description: 'Boardrooms to enterprise auditoriums — AV-over-IP, Crestron/AMX control, beamforming arrays, and broadcast-grade live event production.',
      tags: ['MS Teams Rooms', 'Crestron / Extron', 'Biamp / Q-SYS'],
      icon: Monitor,
      color: 'from-violet-500 to-purple-500',
      link: '/services/av-smart-workspaces'
    },
    {
      number: '11',
      title: 'IT Asset Lifecycle Management',
      description: 'Strategic procurement, zero-touch provisioning, active maintenance, CISA-standard compliance auditing, and NIST-compliant secure destruction.',
      tags: ['Snipe-IT', 'Microsoft Intune', 'ISACA / COBIT'],
      icon: FolderKanban,
      color: 'from-amber-500 to-orange-500',
      link: '/services/asset-lifecycle-management'
    },
    {
      number: '12',
      title: 'Professional IT Consulting',
      description: 'Digital transformation, vCISO/vCTO fractional services, cloud readiness assessments, and IT governance aligned to COBIT, NIST, and ITIL frameworks.',
      tags: ['CISA / ISACA', 'SOC2 / HIPAA', 'ISO 27001'],
      icon: Lightbulb,
      color: 'from-yellow-500 to-amber-500',
      link: '/services/professional-it-consulting'
    }
  ];

  const corePillars = [
    {
      icon: Brain,
      title: 'AI & Intelligent Automation',
      subtitle: 'Agentic workflows · RAG · On-premise LLMs · Data pipelines',
      description: 'We build production-grade AI that doesn\'t just chat — it executes. Agentic workflows, private LLM deployments, and autonomous multi-system orchestration.',
      features: [
        'Custom RAG on your private data',
        'On-premise AI — zero cloud dependency',
        'Multi-agent orchestration via LangChain/CrewAI',
        'Document intelligence & automated pipelines',
        'CISA-certified security & full audit logging'
      ],
      color: 'from-[#ff6b00] to-orange-600'
    },
    {
      icon: Server,
      title: 'Infrastructure & Hardware',
      subtitle: 'Custom servers · NAS/SAN · Rack & Roll · Network design',
      description: 'Purpose-built AMD EPYC servers, enterprise NAS storage with ZFS integrity, precision rack & roll deployments, and SD-WAN network architecture.',
      features: [
        '72-hour burn-in testing on all builds',
        '10GbE to 100GbE NAS throughput',
        'Proxmox / VMware virtualization clusters',
        'Structured cabling to Cat6a/Fiber standards',
        'Hot/cold aisle airflow optimization'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShieldCheck,
      title: 'Security & Compliance',
      subtitle: 'CISA-certified · Zero Trust · SOC2 · Incident response',
      description: 'CISA-certified defense-in-depth that makes your infrastructure audit-ready from day one. Zero Trust architecture, immutable backups, and full compliance alignment.',
      features: [
        'SOC2, HIPAA, PCI-DSS, ISO 27001 alignment',
        'Zero Trust IAM + phishing-resistant MFA',
        'Behavioral AI endpoint detection (EDR)',
        'Immutable, ransomware-proof backup design',
        'Quarterly security reviews & policy updates'
      ],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const whyBloomTech = [
    {
      number: '01',
      title: 'CISA-Certified at the Foundation',
      description: 'Every solution we build carries the discipline of an auditor — traceable, compliant, and defensible under regulatory scrutiny. Security isn\'t a feature we add; it\'s baked into the architecture from day one.'
    },
    {
      number: '02',
      title: 'Business-First Engineering',
      description: 'We map your workflows before we write code. Our 4-stage Business-First process ensures the final product mirrors your team\'s natural processes — eliminating the "Excel-and-Email chaos" of off-the-shelf tools.'
    },
    {
      number: '03',
      title: 'You Own Everything',
      description: 'Proprietary logic layer, your data, your IP. No fluctuating per-user licensing fees, no vendor lock-in. Custom builds mean the system grows with your ambition, not against it.'
    },
    {
      number: '04',
      title: 'Full-Stack, End-to-End',
      description: 'From bare-metal rack design to AI-native applications to performance marketing — we cover every layer. One team, total accountability, zero integration gaps between your hardware and your software.'
    }
  ];

  return (
    <div className="bg-white">
      <SEO config={seoConfigs.home} />
      
      {/* Hero Section - Video Slideshow */}
      <section className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden">

        {/* Background Video Slideshow Layer */}
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {isVideoLoaded ? (
                <video
                  ref={videoRef}
                  key={`${currentSlide}-${isMobile}`}
                  poster={videoSlides[currentSlide].poster}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload={currentSlide === 0 ? "auto" : "metadata"}
                >
                  {/* Use mobile version on small screens for faster loading */}
                  {isMobile ? (
                    <source src={videoSlides[currentSlide].mobile} type="video/mp4" />
                  ) : (
                    <>
                      {/* WebM for modern browsers (better compression) */}
                      <source src={videoSlides[currentSlide].webm} type="video/webm" />
                      {/* MP4 fallback for Safari and older browsers */}
                      <source src={videoSlides[currentSlide].mp4} type="video/mp4" />
                    </>
                  )}
                </video>
              ) : (
                <div 
                  className="w-full h-full dynamic-bg"
                  style={{ ['--bg-image' as any]: `url(${videoSlides[currentSlide].poster})` } as React.CSSProperties}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sophisticated UI Overlays for High-End Aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a36]/90 via-[#0c1a36]/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_transparent_0%,_rgba(12,26,54,0.4)_100%)] z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-15"></div>

        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 flex flex-col items-start relative z-20 w-full text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 mb-8 text-[12px] font-bold tracking-[0.3em] text-white uppercase bg-[#ff6b00]/20 backdrop-blur-md border border-[#ff6b00]/30 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse shadow-[0_0_12px_#ff6b00]"></span>
              Welcome to BloomTech Corporation
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[115px] font-black mb-8 leading-[0.85] tracking-tighter text-white">
              Build the Future. <br />
              <span className="bg-gradient-to-r from-[#ff6b00] via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">Define It.</span>
            </h1>

            <p className="max-w-3xl text-gray-200 text-lg md:text-2xl mb-14 leading-relaxed font-medium">
              BloomTech lives at the intersection of vision and execution. We deliver the high-performance infrastructure and AI-driven solutions your business needs to lead. From enterprise systems to secure cloud scaling, we don't just prepare you for the future — we build the technical foundation that ensures you define and dominate it today.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-[#ff6b00] to-orange-600 text-white rounded-2xl font-black text-lg hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] transition-all flex items-center justify-center gap-3 group active:scale-95">
              START A PROJECT <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services/ai-machine-learning" className="w-full sm:w-auto px-12 py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 rounded-2xl font-black text-lg hover:bg-white hover:text-[#0c1a36] transition-all shadow-xl">
              EXPLORE SERVICES
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-6 bg-white border-b-2 border-gray-100">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 border-2 border-gray-100 hover:border-[#ff6b00]/30 hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                  <div className="relative flex flex-col items-center text-center">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    {stat.number ? (
                      <>
                        <div className="text-4xl font-black text-[#0c1a36] mb-1">{stat.number}</div>
                        <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">{stat.label}</div>
                      </>
                    ) : (
                      <>
                        <div className="text-3xl font-black text-[#0c1a36] mb-1">{stat.label}</div>
                        <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">{stat.sublabel}</div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid - 12 Services */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4 block">— WHAT WE BUILD</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0c1a36] mb-6 leading-tight">
              End-to-End Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              From bare-metal server design to AI-native applications — every layer of your technology stack, engineered for scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesGrid.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="group"
                >
                  <Link
                    to={service.link}
                    className="block bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-[#ff6b00]/30 hover:shadow-2xl hover:-translate-y-2 transition-all h-full"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`text-5xl font-black bg-gradient-to-br ${service.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity`}>
                        {service.number}
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-[#0c1a36] mb-3 group-hover:text-[#ff6b00] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-medium leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-xs font-bold bg-gray-100 text-gray-700 rounded-full group-hover:bg-[#ff6b00]/10 group-hover:text-[#ff6b00] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Three Core Pillars */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4 block">— CORE SOLUTIONS</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0c1a36] mb-6 leading-tight">
              Three pillars. <span className="bg-gradient-to-r from-[#ff6b00] to-orange-500 bg-clip-text text-transparent">Total coverage.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {corePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-[32px] p-10 border-2 border-gray-100 hover:border-[#ff6b00]/30 hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`}></div>
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-[#0c1a36] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm font-bold text-[#ff6b00] uppercase tracking-wider mb-4">
                      {pillar.subtitle}
                    </p>
                    <p className="text-gray-600 font-medium leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    <div className="space-y-3">
                      {pillar.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] mt-2 shrink-0"></div>
                          <span className="text-sm text-gray-700 font-medium leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why BloomTech */}
      <section className="py-32 px-6 bg-[#0c1a36] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#ff6b00]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>

        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4 block">— WHY BLOOMTECH</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              The standard is <span className="bg-gradient-to-r from-[#ff6b00] via-orange-500 to-yellow-500 bg-clip-text text-transparent">different here.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyBloomTech.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff6b00]/20 blur-3xl group-hover:opacity-40 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl font-black bg-gradient-to-br from-[#ff6b00] to-orange-600 bg-clip-text text-transparent opacity-30">
                      {item.number}
                    </div>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4">{item.title}</h4>
                  <p className="text-gray-300 leading-relaxed font-medium">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-[#0c1a36] mb-6 leading-tight">
              Don't prepare for the future. <span className="bg-gradient-to-r from-[#ff6b00] to-orange-500 bg-clip-text text-transparent">Define it.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              The future isn't just "using AI" or "moving to the cloud" — it's embedding intelligence into the fabric of your business. Let's build the technical foundation that puts you ahead, permanently.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-6 flex items-center gap-4 hover:border-[#ff6b00]/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b00] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">CALL</p>
                  <a href="tel:+17373298158" className="text-[#0c1a36] text-lg font-black hover:text-[#ff6b00] transition-colors">
                    (737) 329-8158
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-6 flex items-center gap-4 hover:border-[#ff6b00]/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">EMAIL</p>
                  <a href="mailto:info@bloomtechus.com" className="text-[#0c1a36] text-lg font-black hover:text-[#ff6b00] transition-colors">
                    info@bloomtechus.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contact" 
                className="px-12 py-5 bg-gradient-to-r from-[#ff6b00] to-orange-600 text-white rounded-2xl font-black text-base hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] transition-all flex items-center gap-3 group active:scale-95"
              >
                START A PROJECT <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
