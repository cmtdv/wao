import type { TableColumn, TableRow } from '@ui/data-display/DataTable.astro';
import type { AccordionItem } from '@ui/navigation/Accordion.astro';
import type { StepItem } from '@ui/navigation/Stepper.astro';
import type { VerticalTabItem } from '@ui/navigation/VerticalTabs.astro';
import type { FeatureItem } from '@blocks/marketing/FeaturesBlock.astro';
import type { PricingTier } from '@blocks/marketing/PricingBlock.astro';
import type { TestimonialItem } from '@blocks/marketing/TestimonialsBlock.astro';
import type { TeamMember } from '@blocks/marketing/TeamsBlock.astro';
import type { RoleItem } from '@blocks/marketing/CareersBlock.astro';
import type { IntegrationItem } from '@blocks/marketing/IntegrationsBlock.astro';
import type { BlogPreviewItem } from '@blocks/editorial/BlogGridBlock.astro';

export interface CoverageRow {
  category: string;
  chinaWaoPath: string;
  group: string;
  anchor: string;
}

/** 100% Coverage Map: Native Astro coss ui Component Primitives */
export const BASE_PRIMITIVE_COVERAGE: CoverageRow[] = [
  { category: 'frame', chinaWaoPath: '@ui/coss/Frame.astro + FramePanel.astro', group: 'coss Surfaces', anchor: '#ds-coss-surfaces' },
  { category: 'card', chinaWaoPath: '@ui/coss/Card.astro', group: 'coss Surfaces', anchor: '#ds-coss-surfaces' },
  { category: 'input-group', chinaWaoPath: '@ui/coss/InputGroup.astro', group: 'coss Surfaces', anchor: '#ds-coss-surfaces' },
  { category: 'group', chinaWaoPath: '@ui/coss/Group.astro', group: 'coss Surfaces', anchor: '#ds-coss-surfaces' },
  { category: 'number-field', chinaWaoPath: '@ui/coss/NumberField.astro', group: 'coss Surfaces', anchor: '#ds-coss-surfaces' },
  { category: 'field', chinaWaoPath: '@ui/coss/Field.astro', group: 'coss Surfaces', anchor: '#ds-coss-surfaces' },
  { category: 'switch', chinaWaoPath: '@ui/coss/Switch.astro', group: 'coss Surfaces', anchor: '#ds-coss-surfaces' },
  { category: 'sheet', chinaWaoPath: '@ui/coss/Sheet.astro', group: 'coss Surfaces', anchor: '#ds-coss-surfaces' },
  { category: 'empty', chinaWaoPath: '@ui/coss/Empty.astro', group: 'coss Surfaces', anchor: '#ds-coss-surfaces' },
  { category: 'meter', chinaWaoPath: '@ui/coss/Meter.astro', group: 'coss Surfaces', anchor: '#ds-coss-surfaces' },
  { category: 'spinner', chinaWaoPath: '@ui/coss/Spinner.astro', group: 'coss Surfaces', anchor: '#ds-coss-surfaces' },
  { category: 'toolbar', chinaWaoPath: '@ui/coss/Toolbar.astro', group: 'coss Surfaces', anchor: '#ds-coss-surfaces' },
  { category: 'collapsible', chinaWaoPath: '@ui/coss/Collapsible.astro', group: 'coss Surfaces', anchor: '#ds-coss-surfaces' },
  { category: 'button', chinaWaoPath: '@ui/actions/Button.astro', group: 'Actions', anchor: '#ds-actions' },
  { category: 'button-group', chinaWaoPath: '@ui/actions/ButtonGroup.astro', group: 'Actions', anchor: '#ds-actions' },
  { category: 'compact-button', chinaWaoPath: '@ui/actions/CompactButton.astro', group: 'Actions', anchor: '#ds-actions' },
  { category: 'fancy-button', chinaWaoPath: '@ui/actions/FancyButton.astro', group: 'Actions', anchor: '#ds-actions' },
  { category: 'link-button', chinaWaoPath: '@ui/actions/LinkButton.astro', group: 'Actions', anchor: '#ds-actions' },
  { category: 'avatar', chinaWaoPath: '@ui/data-display/Avatar.astro', group: 'Data Display', anchor: '#ds-data-display' },
  { category: 'avatar-group', chinaWaoPath: '@ui/data-display/AvatarGroup.astro', group: 'Data Display', anchor: '#ds-data-display' },
  { category: 'badge', chinaWaoPath: '@ui/data-display/Badge.astro', group: 'Data Display', anchor: '#ds-data-display' },
  { category: 'tag', chinaWaoPath: '@ui/data-display/Tag.astro', group: 'Data Display', anchor: '#ds-data-display' },
  { category: 'table', chinaWaoPath: '@ui/data-display/DataTable.astro', group: 'Data Display', anchor: '#ds-table' },
  { category: 'separator', chinaWaoPath: '@ui/data-display/Divider.astro', group: 'Data Display', anchor: '#ds-data-display' },
  { category: 'kbd', chinaWaoPath: '@ui/data-display/Kbd.astro', group: 'Data Display', anchor: '#ds-data-display' },
  { category: 'progress', chinaWaoPath: '@ui/data-display/ProgressBar.astro + ProgressCircle.astro', group: 'Data Display', anchor: '#ds-progress' },
  { category: 'rating', chinaWaoPath: '@ui/data-display/Rating.astro', group: 'Data Display', anchor: '#ds-progress' },
  { category: 'skeleton', chinaWaoPath: '@ui/data-display/Skeleton.astro', group: 'Data Display', anchor: '#ds-feedback' },
  { category: 'alert', chinaWaoPath: '@ui/feedback/Alert.astro', group: 'Feedback', anchor: '#ds-feedback' },
  { category: 'banner', chinaWaoPath: '@ui/feedback/Banner.astro', group: 'Feedback', anchor: '#ds-feedback' },
  { category: 'notification', chinaWaoPath: '@ui/feedback/NotificationCard.astro', group: 'Feedback', anchor: '#ds-feedback' },
  { category: 'toast', chinaWaoPath: '@layouts/Layout.astro (popover="manual")', group: 'Feedback', anchor: '#ds-feedback' },
  { category: 'tooltip', chinaWaoPath: '@ui/feedback/Tooltip.astro', group: 'Feedback', anchor: '#ds-overlays' },
  { category: 'checkbox', chinaWaoPath: '@ui/forms/Checkbox.astro', group: 'Forms', anchor: '#ds-forms' },
  { category: 'radio-group', chinaWaoPath: '@ui/forms/RadioGroup.astro', group: 'Forms', anchor: '#ds-forms' },
  { category: 'input', chinaWaoPath: '@ui/forms/Input.astro', group: 'Forms', anchor: '#ds-forms' },
  { category: 'textarea', chinaWaoPath: '@ui/forms/Textarea.astro', group: 'Forms', anchor: '#ds-forms' },
  { category: 'select', chinaWaoPath: '@ui/forms/Select.astro (base-select)', group: 'Forms', anchor: '#ds-forms' },
  { category: 'slider', chinaWaoPath: '@ui/forms/Slider.astro', group: 'Forms', anchor: '#ds-advanced-forms' },
  { category: 'date-input', chinaWaoPath: '@ui/forms/DateInput.astro', group: 'Forms', anchor: '#ds-advanced-forms' },
  { category: 'color-picker', chinaWaoPath: '@ui/forms/ColorPicker.astro', group: 'Forms', anchor: '#ds-advanced-forms' },
  { category: 'otp-field', chinaWaoPath: '@ui/forms/DigitInput.astro', group: 'Forms', anchor: '#ds-advanced-forms' },
  { category: 'file-upload', chinaWaoPath: '@ui/forms/FileUpload.astro', group: 'Forms', anchor: '#ds-advanced-forms' },
  { category: 'accordion', chinaWaoPath: '@ui/navigation/Accordion.astro', group: 'Navigation', anchor: '#ds-navigation' },
  { category: 'breadcrumb', chinaWaoPath: '@ui/navigation/Breadcrumb.astro', group: 'Navigation', anchor: '#ds-navigation' },
  { category: 'toggle-group', chinaWaoPath: '@ui/navigation/SegmentedControl.astro', group: 'Navigation', anchor: '#ds-navigation' },
  { category: 'tabs', chinaWaoPath: '@ui/navigation/Tabs.astro (pill + underline)', group: 'Navigation', anchor: '#ds-navigation' },
  { category: 'vertical-tabs', chinaWaoPath: '@ui/navigation/VerticalTabs.astro', group: 'Navigation', anchor: '#ds-navigation' },
  { category: 'stepper', chinaWaoPath: '@ui/navigation/Stepper.astro', group: 'Navigation', anchor: '#ds-navigation' },
  { category: 'pagination', chinaWaoPath: '@site/Pagination.astro', group: 'Navigation', anchor: '#ds-navigation' },
  { category: 'command', chinaWaoPath: 'CommandPalette.astro (⌘K)', group: 'Overlays', anchor: '#ds-overlays' },
  { category: 'drawer', chinaWaoPath: '@ui/overlays/Drawer.astro', group: 'Overlays', anchor: '#ds-overlays' },
  { category: 'menu', chinaWaoPath: '@ui/overlays/DropdownMenu.astro', group: 'Overlays', anchor: '#ds-overlays' },
  { category: 'dialog', chinaWaoPath: '@ui/overlays/Modal.astro', group: 'Overlays', anchor: '#ds-overlays' },
  { category: 'popover', chinaWaoPath: '@ui/overlays/PopoverCard.astro', group: 'Overlays', anchor: '#ds-overlays' },
];

/** 100% Coverage Map: All 39 Pro Block Categories in ChinaWao Route A */
export const PRO_BLOCK_COVERAGE: CoverageRow[] = [
  { category: 'announcement', chinaWaoPath: '@blocks/marketing/AnnouncementBlock.astro', group: 'Marketing', anchor: '#blk-marketing' },
  { category: 'hero', chinaWaoPath: '@blocks/marketing/HeroBlock.astro + @site/HeroShowcase.astro', group: 'Marketing', anchor: '#blk-marketing' },
  { category: 'features', chinaWaoPath: '@blocks/marketing/FeaturesBlock.astro', group: 'Marketing', anchor: '#blk-marketing' },
  { category: 'cta', chinaWaoPath: '@blocks/marketing/CtaBlock.astro', group: 'Marketing', anchor: '#blk-marketing' },
  { category: 'pricing', chinaWaoPath: '@blocks/marketing/PricingBlock.astro', group: 'Marketing', anchor: '#blk-pricing' },
  { category: 'testimonials', chinaWaoPath: '@blocks/marketing/TestimonialsBlock.astro', group: 'Marketing', anchor: '#blk-proof' },
  { category: 'teams', chinaWaoPath: '@blocks/marketing/TeamsBlock.astro', group: 'Marketing', anchor: '#blk-proof' },
  { category: 'careers', chinaWaoPath: '@blocks/marketing/CareersBlock.astro', group: 'Marketing', anchor: '#blk-proof' },
  { category: 'integrations', chinaWaoPath: '@blocks/marketing/IntegrationsBlock.astro', group: 'Marketing', anchor: '#blk-proof' },
  { category: 'brand-social', chinaWaoPath: '@blocks/marketing/BrandSocialBlock.astro', group: 'Marketing', anchor: '#blk-marketing' },
  { category: 'blog', chinaWaoPath: '@blocks/editorial/BlogGridBlock.astro', group: 'Editorial', anchor: '#blk-editorial' },
  { category: 'faq', chinaWaoPath: '@blocks/editorial/FaqBlock.astro', group: 'Editorial', anchor: '#blk-editorial' },
  { category: 'how-it-works', chinaWaoPath: '@blocks/editorial/HowItWorksBlock.astro', group: 'Editorial', anchor: '#blk-editorial' },
  { category: 'stats-metrics', chinaWaoPath: '@blocks/editorial/StatsStrip.astro', group: 'Editorial', anchor: '#blk-editorial' },
  { category: 'newsletter', chinaWaoPath: '@blocks/editorial/NewsletterBlock.astro', group: 'Editorial', anchor: '#blk-editorial' },
  { category: 'contact', chinaWaoPath: '@blocks/editorial/ContactBlock.astro', group: 'Editorial', anchor: '#blk-contact' },
  { category: 'filter', chinaWaoPath: '@blocks/editorial/FilterBarBlock.astro', group: 'Editorial', anchor: '#blk-editorial' },
  { category: 'auth-card', chinaWaoPath: '@blocks/application/AuthCardBlock.astro', group: 'Application', anchor: '#blk-app' },
  { category: 'profile-card', chinaWaoPath: '@blocks/application/ProfileCardBlock.astro', group: 'Application', anchor: '#blk-app' },
  { category: 'notification', chinaWaoPath: '@blocks/application/NotificationFeedBlock.astro', group: 'Application', anchor: '#blk-app' },
  { category: 'navigation', chinaWaoPath: '@site/SiteHeader.astro', group: 'Site Shell', anchor: '/design-system/' },
  { category: 'footer', chinaWaoPath: '@site/SiteFooter.astro', group: 'Site Shell', anchor: '/design-system/' },
  { category: 'table', chinaWaoPath: '@ui/data-display/DataTable.astro', group: 'Data Block', anchor: '/design-system/#ds-table' },
  { category: 'accordion', chinaWaoPath: '@ui/navigation/Accordion.astro', group: 'Composed UI', anchor: '/design-system/#ds-navigation' },
  { category: 'breadcrumbs', chinaWaoPath: '@ui/navigation/Breadcrumb.astro', group: 'Composed UI', anchor: '/design-system/#ds-navigation' },
  { category: 'checkbox', chinaWaoPath: '@ui/forms/Checkbox.astro', group: 'Composed UI', anchor: '/design-system/#ds-forms' },
  { category: 'color-picker', chinaWaoPath: '@ui/forms/ColorPicker.astro', group: 'Composed UI', anchor: '/design-system/#ds-advanced-forms' },
  { category: 'command-menu', chinaWaoPath: '@site/SearchDialog.astro', group: 'Composed UI', anchor: '/design-system/#ds-overlays' },
  { category: 'datepicker', chinaWaoPath: '@ui/forms/DateInput.astro', group: 'Composed UI', anchor: '/design-system/#ds-advanced-forms' },
  { category: 'drawer', chinaWaoPath: '@ui/overlays/Drawer.astro', group: 'Composed UI', anchor: '/design-system/#ds-overlays' },
  { category: 'dropdown', chinaWaoPath: '@ui/overlays/DropdownMenu.astro', group: 'Composed UI', anchor: '/design-system/#ds-overlays' },
  { category: 'file-upload', chinaWaoPath: '@ui/forms/FileUpload.astro', group: 'Composed UI', anchor: '/design-system/#ds-advanced-forms' },
  { category: 'modal', chinaWaoPath: '@ui/overlays/Modal.astro', group: 'Composed UI', anchor: '/design-system/#ds-overlays' },
  { category: 'radio', chinaWaoPath: '@ui/forms/RadioGroup.astro', group: 'Composed UI', anchor: '/design-system/#ds-forms' },
  { category: 'rating', chinaWaoPath: '@ui/data-display/Rating.astro', group: 'Composed UI', anchor: '/design-system/#ds-progress' },
  { category: 'slider', chinaWaoPath: '@ui/forms/Slider.astro', group: 'Composed UI', anchor: '/design-system/#ds-advanced-forms' },
  { category: 'switch', chinaWaoPath: '@ui/forms/Checkbox.astro (switch)', group: 'Composed UI', anchor: '/design-system/#ds-forms' },
  { category: 'text-input', chinaWaoPath: '@ui/forms/Input.astro + Textarea.astro', group: 'Composed UI', anchor: '/design-system/#ds-forms' },
  { category: 'tooltip', chinaWaoPath: '@ui/feedback/Tooltip.astro', group: 'Composed UI', anchor: '/design-system/#ds-overlays' },
];

/** Sortable DataTable specimen: 9.1 Visa-Free & 240h Transit Country Comparison */
export const VISA_MATRIX_COLUMNS: TableColumn[] = [
  { key: 'country', label: 'Passport / Region', type: 'string', rowHeader: true },
  { key: 'policy', label: 'Primary Entry Scheme', type: 'string' },
  { key: 'maxDays', label: 'Max Days', type: 'number', align: 'end' },
  { key: 'transit240', label: '240h Transit', type: 'string' },
  { key: 'status', label: 'Status', type: 'string' },
];

export const VISA_MATRIX_ROWS: TableRow[] = [
  {
    country: 'France / Germany / Italy / Spain',
    policy: 'Unilateral Visa-Free Entry',
    maxDays: { text: '30 days', value: 30 },
    transit240: 'Eligible (60 ports)',
    status: { text: 'Verified 2026', badgeTone: 'verified' },
  },
  {
    country: 'Singapore / Malaysia / Thailand',
    policy: 'Mutual Visa Exemption',
    maxDays: { text: '30 days', value: 30 },
    transit240: 'Eligible (60 ports)',
    status: { text: 'Verified 2026', badgeTone: 'verified' },
  },
  {
    country: 'Australia / New Zealand',
    policy: 'Unilateral Visa-Free Entry',
    maxDays: { text: '30 days', value: 30 },
    transit240: 'Eligible (60 ports)',
    status: { text: 'Verified 2026', badgeTone: 'verified' },
  },
  {
    country: 'Japan / South Korea',
    policy: 'Unilateral Visa-Free Entry',
    maxDays: { text: '30 days', value: 30 },
    transit240: 'Eligible (60 ports)',
    status: { text: 'Verified 2026', badgeTone: 'verified' },
  },
  {
    country: 'United States / United Kingdom / Canada',
    policy: '240-Hour Visa-Free Transit (Third-Country Ticket)',
    maxDays: { text: '10 days', value: 10 },
    transit240: 'Eligible (24 provinces)',
    status: { text: 'Transit Only', badgeTone: 'editorial' },
  },
  {
    country: 'Brazil / Argentina / Chile',
    policy: 'Standard L / M Visa or Transit',
    maxDays: { text: '10 days', value: 10 },
    transit240: 'Eligible (Selected)',
    status: { text: 'Check Port', badgeTone: 'standby' },
  },
];

export const DS_FAQ_ITEMS: AccordionItem[] = [
  {
    question: 'Does the 240-hour visa-free transit allow inter-provincial high-speed rail travel?',
    answer: 'Yes. Under the expanded NIA policy, eligible transit travelers may travel across designated areas in 24 provinces and exit from any of the 60 approved ports, provided they hold a confirmed onward ticket to a third country or region (including Hong Kong, Macao, or Taiwan).',
    badge: '9.1 Visas',
    open: true,
  },
  {
    question: 'Why are some government portals marked WAF-Protected Official Standby?',
    answer: 'Certain Chinese ministry and provincial open-data websites enforce anti-bot challenges (412 / 521 / 202) against automated crawlers while remaining accessible in standard human browsers. ChinaWao keeps them recorded transparently rather than silently dropping official primary sources.',
    badge: '12.8 Open Data',
  },
  {
    question: 'Can ChinaWao Route A components be published in open repositories?',
    answer: 'Yes. Every Astro primitive, CSS layer, and block in f:\\chinawao-web is 100% original code using SIL OFL 1.1 open fonts and native web platform APIs, with zero third-party commercial template code or proprietary font dependencies.',
    badge: 'License',
  },
];

export const DS_HOW_STEPS: StepItem[] = [
  { title: 'Source Discovery', description: 'Identify primary ministry, rail, museum, or municipal open-data URLs.', status: 'complete' },
  { title: 'Clause Verification', description: 'Verify concrete limits, hours, fees, and dates directly on official pages.', status: 'complete' },
  { title: 'Field Ground-Truth', description: 'Cross-check foreign passport onboarding and payment behavior on site.', status: 'current' },
  { title: 'Timestamped Publish', description: 'Publish into EmDash CMS & OKF records with explicit verification dates.', status: 'upcoming' },
];

export const DS_VTAB_ITEMS: VerticalTabItem[] = [
  {
    id: 'rail',
    label: 'High-Speed Rail (12306)',
    meta: '9.4 · 15-day window',
    heading: 'Foreign Passport Verification on Railway 12306',
    body: 'Tickets release 15 calendar days before departure by station tier. Online identity verification takes 5–15 minutes with a clear passport photo page upload.',
    points: [
      'Direct passport tap at automated e-ticket gates in major hubs',
      'First-class & business-class seats release simultaneously with second-class',
      'Free online changes up to 48 hours before departure',
    ],
  },
  {
    id: 'payments',
    label: 'Mobile Payments',
    meta: '9.2 · Alipay & WeChat',
    heading: 'International Visa & Mastercard Binding',
    body: 'Both Alipay and WeChat Pay support direct foreign card binding for merchant QR codes without requiring a mainland bank account.',
    points: [
      'Single transactions under ¥200 carry 0% international card fee',
      'Transactions above ¥200 incur a 3% card-network fee',
      'Bind and complete passport verification before landing',
    ],
  },
  {
    id: 'tax',
    label: 'Departure Tax Refund 2.0',
    meta: '9.8 · Instant refund',
    heading: 'Instant-Refund Tax-Free Shopping Counters',
    body: 'Eligible overseas visitors spending at least ¥200 in a single tax-free store on the same day can claim up to 11% VAT refund (~9% net after agency handling fee).',
    points: [
      'Present passport at checkout to generate the Departure Tax Refund Application Form',
      'Keep sealed items ready for airport customs verification',
      'Refunds available in cash, card credit, or instant downtown pre-authorization',
    ],
  },
];

export const DS_FEATURES: FeatureItem[] = [
  {
    icon: 'globe',
    tag: 'China Atlas',
    title: 'Authoritative Knowledge Graph',
    description: 'Every article, official portal, and field tool maps strictly to the 12-pillar, 97-topic ChinaWao taxonomy.',
    href: '/atlas/',
  },
  {
    icon: 'shield',
    tag: 'WCAG AA Dual-Mode',
    title: 'Pure White & Deep Neutral Parity',
    description: 'Every control border, placeholder, focus ring, and status badge passes verified contrast checks in both Light (#FFFFFF) and Dark (#141414) themes.',
    href: '/design-system/',
  },
  {
    icon: 'spark',
    tag: 'Zero-Framework Native',
    title: 'Modern Web Platform Primitives',
    description: 'Built on native Popover, <dialog closedby="any">, base-select, field-sizing, and CSS Anchor Positioning with @supports fallbacks.',
    href: '/tools/',
  },
];

export const DS_PRICING_TIERS: PricingTier[] = [
  {
    name: 'Open Reader',
    badge: 'Always Free',
    description: 'Full public access to all ChinaWao articles, arrival journeys, bilingual cards, and verified government portals.',
    monthlyPrice: '¥0',
    annualPrice: '¥0',
    periodNote: 'forever free',
    ctaLabel: 'Start Reading',
    features: [
      'All ChinaWao English & Chinese dispatches & guides',
      'Visa-Free & 240h Transit interactive checker',
      'Bilingual taxi, rail & medical SOS fullscreen cards',
      'Verified public service & open-data directory',
    ],
  },
  {
    name: 'Field Desk Pro',
    badge: 'Most Popular',
    description: 'For frequent business travelers, sourcing teams, and relocating expats who need instant policy change alerts.',
    monthlyPrice: '¥68',
    annualPrice: '¥54',
    periodNote: 'per month (mock demo)',
    featured: true,
    ctaLabel: 'Choose Field Desk',
    features: [
      'Everything in Open Reader',
      'Weekly policy diff & port-rule change alerts',
      'Canton Fair supplier & GB standard checklist templates',
      'Exportable bilingual itinerary & tax-refund packets',
    ],
  },
  {
    name: 'Research & Institutional',
    badge: 'Team License',
    description: 'Structured OKF fact snapshots, CSV/JSON datasets, and dedicated desk verification for universities and enterprises.',
    monthlyPrice: '¥290',
    annualPrice: '¥232',
    periodNote: 'per month · up to 10 seats',
    ctaLabel: 'Contact Research Desk',
    features: [
      'Structured OKF clause exports with source footnotes',
      'Multi-seat editorial notes & saved collections',
      '48-hour priority verification on regulatory queries',
      'Custom bilingual onboarding kits for visiting teams',
    ],
  },
];

export const DS_TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'The 240-hour transit checklist and fullscreen bilingual 12306 cards saved me two hours at Pudong Terminal 2 on my first solo trip.',
    author: 'Elena Lindqvist',
    role: 'Industrial Designer',
    location: 'Stockholm',
    rating: 5,
    tone: 'palace',
  },
  {
    quote: 'Finally an English guide to China that links straight to verified primary government sources instead of recycling outdated blog posts.',
    author: 'Marcus Tan',
    role: 'Supply Chain Director',
    location: 'Singapore',
    rating: 5,
    tone: 'gold',
  },
  {
    quote: 'Marking WAF-protected official portals honestly instead of hiding dead links made our municipal open-data audit dramatically faster.',
    author: 'Dr. Claire Moreau',
    role: 'Urban Policy Researcher',
    location: 'Lyon',
    rating: 5,
    tone: 'sage',
  },
];

export const DS_TEAM: TeamMember[] = [
  {
    name: 'Shen Ming',
    role: 'Managing Editor · Visit & Transit',
    desk: 'Pillar 9 & 12',
    bio: 'Leads field verification across major airports, railway hubs, and international card payment flows.',
    tone: 'palace',
  },
  {
    name: 'Lin Wei',
    role: 'Policy & Open-Data Architect',
    desk: 'Pillar 3 & 11',
    bio: 'Maintains the OKF source verification ledger, USCC/GB standards mapping, and regulatory changelog.',
    tone: 'ink',
  },
  {
    name: 'Hannah Reid',
    role: 'Culture & Heritage Editor',
    desk: 'Pillar 2, 6 & 7',
    bio: 'Curates museum ticketing calendars, regional cuisine maps, and architectural essays.',
    tone: 'gold',
  },
];

export const DS_ROLES: RoleItem[] = [
  {
    title: 'Bilingual Field Researcher (Greater Bay Area & Canton Fair)',
    department: 'Business Desk',
    location: 'Guangzhou / Shenzhen · Hybrid',
    type: 'Fellowship',
  },
  {
    title: 'Open-Data Verification Engineer (OKF Pipeline)',
    department: 'Data & Tools',
    location: 'Remote (UTC+8 preferred)',
    type: 'Part-time / Contract',
  },
  {
    title: 'Cultural Essayist — Architecture, Tea & Regional Crafts',
    department: 'Editorial Magazine',
    location: 'Remote',
    type: 'Commissioned Contributor',
  },
];

export const DS_INTEGRATIONS: IntegrationItem[] = [
  { name: 'NIA 12367 Portal', category: 'Immigration & Visas', status: 'Verified', description: 'Official National Immigration Administration bilingual policy & port notices.', icon: 'shield' },
  { name: 'Railway 12306', category: 'High-Speed Rail', status: 'Verified', description: 'Direct 15-day release schedules and foreign passport e-ticket verification.', icon: 'topic-rail' },
  { name: 'Palace Museum Ticketing', category: 'Cultural Booking', status: 'Verified', description: '7-day 20:00 Beijing Time advance reservation tracking.', icon: 'topic-history' },
  { name: 'National Public Data', category: 'Open Government Data', status: 'Standby', description: 'Cataloged as WAF-Protected Official Standby for direct human browser lookup.', icon: 'globe' },
  { name: 'EmDash 1.5 CMS', category: 'Publishing Core', status: 'Native', description: 'Native Astro 7 content collections, SQLite storage, and Portable Text blocks.', icon: 'book' },
  { name: 'Canton Fair Official', category: 'Trade & Sourcing', status: 'Verified', description: 'Buyer badge pre-registration and hall-by-phase exhibition calendar.', icon: 'file' },
];

export const DS_BRAND_SOURCES = [
  { code: 'NIA', name: 'National Immigration Admin', role: '240h Transit & Visas' },
  { code: '12306', name: 'China Railway', role: 'High-Speed Rail' },
  { code: 'GACC', name: 'China Customs', role: 'Entry & Tax Refund' },
  { code: 'NBS', name: 'National Bureau of Stats', role: 'Open Macro Data' },
  { code: 'MOFCOM', name: 'Ministry of Commerce', role: 'Trade & WFOE Rules' },
];

export const DS_BLOG_PREVIEW: BlogPreviewItem[] = [
  {
    title: 'The 240-Hour Visa-Free Transit Playbook: Routes, Ports & Proof',
    excerpt: 'How to combine a third-country onward ticket with China’s expanded 10-day transit exemption across 24 provinces.',
    category: 'Visas & Entry',
    date: 'Nov 19, 2026',
    readTime: '6 min read',
    href: '/posts/',
    image: '/images/river.webp',
  },
  {
    title: 'Using a Foreign Passport on China Railway 12306',
    excerpt: 'Step-by-step passport verification, automated e-ticket gates, and station arrival timing.',
    category: 'High-Speed Rail',
    date: 'Nov 19, 2026',
    readTime: '5 min read',
    href: '/posts/',
    image: '/images/hero.webp',
  },
  {
    title: 'China’s Smart EVs & Super-App Everyday Ecosystem',
    excerpt: 'Why autonomous parking, QR transit, and mini-program ordering feel fundamentally different on the ground.',
    category: 'Tech & Digital',
    date: 'Nov 18, 2026',
    readTime: '7 min read',
    href: '/posts/',
    image: '/images/technology.webp',
  },
];
