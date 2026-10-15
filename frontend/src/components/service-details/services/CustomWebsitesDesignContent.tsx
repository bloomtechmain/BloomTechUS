import { Palette, Gauge, Search, ShoppingCart, Building2, AppWindow, Target, Globe, Lock, Zap } from 'lucide-react';
import { Section, Heading, BlockGrid, StackTable, FeatureBand, CtaBand, Hl, PhotoBand } from '../kit';
import { svcPhotos } from '../servicePhotos';

/**
 * CustomWebsitesDesignContent Component
 * Custom content section for Custom Websites & Design service
 */
interface CustomWebsitesDesignContentProps {
  onOpenModal: () => void;
}

export const CustomWebsitesDesignContent = ({ onOpenModal }: CustomWebsitesDesignContentProps) => {
  return (
    <>
      {/* Our Design Philosophy: The Three Pillars */}
      <Section tone="white">
        <Heading title="Our Design Philosophy: The Three Pillars" sub="Art, Science, and Strategy" image={svcPhotos.web.a} />
        <BlockGrid
          cols={3}
          items={[
            { num: '01', icon: Palette, title: 'High-Fidelity UI/UX Design', desc: <>Utilizing industry-leading creative stacks &mdash; including <Hl>Canva Enterprise</Hl> and <Hl>Freepik Premium</Hl> &mdash; we craft visual identities focused on "User Intent," ensuring every pixel serves a purpose.</> },
            { num: '02', icon: Gauge, title: 'Performance-Driven Engineering', desc: <>A beautiful site is useless if it's slow. We build on clean, bloat-free code optimized for <Hl>Core Web Vitals</Hl>, ensuring sub-second load times and flawless mobile responsiveness.</> },
            { num: '03', icon: Search, title: 'SEO & Content Strategy', desc: <>We bake SEO into the foundation of your site &mdash; schema markup, metadata architecture &mdash; and use AI tools like <Hl>Anthropic Claude</Hl> to refine messaging for your audience.</> },
          ]}
        />
      </Section>

      <PhotoBand photo={svcPhotos.web.b} />

      {/* Specialized Web Solutions */}
      <Section tone="grey">
        <Heading title="Specialized Web Solutions" sub="The specific engines your business needs to grow" />
        <BlockGrid
          cols={4}
          items={[
            { icon: ShoppingCart, tag: 'Commerce', title: 'E-Commerce Powerhouses', desc: <>Custom <Hl>Shopify</Hl> and <Hl>WooCommerce</Hl> integrations designed for high-volume transactions and seamless checkout flows.</> },
            { icon: Building2, tag: 'Branding', title: 'Corporate Identity Hubs', desc: <>Professional, multi-page architectures for firms that need to project <Hl>authority and trust</Hl>.</> },
            { icon: AppWindow, tag: 'Software', title: 'Custom Web Applications', desc: <>Bespoke portals, member areas, and internal tools built to solve specific <Hl>operational bottlenecks</Hl>.</> },
            { icon: Target, tag: 'Conversion', title: 'Landing Page Optimization', desc: <>High-converting <Hl>"Lead Gen"</Hl> pages designed for specific ad campaigns (PPC/Social).</> },
          ]}
        />
      </Section>

      {/* The Infrastructure Advantage */}
      <FeatureBand
        eyebrow="Enterprise Infrastructure"
        title={<>The Infrastructure Advantage</>}
        text={<>Most designers leave you to figure out hosting on your own. Because we specialize in <Hl>IT Infrastructure and Network Design</Hl>, your website is hosted on enterprise-grade server environments.</>}
        points={[
          { icon: Globe, title: 'DNS Management', desc: 'Complete domain configuration and DNS optimization for maximum performance.' },
          { icon: Lock, title: 'SSL Certificates', desc: 'Enterprise-grade security certificates ensuring encrypted, trusted connections.' },
          { icon: Zap, title: 'Server-Side Caching', desc: 'Advanced caching strategies delivering instant page loads and superior UX.' },
        ]}
      />

      {/* The Technical Tech Stack */}
      <Section tone="white">
        <Heading title="The Technical Tech Stack" sub="Professional toolset for scalable, secure sites" />
        <StackTable
          head={['Category', 'Our Toolset']}
          rows={[
            { label: 'Platforms', value: 'Shopify Plus, WordPress (Headless), Webflow' },
            { label: 'Frontend', value: 'React.js, Next.js, Tailwind CSS' },
            { label: 'Creative', value: 'Canva, Adobe Suite, Freepik Assets' },
            { label: 'Intelligence', value: 'AI-Driven Copywriting & Optimization (Claude/GPT-4)' },
            { label: 'Hosting', value: 'High-Performance Cloud (AWS / Google Cloud / Vercel)' },
          ]}
        />
      </Section>

      {/* Final CTA */}
      <CtaBand
        eyebrow="Design Excellence"
        title={<>Ready to Build a Digital Masterpiece?</>}
        text="Let's design a website that doesn't just look beautiful—but converts visitors into customers and projects the authority your brand deserves."
        cardTitle="Start Your Project"
        cardText="Let's build something extraordinary"
        button="Request Project Quote"
        onClick={onOpenModal}
      />
    </>
  );
};
