import { HardDrive, Database, Lock, RefreshCw, Layers, ShieldCheck, Zap, Server, Timer, TrendingUp } from 'lucide-react';
import { Overview, Section, Heading, BlockGrid, StackTable, PhotoBand } from '../kit';
import { svcPhotos } from '../servicePhotos';

/**
 * CustomNASContent Component
 * Custom content section for Custom NAS (Network Attached Storage) service
 */
interface CustomNASContentProps {
  onOpenModal: () => void;
}

const benefits = ['Immutable Data Protection', 'Blazing Fast File Retrieval', 'Scalable Storage Capacity', 'Private, Self-Hosted Control'];

const tiers = [
  {
    icon: Zap,
    title: 'Hot Tier — SSD Cache',
    desc: 'Frequently accessed files served from a fast SSD cache layer for instant retrieval, even on multi-terabyte arrays.',
    width: 'w-[30%]'
  },
  {
    icon: HardDrive,
    title: 'Capacity Tier — RAID Arrays',
    desc: 'RAID 5, RAID 6, RAID 10, or ZFS pools sized to your data, balancing capacity, speed, and fault tolerance.',
    width: 'w-[55%]'
  },
  {
    icon: RefreshCw,
    title: 'Backup Tier — Versioned Snapshots',
    desc: 'Scheduled, versioned snapshots plus off-site and cloud-sync replication for true disaster recovery.',
    width: 'w-[80%]'
  },
  {
    icon: Lock,
    title: 'Access Control — Encryption at Rest',
    desc: 'Full-volume encryption, role-based permissions, and audit logging across every tier.',
    width: 'w-full'
  }
];

const platformStack = [
  { icon: Server, label: 'NAS Platforms', value: 'Synology, QNAP, TrueNAS, Unraid' },
  { icon: Layers, label: 'File Systems', value: 'ZFS, Btrfs, EXT4 with RAID-aware pooling' },
  { icon: Database, label: 'Access Protocols', value: 'SMB/CIFS, NFS, iSCSI, AFP, FTP/SFTP' },
  { icon: ShieldCheck, label: 'Data Protection', value: 'Versioned snapshots, off-site replication, encryption at rest' }
];

const closing = [
  { icon: ShieldCheck, title: 'Immutable Data Protection', desc: 'Snapshot-based backups mean ransomware or accidental deletion is recoverable in minutes, not days.' },
  { icon: Timer, title: 'Blazing Fast File Retrieval', desc: 'SSD caching keeps your most-used files instantly accessible, even on multi-terabyte arrays.' },
  { icon: TrendingUp, title: 'Scalable Storage Capacity', desc: 'Add drives or expand pools as your data grows, without re-architecting the whole system.' }
];

export const CustomNASContent = (_props: CustomNASContentProps) => {
  return (
    <>
      <Overview benefits={benefits} image={svcPhotos.nas.a}>
        <p>
          Deploy enterprise-grade Network Attached Storage solutions featuring advanced RAID configurations, automated backups, and tiered storage to ensure data integrity and instant accessibility &mdash; on platforms like Synology, QNAP, and TrueNAS.
        </p>
      </Overview>

      <Section tone="grey">
        <Heading
          title="Your Data, Stored Where You Control It"
          sub="Private, high-performance storage that isn't at the mercy of a third-party cloud bill"
        />
        <BlockGrid
          items={tiers.map((tier) => ({
            icon: tier.icon,
            title: tier.title,
            desc: tier.desc,
            footer: (
              <div className="h-1.5 bg-white rounded-full overflow-hidden">
                <div className={`h-full ${tier.width} bg-navy rounded-full`} />
              </div>
            ),
          }))}
        />
      </Section>

      <PhotoBand photo={svcPhotos.nas.b} />

      <Section tone="white">
        <Heading title="NAS Platforms & Protocols" sub="Systems we deploy, configure, and support" />
        <StackTable rows={platformStack} />
      </Section>

      <Section tone="dark">
        <BlockGrid dark cols={3} items={closing} />
      </Section>
    </>
  );
};
