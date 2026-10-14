import { motion } from 'framer-motion';
import { HardDrive, Database, Lock, RefreshCw, Layers, ShieldCheck, Zap, Server } from 'lucide-react';
import { ServiceBenefitsSidebar } from '../ServiceBenefitsSidebar';

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

export const CustomNASContent = (_props: CustomNASContentProps) => {
  return (
    <section className="py-20 relative bg-grey-light">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Overview & Client Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-10 w-2 bg-brand-orange rounded-full"></div>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">Overview</h2>
            </div>
            <div className="bg-navy-wash border border-gray-200 rounded-[40px] p-8 lg:p-10">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                Deploy enterprise-grade Network Attached Storage solutions featuring advanced RAID configurations, automated backups, and tiered storage to ensure data integrity and instant accessibility &mdash; on platforms like Synology, QNAP, and TrueNAS.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <ServiceBenefitsSidebar benefits={benefits} />
          </div>
        </motion.div>

        {/* Storage tiers — visual width bars instead of a numbered list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-16">
            <div className="h-10 w-2 bg-brand-orange rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
              Your Data, Stored Where You Control It
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">Private, high-performance storage that isn't at the mercy of a third-party cloud bill</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {tiers.map((tier, idx) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {/* Width bar visualizes relative scope of each tier */}
                <div className="h-1.5 bg-gray-100 rounded-full mb-4 overflow-hidden">
                  <div className={`h-full ${tier.width} bg-gradient-to-r from-brand-orange to-navy rounded-full`}></div>
                </div>
                <div className="flex gap-5 items-start">
                                    <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{tier.title}</h3>
                    <p className="text-gray-600 leading-relaxed max-w-2xl">{tier.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platforms & Protocols */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-2 bg-navy rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
              NAS Platforms & Protocols
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">Systems we deploy, configure, and support</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-split-navy rounded-[40px] p-6 md:p-10">
            {platformStack.map((row, idx) => (
              <div key={row.label} className={`bg-navy-wash border border-gray-200 ${idx % 2 === 0 ? 'card-shape-a' : 'card-shape-b'} p-6 flex items-start gap-4`}>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase tracking-wide mb-1.5">{row.label}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits — compact strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 bg-navy-wash border border-gray-200 rounded-2xl divide-y divide-gray-200 md:divide-y-0 md:grid md:grid-cols-3 md:divide-x"
        >
          <div className="p-7 flex items-start gap-4">
            
            <div>
              <h3 className="text-base font-bold text-navy mb-1.5">Immutable Data Protection</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Snapshot-based backups mean ransomware or accidental deletion is recoverable in minutes, not days.</p>
            </div>
          </div>
          <div className="p-7 flex items-start gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
            <div>
              <h3 className="text-base font-bold text-navy mb-1.5">Blazing Fast File Retrieval</h3>
              <p className="text-gray-600 text-sm leading-relaxed">SSD caching keeps your most-used files instantly accessible, even on multi-terabyte arrays.</p>
            </div>
          </div>
          <div className="p-7 flex items-start gap-4">
            
            <div>
              <h3 className="text-base font-bold text-navy mb-1.5">Scalable Storage Capacity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Add drives or expand pools as your data grows, without re-architecting the whole system.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
