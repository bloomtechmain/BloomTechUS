import { MapPin, ClipboardCheck, ShoppingCart, Wrench, Settings2, TestTube2, Handshake, Sofa, Network, Zap, Tv, Camera, Building2, RefreshCw, Plus } from 'lucide-react';
import { Section, Heading, BlockGrid, StackTable, StepList, PhotoBand } from '../kit';
import { svcPhotos } from '../servicePhotos';

/**
 * SmartWorkspacesContent Component
 * Custom content section for AV & Smart Workspaces (A-Z office setup) service
 */
interface SmartWorkspacesContentProps {
  onOpenModal: () => void;
}

const setupCategories = [
  {
    icon: Sofa,
    title: 'Desks, Furniture & Workstations',
    items: ['Office desks & furniture coordination', 'Workstation layout planning', 'Computers & peripherals', 'Monitors & multi-display setups']
  },
  {
    icon: Network,
    title: 'Network & Connectivity',
    items: ['Internet connection setup', 'Wi-Fi coverage & access points', 'Routers & network switches', 'Structured Ethernet cabling', 'Network racks']
  },
  {
    icon: Zap,
    title: 'Power & Infrastructure',
    items: ['Power outlet planning', 'UPS backup power', 'Cable management & containment']
  },
  {
    icon: Tv,
    title: 'Meeting Rooms & AV',
    items: ['Meeting room tables', 'TVs & displays', 'Projectors', 'Video conferencing systems', 'Printers & shared peripherals']
  },
  {
    icon: Camera,
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
    <>
      {/* Complete A-Z Overview */}
      <Section tone="white">
        <Heading
          title={<>Complete A&ndash;Z Office Setup</>}
          sub="From an empty room to a fully operational workspace"
          image={svcPhotos.av.a}
        >
          <p>
            BloomTechUSA handles every stage of your office technology setup, start to finish. We visit your office in person to assess the space, understand how your team works, and plan a workspace that fits. From there, we manage the complete technology build-out &mdash; furniture coordination, workstations and computers, networking and internet connectivity, power and backup systems, meeting room AV, and security &mdash; so you don't have to coordinate multiple vendors or guess at what you need.
          </p>
        </Heading>
      </Section>

      <PhotoBand photo={svcPhotos.av.b} />

      {/* Everything We Set Up */}
      <Section tone="grey">
        <Heading title="Everything We Set Up" sub="One team, covering every piece of your office" />
        <BlockGrid
          cols={3}
          items={[
            ...setupCategories.map((c, idx) => ({ icon: c.icon, num: String(idx + 1).padStart(2, '0'), title: c.title, points: c.items })),
            { icon: Plus, title: "Don't See It Here?", desc: "If it belongs in a modern office, it's likely something we can plan and install as part of your setup." },
          ]}
        />
      </Section>

      {/* Quick-reference table */}
      <Section tone="white">
        <StackTable
          head={['Area', "What's Covered"]}
          rows={[
            { label: 'Workstations', value: 'Desks, chairs, computers, monitors, workstation layout' },
            { label: 'Connectivity', value: 'Internet connections, Wi-Fi, routers, network switches, Ethernet cabling, network racks' },
            { label: 'Power', value: 'Power outlet planning, UPS backup power, cable management' },
            { label: 'Meeting Rooms', value: 'Meeting tables, TVs, projectors, video conferencing systems, printers' },
            { label: 'Security', value: 'CCTV, access control, smart lighting, office automation' }
          ]}
        />
      </Section>

      {/* Our Process */}
      <Section tone="grey">
        <Heading title={<>Our Process</>} sub="A clear, 7-step process from the first site visit to a fully handed-over office" />
        <StepList items={processSteps} />
      </Section>

      {/* New Office or Upgrade */}
      <Section tone="dark">
        <Heading light title={<>New Office or Upgrade &mdash; Either Way, We've Got It</>} />
        <BlockGrid
          dark
          items={[
            { icon: Building2, title: 'Setting Up a New Office', desc: <>Moving into a new space or opening a new location? We plan and build the entire workspace from the ground up &mdash; furniture, networking, power, AV, and security &mdash; so you can move in and start working on day one.</> },
            { icon: RefreshCw, title: 'Upgrading an Existing Office', desc: <>Already have a space but need better connectivity, modern meeting rooms, or improved security? We assess what you have, identify gaps, and upgrade only what's needed &mdash; with minimal disruption to your team.</> },
          ]}
        />
        <p className="mt-10 text-white/65 leading-relaxed max-w-3xl">
          Every recommendation is customized to your space, your team size, and your budget &mdash; no generic packages, no paying for more than you need.
        </p>
      </Section>
    </>
  );
};
