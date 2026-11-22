import type { AccordionItem } from '@ui/navigation/Accordion.astro';
import type { TableColumn, TableRow } from '@ui/data-display/DataTable.astro';

export interface CossComponentEntry {
  name: string;
  astroModule: string;
  section: string;
  anchor: string;
}

/** Pure coss.com/ui Component Registry Mapping (Astro Zero-React Edition — Branch B) */
export const COSS_ASTRO_COMPONENTS: CossComponentEntry[] = [
  { name: 'frame', astroModule: '@ui/coss/Frame.astro + FramePanel.astro', section: 'Surfaces', anchor: '#coss-surfaces' },
  { name: 'card', astroModule: '@ui/coss/Card.astro', section: 'Surfaces', anchor: '#coss-surfaces' },
  { name: 'empty', astroModule: '@ui/coss/Empty.astro', section: 'Surfaces', anchor: '#coss-surfaces' },
  { name: 'separator', astroModule: '@ui/data-display/Divider.astro', section: 'Surfaces', anchor: '#coss-surfaces' },
  { name: 'collapsible', astroModule: '@ui/coss/Collapsible.astro', section: 'Surfaces', anchor: '#coss-surfaces' },
  { name: 'button', astroModule: '@ui/actions/Button.astro', section: 'Actions', anchor: '#coss-actions' },
  { name: 'group', astroModule: '@ui/coss/Group.astro', section: 'Actions', anchor: '#coss-actions' },
  { name: 'toolbar', astroModule: '@ui/coss/Toolbar.astro', section: 'Actions', anchor: '#coss-actions' },
  { name: 'toggle-group', astroModule: '@ui/navigation/SegmentedControl.astro', section: 'Actions', anchor: '#coss-actions' },
  { name: 'field', astroModule: '@ui/coss/Field.astro', section: 'Forms & Inputs', anchor: '#coss-forms' },
  { name: 'input', astroModule: '@ui/forms/Input.astro', section: 'Forms & Inputs', anchor: '#coss-forms' },
  { name: 'input-group', astroModule: '@ui/coss/InputGroup.astro', section: 'Forms & Inputs', anchor: '#coss-forms' },
  { name: 'textarea', astroModule: '@ui/forms/Textarea.astro', section: 'Forms & Inputs', anchor: '#coss-forms' },
  { name: 'number-field', astroModule: '@ui/coss/NumberField.astro', section: 'Forms & Inputs', anchor: '#coss-forms' },
  { name: 'select', astroModule: '@ui/forms/Select.astro', section: 'Forms & Inputs', anchor: '#coss-forms' },
  { name: 'checkbox', astroModule: '@ui/forms/Checkbox.astro', section: 'Forms & Inputs', anchor: '#coss-forms' },
  { name: 'radio-group', astroModule: '@ui/forms/RadioGroup.astro', section: 'Forms & Inputs', anchor: '#coss-forms' },
  { name: 'switch', astroModule: '@ui/coss/Switch.astro', section: 'Forms & Inputs', anchor: '#coss-forms' },
  { name: 'slider', astroModule: '@ui/forms/Slider.astro', section: 'Forms & Inputs', anchor: '#coss-forms' },
  { name: 'otp-field', astroModule: '@ui/forms/DigitInput.astro', section: 'Forms & Inputs', anchor: '#coss-forms' },
  { name: 'badge', astroModule: '@ui/data-display/Badge.astro', section: 'Data & Status', anchor: '#coss-data' },
  { name: 'avatar', astroModule: '@ui/data-display/Avatar.astro', section: 'Data & Status', anchor: '#coss-data' },
  { name: 'kbd', astroModule: '@ui/data-display/Kbd.astro', section: 'Data & Status', anchor: '#coss-data' },
  { name: 'alert', astroModule: '@ui/feedback/Alert.astro', section: 'Data & Status', anchor: '#coss-data' },
  { name: 'progress', astroModule: '@ui/data-display/ProgressBar.astro', section: 'Data & Status', anchor: '#coss-data' },
  { name: 'meter', astroModule: '@ui/coss/Meter.astro', section: 'Data & Status', anchor: '#coss-data' },
  { name: 'skeleton', astroModule: '@ui/data-display/Skeleton.astro', section: 'Data & Status', anchor: '#coss-data' },
  { name: 'spinner', astroModule: '@ui/coss/Spinner.astro', section: 'Data & Status', anchor: '#coss-data' },
  { name: 'table', astroModule: '@ui/data-display/DataTable.astro', section: 'Data & Status', anchor: '#coss-table' },
  { name: 'tabs', astroModule: '@ui/navigation/Tabs.astro', section: 'Navigation & Overlays', anchor: '#coss-overlays' },
  { name: 'accordion', astroModule: '@ui/navigation/Accordion.astro', section: 'Navigation & Overlays', anchor: '#coss-overlays' },
  { name: 'breadcrumb', astroModule: '@ui/navigation/Breadcrumb.astro', section: 'Navigation & Overlays', anchor: '#coss-overlays' },
  { name: 'pagination', astroModule: '@site/Pagination.astro', section: 'Navigation & Overlays', anchor: '#coss-overlays' },
  { name: 'dialog', astroModule: '@ui/overlays/Modal.astro', section: 'Navigation & Overlays', anchor: '#coss-overlays' },
  { name: 'sheet', astroModule: '@ui/coss/Sheet.astro', section: 'Navigation & Overlays', anchor: '#coss-overlays' },
  { name: 'drawer', astroModule: '@ui/overlays/Drawer.astro', section: 'Navigation & Overlays', anchor: '#coss-overlays' },
  { name: 'menu', astroModule: '@ui/overlays/DropdownMenu.astro', section: 'Navigation & Overlays', anchor: '#coss-overlays' },
  { name: 'popover', astroModule: '@ui/overlays/PopoverCard.astro', section: 'Navigation & Overlays', anchor: '#coss-overlays' },
  { name: 'tooltip', astroModule: '@ui/feedback/Tooltip.astro', section: 'Navigation & Overlays', anchor: '#coss-overlays' },
  { name: 'toast', astroModule: '@layouts/Layout.astro (popover="manual")', section: 'Navigation & Overlays', anchor: '#coss-overlays' },
  { name: 'command', astroModule: 'CommandPalette.astro (⌘K)', section: 'Navigation & Overlays', anchor: '#coss-overlays' },
];

export const DS_FAQ_ITEMS: AccordionItem[] = [
  {
    question: 'Does the 240-hour visa-free transit allow inter-provincial high-speed rail travel?',
    answer: 'Yes. Under the expanded NIA policy, eligible transit travelers may travel across designated areas in 24 provinces and exit from any of the 60 approved ports, provided they hold a confirmed onward ticket to a third country or region.',
    badge: '9.1 Visas',
    open: true,
  },
  {
    question: 'Why are some government portals marked WAF-Protected Official Standby?',
    answer: 'Certain Chinese ministry and provincial open-data websites enforce anti-bot challenges (412 / 521 / 202) against automated crawlers while remaining accessible in standard human browsers.',
    badge: '12.8 Open Data',
  },
  {
    question: 'What defines Branch B (Pure Astro coss ui)?',
    answer: 'All legacy AlignUI components, 39 marketing/pricing blocks, and .cw-* stylesheets have been removed. Every surface and primitive follows coss.com/ui geometry using zero-React native Astro components.',
    badge: 'Architecture',
  },
];

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
];
