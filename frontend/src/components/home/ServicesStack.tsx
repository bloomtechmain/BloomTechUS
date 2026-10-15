import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Smartphone, Brain, Network, Server, Cloud, ShieldCheck, Building2, Megaphone, Database, Monitor, Lightbulb, type LucideIcon } from 'lucide-react';
import { ServiceDiagram } from './ServiceDiagrams';

export interface StackService {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

type LayerId = 'growth' | 'apps' | 'cloud' | 'infra' | 'gov';

// Indices refer to the services array passed in (the site's 11 service lines)
const layers: { id: LayerId; name: string; line: string; services: number[] }[] = [
  { id: 'growth', name: 'Growth', line: 'Getting found and turning search into pipeline.', services: [7] },
  { id: 'apps', name: 'Applications', line: 'The software your team and customers use every day.', services: [0, 6, 1] },
  { id: 'cloud', name: 'Cloud & platform', line: 'Where your applications run, scale and ship from.', services: [4] },
  { id: 'infra', name: 'Infrastructure', line: 'The physical foundation — networks, compute, storage and rooms.', services: [2, 3, 8, 9] },
  { id: 'gov', name: 'Security & governance', line: 'Not a layer you add later — it wraps every layer from day one.', services: [5, 10] },
];
const slabs = layers.filter((l) => l.id !== 'gov').reverse(); // bottom → top

/* ---------- layered architecture diagram ---------- */
// Short chip labels + icons for the 11 service lines (same index order as the services prop)
const chips: { label: string; icon: LucideIcon }[] = [
  { label: 'Web & Mobile Apps', icon: Smartphone },
  { label: 'AI Integration', icon: Brain },
  { label: 'Network Design', icon: Network },
  { label: 'Custom Servers', icon: Server },
  { label: 'Cloud Hosting', icon: Cloud },
  { label: 'Security & Data', icon: ShieldCheck },
  { label: 'CRM & ERP', icon: Building2 },
  { label: 'Marketing & SEO', icon: Megaphone },
  { label: 'NAS Storage', icon: Database },
  { label: 'AV & Collaboration', icon: Monitor },
  { label: 'IT Consulting', icon: Lightbulb },
];

interface Props { services: StackService[] }

export const ServicesStack = ({ services }: Props) => {
  const reduce = useReducedMotion();
  const [active, setActiveRaw] = useState<LayerId>('apps');
  const [hotService, setHotService] = useState<number | null>(0);
  const layer = layers.find((l) => l.id === active)!;
  const govOn = active === 'gov';
  const slabIndex = slabs.findIndex((s) => s.id === active);
  const gov = layers.find((l) => l.id === 'gov')!;
  const topDown = [...slabs].reverse(); // Growth first, Infrastructure last

  // Switching layer makes its first service the animated one, unless a specific service was pointed at
  const setActive = (id: LayerId, sIdx?: number) => {
    if (sIdx !== undefined) setHotService(sIdx);
    else if (id !== active) setHotService(layers.find((l) => l.id === id)!.services[0]);
    setActiveRaw(id);
  };

  const pick = (id: LayerId, sIdx: number) => setActive(id, sIdx);

  const chip = (sIdx: number, layerId: LayerId, dark: boolean) => {
    const c = chips[sIdx];
    const hot = hotService === sIdx && active === layerId;
    return (
      <button
        key={sIdx}
        type="button"
        onMouseEnter={() => pick(layerId, sIdx)}
        onFocus={() => pick(layerId, sIdx)}
        onClick={() => pick(layerId, sIdx)}
        className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left transition-colors duration-200 ${
          hot ? (dark ? 'bg-white text-navy' : 'bg-navy text-white') : dark ? 'bg-white/10 text-white hover:bg-white/15' : 'bg-white text-navy hover:bg-white/70'
        }`}
      >
        <c.icon className={`w-4 h-4 shrink-0 ${hot ? 'text-brand-orange' : dark ? 'text-white/60' : 'text-navy-mid'}`} />
        <span className="text-[13px] font-bold leading-tight">{c.label}</span>
      </button>
    );
  };

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      {/* Diagram */}
      <div className="lg:col-span-6 min-w-0">
        <div className="flex flex-col sm:flex-row gap-3" role="group" aria-label="Technology stack layers">
          {/* Flow spine: data moves up from the foundation */}
          <div className="relative w-6 shrink-0 hidden sm:block" aria-hidden="true">
            <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-px bg-border-grey" />
            {!reduce && (
              <motion.span
                className="absolute left-1/2 -translate-x-1/2 w-1.5 h-6 rounded-full bg-brand-orange"
                initial={{ bottom: '6%', opacity: 0 }}
                animate={{ bottom: ['6%', '90%'], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
            {topDown.map((l, i) => (
              <span key={l.id}
                className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full transition-colors ${active === l.id ? 'bg-navy' : 'bg-border-grey'}`}
                style={{ top: `calc(${(i + 0.5) * 25}% - 6px)` }} />
            ))}
          </div>

          {/* Layer rows */}
          <div className="flex-1 min-w-0 flex flex-col gap-2.5">
            {topDown.map((l, i) => {
              const on = active === l.id;
              const level = slabs.length - i;
              return (
                <motion.div key={l.id}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: 0.08 * (slabs.length - i), ease: 'easeOut' }}
                  onMouseEnter={() => setActive(l.id)}
                  className={`rounded-xl p-4 transition-colors duration-200 ${on ? 'bg-navy' : 'bg-grey-light'}`}
                >
                  <button type="button" onClick={() => setActive(l.id)} onFocus={() => setActive(l.id)}
                    className="flex items-baseline justify-between w-full mb-3 text-left">
                    <span className={`text-sm font-extrabold ${on ? 'text-white' : 'text-navy'}`}>{l.name}</span>
                    <span className={`font-mono text-[10px] font-bold tracking-wider ${on ? 'text-brand-orange' : 'text-gray-400'}`}>L{level}</span>
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    {l.services.map((sIdx) => chip(sIdx, l.id, on))}
                  </div>
                </motion.div>
              );
            })}

            {/* Base caption */}
            <p className="font-mono text-[10px] font-bold tracking-wider text-gray-400 text-center pt-1">FOUNDATION ↑ TO CUSTOMER-FACING</p>
          </div>

          {/* Security & governance pillar spans every layer */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            onMouseEnter={() => setActive('gov')}
            className={`w-full sm:w-[30%] sm:max-w-[170px] shrink-0 rounded-xl p-4 sm:mb-7 flex flex-col transition-colors duration-200 ${govOn ? 'bg-navy' : 'bg-grey-light'}`}
          >
            <button type="button" onClick={() => setActive('gov')} onFocus={() => setActive('gov')} className="text-left mb-3">
              <ShieldCheck className={`w-5 h-5 mb-2 ${govOn ? 'text-white' : 'text-navy-mid'}`} />
              <span className={`block text-sm font-extrabold leading-tight ${govOn ? 'text-white' : 'text-navy'}`}>Security &amp; governance</span>
              <span className={`block font-mono text-[10px] font-bold tracking-wider mt-1 ${govOn ? 'text-brand-orange' : 'text-gray-400'}`}>ALL LAYERS</span>
            </button>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 mt-auto">
              {gov.services.map((sIdx) => chip(sIdx, 'gov', govOn))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Detail panel — same visual language as the stack: extruded blocks that lift */}
      <div className="lg:col-span-6 min-w-0 lg:min-h-[640px] lg:pt-8">
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}>
            {/* Header: mini stack locator + layer name */}
            <div className="flex items-center gap-6 mb-10">
              <MiniStack active={active} />
              <div className="min-w-0">
                <p className="font-mono text-xs font-bold text-brand-orange-dark mb-1.5 uppercase tracking-wider">
                  {govOn ? 'Spans layers L1–L4' : `Layer L${slabIndex + 1} of ${slabs.length}`}
                </p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">{layer.name}</h3>
                <p className="text-gray-700 mt-1.5">{layer.line}</p>
              </div>
            </div>

            {/* Service blocks */}
            <ul className="grid sm:grid-cols-2 gap-5">
              {layer.services.map((sIdx, k) => {
                const s = services[sIdx];
                const hot = hotService === sIdx;
                const wide = layer.services.length % 2 === 1 && k === layer.services.length - 1;
                return (
                  <motion.li key={sIdx}
                    className={wide ? 'sm:col-span-2' : ''}
                    initial={reduce ? false : { opacity: 0, y: -18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 + k * 0.09, ease: 'easeOut' }}>
                    <Link to={s.link}
                      onMouseEnter={() => setHotService(sIdx)} onFocus={() => setHotService(sIdx)}
                      className={`group relative flex flex-col h-full rounded-xl p-5 transition-all duration-200 ${
                        hot
                          ? 'bg-white -translate-x-1 -translate-y-1 shadow-[8px_8px_0_0_#101D36]'
                          : 'bg-grey-light shadow-[5px_5px_0_0_#D5DAE3]'
                      }`}>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="flex items-start gap-2.5 min-w-0">
                          <IsoCube state={hot ? 'hot' : 'on'} />
                          <span className="font-mono text-sm font-bold text-brand-orange-dark">{String(sIdx + 1).padStart(2, '0')}</span>
                          <span className="text-base font-extrabold text-navy leading-snug">{s.title}</span>
                        </span>
                        <ArrowUpRight className={`w-5 h-5 shrink-0 transition-colors ${hot ? 'text-brand-orange' : 'text-gray-300'}`} />
                      </div>
                      <div className={`mt-auto w-full ${wide ? 'max-w-[360px] mx-auto' : ''}`}>
                        <ServiceDiagram index={sIdx} active={hot} />
                      </div>
                      <span className="sr-only">{s.description} {s.tags.join(', ')}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/* Small isometric cube — the same block that sits on the slabs */
const IsoCube = ({ state }: { state: 'on' | 'hot' }) => {
  const c = state === 'hot' ? { top: '#2D4170', left: '#1B2B4D', right: '#101D36' } : { top: '#D5DCE8', left: '#B8C3D6', right: '#9AA8C0' };
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" aria-hidden="true">
      <polygon points="12,2 22,7.5 12,13 2,7.5" fill={c.top} style={{ transition: 'fill 200ms' }} />
      <polygon points="2,7.5 12,13 12,23 2,17.5" fill={c.left} style={{ transition: 'fill 200ms' }} />
      <polygon points="22,7.5 12,13 12,23 22,17.5" fill={c.right} style={{ transition: 'fill 200ms' }} />
    </svg>
  );
};

/* Miniature of the layer diagram with the current layer lit — a "you are here" locator */
const MiniStack = ({ active }: { active: LayerId }) => {
  const order: LayerId[] = ['growth', 'apps', 'cloud', 'infra'];
  return (
    <svg viewBox="0 0 76 64" className="w-[76px] h-16 shrink-0" aria-hidden="true">
      {order.map((id, i) => (
        <rect key={id} x="0" y={i * 16} width="54" height="12" rx="3" fill={active === id ? '#101D36' : '#E2E6ED'} />
      ))}
      <rect x="58" y="0" width="18" height="60" rx="3" fill={active === 'gov' ? '#101D36' : '#E2E6ED'} />
    </svg>
  );
};
