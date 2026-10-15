import type { Photo } from './kit';

// Real photography (Unsplash) used inside each service page: `a` sits beside the
// opening section, `b` is the full-width band further down.
const p = (src: string, alt: string): Photo => ({ src, alt });
const s = (name: string) => `/images/services/${name}.webp`;

export const svcPhotos: Record<string, { a: Photo; b: Photo }> = {
  network: { a: p(s('network-a'), 'Patch panel with red network cables'), b: p(s('network-b'), 'Engineer working across multiple monitors') },
  enterprise: { a: p(s('network'), 'Network patch panel with structured cabling'), b: p(s('enterprise-b'), 'Team working in an open office') },
  server: { a: p(s('server-a'), 'Technician working on server hardware'), b: p('/images/hero-server-racks.webp', 'Server racks with structured cabling') },
  nas: { a: p(s('nas-a'), 'Open enterprise hard drive'), b: p(s('rack-and-roll'), 'Server racks in a data center') },
  rack: { a: p('/images/hero-bg-security.webp', 'Server racks with network cabling'), b: p(s('rack-b'), 'Patch panel with red network cables') },
  cloud: { a: p(s('cloud-a'), 'Laptop showing application code'), b: p(s('cloud-b'), 'Developer writing code on a laptop') },
  av: { a: p(s('av-a'), 'Video conference call on a laptop'), b: p(s('av-b'), 'Modern office interior') },
  ai: { a: p(s('ai-a'), 'Code on a laptop screen'), b: p('/images/team-engineers.webp', 'Engineers reviewing code together') },
  crm: { a: p(s('crm-a'), 'Warehouse with inventory on shelves'), b: p(s('crm-b'), 'Business dashboard on a laptop') },
  consulting: { a: p(s('consulting-a'), 'Team planning at a whiteboard'), b: p(s('consulting-b'), 'Business presentation in a meeting room') },
  security: { a: p(s('security-a'), 'Secure online payment on a laptop'), b: p(s('security-b'), 'Laptop with code on a desk') },
  web: { a: p(s('web-a'), 'Designer sketching a website layout'), b: p(s('web-b'), 'Website wireframes on a wall') },
  marketing: { a: p(s('marketing-a'), 'Search performance analytics dashboard'), b: p(s('marketing-b'), 'Digital marketing letter tiles') },
  mobile: { a: p(s('mobile-a'), 'Mobile app on a smartphone'), b: p(s('mobile-b'), 'Smartphone running an app on a desk') },
  aiHardware: { a: p(s('aihw-a'), 'GPU accelerator cards'), b: p(s('server-a'), 'Technician working on server hardware') },
};
