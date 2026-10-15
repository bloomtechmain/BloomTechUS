import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Code, Wrench, MapPin, Globe, ChevronRight, BadgeCheck, Briefcase, Building2, Workflow, BarChart3, Brain, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs } from '../utils/seoConfig';
import { PageHero, Section, Heading, BlockGrid, Explorer, PhotoBand, Hl } from '../components/service-details/kit';

const Company = () => {
  const services = [
    {
      number: '01',
      title: 'Enterprise Business Applications',
      items: [
        'Ecosystem Management for Salesforce, Microsoft Dynamics 365, SAP, and Oracle',
        'Solution Architecture designed for scalability',
        'Proactive maintenance and feature enhancement'
      ]
    },
    {
      number: '02',
      title: 'Advanced System Integrations',
      items: [
        'Middleware Mastery with MuleSoft, Dell Boomi, and Informatica Cloud',
        'Enterprise Application Integration (EAI)',
        'Seamless data flow between legacy and cloud-native applications'
      ]
    },
    {
      number: '03',
      title: 'Data Management & Decision Intelligence',
      items: [
        'Robust ETL/ELT pipeline design and deployment',
        'BI Reporting via Tableau, Power BI, and Qlik Sense',
        'Data-backed decision-making through immersive dashboards'
      ]
    },
    {
      number: '04',
      title: 'Artificial Intelligence & Machine Learning',
      items: [
        'Predictive modeling for market trends and operational insights',
        'Process automation for high-volume tasks',
        'AI integration into business operations'
      ]
    },
    {
      number: '05',
      title: 'Cloud Strategy & Infrastructure',
      items: [
        'Multi-cloud expertise across AWS, Azure, and Google Cloud Platform',
        'Strategic migration and management services',
        'Cloud optimization for cost-efficiency and security'
      ]
    }
  ];

  const expertise = [
    {
      icon: Lightbulb,
      title: 'The Architects',
      description: 'Visionaries specialized in Solution, Cloud, Data, and Integration Architecture who design the blueprints for digital success.',
    },
    {
      icon: Code,
      title: 'The Engineers',
      description: 'Technical powerhouses focused on Data Engineering, AI/MLOps, DevOps, and QA Automation to ensure code is resilient, scalable, and secure.',
    },
    {
      icon: Wrench,
      title: 'The Specialists',
      description: 'Domain experts including Power BI Specialists, Operations Analysts, and Training Leads who ensure technology is adopted to its full potential.',
    }
  ];

  const stats = [
    { value: '2026', label: 'Founded' },
    { value: '100+', label: 'Expert Consultants' },
    { value: '4', label: 'Global Hubs' },
    { value: '99.9%', label: 'Client Satisfaction' }
  ];

  const globalHubs = [
    {
      id: 'texas',
      name: 'Texas Hub',
      location: 'Austin, TX',
      address: '11801 Domain Blvd 3rd floor, Austin, TX',
      description: 'Central US operations center',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.9419!2d-97.7211!3d30.3947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb3d4b769d67%3A0x1234567890abcdef!2s11801%20Domain%20Blvd%2C%20Austin%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
    },
    {
      id: 'uae',
      name: 'UAE Hub',
      location: 'Dubai, UAE',
      address: 'New Mall Limited, Dragon Mart 2 - Dubai - United Arab Emirates',
      description: 'Middle East operations center',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0586!2d55.4028!3d25.1728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f8b8b8b8b8b%3A0x1234567890abcdef!2sDragon%20Mart%202%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae'
    },
    {
      id: 'srilanka',
      name: 'Sri Lanka Hub',
      location: 'Mawaramandiya, Sri Lanka',
      address: 'XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka',
      description: 'South Asia operations center',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5234!2d80.0866!3d7.2377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fb9f9f9f9f9f%3A0x1234567890abcdef!2sMawaramandiya%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk'
    },
    {
      id: 'singapore',
      name: 'Singapore Hub',
      location: 'Singapore',
      address: '21 Bukit Batok Cres, #09-79, Singapore 658065',
      description: 'Southeast Asia operations center',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7654!2d103.7504!3d1.3379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da10f7c7c7c7c7%3A0x1234567890abcdef!2s21%20Bukit%20Batok%20Cres%2C%20Singapore%20658065!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg'
    }
  ];

  const [selectedHub, setSelectedHub] = useState(globalHubs[0]);

  return (
    <div className="bg-white">
      <SEO config={seoConfigs.company} />

      {/* Hero */}
      <PageHero
        photo={{ src: '/images/services/consulting-b.webp', alt: 'BloomTech team in a meeting room' }}
        eyebrow="About BloomTechUSA"
        title="AI machine learning & enterprise infrastructure experts"
        text="A premier provider of AI machine learning solutions and enterprise infrastructure services, dedicated to delivering custom server design and machine learning expertise through innovative technology and strategic consulting."
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-10">
          <Link to="/services/ai-machine-learning"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold whitespace-nowrap transition-colors">
            Explore Our Services
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="#mission" className="group inline-flex items-center gap-2 font-bold text-white hover:text-brand-orange transition-colors whitespace-nowrap">
            Our Mission
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </PageHero>

      {/* Stats strip — hairline-divided, like the home page */}
      <section className="bg-white border-b border-gray-200">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className={`py-8 lg:py-10 px-4 lg:px-8 border-gray-200 ${i < 2 ? 'border-b lg:border-b-0' : ''} ${i % 2 === 0 ? 'pl-0' : 'border-l'} ${i === 0 ? 'lg:pl-0' : 'lg:border-l lg:pl-8'}`}>
                <div className="text-3xl md:text-4xl font-extrabold text-navy leading-none mb-2">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision — photo cards */}
      <div id="mission" className="scroll-mt-24">
        <Section tone="white">
          <BlockGrid
            items={[
              {
                icon: Target,
                image: { src: '/images/services/enterprise-b.webp', alt: 'Team collaborating in an open office' },
                tag: 'Our Mission',
                title: 'AI machine learning & custom server solutions for business growth',
                desc: 'To empower clients with AI machine learning solutions and enterprise infrastructure services that transform data into actionable insights. BloomTech delivers custom server design and machine learning expertise with security-first architecture, ensuring seamless integration from C-suite executives to end-users through measurable value and operational excellence.',
              },
              {
                icon: Eye,
                image: { src: '/images/hero-bg-infra.webp', alt: 'Engineers working in a server room' },
                tag: 'Our Vision',
                title: 'Leading the digital future',
                desc: 'To establish BloomTech as the preeminent technology solutions provider within the United States, while aggressively expanding our global footprint to serve as a cornerstone of international digital infrastructure. We envision a future where every business, regardless of size, has access to enterprise-grade AI, infrastructure, and security — built on the same uncompromising standards we hold for our largest clients, and delivered by teams who treat your systems as rigorously as their own.',
              },
            ]}
          />
        </Section>
      </div>

      {/* The BloomTech Approach */}
      <Section tone="grey">
        <Heading
          eyebrow="Our Philosophy"
          title="Machine learning & enterprise infrastructure services"
          image={{ src: '/images/team-engineers.webp', alt: 'Engineers reviewing code together' }}
        >
          <p>Our AI machine learning solutions and enterprise infrastructure services combine technical expertise with security-first design. BloomTech's certified consultants deliver custom server solutions and machine learning infrastructure that integrate data protection at every level, ensuring every technical implementation supports your business objectives.</p>
        </Heading>
        <BlockGrid
          cols={3}
          items={[
            { num: '01', icon: BadgeCheck, title: 'Technical Mastery', desc: 'Our consultants possess certifications and deep expertise across all major platforms, ensuring world-class technical execution.' },
            { num: '02', icon: Briefcase, title: 'Business Acumen', desc: "We don't just build technology—we understand your business objectives and align every solution to drive measurable outcomes." },
            { num: '03', icon: Target, title: 'Outcome-Driven', desc: 'Every project is designed with clear KPIs and business outcomes in mind, ensuring tangible ROI and competitive advantage.' },
          ]}
        />
      </Section>

      <PhotoBand photo={{ src: '/images/services/av-b.webp', alt: 'Modern office interior' }} />

      {/* Service Offerings */}
      <Section tone="white">
        <Heading
          eyebrow="What We Deliver"
          title="Comprehensive service offerings"
          sub="A holistic suite of IT services designed to maximize Return on Investment (ROI) and future-proof organizational workflows."
        />
        <Explorer
          items={services.map((service, i) => ({
            num: service.number,
            icon: serviceIcons[i % serviceIcons.length],
            title: service.title,
            points: service.items,
          }))}
        />
      </Section>

      {/* Technical Expertise */}
      <Section tone="dark">
        <Heading
          light
          eyebrow="Our Team"
          title="Elite technical expertise"
          sub="BloomTech distinguishes itself through a rigorous talent acquisition process, maintaining a bench of elite professionals."
        />
        <BlockGrid
          dark
          cols={3}
          items={expertise.map((expert, i) => ({ icon: expert.icon, num: String(i + 1).padStart(2, '0'), title: expert.title, desc: expert.description }))}
        />
      </Section>

      {/* Global Delivery Model */}
      <Section tone="grey">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <Heading eyebrow="Where We Operate" title="Global delivery model" className="mb-8">
              <p>With headquarters located at <Hl>11801 Domain Blvd 3rd floor, Austin, TX</Hl>, BloomTechUSA leverages a distributed delivery model with key operational hubs across the globe.</p>
              <p className="mt-4">This geographic diversity allows for localized support and a broad talent pool, ensuring that BloomTech can scale resources rapidly to meet the demands of any project, regardless of size or complexity.</p>
            </Heading>
            <ul className="flex flex-col gap-2">
              {globalHubs.map((hub) => {
                const on = selectedHub.id === hub.id;
                return (
                  <li key={hub.id}>
                    <button type="button" onClick={() => setSelectedHub(hub)} onMouseEnter={() => setSelectedHub(hub)}
                      className={`w-full flex items-start gap-4 rounded-xl px-5 py-4 text-left transition-colors ${on ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-[#ECEFF4]'}`}>
                      <span className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${on ? 'bg-white/10 text-white' : 'bg-grey-light text-navy-mid'}`}>
                        <MapPin className="w-5 h-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-baseline justify-between gap-3">
                          <span className="font-bold">{hub.name}</span>
                          <span className={`text-xs font-semibold ${on ? 'text-white/60' : 'text-gray-500'}`}>{hub.location}</span>
                        </span>
                        <span className={`block text-sm mt-1 ${on ? 'text-white/75' : 'text-gray-600'}`}>{hub.description}</span>
                        {on && <span className="block text-xs text-white/50 mt-2">{hub.address}</span>}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="rounded-2xl overflow-hidden bg-white shadow-[8px_8px_0_0_#101D36]">
              <div className="flex items-center justify-between gap-4 px-6 py-4 bg-navy">
                <div className="min-w-0">
                  <h3 className="font-extrabold text-white">{selectedHub.name}</h3>
                  <p className="text-sm text-white/60">{selectedHub.location}</p>
                </div>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedHub.address)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-brand-orange transition-colors whitespace-nowrap">
                  Open Maps
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[520px] bg-grey-light">
                <motion.div key={selectedHub.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="absolute inset-0">
                  <iframe
                    src={selectedHub.mapUrl}
                    width="100%"
                    height="100%"
                    className="borderless-iframe"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${selectedHub.name}`}
                  />
                </motion.div>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 text-sm text-gray-500">
                <Globe className="w-4 h-4" />
                <p>Click on any hub to view its location on the map</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="navy">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">Ready to transform your business?</h2>
            <p className="text-lg text-white/75 leading-relaxed max-w-2xl">Let's discuss how BloomTechUSA can empower your organization with innovative technology solutions.</p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start gap-5">
            <a href="#contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold whitespace-nowrap transition-colors">
              Get in Touch
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/services/ai-machine-learning" className="group inline-flex items-center gap-2 font-bold text-white hover:text-brand-orange transition-colors whitespace-nowrap">
              View Our Services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

const serviceIcons = [Building2, Workflow, BarChart3, Brain, Cloud];

export default Company;
