import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, LucideIcon, Mail, MapPin, Phone } from 'lucide-react';

/*
 * Service-page design kit — the home page's visual language (eyebrow + rule,
 * ruled grids, extruded block cards, navy/grey with orange as a minor accent,
 * full-width gutters). Content is passed in verbatim by each service page.
 */

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
});

/* ---------- layout ---------- */

export const Section = ({ tone = 'white', id, children }: { tone?: 'white' | 'grey' | 'navy' | 'dark'; id?: string; children: ReactNode }) => {
  const bg = { white: 'bg-white', grey: 'bg-grey-light', navy: 'bg-navy', dark: 'bg-navy-dark' }[tone];
  return (
    <section id={id} className={`${bg} py-20 lg:py-24 scroll-mt-24`}>
      <div className="w-full px-4 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
};

export const Eyebrow = ({ children, light = false, center = false }: { children: ReactNode; light?: boolean; center?: boolean }) => (
  <p className={`font-bold tracking-widest text-sm uppercase mb-4 flex items-center gap-2 ${center ? 'justify-center' : ''} ${light ? 'text-brand-orange' : 'text-brand-orange-dark'}`}>
    <span className={`w-6 h-px ${light ? 'bg-brand-orange' : 'bg-brand-orange-dark'}`} />
    {children}
    {center && <span className={`w-6 h-px ${light ? 'bg-brand-orange' : 'bg-brand-orange-dark'}`} />}
  </p>
);

export interface Photo { src: string; alt: string }

/** Real photo on an offset navy block — no borders; slow zoom on hover. */
export const MediaFrame = ({ photo, className = '', aspect = 'aspect-[4/3]', flip = false }: { photo: Photo; className?: string; aspect?: string; flip?: boolean }) => (
  <motion.div {...fade(0.1)} className={`relative ${className}`}>
    <div className={`absolute inset-0 rounded-2xl bg-navy ${flip ? '-translate-x-4' : 'translate-x-4'} translate-y-4`} aria-hidden="true" />
    <div className={`group relative overflow-hidden rounded-2xl ${aspect}`}>
      <img src={photo.src} alt={photo.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
      <span className="absolute left-0 bottom-0 h-1 w-16 bg-brand-orange" aria-hidden="true" />
    </div>
  </motion.div>
);

/** Full-width photo band between sections; gently zooms as it scrolls into view. */
export const PhotoBand = ({ photo, height = 'h-[260px] sm:h-[360px] lg:h-[440px]' }: { photo: Photo; height?: string }) => {
  const reduce = useReducedMotion();
  return (
    <div className={`relative overflow-hidden ${height}`}>
      <motion.img src={photo.src} alt={photo.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover"
        initial={reduce ? false : { scale: 1.12 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: 'easeOut' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/10 to-transparent" />
    </div>
  );
};

export const Heading = ({ eyebrow, title, sub, light = false, center = false, className = 'mb-12', image, children }: {
  eyebrow?: ReactNode; title: ReactNode; sub?: ReactNode; light?: boolean; center?: boolean; className?: string;
  /** optional photo shown beside the heading */
  image?: Photo; children?: ReactNode;
}) => {
  const text = (
    <motion.div {...fade()} className={`${center ? 'text-center mx-auto' : ''} max-w-3xl`}>
      {eyebrow && <Eyebrow light={light} center={center}>{eyebrow}</Eyebrow>}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {sub && <p className={`text-lg mt-4 leading-relaxed ${light ? 'text-white/65' : 'text-gray-600'}`}>{sub}</p>}
      {children && <div className={`text-lg mt-6 leading-relaxed [&_.hl]:font-semibold ${light ? 'text-white/75 [&_.hl]:text-white' : 'text-gray-700 [&_.hl]:text-navy'}`}>{children}</div>}
    </motion.div>
  );
  if (!image) return <div className={className}>{text}</div>;
  return (
    <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${className}`}>
      <div className="lg:col-span-6">{text}</div>
      <div className="lg:col-span-6 pr-4 pb-4">
        <MediaFrame photo={image} />
      </div>
    </div>
  );
};

/* ---------- page hero: copy left, full-bleed real photo right (shared by About / Contact) ---------- */

export const PageHero = ({ photo, eyebrow, title, text, children }: {
  photo: Photo; eyebrow?: ReactNode; title: ReactNode; text?: ReactNode; children?: ReactNode;
}) => (
  <section className="relative bg-navy overflow-hidden">
    <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
      <img src={photo.src} alt={photo.alt} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-navy to-transparent" />
    </div>
    <div className="relative w-full px-4 sm:px-8 lg:px-12 pt-32 lg:pt-40 pb-16 lg:pb-24 lg:min-h-[620px] flex items-center">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}
        className="lg:w-1/2 lg:pr-16 xl:pr-24">
        {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">{title}</h1>
        {text && <p className="text-lg xl:text-xl text-white/75 leading-relaxed max-w-xl">{text}</p>}
        {children}
      </motion.div>
    </div>
    <div className="lg:hidden h-[300px] sm:h-[400px] relative">
      <img src={photo.src} alt={photo.alt} className="absolute inset-0 w-full h-full object-cover" />
    </div>
  </section>
);

/* ---------- overview: text + benefits on the left, a real photo on the right ---------- */

export const Overview = ({ eyebrow = 'Overview', title, children, benefits = [], image, benefitsTitle = 'Client Benefits' }: {
  eyebrow?: ReactNode; title?: ReactNode; children: ReactNode; benefits?: string[]; image?: Photo; benefitsTitle?: string;
}) => (
  <Section tone="white">
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <motion.div {...fade()} className={image ? 'lg:col-span-6' : 'lg:col-span-12 max-w-4xl'}>
        <Eyebrow>{eyebrow}</Eyebrow>
        {title && <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6">{title}</h2>}
        <div className="text-lg text-gray-700 leading-relaxed space-y-4 [&_strong]:text-navy [&_.hl]:text-navy [&_.hl]:font-semibold">{children}</div>
        {benefits.length > 0 && <BenefitsPanel benefits={benefits} title={benefitsTitle} className="mt-10" />}
      </motion.div>
      {image && (
        <div className="lg:col-span-6 pr-4 pb-4">
          <MediaFrame photo={image} />
        </div>
      )}
    </div>
  </Section>
);

/* ---------- client benefits panel (the old sidebar, restyled) ---------- */

export const BenefitsPanel = ({ benefits, title = 'Client Benefits', className = '' }: { benefits: string[]; title?: string; className?: string }) => (
  <motion.div {...fade(0.1)} className={`rounded-2xl bg-navy p-7 lg:p-8 ${className}`}>
    <h3 className="text-lg font-extrabold text-white mb-5">{title}</h3>
    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
      {benefits.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-navy" strokeWidth={3} />
          </span>
          <span className="text-[15px] font-medium text-white/85 leading-snug">{b}</span>
        </li>
      ))}
    </ul>
    <div className="mt-7 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">Need a custom approach?</p>
      <Link to="/contact"
        className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm whitespace-nowrap transition-colors">
        Contact Solutions Architect
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

/* ---------- block cards (extruded, lift on hover — same as home service cards) ---------- */

export interface BlockItem {
  icon?: LucideIcon;
  num?: string;
  tag?: ReactNode;
  title: ReactNode;
  desc?: ReactNode;
  sub?: ReactNode;
  points?: ReactNode[];
  stack?: string[];
  footer?: ReactNode;
  /** optional photo shown across the top of the card */
  image?: Photo;
}

export const BlockGrid = ({ items, cols = 2, dark = false }: { items: BlockItem[]; cols?: 2 | 3 | 4; dark?: boolean }) => {
  const grid = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }[cols];
  return (
    <div className={`grid grid-cols-1 ${grid} gap-5`}>
      {items.map((it, i) => (
        <motion.div key={i} {...fade(Math.min(i * 0.06, 0.3))}
          className={`group flex flex-col h-full rounded-xl p-7 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 ${
            dark
              ? 'bg-white/[0.05] hover:bg-white/[0.08] shadow-[5px_5px_0_0_rgba(255,255,255,0.06)] hover:shadow-[8px_8px_0_0_rgba(255,255,255,0.14)]'
              : 'bg-grey-light hover:bg-white shadow-[5px_5px_0_0_#D5DAE3] hover:shadow-[8px_8px_0_0_#101D36]'
          }`}>
          {it.image && (
            <div className="relative -mx-7 -mt-7 mb-6 h-48 lg:h-56 overflow-hidden rounded-t-xl">
              <img src={it.image.src} alt={it.image.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              <span className="absolute left-0 bottom-0 h-1 w-16 bg-brand-orange" aria-hidden="true" />
            </div>
          )}
          <div className="flex items-center justify-between gap-3 mb-5">
            <span className="flex items-center gap-3">
              {it.icon && (
                <span className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                  dark ? 'bg-white/10 text-white/80 group-hover:bg-white group-hover:text-navy' : 'bg-white text-navy-mid group-hover:bg-navy group-hover:text-white'
                }`}>
                  <it.icon className="w-5 h-5" />
                </span>
              )}
              {it.num && <span className="font-mono text-sm font-bold text-brand-orange-dark">{it.num}</span>}
            </span>
            {it.tag && <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${dark ? 'bg-white/10 text-white/70' : 'bg-white text-gray-600'}`}>{it.tag}</span>}
          </div>
          <h3 className={`text-xl font-extrabold leading-snug mb-1 ${dark ? 'text-white' : 'text-navy'}`}>{it.title}</h3>
          {it.sub && <p className={`text-sm font-semibold mb-3 ${dark ? 'text-white/50' : 'text-gray-500'}`}>{it.sub}</p>}
          {it.desc && <p className={`leading-relaxed mt-2 [&_.hl]:font-semibold ${dark ? 'text-white/70 [&_.hl]:text-white' : 'text-gray-700 [&_.hl]:text-navy'}`}>{it.desc}</p>}
          {it.points && it.points.length > 0 && (
            <ul className="mt-5 space-y-2">
              {it.points.map((p, k) => (
                <li key={k} className={`flex items-start gap-2.5 text-sm leading-relaxed [&_strong]:font-bold ${dark ? 'text-white/80 [&_strong]:text-white' : 'text-gray-700 [&_strong]:text-navy'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-2" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          )}
          {it.stack && it.stack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-auto pt-6">
              {it.stack.map((s) => (
                <span key={s} className={`text-[11px] font-semibold px-2.5 py-1 rounded-md ${dark ? 'bg-white/10 text-white/75' : 'bg-white text-gray-600'}`}>{s}</span>
              ))}
            </div>
          )}
          {it.footer && <div className="mt-auto pt-6">{it.footer}</div>}
        </motion.div>
      ))}
    </div>
  );
};

/* ---------- ruled spec / stack table ---------- */

export const StackTable = ({ rows, head }: { rows: { label: ReactNode; value: ReactNode; icon?: LucideIcon }[]; head?: [string, string] }) => (
  <motion.div {...fade()} className="border-t border-gray-200">
    {head && (
      <div className="hidden sm:grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-6 py-3 border-b border-gray-200">
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-gray-400">{head[0]}</span>
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-gray-400">{head[1]}</span>
      </div>
    )}
    {rows.map((r, i) => (
      <div key={i} className="group grid sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-2 sm:gap-6 py-5 border-b border-gray-200 hover:bg-grey-light transition-colors sm:px-3 sm:-mx-3 rounded-md">
        <span className="flex items-center gap-3">
          {r.icon && (
            <span className="w-8 h-8 rounded-md bg-grey-light group-hover:bg-white text-navy-mid flex items-center justify-center shrink-0 transition-colors">
              <r.icon className="w-4 h-4" />
            </span>
          )}
          <span className="font-bold text-navy">{r.label}</span>
        </span>
        <span className="text-gray-700 leading-relaxed self-center">{r.value}</span>
      </div>
    ))}
  </motion.div>
);

/* ---------- process: see FlowChart below ---------- */

/* ---------- navy feature band: copy + points on the left, credential badge on the right ---------- */

export const FeatureBand = ({ eyebrow, title, sub, text, points = [], badge, tone = 'navy', children }: {
  eyebrow?: ReactNode; title: ReactNode; sub?: ReactNode; text?: ReactNode;
  points?: { title: ReactNode; desc?: ReactNode; icon?: LucideIcon }[];
  badge?: { big: string; small: string; caption?: string };
  tone?: 'navy' | 'dark'; children?: ReactNode;
}) => (
  <Section tone={tone}>
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <motion.div {...fade()} className={badge ? 'lg:col-span-8' : 'lg:col-span-12'}>
        {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">{title}</h2>
        {sub && <p className="text-xl text-white/55 mt-3">{sub}</p>}
        {text && <p className="text-lg text-white/75 leading-relaxed mt-6 max-w-3xl [&_.hl]:text-white [&_.hl]:font-semibold">{text}</p>}
        {points.length > 0 && (
          <div className={`grid gap-3 mt-10 ${points.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {points.map((p, i) => (
              <div key={i} className="group rounded-xl bg-white/[0.05] hover:bg-white/[0.09] p-5 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  {p.icon && (
                    <span className="w-8 h-8 rounded-md bg-white/10 text-white/80 flex items-center justify-center shrink-0 transition-colors group-hover:bg-white group-hover:text-navy">
                      <p.icon className="w-4 h-4" />
                    </span>
                  )}
                  <h4 className="font-bold text-white leading-snug">{p.title}</h4>
                </div>
                {p.desc && <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>}
              </div>
            ))}
          </div>
        )}
        {children}
      </motion.div>
      {badge && (
        <motion.div {...fade(0.15)} className="lg:col-span-4">
          <div className="rounded-2xl bg-white/[0.05] p-10 text-center">
            <span className="block font-mono text-xs font-bold tracking-widest text-white/40 mb-4">{badge.small}</span>
            <span className="block text-5xl font-extrabold text-white tracking-tight">{badge.big}</span>
            {badge.caption && <span className="block text-sm text-white/55 mt-3">{badge.caption}</span>}
            <span className="block w-10 h-px bg-brand-orange mx-auto mt-6" />
          </div>
        </motion.div>
      )}
    </div>
  </Section>
);

/* ---------- interactive list → detail explorer (like the home stack panel) ---------- */

export const Explorer = ({ items }: { items: BlockItem[] }) => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const it = items[active];
  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <ul className="lg:col-span-5 flex flex-col gap-2">
        {items.map((x, i) => {
          const on = i === active;
          return (
            <li key={i}>
              <button type="button" onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
                className={`w-full flex items-center gap-4 rounded-xl px-5 py-4 text-left transition-colors ${on ? 'bg-navy text-white' : 'bg-grey-light text-navy hover:bg-[#ECEFF4]'}`}>
                <span className={`font-mono text-xs font-bold ${on ? 'text-brand-orange' : 'text-gray-400'}`}>{x.num ?? String(i + 1).padStart(2, '0')}</span>
                {x.icon && <x.icon className={`w-5 h-5 shrink-0 ${on ? 'text-white/80' : 'text-navy-mid'}`} />}
                <span className="font-bold leading-snug flex-1">{x.title}</span>
                <ArrowRight className={`w-4 h-4 shrink-0 transition-all ${on ? 'opacity-100 text-brand-orange' : 'opacity-0 -translate-x-1'}`} />
              </button>
            </li>
          );
        })}
      </ul>
      <motion.div key={active} initial={reduce ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}
        className="lg:col-span-7 rounded-2xl bg-white p-8 lg:p-10 shadow-[8px_8px_0_0_#101D36]">
        <div className="flex items-center gap-3 mb-5">
          {it.icon && (
            <span className="w-11 h-11 rounded-lg bg-navy text-white flex items-center justify-center">
              <it.icon className="w-5 h-5" />
            </span>
          )}
          {it.tag && <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-grey-light text-gray-600">{it.tag}</span>}
        </div>
        <h3 className="text-2xl lg:text-3xl font-extrabold text-navy leading-tight mb-2">{it.title}</h3>
        {it.sub && <p className="font-semibold text-gray-500 mb-4">{it.sub}</p>}
        {it.desc && <p className="text-lg text-gray-700 leading-relaxed [&_.hl]:text-navy [&_.hl]:font-semibold">{it.desc}</p>}
        {it.points && it.points.length > 0 && (
          <ul className="mt-6 grid sm:grid-cols-2 gap-2">
            {it.points.map((p, k) => (
              <li key={k} className="flex items-start gap-2.5 rounded-lg bg-grey-light px-4 py-3 text-sm text-gray-700 [&_strong]:text-navy [&_strong]:font-bold">
                <Check className="w-4 h-4 text-navy-mid shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
        {it.stack && it.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-6">
            {it.stack.map((s) => <span key={s} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-grey-light text-gray-600">{s}</span>)}
          </div>
        )}
      </motion.div>
    </div>
  );
};

/* ---------- process flowchart ----------
 * Desktop: a horizontal track with icon nodes; step cards alternate above and below
 * the line (zigzag). The line draws itself on scroll, nodes pop in, and an orange
 * dot travels the track. Hovering a card lights its node. Mobile: vertical timeline.
 */

type Step = { step?: string; title: string; desc: string; icon?: LucideIcon };

const FlowCard = ({ s, i, on, setOn, align }: { s: Step; i: number; on: boolean; setOn: (i: number | null) => void; align: 'top' | 'bottom' }) => (
  <div onMouseEnter={() => setOn(i)} onMouseLeave={() => setOn(null)}
    className={`relative rounded-xl p-5 transition-all duration-200 ${on ? 'bg-white -translate-y-1 shadow-[6px_6px_0_0_#101D36]' : 'bg-white shadow-[4px_4px_0_0_#D5DAE3]'} ${align === 'top' ? 'mb-0' : 'mt-0'}`}>
    <span className="font-mono text-xs font-bold text-brand-orange-dark">{s.step ?? String(i + 1).padStart(2, '0')}</span>
    <h4 className="text-base font-extrabold text-navy leading-snug mt-1 mb-1.5">{s.title}</h4>
    <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
  </div>
);

export const FlowChart = ({ items }: { items: Step[] }) => {
  const reduce = useReducedMotion();
  const [on, setOn] = useState<number | null>(null);
  const n = items.length;
  const cols = { gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` };

  return (
    <>
      {/* Desktop zigzag */}
      <div className="hidden lg:block">
        {/* top cards (even steps) */}
        <div className="grid gap-4 items-end" style={cols}>
          {items.map((s, i) => (
            <motion.div key={i} {...fade(0.15 + i * 0.08)} className="flex flex-col justify-end">
              {i % 2 === 0 && <FlowCard s={s} i={i} on={on === i} setOn={setOn} align="top" />}
            </motion.div>
          ))}
        </div>

        {/* track + nodes */}
        <div className="relative my-1">
          <div className="grid gap-4" style={cols}>
            {items.map((s, i) => (
              <div key={i} className={`flex flex-col items-center ${i % 2 === 0 ? '' : 'flex-col-reverse'}`}>
                <span className={`w-px h-8 transition-colors ${on === i ? 'bg-navy' : 'bg-gray-300'}`} />
                <motion.span
                  initial={reduce ? false : { scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.3 + i * 0.12 }}
                  onMouseEnter={() => setOn(i)} onMouseLeave={() => setOn(null)}
                  className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-200 ${on === i ? 'bg-navy text-white' : 'bg-white text-navy-mid shadow-[0_0_0_6px_#F5F6F8]'}`}>
                  {s.icon ? <s.icon className="w-5 h-5" /> : <span className="font-mono text-sm font-bold">{i + 1}</span>}
                </motion.span>
                <span className="w-px h-8 bg-transparent" />
              </div>
            ))}
          </div>
          {/* the line, behind the nodes */}
          <div className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-gray-300 rounded-full" style={{ left: `${50 / n}%`, right: `${50 / n}%` }}>
            <motion.div className="absolute inset-0 bg-navy rounded-full origin-left"
              initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.2 }} />
            {!reduce && (
              <motion.span className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 -ml-1 rounded-full bg-brand-orange"
                animate={{ left: ['0%', '100%'] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'linear', delay: 1.6 }} />
            )}
          </div>
        </div>

        {/* bottom cards (odd steps) */}
        <div className="grid gap-4 items-start" style={cols}>
          {items.map((s, i) => (
            <motion.div key={i} {...fade(0.15 + i * 0.08)}>
              {i % 2 === 1 && <FlowCard s={s} i={i} on={on === i} setOn={setOn} align="bottom" />}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet vertical timeline */}
      <div className="lg:hidden relative pl-16">
        <div className="absolute left-7 top-2 bottom-2 w-0.5 bg-gray-300">
          <motion.div className="absolute inset-0 bg-navy origin-top" initial={reduce ? false : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.4 }} />
        </div>
        <div className="space-y-5">
          {items.map((s, i) => (
            <motion.div key={i} {...fade(Math.min(i * 0.06, 0.3))} className="relative">
              <span className="absolute -left-16 top-3 w-14 h-14 rounded-full bg-white text-navy-mid flex items-center justify-center shadow-[0_0_0_6px_#F5F6F8]">
                {s.icon ? <s.icon className="w-5 h-5" /> : <span className="font-mono text-sm font-bold">{i + 1}</span>}
              </span>
              <FlowCard s={s} i={i} on={on === i} setOn={setOn} align="top" />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

/** Kept names: both process styles now render as the flowchart. */
export const Steps = FlowChart;
export const StepList = FlowChart;

/* ---------- closing CTA band ---------- */

export const CtaBand = ({ eyebrow, title, text, button, onClick, cardTitle, cardText, email = 'info@bloomtechus.com' }: {
  eyebrow?: ReactNode; title: ReactNode; text?: ReactNode; button: string; onClick: () => void;
  cardTitle?: string; cardText?: string; email?: string;
}) => (
  <Section tone="navy">
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <motion.div {...fade()} className="lg:col-span-7">
        {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">{title}</h2>
        {text && <p className="text-lg text-white/75 leading-relaxed max-w-xl [&_.hl]:text-white [&_.hl]:font-semibold">{text}</p>}
        <button type="button" onClick={onClick}
          className="group mt-10 inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold transition-colors">
          {button}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
      <motion.div {...fade(0.15)} className="lg:col-span-5">
        {(cardTitle || cardText) && (
          <div className="mb-4">
            {cardTitle && <p className="text-xl font-extrabold text-white">{cardTitle}</p>}
            {cardText && <p className="text-white/60 mt-1">{cardText}</p>}
          </div>
        )}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {[
            { icon: MapPin, label: 'Office', value: '11801 Domain Blvd, Austin, TX 78758', href: undefined },
            { icon: Phone, label: 'Phone', value: '(737) 329-8158', href: 'tel:+17373298158' },
            { icon: Mail, label: 'Email', value: email, href: `mailto:${email}` },
          ].map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <span className="w-10 h-10 rounded-full bg-white/10 text-white/80 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-wider text-white/45">{label}</span>
                  <span className="block font-bold text-white break-words">{value}</span>
                </span>
              </>
            );
            return href
              ? <a key={label} href={href} className="flex items-center gap-4 py-4 hover:opacity-80 transition-opacity">{inner}</a>
              : <div key={label} className="flex items-center gap-4 py-4">{inner}</div>;
          })}
        </div>
      </motion.div>
    </div>
  </Section>
);

/** Small inline highlight used inside paragraphs (replaces the old orange spans). */
export const Hl = ({ children }: { children: ReactNode }) => <span className="hl">{children}</span>;
