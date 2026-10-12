import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Send, CheckCircle, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs } from '../utils/seoConfig';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interests: [] as string[],
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const interestOptions = [
    'Professional IT Consulting & Custom Software',
    'IT Infrastructure & Data Centres',
    'AI & Machine Learning Development',
    'Smart Workspaces',
    'Online Presence (Websites & Marketing)'
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          interests: formData.interests.length ? formData.interests.join(', ') : 'None specified',
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          interests: [],
          message: ''
        });
      }, 3000);
    } catch (err) {
      console.error('Error sending contact form email:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(737) 329-8158',
      link: 'tel:+17373298158',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@bloomtechusa.com',
      link: 'mailto:info@bloomtechusa.com',
      color: 'from-[#ff6b00] to-orange-600'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      content: 'BloomTech Corporation\n11801 Domain Blvd\nAustin, TX 78758',
      link: 'https://www.google.com/maps/search/?api=1&query=11801+Domain+Blvd+Austin+TX+78758',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="bg-white">
      <SEO config={seoConfigs.contact} />
      
      {/* Hero Section */}
      <section className="relative bg-[#101D36] pt-32 pb-20 overflow-hidden">
        <div className="absolute top-[-20%] right-[10%] w-[450px] h-[450px] bg-[#ff6b00]/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-6 text-xs font-semibold tracking-widest text-white/80 uppercase border border-white/15 rounded-full">
              <Mail className="w-3.5 h-3.5 text-[#ff6b00]" />
              Get In Touch
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-[1.15] tracking-tight text-white">
              Professional IT consulting <span className="text-[#ff6b00]">&amp; enterprise technology solutions</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              From strategic IT consulting and custom software to enterprise infrastructure, AI-driven automation, cybersecurity, and digital presence, we're ready to deliver technology solutions tailored to your needs. Whether you need a custom application, a secure network, or a full digital transformation strategy, our team of certified experts specializes in transforming businesses through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-6 bg-white relative -mt-16 z-20">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-xl p-7 shadow-lg border border-gray-200"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#101D36] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#ff6b00]" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2.5">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[#101D36] font-semibold leading-relaxed hover:text-[#ff6b00] transition-colors whitespace-pre-line block"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-[#101D36] font-semibold leading-relaxed whitespace-pre-line">
                      {info.content}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 lg:py-28 px-6 bg-[#F5F6F8]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left Column - Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00] mb-4 block">
                Let's Connect
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#101D36] mb-5 leading-tight tracking-tight">
                Request professional IT consulting & technology services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Looking for professional IT consulting, custom software, enterprise infrastructure, AI solutions, or a stronger digital presence? Contact us to explore how our certified consultants and engineers can transform your business. Our solution architects respond within 24 hours.
              </p>

              {/* Office Location Highlight */}
              <div className="bg-[#101D36] rounded-xl p-7">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                  Our Austin Hub
                </h3>
                <p className="text-white font-semibold text-lg mb-5 leading-relaxed">
                  Located in the heart of the Domain, a premier center for technology and innovation.
                </p>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-4.5 h-4.5 text-[#ff6b00] mt-0.5 shrink-0" />
                  <div>
                    <p>BloomTech Corporation</p>
                    <p>11801 Domain Blvd</p>
                    <p>Austin, TX 78758</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-200"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#101D36] mb-3">Message Sent!</h3>
                  <p className="text-gray-600 text-center">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name (First & Last)
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6b00] focus:outline-none focus:ring-1 focus:ring-[#ff6b00] transition-colors text-[#101D36]"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6b00] focus:outline-none focus:ring-1 focus:ring-[#ff6b00] transition-colors text-[#101D36]"
                      placeholder="john.doe@company.com"
                    />
                    <p className="text-xs text-gray-500 mt-2 font-medium">
                      So we can send you relevant technical documentation
                    </p>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6b00] focus:outline-none focus:ring-1 focus:ring-[#ff6b00] transition-colors text-[#101D36]"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Area of Interest */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Area of Interest
                    </label>
                    <div className="space-y-2.5">
                      {interestOptions.map((interest, i) => (
                        <label
                          key={i}
                          className="flex items-start gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestToggle(interest)}
                            className="mt-0.5 w-4.5 h-4.5 rounded border-gray-300 text-[#ff6b00] focus:ring-[#ff6b00] cursor-pointer"
                          />
                          <span className="text-gray-600 group-hover:text-[#101D36] transition-colors text-[15px]">
                            {interest}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6b00] focus:outline-none focus:ring-1 focus:ring-[#ff6b00] transition-colors text-[#101D36] resize-none"
                      placeholder="Briefly describe your project goals or challenges"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm font-bold">{error}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-[#ff6b00] text-white rounded-lg font-semibold hover:bg-[#e65c00] disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2.5 group"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-6 bg-[#101D36]">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00] mb-4 block">
              Connect With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              Follow our journey
            </h2>
            <p className="text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest insights, innovations, and success stories from BloomTechUSA.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#linkedin"
                className="group w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#ff6b00]/50 hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white/70 group-hover:text-[#ff6b00] transition-colors" />
              </a>
              <a
                href="#twitter"
                className="group w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#ff6b00]/50 hover:bg-white/10 transition-colors"
              >
                <Twitter className="w-5 h-5 text-white/70 group-hover:text-[#ff6b00] transition-colors" />
              </a>
              <a
                href="#facebook"
                className="group w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#ff6b00]/50 hover:bg-white/10 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white/70 group-hover:text-[#ff6b00] transition-colors" />
              </a>
              <a
                href="#instagram"
                className="group w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#ff6b00]/50 hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-[#ff6b00] transition-colors" />
              </a>
              <a
                href="#youtube"
                className="group w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#ff6b00]/50 hover:bg-white/10 transition-colors"
              >
                <Youtube className="w-5 h-5 text-white/70 group-hover:text-[#ff6b00] transition-colors" />
              </a>
            </div>

            {/* Social Media Placeholder Note */}
            <div className="mt-12 max-w-xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-white/60 leading-relaxed text-sm">
                  <span className="text-[#ff6b00] font-semibold">Coming Soon:</span> Join our growing community across all major social platforms. Get exclusive insights, behind-the-scenes content, and be the first to know about our latest innovations and thought leadership.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00] mb-4 block">
                Visit Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#101D36] leading-tight tracking-tight">
                Find us in Austin
              </h2>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <div className="p-5 bg-[#101D36] flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold mb-0.5">Austin Headquarters</h3>
                  <p className="text-white/60 text-sm">11801 Domain Blvd, Austin, TX 78758</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=11801+Domain+Blvd+Austin+TX+78758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#ff6b00] text-white rounded-lg font-semibold text-sm hover:bg-[#e65c00] transition-colors"
                >
                  Open in Maps
                </a>
              </div>
              <div className="h-[420px] bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.9419!2d-97.7211!3d30.3947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb3d4b769d67%3A0x1234567890abcdef!2s11801%20Domain%20Blvd%2C%20Austin%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  className="w-full h-full borderless-iframe"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BloomTech Austin Office Location"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
