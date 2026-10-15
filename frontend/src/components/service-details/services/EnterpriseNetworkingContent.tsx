import { Globe, Shuffle, Lock, Gauge, ShieldCheck, Building2, Timer } from 'lucide-react';
import { Overview, Section, Heading, Explorer, BlockGrid, PhotoBand } from '../kit';
import { svcPhotos } from '../servicePhotos';

/**
 * EnterpriseNetworkingContent Component
 * Custom content section for Enterprise Networking service
 */
interface EnterpriseNetworkingContentProps {
  onOpenModal: () => void;
}

const benefits = ['Zero-Downtime Reliability', 'Secure Data Transmission', 'Optimized Cloud Application Performance', 'Built for Multi-Site Growth'];

const capabilities = [
  {
    num: '01',
    icon: Globe,
    title: 'SD-WAN & Multi-Site Architecture',
    desc: 'For businesses with multiple offices, branches, or warehouses, we design Software-Defined WAN overlays that dynamically route traffic across the fastest, most reliable path available — automatically shifting between ISPs, MPLS, and broadband without manual intervention.',
    stack: ['Cisco Meraki', 'Fortinet', 'Ubiquiti UniFi', 'pfSense']
  },
  {
    num: '02',
    icon: Shuffle,
    title: 'Redundant Routing & Automatic Failover',
    desc: "A single ISP outage shouldn't take your business offline. We architect dual-WAN and multi-carrier failover configurations with BGP routing where needed, so connectivity switches over in seconds — not hours.",
    stack: ['Dual-WAN', 'BGP Routing', '24/7 Link Monitoring']
  },
  {
    num: '03',
    icon: Lock,
    title: 'Secure Multi-Site VPNs',
    desc: 'Site-to-site IPsec tunnels link your branch offices into one secure private network, while encrypted remote-access VPNs let your team connect safely from anywhere — without exposing internal systems to the public internet.',
    stack: ['IPsec', 'WireGuard', 'OpenVPN']
  },
  {
    num: '04',
    icon: Gauge,
    title: 'Bandwidth Optimization & QoS',
    desc: 'We apply Quality of Service policies that prioritize business-critical traffic — VoIP, video conferencing, cloud applications — over background traffic, so your bandwidth is spent on what actually keeps the business running.',
    stack: ['QoS Policies', 'Traffic Shaping', 'Load Balancing']
  }
];

const whyItMatters = [
  { icon: Timer, title: 'Zero-Downtime Reliability', desc: 'Automatic failover keeps branches and remote teams connected even when a primary link goes down.' },
  { icon: ShieldCheck, title: 'Secure Data Transmission', desc: 'Every connection is encrypted end-to-end, keeping company data private in transit.' },
  { icon: Building2, title: 'Built for Multi-Site Growth', desc: "Add a new branch without redesigning your network — our architecture scales with you." }
];

export const EnterpriseNetworkingContent = (_props: EnterpriseNetworkingContentProps) => {
  return (
    <>
      <Overview benefits={benefits} image={svcPhotos.enterprise.a}>
        <p>
          Deploy secure, lightning-fast enterprise networking solutions such as SD-WAN, multi-site VPNs, and highly redundant routing designed for maximum uptime and reliability. We connect every office, branch, and remote worker into one resilient, zero-downtime network.
        </p>
      </Overview>

      <Section tone="grey">
        <Heading
          title="Enterprise Connectivity, Engineered for Zero Downtime"
          sub="Connecting every office, site, and remote worker without a single dropped packet"
        />
        <Explorer items={capabilities} />
      </Section>

      <PhotoBand photo={svcPhotos.enterprise.b} />

      <Section tone="dark">
        <BlockGrid dark cols={3} items={whyItMatters} />
      </Section>
    </>
  );
};
