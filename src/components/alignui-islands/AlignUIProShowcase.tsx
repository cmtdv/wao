'use client';

import * as React from 'react';
import NumberFlow from '@number-flow/react';
import {
  RiArrowRightUpLine,
  RiBankCardLine,
  RiBarChartBoxLine,
  RiCalendarCheckLine,
  RiCheckLine,
  RiRobot2Line,
  RiSendPlaneFill,
  RiSparklingFill,
  RiTimeLine,
} from '@remixicon/react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from 'recharts';

import Announcement01 from '@/components/alignui-pro/blocks/announcement';
import BlockAuthCard from '@/components/alignui-pro/blocks/auth-card';
import Blog01 from '@/components/alignui-pro/blocks/blog';
import BrandSocial01 from '@/components/alignui-pro/blocks/brand-social';
import Careers01 from '@/components/alignui-pro/blocks/careers';
import Contact01 from '@/components/alignui-pro/blocks/contact';
import Cta01 from '@/components/alignui-pro/blocks/cta';
import Faq01 from '@/components/alignui-pro/blocks/faq';
import Features01 from '@/components/alignui-pro/blocks/features';
import BlockFilter from '@/components/alignui-pro/blocks/filter';
import Footer01 from '@/components/alignui-pro/blocks/footer';
import Hero01 from '@/components/alignui-pro/blocks/hero';
import HowItWorks01 from '@/components/alignui-pro/blocks/how-it-works';
import Integrations01 from '@/components/alignui-pro/blocks/integrations';
import Header01 from '@/components/alignui-pro/blocks/navigation';
import Newsletter01 from '@/components/alignui-pro/blocks/newsletter';
import BlockNotification from '@/components/alignui-pro/blocks/notification';
import Pricing01 from '@/components/alignui-pro/blocks/pricing';
import BlockProfileCard from '@/components/alignui-pro/blocks/profile-card';
import StatsMetrics01 from '@/components/alignui-pro/blocks/stats-metrics';
import Teams01 from '@/components/alignui-pro/blocks/teams';
import Testimonials01 from '@/components/alignui-pro/blocks/testimonials';
import * as Avatar from '@/components/ui/avatar';
import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as FancyButton from '@/components/ui/fancy-button';
import * as ProgressBar from '@/components/ui/progress-bar';
import * as SegmentedControl from '@/components/ui/segmented-control';
import * as StatusBadge from '@/components/ui/status-badge';
import * as Tooltip from '@/components/ui/tooltip';

class BlockBoundary extends React.Component<
  { title: string; children: React.ReactNode },
  { error: string | null }
> {
  constructor(props: { title: string; children: React.ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(err: Error) {
    return { error: err.message };
  }
  render() {
    if (this.state.error) {
      return (
        <div className='p-6 text-paragraph-sm text-error-base'>
          Block error ({this.props.title}): {this.state.error}
        </div>
      );
    }
    return this.props.children;
  }
}

const FINANCE_SPENDING_DATA = [
  { month: 'Jun', inbound: 4200, rail: 1850 },
  { month: 'Jul', inbound: 5800, rail: 2400 },
  { month: 'Aug', inbound: 6400, rail: 2950 },
  { month: 'Sep', inbound: 5100, rail: 2100 },
  { month: 'Oct', inbound: 7900, rail: 3600 },
  { month: 'Nov', inbound: 8450, rail: 4120 },
];

type FilterTab = 'all' | 'templates' | 'marketing' | 'editorial' | 'application';

interface BlockEntry {
  id: string;
  title: string;
  domain: 'marketing' | 'editorial' | 'application';
  source: string;
  render: () => React.ReactNode;
}

export function AlignUIProShowcase({
  isZh,
}: {
  isZh: boolean;
}): React.ReactElement {
  const [tab, setTab] = React.useState<FilterTab>('all');
  const [balance, setBalance] = React.useState(128450.8);
  const [aiPrompt, setAiPrompt] = React.useState('');

  const proBlocks: BlockEntry[] = React.useMemo(
    () => [
      {
        id: 'hero',
        title: 'Hero 01 (with Announcement 01 + Navigation 01)',
        domain: 'marketing',
        source: 'pro.alignui.com/blocks/hero',
        render: () => <Hero01 />,
      },
      {
        id: 'announcement',
        title: 'Announcement 01 (3 Variants)',
        domain: 'marketing',
        source: 'pro.alignui.com/blocks/announcement',
        render: () => (
          <div className='flex flex-col gap-2 p-4'>
            <Announcement01 variant='stroke' />
            <Announcement01 variant='lighter' />
            <Announcement01 variant='filled' />
          </div>
        ),
      },
      {
        id: 'navigation',
        title: 'Navigation 01',
        domain: 'marketing',
        source: 'pro.alignui.com/blocks/navigation',
        render: () => <Header01 />,
      },
      {
        id: 'brand-social',
        title: 'Brands & Social Proof 01',
        domain: 'marketing',
        source: 'pro.alignui.com/blocks/brand-social',
        render: () => <BrandSocial01 />,
      },
      {
        id: 'features',
        title: 'Features 01',
        domain: 'marketing',
        source: 'pro.alignui.com/blocks/features',
        render: () => <Features01 />,
      },
      {
        id: 'stats-metrics',
        title: 'Stats & Metrics 01',
        domain: 'editorial',
        source: 'pro.alignui.com/blocks/stats-metrics',
        render: () => <StatsMetrics01 />,
      },
      {
        id: 'how-it-works',
        title: 'How It Works 01',
        domain: 'editorial',
        source: 'pro.alignui.com/blocks/how-it-works',
        render: () => <HowItWorks01 />,
      },
      {
        id: 'integrations',
        title: 'Integrations 01',
        domain: 'marketing',
        source: 'pro.alignui.com/blocks/integrations',
        render: () => <Integrations01 />,
      },
      {
        id: 'pricing',
        title: 'Pricing 01',
        domain: 'marketing',
        source: 'pro.alignui.com/blocks/pricing',
        render: () => <Pricing01 />,
      },
      {
        id: 'testimonials',
        title: 'Testimonials 01',
        domain: 'marketing',
        source: 'pro.alignui.com/blocks/testimonials',
        render: () => <Testimonials01 />,
      },
      {
        id: 'blog',
        title: 'Blog 01',
        domain: 'editorial',
        source: 'pro.alignui.com/blocks/blog',
        render: () => <Blog01 />,
      },
      {
        id: 'faq',
        title: 'FAQ 01',
        domain: 'editorial',
        source: 'pro.alignui.com/blocks/faq',
        render: () => <Faq01 />,
      },
      {
        id: 'teams',
        title: 'Teams 01',
        domain: 'marketing',
        source: 'pro.alignui.com/blocks/teams',
        render: () => <Teams01 />,
      },
      {
        id: 'careers',
        title: 'Careers 01',
        domain: 'marketing',
        source: 'pro.alignui.com/blocks/careers',
        render: () => <Careers01 />,
      },
      {
        id: 'cta',
        title: 'CTA 01',
        domain: 'marketing',
        source: 'pro.alignui.com/blocks/cta',
        render: () => <Cta01 />,
      },
      {
        id: 'newsletter',
        title: 'Newsletter 01',
        domain: 'editorial',
        source: 'pro.alignui.com/blocks/newsletter',
        render: () => <Newsletter01 />,
      },
      {
        id: 'contact',
        title: 'Contact 01',
        domain: 'editorial',
        source: 'pro.alignui.com/blocks/contact',
        render: () => <Contact01 />,
      },
      {
        id: 'filter',
        title: 'Filter 01',
        domain: 'application',
        source: 'pro.alignui.com/blocks/filter',
        render: () => (
          <div className='flex justify-center p-6 bg-bg-weak-50'>
            <BlockFilter />
          </div>
        ),
      },
      {
        id: 'auth-card',
        title: 'Auth Card 01',
        domain: 'application',
        source: 'pro.alignui.com/blocks/auth-card',
        render: () => (
          <div className='flex justify-center p-6 bg-bg-weak-50'>
            <BlockAuthCard />
          </div>
        ),
      },
      {
        id: 'profile-card',
        title: 'Profile Card 01',
        domain: 'application',
        source: 'pro.alignui.com/blocks/profile-card',
        render: () => (
          <div className='flex justify-center p-6 bg-bg-weak-50'>
            <BlockProfileCard />
          </div>
        ),
      },
      {
        id: 'notification',
        title: 'Notification Feed 01',
        domain: 'application',
        source: 'pro.alignui.com/blocks/notification',
        render: () => (
          <div className='flex justify-center p-6 bg-bg-weak-50'>
            <BlockNotification />
          </div>
        ),
      },
      {
        id: 'footer',
        title: 'Footer 01',
        domain: 'marketing',
        source: 'pro.alignui.com/blocks/footer',
        render: () => <Footer01 />,
      },
    ],
    [],
  );

  const visibleBlocks = proBlocks.filter((b) => {
    if (tab === 'all') return true;
    if (tab === 'templates') return false;
    return b.domain === tab;
  });

  const showTemplates = tab === 'all' || tab === 'templates';

  return (
    <Tooltip.Provider delayDuration={150}>
      <div data-alignui-scope className='flex flex-col gap-10 pb-14'>
        {/* Filter Bar */}
        <div className='sticky top-16 z-30 flex flex-wrap items-center justify-between gap-4 rounded-20 bg-bg-white-0/95 p-3 shadow-regular-sm ring-1 ring-inset ring-stroke-soft-200 backdrop-blur-md'>
          <SegmentedControl.Root
            value={tab}
            onValueChange={(v) => setTab(v as FilterTab)}
          >
            <SegmentedControl.List>
              <SegmentedControl.Trigger value='all'>
                {isZh ? '全部 (4 模板 + 22 Pro 区块)' : 'All (4 Templates + 22 Pro Blocks)'}
              </SegmentedControl.Trigger>
              <SegmentedControl.Trigger value='templates'>
                {isZh ? '4 套 Pro 行业模板库' : '4 Pro Templates'}
              </SegmentedControl.Trigger>
              <SegmentedControl.Trigger value='marketing'>
                {isZh ? 'Marketing (11)' : 'Marketing (11)'}
              </SegmentedControl.Trigger>
              <SegmentedControl.Trigger value='editorial'>
                {isZh ? 'Editorial (6)' : 'Editorial (6)'}
              </SegmentedControl.Trigger>
              <SegmentedControl.Trigger value='application'>
                {isZh ? 'Application (4)' : 'Application (4)'}
              </SegmentedControl.Trigger>
            </SegmentedControl.List>
          </SegmentedControl.Root>

          <Badge.Root variant='light' color='blue' size='medium'>
            <Badge.Dot />
            AlignUI Pro Official Source · Tailwind v4
          </Badge.Root>
        </div>

        {/* PART A: 4 PURCHASED PRO INDUSTRY TEMPLATES (D:\alignui\template\*) */}
        {showTemplates && (
          <section className='flex flex-col gap-5'>
            <div className='flex flex-wrap items-end justify-between gap-3 border-b border-stroke-soft-200 pb-3'>
              <div>
                <span className='text-subheading-xs uppercase text-primary-base'>
                  OFFICIAL ALIGNUI PRO TEMPLATES (D:\alignui\template\*)
                </span>
                <h2 className='text-title-h5 text-text-strong-950 mt-1'>
                  {isZh
                    ? '4 套已购官方 Pro 行业模板核心工作台（AI · Finance · HR · Marketing）'
                    : '4 Official Pro Industry Templates (AI · Finance · HR · Marketing)'}
                </h2>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
              {/* 1. AI Template (shadow-complex + prompt composer) */}
              <div className='flex flex-col justify-between gap-5 rounded-20 bg-bg-white-0 p-6 shadow-complex ring-1 ring-inset ring-stroke-soft-200'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2.5'>
                    <div className='flex size-9 items-center justify-center rounded-10 bg-primary-alpha-10 text-primary-base'>
                      <RiRobot2Line className='size-5' />
                    </div>
                    <div>
                      <h3 className='text-label-md text-text-strong-950'>
                        1. AI Chat Template (ai-template · Tailwind v4)
                      </h3>
                      <p className='text-paragraph-xs text-text-sub-600'>
                        shadow-complex · shadow-custom-input · Prompt Composer
                      </p>
                    </div>
                  </div>
                  <Badge.Root variant='lighter' color='sky' size='medium'>
                    Next 15 + React 19
                  </Badge.Root>
                </div>

                <div className='rounded-2xl bg-bg-weak-50 p-4 ring-1 ring-inset ring-stroke-soft-200 flex flex-col gap-3'>
                  <div className='flex flex-wrap gap-2'>
                    {[
                      isZh ? '240h 过境免签联程规则' : '240h Transit Rules',
                      isZh ? '12306 外籍护照核验' : '12306 Passport Check',
                      isZh ? '离境退税即买即退' : 'Instant Tax Refund',
                    ].map((chip) => (
                      <button
                        key={chip}
                        type='button'
                        onClick={() => setAiPrompt(chip)}
                        className='rounded-full bg-bg-white-0 px-3 py-1 text-label-xs text-text-sub-600 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200 hover:text-text-strong-950'
                      >
                        <RiSparklingFill className='inline size-3.5 mr-1 text-primary-base' />
                        {chip}
                      </button>
                    ))}
                  </div>
                  <div className='flex items-center gap-2 rounded-10 bg-bg-white-0 px-3 py-2 shadow-custom-input'>
                    <input
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder={
                        isZh
                          ? '向 ChinaWao AI 助手提问官方政策细则…'
                          : 'Ask AlignUI AI assistant...'
                      }
                      className='flex-1 bg-transparent text-paragraph-sm text-text-strong-950 outline-none placeholder:text-text-sub-600'
                    />
                    <FancyButton.Root variant='primary' size='xsmall'>
                      <FancyButton.Icon as={RiSendPlaneFill} />
                      Send
                    </FancyButton.Root>
                  </div>
                </div>
              </div>

              {/* 2. Finance Template (NumberFlow + Virtual Card + Recharts) */}
              <div className='flex flex-col justify-between gap-4 rounded-20 bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2.5'>
                    <div className='flex size-9 items-center justify-center rounded-10 bg-information-lighter text-information-base'>
                      <RiBankCardLine className='size-5' />
                    </div>
                    <div>
                      <h3 className='text-label-md text-text-strong-950'>
                        2. Finance & Banking Template (template-finance)
                      </h3>
                      <p className='text-paragraph-xs text-text-sub-600'>
                        @number-flow/react + Recharts Tailwind v4 Port
                      </p>
                    </div>
                  </div>
                  <Button.Root
                    variant='neutral'
                    mode='stroke'
                    size='xxsmall'
                    onClick={() =>
                      setBalance((b) =>
                        b > 130000 ? 128450.8 : b + 6420.5,
                      )
                    }
                  >
                    +¥6,420.50
                  </Button.Root>
                </div>

                <div className='flex items-baseline justify-between'>
                  <div className='text-title-h4 text-text-strong-950 tabular-nums'>
                    ¥
                    <NumberFlow
                      value={balance}
                      format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
                    />
                  </div>
                  <StatusBadge.Root status='completed' variant='light'>
                    <StatusBadge.Dot />
                    +14.8% MoM
                  </StatusBadge.Root>
                </div>

                <div className='h-36 w-full'>
                  <ResponsiveContainer width='100%' height='100%'>
                    <BarChart data={FINANCE_SPENDING_DATA}>
                      <CartesianGrid
                        strokeDasharray='3 3'
                        vertical={false}
                        stroke='var(--color-stroke-soft-200)'
                      />
                      <XAxis
                        dataKey='month'
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: 'var(--color-text-sub-600)', fontSize: 12 }}
                      />
                      <YAxis hide />
                      <RechartsTooltip />
                      <Bar
                        dataKey='inbound'
                        fill='var(--color-primary-base)'
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey='rail'
                        fill='var(--color-sky-400)'
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* 3. HR Management Template */}
              <div className='flex flex-col gap-4 rounded-20 bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2.5'>
                    <div className='flex size-9 items-center justify-center rounded-10 bg-feature-lighter text-feature-base'>
                      <RiCalendarCheckLine className='size-5' />
                    </div>
                    <div>
                      <h3 className='text-label-md text-text-strong-950'>
                        3. HR Management Template (template-hr)
                      </h3>
                      <p className='text-paragraph-xs text-text-sub-600'>
                        Work Permit Points & Editorial Shift Tracker
                      </p>
                    </div>
                  </div>
                  <Badge.Root variant='light' color='purple' size='medium'>
                    HR Suite
                  </Badge.Root>
                </div>

                <div className='flex flex-col gap-2.5'>
                  {[
                    {
                      name: 'Lin Wei · Immigration Legal Desk',
                      time: '09:00 – 17:30 CST',
                      status: 'Verified',
                    },
                    {
                      name: 'Clara M. · 12306 & Transit Field QA',
                      time: '10:30 – 19:00 CST',
                      status: 'Active',
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className='flex items-center justify-between rounded-10 bg-bg-weak-50 px-3.5 py-2.5 ring-1 ring-inset ring-stroke-soft-200'
                    >
                      <div className='flex items-center gap-2.5'>
                        <Avatar.Root size='32' color='purple'>
                          {item.name.slice(0, 2).toUpperCase()}
                        </Avatar.Root>
                        <div>
                          <div className='text-label-sm text-text-strong-950'>
                            {item.name}
                          </div>
                          <div className='text-paragraph-xs text-text-sub-600 inline-flex items-center gap-1'>
                            <RiTimeLine className='size-3.5' />
                            {item.time}
                          </div>
                        </div>
                      </div>
                      <Badge.Root variant='light' color='green' size='small'>
                        <Badge.Icon as={RiCheckLine} />
                        {item.status}
                      </Badge.Root>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Marketing & Sales Template */}
              <div className='flex flex-col justify-between gap-4 rounded-20 bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2.5'>
                    <div className='flex size-9 items-center justify-center rounded-10 bg-warning-lighter text-warning-base'>
                      <RiBarChartBoxLine className='size-5' />
                    </div>
                    <div>
                      <h3 className='text-label-md text-text-strong-950'>
                        4. Marketing & Analytics Template (template-marketing)
                      </h3>
                      <p className='text-paragraph-xs text-text-sub-600'>
                        Channel Conversion & Multi-Region Portal Telemetry
                      </p>
                    </div>
                  </div>
                  <Badge.Root variant='light' color='orange' size='medium'>
                    Marketing Suite
                  </Badge.Root>
                </div>

                <div className='flex flex-col gap-3'>
                  {[
                    { label: 'Direct Official Portal Lookups', pct: 84, color: 'blue' as const },
                    { label: '240h Visa Calculator Completions', pct: 69, color: 'green' as const },
                    { label: 'Show-to-Driver Fullscreen Cards', pct: 52, color: 'orange' as const },
                  ].map((ch) => (
                    <div key={ch.label} className='flex flex-col gap-1'>
                      <div className='flex justify-between text-label-xs text-text-sub-600'>
                        <span>{ch.label}</span>
                        <span>{ch.pct}%</span>
                      </div>
                      <ProgressBar.Root value={ch.pct} max={100} color={ch.color} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* PART B: ALL 22 OFFICIAL PRO.ALIGNUI.COM BLOCKS */}
        {visibleBlocks.length > 0 && (
          <section className='flex flex-col gap-8'>
            <div className='border-b border-stroke-soft-200 pb-3'>
              <span className='text-subheading-xs uppercase text-primary-base'>
                OFFICIAL PRO.ALIGNUI.COM BLOCKS (22 CATEGORIES · BLOCK 01)
              </span>
              <h2 className='text-title-h5 text-text-strong-950 mt-1'>
                {isZh
                  ? '来自你已登录 pro.alignui.com 账户的原版商业区块库源码实时渲染'
                  : 'Live Official AlignUI Pro Blocks Extracted Verbatim from pro.alignui.com'}
              </h2>
            </div>

            {visibleBlocks.map((blk, i) => (
              <div
                key={blk.id}
                id={`pro-${blk.id}`}
                className='overflow-hidden rounded-20 bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'
              >
                <div className='flex flex-wrap items-center justify-between gap-2 border-b border-stroke-soft-200 bg-bg-weak-50 px-5 py-3'>
                  <div className='flex items-center gap-2.5'>
                    <Badge.Root variant='filled' color='blue' size='small'>
                      {String(i + 1).padStart(2, '0')}
                    </Badge.Root>
                    <span className='text-label-sm text-text-strong-950'>
                      {blk.title}
                    </span>
                  </div>
                  <span className='text-paragraph-xs text-text-sub-600 inline-flex items-center gap-1'>
                    {blk.source}
                    <RiArrowRightUpLine className='size-3.5' />
                  </span>
                </div>
                <div className='overflow-x-auto bg-bg-white-0'>
                  <BlockBoundary title={blk.title}>{blk.render()}</BlockBoundary>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </Tooltip.Provider>
  );
}
