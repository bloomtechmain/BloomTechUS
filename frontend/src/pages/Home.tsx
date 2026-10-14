import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Server, Globe, ShieldCheck, Brain, Clock, BadgeCheck, Sparkles, FileCode, Cloud, Lock, Building2, Database, Megaphone, Monitor, Lightbulb, Search, Layers, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs } from '../utils/seoConfig';
import { Container, SectionHeading, Button, ProcessSteps } from '../components/ui';

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
    },
    {
      icon: BadgeCheck,
      label: 'CISA',
      sublabel: 'Certified Expertise',
    },
    {
      icon: Clock,
      label: '24/7',
      sublabel: 'Monitoring & Support',
    },
    {
      icon: Server,
      label: 'On-Prem',
      sublabel: 'AI Deployment Available',
    }
  ];

  const servicesGrid = [
    {
      number: '01',
      title: 'Custom Web & Mobile Development',
      description: 'Bespoke CRMs, ERPs, and e-commerce platforms on clean, scalable architecture.',
      tags: ['React / Next.js', 'Django / FastAPI', 'Node.js'],
      icon: FileCode,
      link: '/services/custom-mobile-web-applications'
    },
    {
      number: '02',
      title: 'AI Platform Integration',
      description: 'Claude and other AI platforms integrated into your app via API, hosted on AWS.',
      tags: ['Anthropic Claude', 'AWS Bedrock', 'AWS Lambda'],
      icon: Brain,
      link: '/services/ai-machine-learning'
    },
    {
      number: '03',
      title: 'IT Network & Infrastructure Design',
      description: 'SD-WAN, VLAN segmentation, and enterprise Wi-Fi with zero dead zones.',
      tags: ['Cisco / Ubiquiti', 'pfSense / Fortinet', 'Zero Trust'],
      icon: Globe,
      link: '/services/it-network-infrastructure'
    },
    {
      number: '04',
      title: 'Custom Server Design & Deployment',
      description: 'Purpose-built AMD EPYC servers and GPU AI nodes, 72-hour burn-in tested.',
      tags: ['AMD EPYC', 'Proxmox VE', 'Supermicro'],
      icon: Server,
      link: '/services/custom-server-design-deployment'
    },
    {
      number: '05',
      title: 'Cloud Hosting & Application Deployment',
      description: 'Managed cloud infrastructure, CI/CD pipelines, and container orchestration.',
      tags: ['AWS / Azure / GCP', 'Kubernetes', 'CI/CD Pipelines'],
      icon: Cloud,
      link: '/services/cloud-hosting-deployment'
    },
    {
      number: '06',
      title: 'Security & Data Protection',
      description: 'Zero Trust IAM, EDR endpoint protection, and SOC2/HIPAA compliance.',
      tags: ['CrowdStrike / SentinelOne', 'Okta / Entra ID', 'SIEM / Wazuh'],
      icon: Lock,
      link: '/services/security-data-protection'
    },
    {
      number: '07',
      title: 'Custom CRM & ERP',
      description: 'Lean CRM and ERP systems unifying inventory, HR, and order processing.',
      tags: ['Python / Django', 'PostgreSQL', 'QuickBooks / Stripe'],
      icon: Building2,
      link: '/services/custom-crm-erp-solutions'
    },
    {
      number: '08',
      title: 'Online Marketing & SEO',
      description: 'Technical SEO, precision PPC, and AI-powered content strategy that dominates.',
      tags: ['Ahrefs / SEMRush', 'GA4 / GTM', 'Google Ads / Meta'],
      icon: Megaphone,
      link: '/services/online-marketing-services'
    },
    {
      number: '09',
      title: 'Custom NAS Solutions',
      description: 'Enterprise NAS with 10G–100G throughput and zero monthly subscription.',
      tags: ['AMD EPYC', 'OpenZFS / TrueNAS', 'Mellanox / Intel'],
      icon: Database,
      link: '/services/custom-nas-storage'
    },
    {
      number: '10',
      title: 'Managed AV & Collaboration',
      description: 'AV-over-IP, Crestron control, and broadcast-grade event production.',
      tags: ['MS Teams Rooms', 'Crestron / Extron', 'Biamp / Q-SYS'],
      icon: Monitor,
      link: '/services/av-smart-workspaces'
    },
    {
      number: '12',
      title: 'Professional IT Consulting',
      description: 'Digital transformation and IT governance aligned to COBIT, NIST, and ITIL.',
      tags: ['CISA / ISACA', 'SOC2 / HIPAA', 'ISO 27001'],
      icon: Lightbulb,
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

  const engagementSteps = [
    {
      icon: Search,
      title: 'Discover',
      description: 'We audit your current systems, workflows, and goals before a single line of code is written or a single rack is touched.'
    },
    {
      icon: Layers,
      title: 'Architect',
      description: 'We design the solution — software architecture, network topology, or hardware spec — mapped to how your business actually runs.'
    },
    {
      icon: Rocket,
      title: 'Build & Deploy',
      description: 'Our engineers build, test, and deploy — 72-hour burn-in on hardware, staged rollouts on every software release.'
    },
    {
      icon: ShieldCheck,
      title: 'Support & Iterate',
      description: 'Ongoing monitoring and support keep things running, with quarterly reviews to iterate as your business grows.'
    }
  ];

  return (
    <div className="bg-white">
      <SEO config={seoConfigs.home} />

      {/* Hero Section - Video Slideshow */}
      <section className="relative h-screen min-h-[720px] max-h-[920px] flex items-center overflow-hidden">

        {/* Background Video Slideshow Layer */}
        <div className="absolute inset-0 w-full h-full z-0 bg-navy-dark">
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
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/75 to-navy-dark/20 z-10"></div>

        <Container className="relative z-20 w-full">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-7 text-xs font-semibold tracking-widest text-white/80 uppercase border border-white/15 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              Welcome to BloomTech Corporation
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-7 leading-[1.05] tracking-tight text-white">
              Build the future.
              <span className="block text-brand-orange">Define it.</span>
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
              <Button to="/contact" icon={ArrowRight} className="w-full sm:w-auto text-base px-8 py-4">
                Start a Project
              </Button>
              <Button to="/services/ai-machine-learning" variant="onDark" className="w-full sm:w-auto text-base px-8 py-4">
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="py-14 px-6 bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-xl overflow-hidden border border-gray-200">
            {statsData.map((stat, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="bg-navy-wash p-7 flex items-center gap-4"
                >
                  <div>
                    {stat.number ? (
                      <>
                        <div className="text-2xl font-bold text-navy leading-none mb-1.5">{stat.number}</div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                      </>
                    ) : (
                      <>
                        <div className="text-xl font-bold text-navy leading-none mb-1.5">{stat.label}</div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.sublabel}</div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Services Grid - 12 Services */}
      <section className="py-24 lg:py-28 px-6 bg-grey-light">
        <Container>
          <SectionHeading
            eyebrow="What We Build"
            title="End-to-end technology solutions"
            description="From bare-metal server design to AI-native applications — every layer of your technology stack, engineered for scale."
            className="mb-16"
          />

          <div className="flex flex-wrap justify-center gap-5 bg-split-navy rounded-[40px] p-6 md:p-10">
            {servicesGrid.map((service, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.3) }}
                  className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.333px)]"
                >
                  <Link
                    to={service.link}
                    className={`group relative block bg-navy-wash ${i % 2 === 0 ? 'card-shape-a' : 'card-shape-b'} p-5 border border-gray-200 hover:border-transparent hover:shadow-xl overflow-hidden transition-all h-full`}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                    <h3 className="text-base font-bold text-navy mb-1.5 group-hover:text-brand-orange transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[13px] text-gray-600 leading-relaxed mb-3.5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] font-semibold bg-gray-100 text-gray-600 rounded-md"
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
        </Container>
      </section>

      {/* Three Core Pillars */}
      <section className="py-24 lg:py-28 px-6 bg-[linear-gradient(to_bottom,white_50%,var(--color-navy)_50%)]">
        <Container>
          <SectionHeading
            eyebrow="Core Solutions"
            title="Three pillars. Total coverage."
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {corePillars.map((pillar, i) => {
              const theme = [
                { shape: 'card-shape-a', wash: 'bg-brand-orange-wash', text: 'text-brand-orange-dark', bar: 'bg-brand-orange' },
                { shape: 'card-shape-b', wash: 'bg-teal-wash', text: 'text-teal-dark', bar: 'bg-teal' },
                { shape: 'card-shape-c', wash: 'bg-violet-wash', text: 'text-violet-dark', bar: 'bg-violet' },
              ][i % 3];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`group relative ${theme.shape} p-8 ${theme.wash} border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-[3px] ${theme.bar} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300`}></div>
                  <h3 className="text-2xl font-bold text-navy mb-2">
                    {pillar.title}
                  </h3>
                  <p className={`text-sm font-semibold ${theme.text} mb-4`}>
                    {pillar.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <div className="space-y-2.5 pt-6 border-t border-gray-300/70">
                    {pillar.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-1 h-1 rounded-full bg-navy/40 mt-2.5 shrink-0"></div>
                        <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How We Work */}
      <section className="py-24 lg:py-28 px-6 bg-grey-light">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="From first audit to ongoing support."
            description="A consistent, four-stage engagement — whether the deliverable is a line of code or a rack of hardware."
            className="mb-16"
          />
          <ProcessSteps steps={engagementSteps} />
        </Container>
      </section>

      {/* Why BloomTech */}
      <section className="py-24 lg:py-28 px-6 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Why BloomTech"
            title="The standard is different here."
            className="mb-16"
          />

          <div className="bg-split-navy rounded-[40px] p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-5">
            {whyBloomTech.map((item, i) => {
              const theme = [
                { wash: 'bg-brand-orange-wash', shape: 'card-shape-a', num: 'text-brand-orange' },
                { wash: 'bg-teal-wash', shape: 'card-shape-b', num: 'text-teal-dark' },
                { wash: 'bg-violet-wash', shape: 'card-shape-c', num: 'text-violet-dark' },
                { wash: 'bg-gold-wash', shape: 'card-shape-d', num: 'text-gold-dark' },
              ][i % 4];
              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`${theme.wash} border border-gray-200 ${theme.shape} p-9 lg:p-10`}
              >
                <div className={`text-sm font-bold ${theme.num} mb-4 tabular-nums`}>{item.number}</div>
                <h4 className="text-xl font-bold text-navy mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
              );
            })}
          </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 lg:py-28 px-6 bg-navy-gradient">
        <Container>
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

              <Button to="/contact" icon={ArrowRight}>
                Start a Project
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 flex flex-col gap-3"
            >
              <a href="tel:+17373298158" className="flex items-center gap-4 px-6 py-5 bg-white/5 border border-white/10 rounded-xl hover:border-brand-orange/40 transition-colors">
                
                <div>
                  <p className="text-white/40 text-[11px] font-semibold uppercase tracking-wider">Call</p>
                  <span className="text-white font-semibold text-lg">(737) 329-8158</span>
                </div>
              </a>

              <a href="mailto:info@bloomtechus.com" className="flex items-center gap-4 px-6 py-5 bg-white/5 border border-white/10 rounded-xl hover:border-brand-orange/40 transition-colors">
                
                <div>
                  <p className="text-white/40 text-[11px] font-semibold uppercase tracking-wider">Email</p>
                  <span className="text-white font-semibold text-lg">info@bloomtechus.com</span>
                </div>
              </a>
            </motion.div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
