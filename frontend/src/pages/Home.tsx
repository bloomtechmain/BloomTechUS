import { ReactNode } from 'react';
import { ArrowRight, Server, Globe, ShieldCheck, Brain, Clock, BadgeCheck, Sparkles, FileCode, Cloud, Lock, Building2, Database, Megaphone, Monitor, Lightbulb, Search, Layers, Rocket, Phone, Mail } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs } from '../utils/seoConfig';
import { Container, Button, ProcessSteps } from '../components/ui';
import { HeroShowcase } from '../components/home/HeroShowcase';
import { ServicesStack } from '../components/home/ServicesStack';
import { PillarsExplorer } from '../components/home/PillarsExplorer';

const Home = () => {
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

      <HeroShowcase />

      {/* Stats strip — hairline-divided, no cards */}
      <section className="bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {statsData.map((stat, i) => (
              <div
                key={i}
                className={`py-8 lg:py-10 px-4 lg:px-8 border-gray-200 ${i < 2 ? 'border-b lg:border-b-0' : ''} ${i % 2 === 0 ? 'pl-0' : 'border-l'} ${i === 0 ? 'lg:pl-0' : 'lg:border-l lg:pl-8'}`}
              >
                <div className="text-2xl md:text-3xl font-extrabold text-navy leading-none mb-2">
                  {stat.number ?? stat.label}
                </div>
                <div className="text-sm text-gray-700">
                  {stat.number ? stat.label : stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services — numbered, hairline grid */}
      <section id="services" className="py-20 lg:py-24 bg-white scroll-mt-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-14">
            <div className="lg:col-span-7">
              <Eyebrow dark>What We Build</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">
                End-to-end technology solutions
              </h2>
            </div>
            <p className="lg:col-span-5 text-lg text-gray-800 leading-relaxed">
              From bare-metal server design to AI-native applications — every layer of your technology stack, engineered for scale.
            </p>
          </div>

          <ServicesStack services={servicesGrid} />
        </Container>
      </section>

      {/* Core pillars — tabbed explorer, each feature mapped onto a live diagram */}
      <section className="bg-navy-dark py-20 lg:py-24">
        <Container>
          <div className="text-center mb-14">
            <Eyebrow center>Core Solutions</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Three pillars. Total coverage.
            </h2>
          </div>

          <PillarsExplorer pillars={corePillars} />
        </Container>
      </section>

      {/* How We Work — chevron steps */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <div className="text-center mb-14">
            <Eyebrow center dark>How We Work</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-5">
              From first audit to ongoing support.
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              A consistent, four-stage engagement — whether the deliverable is a line of code or a rack of hardware.
            </p>
          </div>
          <ProcessSteps steps={engagementSteps} />
        </Container>
      </section>

      {/* Why BloomTech — photo + ruled list */}
      <section className="py-20 lg:py-24 bg-grey-light border-t border-gray-200">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-start">
            <div className="lg:col-span-5 lg:pr-16">
              <Eyebrow dark>Why BloomTech</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-8">
                The standard is different here.
              </h2>
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <img
                  src="/images/team-engineers.webp"
                  alt="Engineers reviewing code together"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover block"
                />
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-16 lg:border-l lg:border-gray-200">
              <div className="border-b border-gray-200">
                {whyBloomTech.map((item) => (
                  <div key={item.number} className="flex gap-6 py-8 border-t border-gray-200">
                    <span className="font-mono text-sm font-bold text-brand-orange-dark pt-1 shrink-0">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-extrabold text-navy mb-2">{item.title}</h3>
                      <p className="text-gray-800 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-24 bg-navy">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Don't prepare for the future. Define it.
              </h2>
              <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-xl">
                The future isn't just "using AI" or "moving to the cloud" — it's embedding intelligence into the fabric of your business. Let's build the technical foundation that puts you ahead, permanently.
              </p>
              <Button to="/contact" icon={ArrowRight} className="text-base px-8 py-4">
                Start a Project
              </Button>
            </div>

            <div className="lg:col-span-5 divide-y divide-white/10 border-y border-white/10">
              {[
                { icon: Phone, label: 'Call', value: '(737) 329-8158', href: 'tel:+17373298158' },
                { icon: Mail, label: 'Email', value: 'info@bloomtechus.com', href: 'mailto:info@bloomtechus.com' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="group flex items-center gap-4 py-5">
                  <span className="w-10 h-10 rounded-full bg-white/10 text-brand-orange flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-white/50">{label}</span>
                    <span className="block text-lg font-bold text-white group-hover:text-brand-orange transition-colors break-words">{value}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

const Eyebrow = ({ children, center = false, dark = false }: { children: ReactNode; center?: boolean; dark?: boolean }) => {
  const color = dark ? 'text-brand-orange-dark' : 'text-brand-orange';
  const rule = dark ? 'bg-brand-orange-dark' : 'bg-brand-orange';
  return (
    <p className={`${color} font-bold tracking-widest text-sm uppercase mb-4 flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
      <span className={`w-6 h-px ${rule}`} />
      {children}
      {center && <span className={`w-6 h-px ${rule}`} />}
    </p>
  );
};

export default Home;
