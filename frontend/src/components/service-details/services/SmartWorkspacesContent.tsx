import { motion } from 'framer-motion';
import {
  MapPin, ClipboardCheck, ShoppingCart, Wrench, Settings2, TestTube2, Handshake,
  Sofa, Monitor, Wifi, Network, Zap, BatteryCharging,
  Tv, Projector, Camera, KeyRound, Boxes,
  CheckCircle2, Building2
} from 'lucide-react';

/**
 * SmartWorkspacesContent Component
 * Custom content section for the Smart Workspaces (complete A-Z office setup) service
 */
interface SmartWorkspacesContentProps {
  onOpenModal: () => void;
}

const setupCategories = [
  {
    icon: Sofa,
    accent: '#ff6b00',
    title: 'Desks, Furniture & Workstations',
    items: ['Office desks & furniture coordination', 'Workstation layout planning', 'Computers & peripherals', 'Monitors & multi-display setups']
  },
  {
    icon: Network,
    accent: '#101D36',
    title: 'Network & Connectivity',
    items: ['Internet connection setup', 'Wi-Fi coverage & access points', 'Routers & network switches', 'Structured Ethernet cabling', 'Network racks']
  },
  {
    icon: Zap,
    accent: '#ff6b00',
    title: 'Power & Infrastructure',
    items: ['Power outlet planning', 'UPS backup power', 'Cable management & containment']
  },
  {
    icon: Tv,
    accent: '#101D36',
    title: 'Meeting Rooms & AV',
    items: ['Meeting room tables', 'TVs & displays', 'Projectors', 'Video conferencing systems', 'Printers & shared peripherals']
  },
  {
    icon: Camera,
    accent: '#ff6b00',
    title: 'Security & Automation',
    items: ['CCTV surveillance', 'Access control systems', 'Smart lighting', 'Office automation (where required)']
  }
];

const processSteps = [
  { step: '01', title: 'Site Visit', desc: 'We visit your office in person to see the space, layout, and existing infrastructure firsthand.', icon: MapPin },
  { step: '02', title: 'Planning', desc: 'We assess your requirements and design a workspace and technology plan tailored to your team.', icon: ClipboardCheck },
  { step: '03', title: 'Equipment Selection', desc: 'We recommend and source furniture, computers, networking gear, and AV equipment suited to your space and budget.', icon: ShoppingCart },
  { step: '04', title: 'Installation', desc: 'Our team handles physical setup — desks, cabling, racks, power, and hardware placement.', icon: Wrench },
  { step: '05', title: 'Configuration', desc: 'We configure networks, Wi-Fi, devices, security systems, and automation so everything works together.', icon: Settings2 },
  { step: '06', title: 'Testing', desc: 'Every system is tested — connectivity, power backup, AV, security — before anyone sets foot in the office.', icon: TestTube2 },
  { step: '07', title: 'Final Handover', desc: 'We walk your team through the completed setup and hand over a fully operational, ready-to-work office.', icon: Handshake }
];

export const SmartWorkspacesContent = (_props: SmartWorkspacesContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Complete A-Z Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#101D36] tracking-tight">
              Complete A&ndash;Z Office Setup
              <span className="block text-lg lg:text-xl text-gray-500 font-medium mt-2 tracking-normal">From an empty room to a fully operational workspace</span>
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-[40px] p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed relative z-10 font-medium">
              BloomTechUSA handles every stage of your office technology setup, start to finish. We visit your office in person to assess the space, understand how your team works, and plan a workspace that fits. From there, we manage the complete technology build-out &mdash; furniture coordination, workstations and computers, networking and internet connectivity, power and backup systems, meeting room AV, and security &mdash; so you don't have to coordinate multiple vendors or guess at what you need.
            </p>
          </div>
        </motion.div>

        {/* Everything We Set Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#101D36] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#101D36] tracking-tight">
              Everything We Set Up
              <span className="block text-lg lg:text-xl text-gray-500 font-medium mt-2 tracking-normal">One team, covering every piece of your office</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {setupCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-[32px] p-8 hover:shadow-sm transition-colors group relative overflow-hidden"
              >
                <div
                  className="w-14 h-14 rounded-2xl shadow-sm flex items-center justify-center text-white mb-6 transform group-hover:-translate-y-1 transition-transform"
                  style={{ background: category.accent }}
                >
                  <category.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-[#101D36] mb-4">{category.title}</h3>
                <ul className="space-y-2.5">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: category.accent }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Closing note card to balance the 5-item grid */}
            <div className="bg-[#F5F6F8] border border-gray-200 rounded-[32px] p-8 flex flex-col justify-center">
              <Boxes className="text-[#ff6b00] mb-4" size={28} />
              <p className="text-gray-600 leading-relaxed">
                Don't see something on the list? If it belongs in a modern office &mdash; it's likely something we can plan and install as part of your setup.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick-reference tech stack style table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-20"
        >
          <div className="bg-white border border-gray-200 rounded-[40px] overflow-hidden shadow-2xl relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>

            <div className="hidden lg:grid grid-cols-3 border-b border-gray-200 bg-[#F5F6F8] relative z-10">
              <div className="p-6 lg:p-8 font-black text-gray-500 tracking-wide text-sm col-span-1">Area</div>
              <div className="p-6 lg:p-8 font-black text-gray-500 tracking-wide text-sm col-span-2">What's Covered</div>
            </div>

            {[
              { icon: Monitor, color: 'text-[#ff6b00]', label: 'Workstations', value: 'Desks, chairs, computers, monitors, workstation layout' },
              { icon: Wifi, color: 'text-[#101D36]', label: 'Connectivity', value: 'Internet connections, Wi-Fi, routers, network switches, Ethernet cabling, network racks' },
              { icon: BatteryCharging, color: 'text-[#ff6b00]', label: 'Power', value: 'Power outlet planning, UPS backup power, cable management' },
              { icon: Projector, color: 'text-[#101D36]', label: 'Meeting Rooms', value: 'Meeting tables, TVs, projectors, video conferencing systems, printers' },
              { icon: KeyRound, color: 'text-[#ff6b00]', label: 'Security', value: 'CCTV, access control, smart lighting, office automation' }
            ].map((row, idx, arr) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-3 hover:shadow-sm transition-colors relative z-10 ${idx !== arr.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                  <row.icon className={row.color} size={24} />
                  <span className="text-xl font-bold text-[#101D36] tracking-wide">{row.label}</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-gray-700 text-lg leading-relaxed font-medium">{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Our Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-[#101D36] tracking-tighter mb-6">
              Our <span className="text-[#ff6b00]">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium tracking-tight">
              A clear, 7-step process from the first site visit to a fully handed-over office
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {processSteps.map((item, idx) => (
              <div
                key={idx}
                className="relative group p-8 rounded-[32px] bg-gray-50 border border-gray-200 hover:shadow-sm transition-all hover:-translate-y-2"
              >
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#101D36] border-2 border-white rounded-2xl flex items-center justify-center text-[#ff6b00] font-black text-lg z-10 shadow-sm">
                  {item.step}
                </div>
                <div className="mb-8 text-gray-400 group-hover:text-[#ff6b00] transition-colors">
                  <item.icon size={36} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-black text-[#101D36] mb-3 tracking-tight leading-none">{item.title}</h4>
                <p className="text-gray-500 text-[14px] leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* New Office or Upgrade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#101D36] tracking-tight">
              New Office or Upgrade &mdash; Either Way, We've Got It
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-[32px] p-8 lg:p-10 hover:shadow-sm transition-colors relative overflow-hidden">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-6">
                <Building2 size={26} />
              </div>
              <h3 className="text-xl font-bold text-[#101D36] mb-4">Setting Up a New Office</h3>
              <p className="text-gray-600 leading-relaxed">
                Moving into a new space or opening a new location? We plan and build the entire workspace from the ground up &mdash; furniture, networking, power, AV, and security &mdash; so you can move in and start working on day one.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-[32px] p-8 lg:p-10 hover:shadow-sm transition-colors relative overflow-hidden">
              <div className="w-14 h-14 bg-gradient-to-br from-[#101D36] to-[#0B1428] rounded-2xl shadow-lg flex items-center justify-center text-white mb-6">
                <Settings2 size={26} />
              </div>
              <h3 className="text-xl font-bold text-[#101D36] mb-4">Upgrading an Existing Office</h3>
              <p className="text-gray-600 leading-relaxed">
                Already have a space but need better connectivity, modern meeting rooms, or improved security? We assess what you have, identify gaps, and upgrade only what's needed &mdash; with minimal disruption to your team.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F6F8] border border-gray-200 rounded-[32px] p-8 flex items-center gap-5">
            <CheckCircle2 className="text-[#ff6b00] shrink-0" size={28} />
            <p className="text-gray-600 leading-relaxed font-medium">
              Every recommendation is customized to your space, your team size, and your budget &mdash; no generic packages, no paying for more than you need.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
