import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Send, CheckCircle, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { seoConfigs } from '../utils/seoConfig';
import { PageHero, Section, Heading } from '../components/service-details/kit';

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
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@bloomtechusa.com',
      link: 'mailto:info@bloomtechusa.com',
    },
    {
      icon: MapPin,
      title: 'Office Location',
      content: 'BloomTech Corporation\n11801 Domain Blvd\nAustin, TX 78758',
      link: 'https://www.google.com/maps/search/?api=1&query=11801+Domain+Blvd+Austin+TX+78758',
    }
  ];

  return (
    <div className="bg-white">
      <SEO config={seoConfigs.contact} />

      {/* Hero */}
      <PageHero
        photo={{ src: '/images/hero-bg-software.webp', alt: 'Team working together on laptops' }}
        eyebrow="Get In Touch"
        title={<>Professional IT consulting <span className="text-white/55">&amp; enterprise technology solutions</span></>}
        text="From IT consulting and custom software to infrastructure, AI, and cybersecurity — our certified experts deliver technology solutions tailored to your business."
      />

      {/* Contact information strip — hairline-divided */}
      <section className="bg-white border-b border-gray-200">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <a key={i} href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group flex items-start gap-4 py-8 md:px-8 border-gray-200 ${i > 0 ? 'border-t md:border-t-0 md:border-l' : 'md:pl-0'}`}>
                  <span className="w-12 h-12 rounded-xl bg-grey-light text-navy-mid flex items-center justify-center shrink-0 transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{info.title}</span>
                    <span className="block font-bold text-navy whitespace-pre-line leading-snug group-hover:text-brand-orange-dark transition-colors">{info.content}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <Section tone="grey">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column — information */}
          <div className="lg:col-span-5">
            <Heading eyebrow="Let's Connect" title="Request professional IT consulting & technology services" className="mb-10">
              <p>Looking for professional IT consulting, custom software, enterprise infrastructure, AI solutions, or a stronger digital presence? Contact us to explore how our certified consultants and engineers can transform your business. Our solution architects respond within 24 hours.</p>
            </Heading>

            {/* Office location highlight */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden bg-navy">
              <div className="relative h-44 overflow-hidden">
                <img src="/images/services/av-b.webp" alt="Modern office interior" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-navy/10" />
              </div>
              <div className="p-7 -mt-8 relative">
                <h3 className="text-xl font-extrabold text-white mb-2">Our Austin Hub</h3>
                <p className="text-white/65 leading-relaxed mb-5">Located in the heart of the Domain, a premier center for technology and innovation.</p>
                <div className="flex items-start gap-3 pt-5 border-t border-white/10">
                  <span className="w-9 h-9 rounded-full bg-white/10 text-white/80 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div className="text-sm text-white/85 leading-relaxed">
                    <p className="font-bold text-white">BloomTech Corporation</p>
                    <p>11801 Domain Blvd</p>
                    <p>Austin, TX 78758</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column — form */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 rounded-2xl bg-white p-7 sm:p-10 shadow-[8px_8px_0_0_#101D36]">
            {isSubmitted ? (
              <div className="py-16 text-center">
                <span className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </span>
                <h3 className="text-2xl font-extrabold text-navy mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className={labelCls}>
                      Name (First & Last)
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className={inputCls}
                    />
                  </div>

                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className={labelCls}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className={labelCls}>
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john.doe@company.com"
                    className={inputCls}
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    So we can send you relevant technical documentation
                  </p>
                </div>

                {/* Area of Interest */}
                <div>
                  <label className={labelCls}>
                    Area of Interest
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((interest, i) => {
                      const on = formData.interests.includes(interest);
                      return (
                        <label key={i}
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold cursor-pointer select-none transition-colors ${on ? 'bg-navy text-white' : 'bg-grey-light text-navy hover:bg-[#ECEFF4]'}`}>
                          <input
                            type="checkbox"
                            checked={on}
                            onChange={() => handleInterestToggle(interest)}
                            className="sr-only"
                          />
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${on ? 'bg-brand-orange' : 'bg-white'}`}>
                            {on && <CheckCircle className="w-3 h-3 text-white" />}
                          </span>
                          {interest}
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className={labelCls}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your project goals or challenges"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {error && (
                  <p className="text-sm font-semibold text-red-600">{error}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-dark disabled:opacity-60 text-white font-bold transition-colors"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </Section>

      {/* Social media */}
      <Section tone="dark">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Heading light eyebrow="Connect With Us" title="Follow our journey" sub="Stay updated with the latest insights, innovations, and success stories from BloomTechUSA." className="mb-0" />
          </div>
          <div className="lg:col-span-6">
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { href: '#linkedin', Icon: Linkedin },
                { href: '#twitter', Icon: Twitter },
                { href: '#facebook', Icon: Facebook },
                { href: '#instagram', Icon: Instagram },
                { href: '#youtube', Icon: Youtube },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} aria-label={href.slice(1)}
                  className="w-14 h-14 rounded-xl bg-white/[0.06] text-white/80 flex items-center justify-center transition-all hover:bg-white hover:text-navy hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="rounded-xl bg-white/[0.05] p-5">
              <p className="text-sm text-white/65 leading-relaxed">
                <span className="font-bold text-white">Coming Soon:</span> Join our growing community across all major social platforms. Get exclusive insights, behind-the-scenes content, and be the first to know about our latest innovations and thought leadership.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section tone="white">
        <Heading eyebrow="Visit Us" title="Find us in Austin" className="mb-10" />
        <div className="rounded-2xl overflow-hidden bg-white shadow-[8px_8px_0_0_#101D36]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 bg-navy">
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-10 h-10 rounded-full bg-white/10 text-white/80 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </span>
              <div className="min-w-0">
                <h3 className="font-extrabold text-white">Austin Headquarters</h3>
                <p className="text-sm text-white/60">11801 Domain Blvd, Austin, TX 78758</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=11801+Domain+Blvd+Austin+TX+78758"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-bold whitespace-nowrap transition-colors"
            >
              Open in Maps
            </a>
          </div>
          <div className="h-[380px] lg:h-[460px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.9419!2d-97.7211!3d30.3947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb3d4b769d67%3A0x1234567890abcdef!2s11801%20Domain%20Blvd%2C%20Austin%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="borderless-iframe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BloomTech Austin Office Location"
            />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

const labelCls = 'block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2';
const inputCls = 'w-full rounded-xl bg-grey-light px-4 py-3.5 text-navy placeholder:text-gray-400 outline-none transition-shadow focus:bg-white focus:ring-2 focus:ring-navy';

export default ContactUs;
