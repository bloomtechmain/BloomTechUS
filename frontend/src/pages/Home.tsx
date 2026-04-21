import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Cpu, Server, Briefcase, Globe, ShieldCheck, Brain, CheckCircle2, Zap, Award, Users, Target, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Hero background videos - MP4 for high quality
import heroBg1 from '../assets/hero_bg_1.mp4';
import heroBg2 from '../assets/hero_bg_2.mp4';
import heroBg3 from '../assets/hero_bg_3.mp4';

// Poster images for instant loading
import heroBg1Poster from '../assets/hero_bg_1.webp';
import heroBg2Poster from '../assets/hero_bg_2.webp';
import heroBg3Poster from '../assets/hero_bg_3.webp';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [heroBg1, heroBg2, heroBg3];
  const posters = [heroBg1Poster, heroBg2Poster, heroBg3Poster];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const corePillars = [
    {
      icon: Brain,
      title: 'Custom AI & Machine Learning',
      description: 'Automate the mundane and command your data with bespoke AI tools.',
      features: [
        'Intelligent Agents: Custom AI agents designed to handle repetitive cognitive tasks as a "Force Multiplier"',
        'On-Premise AI: Secure, local hosting on high-performance server hardware for strict data privacy',
        'Document Intelligence: Systems that "read" and categorize unstructured data into your database or CRM'
      ],
      link: '/services/ai-machine-learning',
      color: 'from-[#ff6b00] to-orange-600'
    },
    {
      icon: Server,
      title: 'Enterprise Infrastructure & Servers',
      description: 'Stop renting your performance and start owning your compute.',
      features: [
        'Custom Server Design: Purpose-built, high-density server solutions optimized for virtualization and AI',
        'Rack & Roll Services: Turnkey deployment solutions for high-density server rooms',
        'Custom NAS Solutions: Enterprise-grade storage systems with ZFS integration for data integrity',
        'Network Engineering: Future-proof, high-availability topologies with L3 switching and SD-WAN'
      ],
      link: '/services/it-network-infrastructure',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Briefcase,
      title: 'Strategic Business Applications',
      description: 'Unified systems designed for total operational control and unlimited growth.',
      features: [
        'Custom CRM & ERP: Bespoke platforms to unify data, automate workflows, and provide single source of truth',
        'Cloud Hosting & Deployment: High-performance managed hosting with automated CI/CD pipelines',
        'Asset Lifecycle Management: Strategic control of IT investments from procurement to certified destruction'
      ],
      link: '/services/custom-crm-erp-solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Digital Experience & Growth',
      description: 'Engineering high-performance digital storefronts and corporate portals.',
      features: [
        'Bespoke Web Design: Conversion-first architecture built on clean, bloat-free optimized code',
        'SEO & Online Marketing: Data-driven visibility strategies combining technical SEO with AI-powered content',
        'Managed AV: Immersive audiovisual environments for executive boardrooms and enterprise collaboration'
      ],
      link: '/services/custom-websites-design',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ShieldCheck,
      title: 'Professional Advisory & Security',
      description: 'Elite strategy and absolute resilience for organizations that demand integrity.',
      features: [
        'Strategic Advisory: High-level consultancy including IT governance, risk management, and fractional CTO/CISO',
        'Security & Data Protection: Multi-layered, Zero Trust defense architectures with perimeter hardening and EDR',
        'International Operations: Strategic support for global logistics, entity management, and ownership transfers'
      ],
      link: '/services/professional-it-consulting',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: 'CISA-Certified Expertise',
      description: 'Our advisory is grounded in globally recognized standards from ISACA, ensuring your infrastructure is auditable and compliant.'
    },
    {
      icon: Target,
      title: 'Evidence-Based Advice',
      description: 'We provide unbiased, third-party evaluations of your technology, focusing on KPIs that matter—reducing downtime and lowering total cost of ownership (TCO).'
    },
    {
      icon: ShieldCheck,
      title: 'Defense-in-Depth',
      description: 'We align your business with global frameworks like SOC2, HIPAA, PCI-DSS, and NIST to ensure maximum defensibility.'
    }
  ];

  return (
    <div className="bg-white">
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
              <video
                key={slides[currentSlide]}
                src={slides[currentSlide]}
                poster={posters[currentSlide]}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload={currentSlide === 0 ? "auto" : "metadata"}
              />
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
              Precision Compute. <br />
              <span className="text-[#ff6b00]">Bespoke Intelligence.</span>
            </h1>

            <p className="max-w-2xl text-gray-200 text-lg md:text-2xl mb-14 leading-relaxed font-medium">
              BloomTechUSA bridges the gap between raw data and actionable intelligence. We design, build, and deploy high-performance technology solutions—from AMD EPYC virtualization clusters to Custom AI Agents—engineered specifically for your business DNA.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/services/ai-machine-learning" className="w-full sm:w-auto px-12 py-5 bg-[#ff6b00] text-white rounded-2xl font-black text-lg hover:bg-[#e65c00] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] transition-all flex items-center justify-center gap-3 group active:scale-95">
              Explore Our Services <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 rounded-2xl font-black text-lg hover:bg-white hover:text-[#0c1a36] transition-all shadow-xl">
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Business Pillars */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4 block">What We Deliver</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0c1a36] mb-6 leading-tight">
              Our Core Business Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Explore our comprehensive suite of enterprise-grade services, all built with an auditor's discipline and a developer's precision.
            </p>
          </motion.div>

          <div className="space-y-8">
            {corePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group"
                >
                  <Link
                    to={pillar.link}
                    className="block bg-white rounded-[32px] p-8 lg:p-12 border-2 border-gray-100 hover:border-[#ff6b00]/30 hover:shadow-2xl transition-all"
                  >
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Icon & Title Column */}
                      <div className="lg:w-1/3">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-black text-[#0c1a36] mb-4 group-hover:text-[#ff6b00] transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="text-lg text-gray-600 font-medium leading-relaxed mb-6">
                          {pillar.description}
                        </p>
                        <div className="flex items-center gap-2 text-[#ff6b00] font-bold text-sm uppercase tracking-widest">
                          Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Features Column */}
                      <div className="lg:w-2/3">
                        <div className="space-y-4">
                          {pillar.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 group-hover:bg-[#ff6b00]/5 transition-colors">
                              <CheckCircle2 className="w-5 h-5 text-[#ff6b00] mt-0.5 shrink-0" />
                              <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The BloomTech Advantage */}
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
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4 block">Why BloomTech</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              The BloomTech Advantage: <br />
              <span className="text-[#ff6b00]">Certified Integrity</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              In an industry where security is often an afterthought, we prioritize accountability and technical precision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, i) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/20 blur-3xl group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff6b00] to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-4">{advantage.title}</h4>
                    <p className="text-gray-300 leading-relaxed font-medium">{advantage.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose BloomTech - Key Differentiators */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#ff6b00] mb-4 block">Our Approach</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0c1a36] mb-6 leading-tight">
              Engineered for Your Success
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cpu, title: 'Performance First', desc: 'Purpose-built solutions optimized for your specific workload requirements' },
              { icon: ShieldCheck, title: 'Security by Design', desc: 'Multi-layered defense architectures aligned with SOC2, HIPAA, and NIST standards' },
              { icon: Users, title: 'Expert Team', desc: 'CISA-certified professionals with deep technical mastery and business acumen' },
              { icon: Zap, title: 'Measurable ROI', desc: 'Evidence-based approach focused on reducing downtime and lowering TCO' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100 hover:border-[#ff6b00]/30 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center mb-6 group-hover:bg-[#ff6b00] transition-colors">
                    <Icon className="w-7 h-7 text-[#ff6b00] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-black text-[#0c1a36] mb-3">{item.title}</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0c1a36] via-[#1a305c] to-[#ff6b00]">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Connect with our certified experts to discuss your technology needs and discover how BloomTechUSA can engineer your success.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b00] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+17373298158" className="text-white text-lg font-black hover:text-[#ff6b00] transition-colors">
                    (737) 329-8158
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white text-lg font-black">
                    11801 Domain Blvd, Austin, TX
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contact" 
                className="px-12 py-5 bg-white text-[#0c1a36] rounded-2xl font-black text-base hover:bg-gray-100 hover:shadow-2xl transition-all flex items-center gap-3"
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/company" 
                className="px-12 py-5 bg-transparent text-white border-2 border-white/30 rounded-2xl font-black text-base hover:bg-white/10 transition-all"
              >
                About BloomTech
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
