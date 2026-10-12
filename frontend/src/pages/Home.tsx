import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Server, Globe, ShieldCheck, Brain, Phone, Mail, Clock, BadgeCheck, Sparkles, FileCode, Cloud, Lock, Building2, Database, Megaphone, Monitor, Lightbulb } from 'lucide-react';
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
      title: 'AI Platform Integration',
      description: 'We integrate Claude and other AI platforms into your existing application via API, hosted and scaled on AWS. No rebuild required.',
      tags: ['Anthropic Claude', 'AWS Bedrock', 'AWS Lambda'],
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
      <section className="relative h-screen min-h-[720px] max-h-[920px] flex items-center overflow-hidden">

        {/* Background Video Slideshow Layer */}
        <div className="absolute inset-0 w-full h-full z-0 bg-[#0B1428]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
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

        {/* Single readability scrim — content side only */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1428] via-[#0B1428]/75 to-[#0B1428]/20 z-10"></div>

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-20 w-full">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-7 text-xs font-semibold tracking-widest text-white/80 uppercase border border-white/15 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]"></span>
              Welcome to BloomTech Corporation
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-7 leading-[1.05] tracking-tight text-white">
              Build the future.
              <span className="block text-[#ff6b00]">Define it.</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed">
              BloomTech lives at the intersection of vision and execution. We deliver the high-performance infrastructure and AI-driven solutions your business needs to lead. From enterprise systems to secure cloud scaling, we don't just prepare you for the future — we build the technical foundation that ensures you define and dominate it today.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-[#ff6b00] text-white rounded-lg font-semibold text-base hover:bg-[#e65c00] transition-colors flex items-center justify-center gap-2.5 group">
                Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/services/ai-machine-learning" className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/25 rounded-lg font-semibold text-base hover:border-white/50 transition-colors text-center">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-14 px-6 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-xl overflow-hidden border border-gray-200">
            {statsData.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="bg-white p-7 flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#101D36] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#ff6b00]" />
                  </div>
                  <div>
                    {stat.number ? (
                      <>
                        <div className="text-2xl font-bold text-[#101D36] leading-none mb-1.5">{stat.number}</div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                      </>
                    ) : (
                      <>
                        <div className="text-xl font-bold text-[#101D36] leading-none mb-1.5">{stat.label}</div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.sublabel}</div>
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
      <section className="py-24 lg:py-28 px-6 bg-[#F5F6F8]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00] mb-4 block">What We Build</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101D36] mb-5 leading-tight tracking-tight">
              End-to-end technology solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From bare-metal server design to AI-native applications — every layer of your technology stack, engineered for scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesGrid.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.3) }}
                >
                  <Link
                    to={service.link}
                    className="group relative block bg-white rounded-xl p-7 border border-gray-200 hover:border-transparent hover:shadow-xl overflow-hidden transition-all h-full"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#ff6b00] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#ff6b00]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#101D36] mb-2.5 group-hover:text-[#ff6b00] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[15px] text-gray-600 leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-[11px] font-semibold bg-gray-100 text-gray-600 rounded-md"
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
      <section className="py-24 lg:py-28 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00] mb-4 block">Core Solutions</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101D36] leading-tight tracking-tight">
              Three pillars. Total coverage.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {corePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:border-transparent transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-[#ff6b00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#101D36] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#ff6b00] mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <div className="space-y-2.5 pt-6 border-t border-gray-100">
                    {pillar.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-1 h-1 rounded-full bg-[#101D36]/40 mt-2.5 shrink-0"></div>
                        <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why BloomTech */}
      <section className="py-24 lg:py-28 px-6 bg-[#101D36]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00] mb-4 block">Why BloomTech</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              The standard is different here.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {whyBloomTech.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#101D36] p-9 lg:p-10"
              >
                <div className="text-sm font-bold text-[#ff6b00] mb-4 tabular-nums">{item.number}</div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 lg:py-28 px-6 bg-[#101D36]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Don't prepare for the future. Define it.
              </h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
                The future isn't just "using AI" or "moving to the cloud" — it's embedding intelligence into the fabric of your business. Let's build the technical foundation that puts you ahead, permanently.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#ff6b00] text-white rounded-lg font-semibold hover:bg-[#e65c00] transition-colors group"
              >
                Start a Project <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 flex flex-col gap-3"
            >
              <a href="tel:+17373298158" className="flex items-center gap-4 px-6 py-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#ff6b00]/40 transition-colors">
                <Phone className="w-5 h-5 text-[#ff6b00] shrink-0" />
                <div>
                  <p className="text-white/40 text-[11px] font-semibold uppercase tracking-wider">Call</p>
                  <span className="text-white font-semibold text-lg">(737) 329-8158</span>
                </div>
              </a>

              <a href="mailto:info@bloomtechus.com" className="flex items-center gap-4 px-6 py-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#ff6b00]/40 transition-colors">
                <Mail className="w-5 h-5 text-[#ff6b00] shrink-0" />
                <div>
                  <p className="text-white/40 text-[11px] font-semibold uppercase tracking-wider">Email</p>
                  <span className="text-white font-semibold text-lg">info@bloomtechus.com</span>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
