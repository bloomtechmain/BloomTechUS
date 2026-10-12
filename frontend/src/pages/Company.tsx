import { motion } from 'framer-motion';
import { Building2, Target, Eye, Users, Lightbulb, Code, Wrench, MapPin, Globe, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs } from '../utils/seoConfig';

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
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'The Engineers',
      description: 'Technical powerhouses focused on Data Engineering, AI/MLOps, DevOps, and QA Automation to ensure code is resilient, scalable, and secure.',
      color: 'from-[#ff6b00] to-orange-600'
    },
    {
      icon: Wrench,
      title: 'The Specialists',
      description: 'Domain experts including Power BI Specialists, Operations Analysts, and Training Leads who ensure technology is adopted to its full potential.',
      color: 'from-purple-500 to-pink-500'
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
      color: 'from-[#ff6b00] to-orange-600',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.9419!2d-97.7211!3d30.3947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb3d4b769d67%3A0x1234567890abcdef!2s11801%20Domain%20Blvd%2C%20Austin%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
    },
    {
      id: 'uae',
      name: 'UAE Hub',
      location: 'Dubai, UAE',
      address: 'New Mall Limited, Dragon Mart 2 - Dubai - United Arab Emirates',
      description: 'Middle East operations center',
      color: 'from-blue-500 to-cyan-500',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0586!2d55.4028!3d25.1728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f8b8b8b8b8b%3A0x1234567890abcdef!2sDragon%20Mart%202%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae'
    },
    {
      id: 'srilanka',
      name: 'Sri Lanka Hub',
      location: 'Mawaramandiya, Sri Lanka',
      address: 'XXPG+VXF, Makola - Udupila Rd, Mawaramandiya, Sri Lanka',
      description: 'South Asia operations center',
      color: 'from-purple-500 to-pink-500',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5234!2d80.0866!3d7.2377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fb9f9f9f9f9f%3A0x1234567890abcdef!2sMawaramandiya%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk'
    },
    {
      id: 'singapore',
      name: 'Singapore Hub',
      location: 'Singapore',
      address: '21 Bukit Batok Cres, #09-79, Singapore 658065',
      description: 'Southeast Asia operations center',
      color: 'from-green-500 to-emerald-500',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7654!2d103.7504!3d1.3379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da10f7c7c7c7c7%3A0x1234567890abcdef!2s21%20Bukit%20Batok%20Cres%2C%20Singapore%20658065!5e0!3m2!1sen!2ssg!4v1234567890123!5m2!1sen!2ssg'
    }
  ];

  const [selectedHub, setSelectedHub] = useState(globalHubs[0]);

  return (
    <div className="bg-white">
      <SEO config={seoConfigs.company} />
      
      {/* Hero Section */}
      <section className="relative bg-[#101D36] pt-40 pb-20 overflow-hidden">
        <div className="absolute top-[-15%] right-[-5%] w-[500px] h-[500px] bg-[#ff6b00]/10 blur-[160px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-7 text-xs font-semibold tracking-widest text-white/80 uppercase border border-white/15 rounded-full">
              <Building2 className="w-3.5 h-3.5 text-[#ff6b00]" />
              About BloomTechUSA
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white">
              AI machine learning & enterprise infrastructure experts
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
              A premier provider of AI machine learning solutions and enterprise infrastructure services, dedicated to delivering custom server design and machine learning expertise through innovative technology and strategic consulting.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/services/ai-machine-learning"
                className="px-7 py-3.5 bg-[#ff6b00] text-white rounded-lg font-semibold hover:bg-[#e65c00] transition-colors flex items-center gap-2 group"
              >
                Explore Our Services <ChevronRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="#mission"
                className="px-7 py-3.5 bg-transparent text-white border border-white/25 rounded-lg font-semibold hover:border-white/50 transition-colors"
              >
                Our Mission
              </a>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 mt-16"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#101D36] text-center p-7">
                <div className="text-3xl md:text-4xl font-bold text-[#ff6b00] mb-1.5">{stat.value}</div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-24 lg:py-28 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pt-8 border-t-2 border-[#ff6b00]"
            >
              <div className="flex items-center gap-3 mb-5">
                <Target className="w-5 h-5 text-[#ff6b00]" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Our Mission</h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#101D36] mb-5 leading-snug">
                AI machine learning & custom server solutions for business growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower clients with AI machine learning solutions and enterprise infrastructure services that transform data into actionable insights. BloomTech delivers custom server design and machine learning expertise with security-first architecture, ensuring seamless integration from C-suite executives to end-users through measurable value and operational excellence.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="pt-8 border-t-2 border-[#101D36]"
            >
              <div className="flex items-center gap-3 mb-5">
                <Eye className="w-5 h-5 text-[#101D36]" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Our Vision</h2>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#101D36] mb-5 leading-snug">
                Leading the digital future
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To establish BloomTech as the preeminent technology solutions provider within the United States, while aggressively expanding our global footprint to serve as a cornerstone of international digital infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The BloomTech Approach */}
      <section className="py-24 lg:py-28 px-6 bg-[#F5F6F8]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00] mb-4 block">Our Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101D36] mb-5 leading-tight tracking-tight">
              Machine learning & enterprise infrastructure services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our AI machine learning solutions and enterprise infrastructure services combine technical expertise with security-first design. BloomTech's certified consultants deliver custom server solutions and machine learning infrastructure that integrate data protection at every level, ensuring every technical implementation supports your business objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-8 border border-gray-200"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center mb-6 shadow-sm">
                <Zap className="w-6 h-6 text-[#ff6b00]" />
              </div>
              <h4 className="text-xl font-bold text-[#101D36] mb-3">Technical Mastery</h4>
              <p className="text-gray-600 leading-relaxed">
                Our consultants possess certifications and deep expertise across all major platforms, ensuring world-class technical execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.17 }}
              className="bg-white rounded-xl p-8 border border-gray-200"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center mb-6 shadow-sm">
                <Users className="w-6 h-6 text-[#ff6b00]" />
              </div>
              <h4 className="text-xl font-bold text-[#101D36] mb-3">Business Acumen</h4>
              <p className="text-gray-600 leading-relaxed">
                We don't just build technology—we understand your business objectives and align every solution to drive measurable outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="bg-white rounded-xl p-8 border border-gray-200"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-6 h-6 text-[#ff6b00]" />
              </div>
              <h4 className="text-xl font-bold text-[#101D36] mb-3">Outcome-Driven</h4>
              <p className="text-gray-600 leading-relaxed">
                Every project is designed with clear KPIs and business outcomes in mind, ensuring tangible ROI and competitive advantage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-24 lg:py-28 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00] mb-4 block">What We Deliver</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101D36] mb-5 leading-tight tracking-tight max-w-2xl">
              Comprehensive service offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              A holistic suite of IT services designed to maximize Return on Investment (ROI) and future-proof organizational workflows.
            </p>
          </motion.div>

          <div className="space-y-4">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-white rounded-xl p-7 md:p-9 border border-gray-200"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  <div className="flex items-center gap-4 min-w-fit md:w-16">
                    <span className="text-sm font-bold text-[#ff6b00] tabular-nums">{service.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-[#101D36] mb-5">
                      {service.title}
                    </h3>
                    <ul className="space-y-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <ChevronRight className="w-4.5 h-4.5 text-[#ff6b00] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-24 lg:py-28 px-6 bg-[#101D36]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00] mb-4 block">Our Team</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              Elite technical expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              BloomTech distinguishes itself through a rigorous talent acquisition process, maintaining a bench of elite professionals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {expertise.map((expert, i) => {
              const Icon = expert.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-8"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#ff6b00]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{expert.title}</h4>
                  <p className="text-white/60 leading-relaxed">{expert.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Delivery Model */}
      <section className="py-24 lg:py-28 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00] mb-4 block">Where We Operate</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101D36] mb-5 leading-tight tracking-tight">
              Global delivery model
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              With headquarters located at <span className="font-semibold text-[#101D36]">11801 Domain Blvd 3rd floor, Austin, TX</span>, BloomTechUSA leverages a distributed delivery model with key operational hubs across the globe.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This geographic diversity allows for localized support and a broad talent pool, ensuring that BloomTech can scale resources rapidly to meet the demands of any project, regardless of size or complexity.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Hub Cards - Left Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {globalHubs.map((hub, index) => (
                <motion.div
                  key={hub.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  onClick={() => setSelectedHub(hub)}
                  className={`cursor-pointer rounded-xl p-6 border transition-colors ${
                    selectedHub.id === hub.id
                      ? 'bg-[#101D36] border-[#101D36]'
                      : 'bg-white border-gray-200 hover:border-[#ff6b00]/40'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className={`w-4.5 h-4.5 mt-0.5 shrink-0 ${
                      selectedHub.id === hub.id ? 'text-[#ff6b00]' : 'text-[#ff6b00]'
                    }`} />
                    <div className="flex-1">
                      <h4 className={`font-bold mb-0.5 ${
                        selectedHub.id === hub.id ? 'text-white' : 'text-[#101D36]'
                      }`}>
                        {hub.name}
                      </h4>
                      <p className={`text-xs font-semibold ${
                        selectedHub.id === hub.id ? 'text-white/60' : 'text-gray-500'
                      }`}>
                        {hub.location}
                      </p>
                    </div>
                  </div>
                  <p className={`text-sm ${
                    selectedHub.id === hub.id ? 'text-white/80' : 'text-gray-600'
                  }`}>
                    {hub.description}
                  </p>
                  <div className={`mt-4 pt-4 border-t ${
                    selectedHub.id === hub.id ? 'border-white/15' : 'border-gray-100'
                  }`}>
                    <p className={`text-xs ${
                      selectedHub.id === hub.id ? 'text-white/50' : 'text-gray-500'
                    }`}>
                      {hub.address}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Map - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-full min-h-[560px]"
            >
              <div className="sticky top-24">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <div className="p-5 bg-[#101D36] flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold mb-0.5">{selectedHub.name}</h3>
                        <p className="text-white/60 text-sm">{selectedHub.location}</p>
                      </div>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedHub.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#ff6b00] text-white rounded-lg font-semibold text-xs uppercase tracking-wider hover:bg-[#e65c00] transition-colors flex items-center gap-2"
                      >
                        Open Maps
                        <ChevronRight className="w-4 h-4" />
                      </a>
                  </div>

                  <motion.div
                    key={selectedHub.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-[500px] bg-gray-100"
                  >
                    <iframe
                      src={selectedHub.mapUrl}
                      width="100%"
                      height="100%"
                      className="w-full h-full borderless-iframe"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${selectedHub.name}`}
                    />
                  </motion.div>
                </div>

                <div className="mt-4 bg-[#F5F6F8] rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4.5 h-4.5 text-[#ff6b00] shrink-0" />
                    <p className="text-sm font-medium text-gray-600">
                      Click on any hub to view its location on the map
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#101D36]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          >
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight tracking-tight">
                Ready to transform your business?
              </h2>
              <p className="text-white/60 leading-relaxed max-w-xl">
                Let's discuss how BloomTechUSA can empower your organization with innovative technology solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4 shrink-0">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-[#ff6b00] text-white rounded-lg font-semibold hover:bg-[#e65c00] transition-colors flex items-center gap-2"
              >
                Get in Touch <ChevronRight className="w-4.5 h-4.5" />
              </a>
              <Link
                to="/services/ai-machine-learning"
                className="px-7 py-3.5 bg-transparent text-white border border-white/25 rounded-lg font-semibold hover:border-white/50 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
