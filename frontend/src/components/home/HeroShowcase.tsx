import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui';

// Real photography (Unsplash), one per service line
const services = [
  {
    title: 'Infrastructure & servers',
    blurb: 'Purpose-built AMD EPYC servers, enterprise NAS and rack & roll deployments — 72-hour burn-in tested.',
    tags: 'AMD EPYC · Proxmox VE · OpenZFS',
    link: '/services/custom-server-design-deployment',
    img: '/images/hero-bg-infra.webp',
    alt: 'Engineers reviewing equipment in a server room',
  },
  {
    title: 'AI & automation',
    blurb: 'Claude and private LLMs integrated into your systems — RAG on your own data, on-premise when it matters.',
    tags: 'Anthropic Claude · AWS Bedrock · On-prem LLMs',
    link: '/services/ai-machine-learning',
    img: '/images/hero-bg-ai.webp',
    alt: 'Engineer working at a hardware lab bench',
  },
  {
    title: 'Web & mobile apps',
    blurb: 'Bespoke CRMs, ERPs and customer-facing apps on clean, scalable architecture you own outright.',
    tags: 'React / Next.js · Django / FastAPI · Node.js',
    link: '/services/custom-mobile-web-applications',
    img: '/images/hero-bg-software.webp',
    alt: 'Development team working together on laptops',
  },
  {
    title: 'Security & compliance',
    blurb: 'CISA-certified Zero Trust architecture, EDR and immutable backups — audit-ready from day one.',
    tags: 'CrowdStrike · Okta / Entra ID · SOC2 / HIPAA',
    link: '/services/security-data-protection',
    img: '/images/hero-bg-security.webp',
    alt: 'Server racks with structured network cabling',
  },
  {
    title: 'Cloud & DevOps',
    blurb: 'Managed cloud infrastructure, CI/CD pipelines and container orchestration across every major provider.',
    tags: 'AWS / Azure / GCP · Kubernetes · CI/CD',
    link: '/services/cloud-hosting-deployment',
    img: '/images/hero-bg-cloud.webp',
    alt: 'Laptop showing application code',
  },
  {
    title: 'Marketing & SEO',
    blurb: 'Technical SEO, precision PPC and content strategy that turns search into a pipeline.',
    tags: 'Ahrefs / SEMRush · GA4 · Google Ads',
    link: '/services/online-marketing-services',
    img: '/images/hero-bg-marketing.webp',
    alt: 'Analytics dashboard on a laptop screen',
  },
];

const ADVANCE_MS = 6000;

export const HeroShowcase = () => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = services[active];

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % services.length), ADVANCE_MS);
    return () => clearTimeout(t);
  }, [active, paused, reduce]);

  const photo = (
    <div className="relative w-full h-full overflow-hidden bg-navy-dark">
      {services.map((s, i) => (
        <img
          key={s.img}
          src={s.img}
          alt={i === active ? s.alt : ''}
          aria-hidden={i !== active}
          loading={i === 0 ? 'eager' : 'lazy'}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: i === active ? 1 : 0,
            transform: i === active && !reduce ? 'scale(1.04)' : 'scale(1)',
            transition: 'opacity 900ms ease, transform 7s ease-out',
          }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12 lg:pb-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="max-w-lg"
          >
            <span className="font-mono text-sm font-bold text-brand-orange">
              {String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mt-2 mb-3">{current.title}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{current.blurb}</p>
            <p className="text-xs font-semibold text-white/55 mb-6">{current.tags}</p>
            <Link to={current.link} className="group inline-flex items-center gap-2 font-bold text-white hover:text-brand-orange transition-colors">
              Explore this service
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <section className="relative bg-navy overflow-hidden" onMouseLeave={() => setPaused(false)}>
      {/* Photo — full-bleed right half on desktop */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2" onMouseEnter={() => setPaused(true)}>
        {photo}
      </div>

      <div className="relative w-full px-4 sm:px-8 lg:px-12 pt-32 lg:pt-36 pb-16 lg:pb-14 lg:min-h-[calc(100vh)] lg:max-h-none">
        <div className="lg:w-1/2 lg:pr-16 xl:pr-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <p className="text-brand-orange font-bold tracking-widest text-sm uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-brand-orange" />
              Welcome to BloomTech Corporation
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-[3.4rem] xl:text-6xl 2xl:text-7xl font-extrabold mb-5 leading-[1.05] tracking-tight text-white">
              Build the future.
              <span className="block text-brand-orange">Define it.</span>
            </h1>
            <p className="text-white/75 text-base xl:text-lg 2xl:text-xl mb-8 leading-relaxed max-w-xl 2xl:max-w-2xl">
              BloomTech lives at the intersection of vision and execution. We deliver the high-performance infrastructure and AI-driven solutions your business needs to lead. From enterprise systems to secure cloud scaling, we don't just prepare you for the future — we build the technical foundation that ensures you define and dominate it today.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Button to="/contact" icon={ArrowRight} className="w-full sm:w-auto text-base px-8 py-4">
                Start a Project
              </Button>
              <a href="#services" className="group inline-flex items-center gap-2 font-bold text-white hover:text-brand-orange transition-colors">
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Photo — stacked on mobile/tablet */}
          <div className="lg:hidden mt-12 -mx-4 sm:-mx-8 h-[440px] sm:h-[520px]">{photo}</div>

          {/* Service selector */}
          <nav aria-label="Services" className="mt-10 lg:mt-12">
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/45 mb-2">One partner for</p>
            <ul onMouseEnter={() => setPaused(true)}>
              {services.map((s, i) => {
                const on = i === active;
                return (
                  <li key={s.title} className="relative">
                    <Link
                      to={s.link}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => { setActive(i); setPaused(true); }}
                      aria-current={on ? 'true' : undefined}
                      className="group flex items-baseline gap-5 py-2.5 2xl:py-3.5"
                    >
                      <span className={`font-mono text-xs font-bold w-6 shrink-0 transition-colors ${on ? 'text-brand-orange' : 'text-white/30'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={`flex-1 text-lg sm:text-xl 2xl:text-2xl font-extrabold tracking-tight transition-colors ${on ? 'text-white' : 'text-white/35 group-hover:text-white/70'}`}>
                        {s.title}
                      </span>
                      <ArrowUpRight className={`w-5 h-5 shrink-0 self-center transition-all ${on ? 'text-brand-orange opacity-100' : 'opacity-0'}`} />
                    </Link>
                    <span className="absolute left-11 right-0 bottom-0 h-px bg-white/10" />
                    {on && (
                      <motion.span
                        key={`${active}-${paused}`}
                        className="absolute left-11 right-0 bottom-0 h-px bg-brand-orange origin-left"
                        initial={{ scaleX: paused || reduce ? 1 : 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: paused || reduce ? 0 : ADVANCE_MS / 1000, ease: 'linear' }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
