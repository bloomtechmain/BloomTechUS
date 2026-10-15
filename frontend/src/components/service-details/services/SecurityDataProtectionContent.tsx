import { ShieldAlert, Key, Monitor, Lock, History, Search, FileCheck, ShieldCheck, Shield, Activity, Cpu, Repeat, Eye, Layers } from 'lucide-react';
import { Section, Heading, BlockGrid, StackTable, Steps, FeatureBand, CtaBand, Explorer, Hl, PhotoBand } from '../kit';
import { svcPhotos } from '../servicePhotos';

/**
 * SecurityDataProtectionContent Component
 * Custom content section for Security & Data Protection service
 */
interface SecurityDataProtectionContentProps {
  onOpenModal: () => void;
}

export const SecurityDataProtectionContent = ({ onOpenModal }: SecurityDataProtectionContentProps) => {
  return (
    <>
      {/* Defense-in-Depth Strategy */}
      <Section tone="white">
        <Heading title="Our Defense-in-Depth Strategy" sub="Multi-layered protection beyond the firewall" image={svcPhotos.security.a} />
        <Explorer
          items={[
            { icon: ShieldAlert, title: 'Perimeter & Network Hardening', desc: <>We build <Hl>"Invisible" networks</Hl>. Utilizing Next-Gen Firewalls (NGFW), Intrusion Prevention Systems (IPS), and strict VLAN segmentation, we ensure that even if one device is compromised, the rest of your infrastructure remains an island.</> },
            { icon: Key, title: 'Identity & Access Management (IAM)', desc: <><Hl>Identity is the new perimeter</Hl>. We implement Zero Trust architectures where every user and device must be verified, with phishing-resistant MFA and automated de-provisioning for offboarded employees.</> },
            { icon: Monitor, title: 'Endpoint Protection & EDR', desc: <>We move <Hl>beyond traditional antivirus</Hl>. Our EDR solutions use behavioral AI to stop "Zero-Day" attacks in real-time, isolating infected machines before they spread.</> },
          ]}
        />
      </Section>

      <PhotoBand photo={svcPhotos.security.b} />

      {/* Data Protection & Sovereignty */}
      <Section tone="grey">
        <Heading title="Data Protection & Sovereignty" sub={'Securing the "Crown Jewels" of your business'} />
        <BlockGrid
          cols={3}
          items={[
            { title: 'Encryption at Rest & in Transit', desc: 'Utilizing AES-256 and TLS 1.3 standards to ensure that even if data is intercepted, it remains unreadable.', icon: Lock },
            { title: 'Immutable Backups', desc: 'We design backup systems that cannot be deleted or modified by ransomware, ensuring rapid recovery.', icon: History },
            { title: 'Data Loss Prevention (DLP)', desc: 'Intelligent monitoring that prevents sensitive information (SSNs, IP) from leaving the company network.', icon: ShieldAlert },
          ]}
        />
      </Section>

      {/* The "CISA Advantage": Audit & Compliance */}
      <FeatureBand
        eyebrow="CISA Audit Mastery"
        title={<>Security That <br />Passes the Audit.</>}
        text={<>As a <Hl>CISA-certified professional</Hl>, I don't just "secure" your network; I make it <Hl>auditable</Hl>. We align your infrastructure with global standards, ensuring you are ready for any regulatory hurdle.</>}
        points={[
          { title: 'Vulnerability Assessments', desc: 'Regular scanning of server-grade hardware to patch exploits before they are used.', icon: Search },
          { title: 'Gap Analysis', desc: 'Aligning your current posture with SOC2, HIPAA, PCI-DSS, or ISO 27001 frameworks.', icon: FileCheck },
          { title: 'Incident Response Planning', desc: 'We provide the "Playbook" for breach response, minimizing legal exposure and downtime.', icon: ShieldAlert },
        ]}
        badge={{ big: 'CISA', small: 'ISC2', caption: 'Identity verified authority' }}
      />

      {/* The Security Tech Stack */}
      <Section tone="white">
        <Heading title="The Security Tech Stack" sub="Enterprise-grade systems we deploy and manage" />
        <StackTable
          head={['Category', 'Enterprise Systems']}
          rows={[
            { label: 'Firewalls', value: 'Fortinet, Palo Alto, pfSense (Hardware Accelerated)', icon: Shield },
            { label: 'Endpoint (EDR)', value: 'SentinelOne, CrowdStrike, or Microsoft Defender for Business', icon: Monitor },
            { label: 'Identity', value: 'Okta, Azure AD (Entra ID), Duo Security', icon: Key },
            { label: 'SIEM / Logging', value: 'Wazuh, Splunk, or ELK Stack for real-time monitoring', icon: Activity },
            { label: 'Hardware Entropy', value: 'TPM 2.0 integration and hardware-based encryption keys', icon: Cpu },
          ]}
        />
      </Section>

      {/* The 4-Phase Security Lifecycle */}
      <Section tone="grey">
        <Heading title="The 4-Phase Security Lifecycle" />
        <Steps
          items={[
            { title: 'Threat Modeling', desc: 'We identify your most "at-risk" assets and likely attack vectors.', icon: Search },
            { title: 'Hardening & Implementation', desc: 'We deploy the "Shield"—firewalls, MFA, and encryption.', icon: Layers },
            { title: 'Continuous Monitoring', desc: '24/7 logging and automated alerts for suspicious behavior like "Impossible Travel" logins.', icon: Activity },
            { title: 'Governance & Review', desc: 'Quarterly security reviews and policy updates to stay ahead of new exploit trends.', icon: ShieldCheck },
          ]}
        />
      </Section>

      {/* Proactive "Human Firewalls" */}
      <FeatureBand
        tone="dark"
        eyebrow="Security Awareness Training"
        title={<>Proactive <br />"Human Firewalls"</>}
        text={<>90% of breaches start with human error. We provide managed <Hl>Phishing Simulations</Hl> and security training for your staff, turning your employees from your biggest risk into your strongest line of defense.</>}
        points={[
          { title: 'Managed Phishing Simulations', icon: ShieldCheck },
          { title: 'Security Culture Development', icon: Repeat },
          { title: 'Compliance Training Modules', icon: Eye },
        ]}
      />

      {/* Final Call to Action */}
      <CtaBand
        eyebrow="Active Protection On-Call"
        title={<>Don't Wait for the Breach <br />to Build the Shield.</>}
        text={'Is your current data protection strategy "hope"? Let\'s replace it with a certified, resilient architecture.'}
        button="Secure My Business"
        onClick={onOpenModal}
      />
    </>
  );
};
