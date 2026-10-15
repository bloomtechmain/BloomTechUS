import { Gauge, PenTool, Target, ShoppingBag, Search, Wrench, Rocket, RefreshCw, TrendingUp, Layers, Repeat } from 'lucide-react';
import { Section, Heading, BlockGrid, StackTable, Steps, FeatureBand, CtaBand, Hl, PhotoBand } from '../kit';
import { svcPhotos } from '../servicePhotos';

/**
 * OnlineMarketingContent Component
 * Custom content section for Online Marketing service
 */
interface OnlineMarketingContentProps {
  onOpenModal: () => void;
}

export const OnlineMarketingContent = ({ onOpenModal }: OnlineMarketingContentProps) => {
  return (
    <>
      {/* Our Core Growth Pillars */}
      <Section tone="white">
        <Heading title="Our Core Growth Pillars" sub="Balancing technical precision with creative excellence" image={svcPhotos.marketing.a} />
        <BlockGrid
          items={[
            {
              icon: Gauge,
              title: 'Technical SEO & Core Web Vitals',
              desc: <>Search engines favor performance. Leveraging our <Hl>Custom Server & Infrastructure</Hl> expertise, we optimize your site's backend for maximum search visibility.</>,
              points: [
                <><strong>Speed:</strong> Sub-second load times to improve rankings</>,
                <><strong>Architecture:</strong> Schema markup and flawless mobile indexing</>,
                <><strong>Stability:</strong> Enterprise-grade server environments</>,
              ],
            },
            {
              icon: PenTool,
              title: 'Strategic Content Marketing',
              desc: <>We use <Hl>Advanced AI (Anthropic/Claude)</Hl> and deep industry research to produce high-authority content that establishes your brand as a thought leader.</>,
              points: [
                <><strong>Thought Leadership:</strong> Whitepapers, case studies, landing pages</>,
                <><strong>Human-Centric:</strong> Writing for humans first</>,
              ],
            },
            {
              icon: Target,
              title: 'Precision Paid Acquisition (PPC)',
              desc: <>Stop wasting ad spend on irrelevant traffic. We treat your budget like a <Hl>financial asset</Hl>, maximizing every dollar invested.</>,
              points: [
                <><strong>Targeted Campaigns:</strong> Google Ads and Meta with "Negative Keyword" filtering</>,
                <><strong>A/B Testing:</strong> Continuous split testing for lowest CPA</>,
              ],
            },
            {
              icon: ShoppingBag,
              title: 'Specialized E-Commerce Growth',
              desc: <>Optimized for <Hl>Shopify</Hl> and high-volume digital storefronts, we build full-funnel strategies that convert browsers into buyers.</>,
              points: [
                <><strong>Full-Funnel Strategy:</strong> Product pages for "Buyer Intent" keywords</>,
                <><strong>Automation:</strong> Abandoned cart recovery, retargeting</>,
              ],
            },
          ]}
        />
      </Section>

      <PhotoBand photo={svcPhotos.marketing.b} />

      {/* The 4-Phase Growth Lifecycle */}
      <Section tone="grey">
        <Heading title="The 4-Phase Growth Lifecycle" sub="Data-driven optimization from audit to scale" />
        <Steps
          items={[
            { title: 'Deep Audit & Baseline', desc: 'Analyzing your current traffic, technical debt, and competitor positioning to establish clear KPIs.', icon: Search },
            { title: 'Infrastructure Hardening', desc: 'Fixing technical SEO issues and speed bottlenecks before driving new traffic to your site.', icon: Wrench },
            { title: 'Campaign Deployment', desc: 'Launching high-authority content and targeted ad sets across search and social platforms.', icon: Rocket },
            { title: 'Agile Optimization', desc: 'Reviewing data weekly to double down on what works and cut what doesn\'t for maximum ROI.', icon: RefreshCw },
          ]}
        />
      </Section>

      {/* Technical Marketing Stack */}
      <Section tone="white">
        <Heading title="Technical Marketing Stack" sub="Professional tools for granular tracking and execution" />
        <StackTable
          head={['Category', 'Our Marketing Stack']}
          rows={[
            { label: 'Analytics', value: 'Google Analytics 4 (GA4), GTM, Microsoft Clarity (Heatmaps)' },
            { label: 'SEO Tools', value: 'Ahrefs, SEMRush, Screaming Frog (Technical Crawling)' },
            { label: 'Content AI', value: 'Anthropic Claude-3.5-Sonnet for high-fidelity copy' },
            { label: 'Creative', value: 'Canva Enterprise & Freepik Premium for high-res assets' },
            { label: 'E-Commerce', value: 'Shopify Flow & Facebook Conversions API (CAPI)' },
          ]}
        />
      </Section>

      {/* Performance-First Approach */}
      <FeatureBand
        eyebrow="Measurable ROI"
        title="Marketing That Pays for Itself."
        sub="Data-driven. Performance-led."
        text={<>We move beyond vanity metrics to deliver <Hl>measurable ROI</Hl>. By combining high-level technical SEO with aggressive digital marketing strategies, we ensure your business doesn't just rank—it dominates.</>}
        points={[
          { icon: TrendingUp, title: 'Scalable Growth', desc: 'Campaigns designed to scale with your business ambitions and budget.' },
          { icon: Layers, title: 'Multi-Channel', desc: 'Integrated strategies across SEO, PPC, content, and social media.' },
          { icon: Repeat, title: 'Continuous Optimization', desc: 'Weekly reviews and agile adjustments for maximum campaign efficiency.' },
        ]}
        badge={{ big: '3.2x', small: 'AVERAGE CLIENT ROI', caption: 'Measured across active SEO and paid acquisition campaigns' }}
      />

      {/* Final CTA */}
      <CtaBand
        eyebrow="Growth Strategy"
        title={<>Ready to Dominate Your Market?</>}
        text="Let's build a marketing engine that drives qualified leads, increases conversions, and delivers measurable ROI—month after month."
        cardTitle="Free Marketing Audit"
        cardText="Discover untapped growth opportunities"
        button="Get Free Audit"
        onClick={onOpenModal}
      />
    </>
  );
};
