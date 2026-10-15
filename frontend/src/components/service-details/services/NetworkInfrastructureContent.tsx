import { Network, Wifi, ShieldAlert, Server, Gauge, Activity, TrendingUp, Cpu, SearchCheck, ShieldCheck } from 'lucide-react';
import { Section, Heading, BlockGrid, FeatureBand, CtaBand, Hl, PhotoBand } from '../kit';
import { svcPhotos } from '../servicePhotos';

/**
 * NetworkInfrastructureContent Component
 * Custom content section for IT Network Infrastructure service
 */
interface NetworkInfrastructureContentProps {
  onOpenModal: () => void;
}

const footerLabel = (text: string) => (
  <span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-navy-mid">
    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" /> {text}
  </span>
);

export const NetworkInfrastructureContent = ({ onOpenModal }: NetworkInfrastructureContentProps) => {
  return (
    <>
      {/* Core Networking Specializations */}
      <Section tone="white">
        <Heading
          title="Core Networking Specializations"
          sub="End-to-end infrastructure solutions for modern enterprises"
          image={svcPhotos.network.a}
        />
        <BlockGrid
          items={[
            {
              icon: Network,
              title: 'Enterprise Architecture Design',
              desc: "We don't just plug in hardware; we design ecosystems. Our certified engineers map out your entire network topology to eliminate single points of failure.",
              points: [
                <><strong>LAN/WAN:</strong> High-performance networks designed for low latency</>,
                <><strong>SD-WAN:</strong> Optimized traffic routing across locations</>,
                <><strong>VLAN Segmentation:</strong> Logically separated networks for security</>,
              ],
            },
            {
              icon: Wifi,
              title: 'Wireless Networking & Mobility',
              desc: 'Modern work requires seamless connectivity. We design enterprise-grade Wi-Fi solutions that provide blanket coverage without "dead zones."',
              points: [
                <><strong>Heat Mapping:</strong> Advanced tools for optimal Access Point placement</>,
                <><strong>Secure Guest Access:</strong> Isolated environments protecting corporate data</>,
                <><strong>Mesh Networking:</strong> Resilient wireless for large facilities</>,
              ],
            },
            {
              icon: ShieldAlert,
              title: 'Network Security & Perimeter Defense',
              desc: 'With the threat landscape constantly evolving, your network must be your first line of defense.',
              points: [
                <><strong>Next-Gen Firewalls:</strong> NGFW with Deep Packet Inspection</>,
                <><strong>VPN & Remote Access:</strong> Secure encrypted tunnels (IPsec/SSL)</>,
                <><strong>IDS/IPS:</strong> Real-time monitoring and threat neutralization</>,
              ],
            },
            {
              icon: Server,
              title: 'Infrastructure Hardware Management',
              desc: 'We partner with leading vendors to provide the most reliable hardware on the market.',
              points: [
                <><strong>Switching & Routing:</strong> High-speed backbone infrastructure</>,
                <><strong>Structured Cabling:</strong> Cat6, Cat6a, and Fiber Optic installation</>,
                <><strong>Rack Design:</strong> Clean layouts for airflow and maintenance</>,
              ],
            },
          ]}
        />
      </Section>

      <PhotoBand photo={svcPhotos.network.b} />

      {/* The Network+ Advantage */}
      <FeatureBand
        eyebrow="Certified Excellence"
        title="The Network+ Advantage"
        sub="CompTIA Certified Engineering Team"
        text={<>Choosing a <Hl>CompTIA Network+ Certified</Hl> partner like BloomTech means your infrastructure is handled by experts who have mastered the seven layers of the OSI model.</>}
        points={[
          { icon: Cpu, title: 'Hardware Neutrality', desc: 'Understanding Cisco, Juniper, Ubiquiti interaction for perfect integration' },
          { icon: SearchCheck, title: 'Troubleshooting Excellence', desc: 'Systematic approach to identify and resolve connectivity issues' },
          { icon: ShieldCheck, title: 'Security-First Mindset', desc: 'Security baked into every configuration and protocol' },
        ]}
        badge={{ big: 'Network+', small: 'CompTIA Certified' }}
      />

      {/* Network Health Check & Support */}
      <Section tone="grey">
        <Heading title="Network Health Check & Support" sub="Comprehensive audits and proactive monitoring" />
        <BlockGrid
          cols={3}
          items={[
            { icon: Gauge, title: 'Performance Optimization', desc: 'Tuning your hardware to handle 10G or higher speeds with minimal latency.', footer: footerLabel('Maximum Throughput') },
            { icon: Activity, title: '24/7 Monitoring', desc: 'Proactive oversight of switches, routers, and firewalls to catch issues early.', footer: footerLabel('Always Protected') },
            { icon: TrendingUp, title: 'Scalability Planning', desc: 'Ensuring your network can double in capacity without complete overhauls.', footer: footerLabel('Future-Proof Growth') },
          ]}
        />
      </Section>

      {/* Network Infrastructure CTA */}
      <CtaBand
        eyebrow="Network Engineers On Standby"
        title="Ready to Build a Faster, Safer Network?"
        text="Connect with our certified network engineers in Austin to discuss your infrastructure needs and get a free network audit."
        cardTitle="Free Network Audit"
        cardText="Let's identify bottlenecks and security vulnerabilities"
        email="networking@bloomtechus.com"
        button="Request Network Audit"
        onClick={onOpenModal}
      />
    </>
  );
};
