import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/*
 * One small flow diagram per service line. The service's tools are the nodes;
 * when `active`, links animate, packets travel and key nodes light up.
 * All drawn in a 280×140 box with flat fills — no outlines, no fake metrics.
 */

const C = {
  line: '#C3CAD7',
  on: '#3E5385',
  accent: '#FF6B00',
  node: '#FFFFFF',
  navy: '#101D36',
  mid: '#1B2B4D',
  muted: '#8A93A6',
  soft: '#E2E6ED',
};
const FONT = 'Inter, sans-serif';
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';
const textW = (s: string, size = 10) => s.length * size * 0.58 + 16;

interface Ctx { active: boolean; reduce: boolean }

/* ---------- primitives ---------- */

const Node = ({ x, y, label, ctx, lit = false, w, h = 24, sub }: {
  x: number; y: number; label: string; ctx: Ctx; lit?: boolean; w?: number; h?: number; sub?: string;
}) => {
  const width = w ?? textW(label);
  const on = ctx.active && lit;
  return (
    <g>
      <rect x={x} y={y} width={width} height={h} rx={6} fill={on ? C.navy : ctx.active ? '#EEF1F5' : C.node} style={{ transition: 'fill 250ms' }} />
      <text x={x + width / 2} y={y + h / 2 + 3.5} textAnchor="middle" fontFamily={FONT} fontSize="10" fontWeight="700"
        fill={on ? '#fff' : C.navy} style={{ transition: 'fill 250ms' }}>{label}</text>
      {sub && (
        <text x={x + width / 2} y={y + h + 11} textAnchor="middle" fontFamily={MONO} fontSize="8" fontWeight="700" fill={C.muted}>{sub}</text>
      )}
    </g>
  );
};

/** A link with flowing dashes and an optional travelling packet when active */
const Flow = ({ d, ctx, dur = 1.6, delay = 0, packet = true, color }: {
  d: string; ctx: Ctx; dur?: number; delay?: number; packet?: boolean; color?: string;
}) => (
  <g>
    <path d={d} fill="none" stroke={ctx.active ? (color ?? C.on) : C.line} strokeWidth={1.5}
      strokeDasharray={ctx.active ? '4 4' : undefined}
      className={ctx.active && !ctx.reduce ? 'flow-dash' : undefined}
      style={{ transition: 'stroke 250ms' }} />
    {ctx.active && !ctx.reduce && packet && (
      <circle r="3" fill={C.accent}>
        <animateMotion dur={`${dur}s`} begin={`-${delay}s`} repeatCount="indefinite" path={d} />
      </circle>
    )}
  </g>
);

const Cylinder = ({ x, y, w = 34, h = 30, label, ctx, lit = true }: { x: number; y: number; w?: number; h?: number; label?: string; ctx: Ctx; lit?: boolean }) => {
  const on = ctx.active && lit;
  const fill = on ? C.navy : C.node;
  return (
    <g>
      <path d={`M${x} ${y + 5} v${h - 10} a${w / 2} 5 0 0 0 ${w} 0 v${-(h - 10)}`} fill={fill} style={{ transition: 'fill 250ms' }} />
      <ellipse cx={x + w / 2} cy={y + 5} rx={w / 2} ry={5} fill={on ? C.on : C.soft} style={{ transition: 'fill 250ms' }} />
      {label && <text x={x + w / 2} y={y + h + 12} textAnchor="middle" fontFamily={FONT} fontSize="9" fontWeight="700" fill={C.navy}>{label}</text>}
    </g>
  );
};

const Caption = ({ x, y, children, anchor = 'start' }: { x: number; y: number; children: ReactNode; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={x} y={y} textAnchor={anchor} fontFamily={MONO} fontSize="8" fontWeight="700" fill={C.muted} letterSpacing="0.06em">{children}</text>
);

/* ---------- 01 Web & mobile ---------- */
const WebMobile = ({ ctx }: { ctx: Ctx }) => (
  <>
    {/* browser */}
    <rect x="8" y="22" width="62" height="44" rx="6" fill={ctx.active ? C.navy : C.node} style={{ transition: 'fill 250ms' }} />
    {[0, 1, 2].map((i) => <circle key={i} cx={16 + i * 6} cy="29" r="1.8" fill={ctx.active ? C.on : C.line} />)}
    <rect x="14" y="36" width="34" height="4" rx="2" fill={ctx.active ? '#2D4170' : C.soft} />
    <rect x="14" y="44" width="48" height="4" rx="2" fill={ctx.active ? '#2D4170' : C.soft} />
    <rect x="14" y="52" width="26" height="4" rx="2" fill={ctx.active ? '#2D4170' : C.soft} />
    {/* phone */}
    <rect x="30" y="74" width="24" height="42" rx="5" fill={ctx.active ? C.navy : C.node} style={{ transition: 'fill 250ms' }} />
    <rect x="38" y="78" width="8" height="2" rx="1" fill={ctx.active ? C.on : C.line} />
    <Caption x={42} y={132} anchor="middle">REACT / NEXT.JS</Caption>

    <Flow d="M70 44 C 86 44, 86 70, 102 70" ctx={ctx} dur={1.4} />
    <Flow d="M54 95 C 80 95, 80 70, 102 70" ctx={ctx} dur={1.4} delay={0.7} />
    <Node x={102} y={58} label="Node.js" ctx={ctx} lit sub="GATEWAY" />
    <Flow d="M159 70 H 168" ctx={ctx} dur={0.9} />
    <Node x={168} y={58} label="Django / FastAPI" ctx={ctx} w={106} />
    <Flow d="M221 82 V 96" ctx={ctx} dur={0.8} packet={false} />
    <Cylinder x={204} y={96} label="Data" ctx={ctx} />
  </>
);

/* ---------- 02 AI integration ---------- */
const AIIntegration = ({ ctx }: { ctx: Ctx }) => (
  <>
    <Node x={6} y={50} label="Your app" ctx={ctx} lit />
    <Flow d="M64 62 H 82" ctx={ctx} dur={0.8} />
    <Node x={82} y={50} label="AWS Lambda" ctx={ctx} />
    <Flow d="M154 62 H 170" ctx={ctx} dur={0.8} delay={0.3} />
    <Node x={170} y={50} label="AWS Bedrock" ctx={ctx} />
    {/* Claude */}
    <Flow d="M242 62 H 250" ctx={ctx} packet={false} />
    <circle cx="262" cy="62" r="14" fill={ctx.active ? C.on : C.navy} style={{ transition: 'fill 250ms' }} />
    <path d="M262 54 l2.2 5.8 5.8 2.2 -5.8 2.2 -2.2 5.8 -2.2 -5.8 -5.8 -2.2 5.8 -2.2z" fill="#fff" />
    <Caption x={262} y={40} anchor="middle">CLAUDE</Caption>
    {/* response path */}
    <Flow d="M262 78 V 108 H 35 V 74" ctx={ctx} dur={2.4} color={C.mid} />
    <Caption x={148} y={124} anchor="middle">GROUNDED RESPONSE · HOSTED ON AWS</Caption>
  </>
);

/* ---------- 03 Network ---------- */
const Network = ({ ctx }: { ctx: Ctx }) => (
  <>
    <rect x="58" y="6" width="218" height="128" rx="10" fill="none" stroke={ctx.active ? C.on : C.line} strokeDasharray="4 4" strokeWidth="1.2"
      className={ctx.active && !ctx.reduce ? 'flow-dash' : undefined} />
    <Caption x={68} y={20}>ZERO TRUST</Caption>
    <Caption x={6} y={36}>WAN</Caption>
    <Flow d="M8 42 H 72" ctx={ctx} dur={1} />
    <Node x={72} y={30} label="pfSense / Fortinet" ctx={ctx} lit w={108} />
    <Flow d="M126 54 V 86" ctx={ctx} dur={0.8} delay={0.2} />
    <Node x={72} y={86} label="Cisco / Ubiquiti" ctx={ctx} w={108} />
    {[34, 70, 106].map((y, i) => (
      <g key={y}>
        <Flow d={`M180 98 C 204 98, 204 ${y}, 228 ${y}`} ctx={ctx} dur={1.1} delay={i * 0.35} />
        <rect x="228" y={y - 10} width="38" height="20" rx="5" fill={ctx.active ? [C.navy, C.mid, '#2D4170'][i] : C.node} style={{ transition: 'fill 250ms' }} />
        <text x="247" y={y + 3.5} textAnchor="middle" fontFamily={MONO} fontSize="8" fontWeight="700" fill={ctx.active ? '#fff' : C.navy}>VLAN{(i + 1) * 10}</text>
      </g>
    ))}
    <Caption x={247} y={128} anchor="middle">SEGMENTS</Caption>
  </>
);

/* ---------- 04 Servers ---------- */
const Servers = ({ ctx }: { ctx: Ctx }) => (
  <>
    {/* rack */}
    <rect x="8" y="8" width="78" height="104" rx="6" fill={C.navy} />
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <rect x="14" y={14 + i * 19} width="66" height="15" rx="3" fill={C.mid} />
        <motion.circle cx="22" cy={21.5 + i * 19} r="2.2"
          fill={ctx.active ? '#22C55E' : '#3B4B6E'}
          animate={ctx.active && !ctx.reduce ? { opacity: [1, 0.3, 1] } : { opacity: 1 }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18 }} />
        <rect x="30" y={20 + i * 19} width="40" height="3" rx="1.5" fill="#2D4170" />
      </g>
    ))}
    <Caption x={47} y={128} anchor="middle">SUPERMICRO</Caption>

    <Flow d="M86 50 H 112" ctx={ctx} dur={0.9} />
    {/* CPU chip */}
    <g>
      <rect x="112" y="30" width="40" height="40" rx="5" fill={ctx.active ? C.on : C.node} style={{ transition: 'fill 250ms' }} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} fill={ctx.active ? C.on : C.line}>
          <rect x={117 + i * 9} y="25" width="3" height="5" />
          <rect x={117 + i * 9} y="70" width="3" height="5" />
        </g>
      ))}
      <text x="132" y="53" textAnchor="middle" fontFamily={FONT} fontSize="9" fontWeight="800" fill={ctx.active ? '#fff' : C.navy}>EPYC</text>
    </g>
    <Caption x={132} y={90} anchor="middle">AMD</Caption>

    <Flow d="M152 50 H 174" ctx={ctx} dur={0.9} delay={0.4} />
    <Node x={174} y={14} label="Proxmox VE" ctx={ctx} lit w={98} />
    {[0, 1, 2].map((i) => (
      <motion.rect key={i} x={178 + i * 32} y="46" width="26" height="22" rx="4"
        fill={ctx.active ? C.mid : C.node}
        initial={false}
        animate={{ opacity: ctx.active ? 1 : 0.6, y: ctx.active ? 0 : 4 }}
        transition={{ duration: 0.3, delay: ctx.active ? 0.2 + i * 0.12 : 0 }} />
    ))}
    <Caption x={223} y={82} anchor="middle">VMS</Caption>

    {/* burn-in bar */}
    <Caption x={112} y={112}>BURN-IN</Caption>
    <rect x="160" y="105" width="112" height="8" rx="4" fill={C.soft} />
    <motion.rect x="160" y="105" height="8" rx="4" fill={C.accent}
      initial={false}
      animate={{ width: ctx.active ? 112 : 0 }}
      transition={{ duration: ctx.active && !ctx.reduce ? 2.4 : 0, ease: 'easeInOut' }} />
    <Caption x={272} y={128} anchor="end">72 H</Caption>
  </>
);

/* ---------- 05 Cloud ---------- */
const CloudDeploy = ({ ctx }: { ctx: Ctx }) => (
  <>
    <rect x="6" y="52" width="38" height="28" rx="6" fill={ctx.active ? C.navy : C.node} style={{ transition: 'fill 250ms' }} />
    <text x="25" y="70" textAnchor="middle" fontFamily={MONO} fontSize="11" fontWeight="800" fill={ctx.active ? C.on : C.navy}>{'</>'}</text>
    <Flow d="M44 66 H 62" ctx={ctx} dur={0.8} />
    <Node x={62} y={54} label="CI/CD" ctx={ctx} lit />
    <Flow d="M108 66 H 124" ctx={ctx} dur={0.8} delay={0.3} />
    {/* containers */}
    {[0, 1, 2].map((i) => (
      <rect key={i} x={124 + (i % 2) * 16} y={46 + Math.floor(i / 2) * 18 + (i === 2 ? 0 : 0)} width="14" height="14" rx="3"
        fill={ctx.active ? [C.on, C.mid, C.navy][i] : C.node} style={{ transition: 'fill 250ms' }} />
    ))}
    <rect x="140" y="64" width="14" height="14" rx="3" fill={ctx.active ? C.mid : C.node} />
    <Caption x={139} y={96} anchor="middle">KUBERNETES</Caption>
    {['AWS', 'Azure', 'GCP'].map((c, i) => {
      const y = 24 + i * 38;
      return (
        <g key={c}>
          <Flow d={`M158 66 C 180 66, 180 ${y + 12}, 202 ${y + 12}`} ctx={ctx} dur={1.1} delay={i * 0.35} />
          <Node x={202} y={y} label={c} ctx={ctx} w={70} />
        </g>
      );
    })}
  </>
);

/* ---------- 06 Security ---------- */
const Security = ({ ctx }: { ctx: Ctx }) => {
  const rings = [
    { r: 58, label: 'SIEM / Wazuh' },
    { r: 42, label: 'Okta / Entra ID' },
    { r: 26, label: 'CrowdStrike / SentinelOne' },
  ];
  return (
    <>
      {rings.map((g, i) => (
        <circle key={g.r} cx="76" cy="70" r={g.r} fill={ctx.active ? ['#E8ECF4', '#D5DCE8', '#C3CDDE'][i] : ['#F5F6F8', '#ECEFF4', '#E2E6ED'][i]}
          style={{ transition: 'fill 250ms' }} />
      ))}
      <circle cx="76" cy="70" r="12" fill={ctx.active ? C.navy : C.mid} />
      <path d="M76 63 l6 2.5 v4 c0 4 -2.6 6.5 -6 7.5 c-3.4 -1 -6 -3.5 -6 -7.5 v-4z" fill={ctx.active ? C.on : '#fff'} />
      {ctx.active && !ctx.reduce && [0, 1, 2].map((i) => (
        <motion.circle key={i} r="3.5" fill="#EF4444"
          initial={{ cx: 0, cy: 30 + i * 40, opacity: 1 }}
          animate={{ cx: [0, 20 + i * 2], opacity: [1, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.45, ease: 'easeIn' }} />
      ))}
      {rings.map((g, i) => {
        const y = 22 + i * 30;
        return (
          <g key={g.label}>
            <line x1={76 + g.r * 0.72} y1={70 - g.r * 0.7} x2="150" y2={y} stroke={ctx.active ? C.on : C.line} strokeWidth="1" style={{ transition: 'stroke 250ms' }} />
            <Node x={150} y={y - 11} label={g.label} ctx={ctx} lit={i === 0} w={124} h={22} />
          </g>
        );
      })}
      <Caption x={212} y={124} anchor="middle">LAYERED DEFENSE</Caption>
    </>
  );
};

/* ---------- 07 CRM & ERP ---------- */
const CrmErp = ({ ctx }: { ctx: Ctx }) => {
  const spokes = [
    { label: 'Inventory', x: 8, y: 14 },
    { label: 'HR', x: 8, y: 96 },
    { label: 'Orders', x: 210, y: 14 },
    { label: 'QuickBooks / Stripe', x: 182, y: 96, w: 94 },
  ];
  return (
    <>
      {spokes.map((s, i) => {
        const w = s.w ?? textW(s.label);
        const sx = s.x < 140 ? s.x + w : s.x;
        const sy = s.y + 12;
        return (
          <g key={s.label}>
            <Flow d={`M${sx} ${sy} L 140 62`} ctx={ctx} dur={1.2} delay={i * 0.3} />
            <Node x={s.x} y={s.y} label={s.label} ctx={ctx} w={w} />
          </g>
        );
      })}
      <circle cx="140" cy="62" r="24" fill={ctx.active ? C.on : C.navy} style={{ transition: 'fill 250ms' }} />
      <text x="140" y="60" textAnchor="middle" fontFamily={FONT} fontSize="10" fontWeight="800" fill="#fff">CRM</text>
      <text x="140" y="72" textAnchor="middle" fontFamily={FONT} fontSize="10" fontWeight="800" fill="#fff">ERP</text>
      <Flow d="M140 86 V 98" ctx={ctx} packet={false} />
      <Cylinder x={123} y={98} label="PostgreSQL" ctx={ctx} h={24} />
      <Caption x={140} y={30} anchor="middle">PYTHON / DJANGO</Caption>
    </>
  );
};

/* ---------- 08 Marketing ---------- */
const Marketing = ({ ctx }: { ctx: Ctx }) => {
  const tiers = [
    { label: 'Ahrefs / SEMRush', sub: 'SEO', w: 150 },
    { label: 'Google Ads / Meta', sub: 'PPC', w: 116 },
    { label: 'GA4 / GTM', sub: 'MEASURE', w: 82 },
  ];
  return (
    <>
      {tiers.map((t, i) => {
        const y = 10 + i * 34;
        const x = 80 - t.w / 2 + 10;
        const nx = 80 - tiers[Math.min(i + 1, 2)].w / 2 + 10;
        const nw = i < 2 ? tiers[i + 1].w : t.w - 24;
        const on = ctx.active;
        return (
          <g key={t.label}>
            <path d={`M${x} ${y} H ${x + t.w} L ${nx + nw + (i === 2 ? 12 : 0)} ${y + 30} H ${nx + (i === 2 ? 12 : 0)} Z`}
              fill={on ? [C.navy, C.mid, C.on][i] : ['#E2E6ED', '#ECEFF4', '#F5F6F8'][i]} style={{ transition: 'fill 250ms' }} />
            <text x={90} y={y + 19} textAnchor="middle" fontFamily={FONT} fontSize="9.5" fontWeight="700" fill={on ? '#fff' : C.navy}>{t.label}</text>
            <Caption x={186} y={y + 19}>{t.sub}</Caption>
          </g>
        );
      })}
      {ctx.active && !ctx.reduce && [0, 1, 2, 3].map((i) => (
        <motion.circle key={i} r="2.6" fill={C.accent}
          initial={{ cx: 40 + i * 34, cy: 4, opacity: 0 }}
          animate={{ cx: [40 + i * 34, 90, 90], cy: [4, 104, 122], opacity: [0, 1, 1, i % 2 ? 0 : 1] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4, ease: 'easeIn' }} />
      ))}
      <Flow d="M90 112 V 124 H 236" ctx={ctx} dur={1.2} />
      <circle cx="248" cy="124" r="10" fill={ctx.active ? C.on : C.navy} style={{ transition: 'fill 250ms' }} />
      <path d="M244 124 l3 3 5 -6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Caption x={248} y={106} anchor="middle">LEADS</Caption>
    </>
  );
};

/* ---------- 09 NAS ---------- */
const Nas = ({ ctx }: { ctx: Ctx }) => (
  <>
    <rect x="6" y="14" width="104" height="70" rx="6" fill={C.navy} />
    {Array.from({ length: 8 }, (_, i) => (
      <g key={i}>
        <rect x={12 + i * 12} y="20" width="9" height="46" rx="2" fill={C.mid} />
        <motion.rect x={14.5 + i * 12} y="58" width="4" height="4" rx="1"
          fill={ctx.active ? '#22C55E' : '#3B4B6E'}
          animate={ctx.active && !ctx.reduce ? { opacity: [1, 0.2, 1] } : { opacity: 1 }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.09 }} />
      </g>
    ))}
    <text x="58" y="78" textAnchor="middle" fontFamily={MONO} fontSize="7.5" fontWeight="700" fill="#8EA0C4">AMD EPYC</text>
    {/* ZFS pool bracket */}
    <path d="M12 92 v6 h92 v-6" fill="none" stroke={ctx.active ? C.on : C.line} strokeWidth="1.5" />
    <Caption x={58} y={112} anchor="middle">OPENZFS / TRUENAS</Caption>

    <Flow d="M110 49 H 116" ctx={ctx} packet={false} />
    <Node x={116} y={37} label="Mellanox / Intel" ctx={ctx} lit w={98} h={24} />
    <text x="165" y="72" textAnchor="middle" fontFamily={MONO} fontSize="7.5" fontWeight="700" fill={C.muted}>NIC</text>
    {[{ s: '10G', y: 20, w: 1.5, d: 1.6 }, { s: '25G', y: 49, w: 2.5, d: 1.1 }, { s: '100G', y: 78, w: 4, d: 0.6 }].map((l) => (
      <g key={l.s}>
        <path d={`M214 49 C 222 49, 222 ${l.y}, 230 ${l.y}`} fill="none" stroke={ctx.active ? C.on : C.line} strokeWidth={l.w} strokeLinecap="round"
          style={{ transition: 'stroke 250ms' }} />
        {ctx.active && !ctx.reduce && (
          <circle r={l.w + 1} fill={C.navy}>
            <animateMotion dur={`${l.d}s`} repeatCount="indefinite" path={`M214 49 C 222 49, 222 ${l.y}, 230 ${l.y}`} />
          </circle>
        )}
        <rect x="230" y={l.y - 10} width="44" height="20" rx="5" fill={ctx.active ? C.navy : C.node} style={{ transition: 'fill 250ms' }} />
        <text x="252" y={l.y + 3.5} textAnchor="middle" fontFamily={MONO} fontSize="9" fontWeight="800" fill={ctx.active ? '#fff' : C.navy}>{l.s}</text>
      </g>
    ))}
    <Caption x={252} y={112} anchor="middle">LINKS</Caption>
  </>
);

/* ---------- 10 AV ---------- */
const AV = ({ ctx }: { ctx: Ctx }) => (
  <>
    {/* room */}
    <rect x="6" y="6" width="130" height="128" rx="10" fill="#F5F6F8" />
    <rect x="34" y="14" width="74" height="30" rx="4" fill={ctx.active ? C.navy : C.mid} style={{ transition: 'fill 250ms' }} />
    <motion.rect x="40" y="20" height="18" rx="2" fill={C.on} initial={false}
      animate={{ width: ctx.active ? 62 : 0, opacity: ctx.active ? 0.9 : 0 }} transition={{ duration: 0.5 }} />
    <circle cx="71" cy="50" r="3" fill={ctx.active ? C.on : C.navy} />
    <rect x="30" y="72" width="82" height="40" rx="20" fill="#E2E6ED" />
    {[46, 71, 96].map((x, i) => (
      <motion.circle key={x} cx={x} cy="92" r="5" fill={ctx.active ? C.navy : C.muted}
        animate={ctx.active && !ctx.reduce ? { r: [5, 7, 5] } : { r: 5 }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }} />
    ))}
    <Caption x={71} y={128} anchor="middle">MEETING ROOM</Caption>

    <Flow d="M112 29 H 150" ctx={ctx} dur={1} />
    <Node x={150} y={17} label="Crestron / Extron" ctx={ctx} w={124} />
    <Flow d="M112 92 H 150" ctx={ctx} dur={1} delay={0.4} />
    <Node x={150} y={80} label="Biamp / Q-SYS" ctx={ctx} w={124} />
    <Flow d="M212 104 V 116" ctx={ctx} packet={false} />
    <Node x={150} y={116} label="MS Teams Rooms" ctx={ctx} lit w={124} h={22} />
    <Caption x={212} y={60} anchor="middle">CONTROL · AUDIO DSP</Caption>
  </>
);

/* ---------- 11 Consulting ---------- */
const Consulting = ({ ctx }: { ctx: Ctx }) => {
  const steps = ['Assess', 'Design', 'Implement', 'Audit'];
  const cx = 76, cy = 70, r = 54;
  const pos = steps.map((_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 2;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
  });
  const circle = `M ${cx} ${cy - r} a ${r} ${r} 0 1 1 -0.01 0`;
  return (
    <>
      <path d={circle} fill="none" stroke={ctx.active ? C.on : C.line} strokeWidth="1.5" strokeDasharray={ctx.active ? '4 4' : undefined}
        className={ctx.active && !ctx.reduce ? 'flow-dash' : undefined} />
      {ctx.active && !ctx.reduce && (
        <circle r="4" fill={C.accent}><animateMotion dur="4s" repeatCount="indefinite" path={circle} /></circle>
      )}
      <text x={cx} y={cy - 6} textAnchor="middle" fontFamily={MONO} fontSize="8" fontWeight="700" fill={C.muted}>COBIT</text>
      <text x={cx} y={cy + 4} textAnchor="middle" fontFamily={MONO} fontSize="8" fontWeight="700" fill={C.muted}>NIST</text>
      <text x={cx} y={cy + 14} textAnchor="middle" fontFamily={MONO} fontSize="8" fontWeight="700" fill={C.muted}>ITIL</text>
      {steps.map((s, i) => {
        const w = textW(s, 9);
        return (
          <g key={s}>
            <rect x={pos[i][0] - w / 2} y={pos[i][1] - 10} width={w} height="20" rx="10" fill={ctx.active ? [C.navy, C.mid, C.mid, C.on][i] : C.node}
              style={{ transition: 'fill 250ms' }} />
            <text x={pos[i][0]} y={pos[i][1] + 3.5} textAnchor="middle" fontFamily={FONT} fontSize="9" fontWeight="700" fill={ctx.active ? '#fff' : C.navy}>{s}</text>
          </g>
        );
      })}
      {['CISA / ISACA', 'SOC2 / HIPAA', 'ISO 27001'].map((t, i) => (
        <g key={t}>
          <Flow d={`M${cx + r + 26} ${cy} C 166 ${cy}, 166 ${30 + i * 40}, 176 ${30 + i * 40}`} ctx={ctx} dur={1.3} delay={i * 0.4} packet={i === 1} />
          <Node x={176} y={18 + i * 40} label={t} ctx={ctx} w={98} lit={i === 0} />
        </g>
      ))}
    </>
  );
};

const diagrams = [WebMobile, AIIntegration, Network, Servers, CloudDeploy, Security, CrmErp, Marketing, Nas, AV, Consulting];

export const ServiceDiagram = ({ index, active }: { index: number; active: boolean }) => {
  const reduce = !!useReducedMotion();
  const D = diagrams[index];
  if (!D) return null;
  return (
    <svg viewBox="0 0 280 140" className="w-full h-auto" aria-hidden="true">
      <D ctx={{ active, reduce }} />
    </svg>
  );
};
