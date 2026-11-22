'use client';

import * as React from 'react';
import {
  RiAlertFill,
  RiAppleFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowRightUpLine,
  RiCalendarLine,
  RiCheckboxCircleFill,
  RiCommandLine,
  RiDownload2Line,
  RiErrorWarningFill,
  RiFileTextLine,
  RiFilter3Line,
  RiFlashlightFill,
  RiGithubFill,
  RiGlobalLine,
  RiHome5Line,
  RiInformationFill,
  RiLayoutGridLine,
  RiMailLine,
  RiMore2Line,
  RiNotification3Line,
  RiPassportLine,
  RiSearch2Line,
  RiSettings3Line,
  RiShieldCheckFill,
  RiSparklingFill,
  RiTrainLine,
  RiUploadCloud2Line,
  RiUserLine,
} from '@remixicon/react';

import * as Accordion from '@/components/ui/accordion';
import * as Alert from '@/components/ui/alert';
import * as Avatar from '@/components/ui/avatar';
import * as AvatarGroup from '@/components/ui/avatar-group';
import * as AvatarGroupCompact from '@/components/ui/avatar-group-compact';
import * as Badge from '@/components/ui/badge';
import * as Banner from '@/components/ui/banner';
import * as Breadcrumb from '@/components/ui/breadcrumb';
import * as Button from '@/components/ui/button';
import * as ButtonGroup from '@/components/ui/button-group';
import * as Checkbox from '@/components/ui/checkbox';
import * as ColorPicker from '@/components/ui/color-picker';
import * as CommandMenu from '@/components/ui/command-menu';
import * as CompactButton from '@/components/ui/compact-button';
import { Calendar } from '@/components/ui/datepicker';
import * as DigitInput from '@/components/ui/digit-input';
import * as Divider from '@/components/ui/divider';
import * as DotStepper from '@/components/ui/dot-stepper';
import * as Drawer from '@/components/ui/drawer';
import * as Dropdown from '@/components/ui/dropdown';
import * as FancyButton from '@/components/ui/fancy-button';
import * as FileFormatIcon from '@/components/ui/file-format-icon';
import * as FileUpload from '@/components/ui/file-upload';
import * as Hint from '@/components/ui/hint';
import * as HorizontalStepper from '@/components/ui/horizontal-stepper';
import * as Input from '@/components/ui/input';
import * as Kbd from '@/components/ui/kbd';
import * as Label from '@/components/ui/label';
import * as LinkButton from '@/components/ui/link-button';
import * as Modal from '@/components/ui/modal';
import { NotificationProvider } from '@/components/ui/notification-provider';
import * as Pagination from '@/components/ui/pagination';
import * as Popover from '@/components/ui/popover';
import * as ProgressBar from '@/components/ui/progress-bar';
import * as ProgressCircle from '@/components/ui/progress-circle';
import * as Radio from '@/components/ui/radio';
import { StarRating } from '@/components/ui/rating';
import * as SegmentedControl from '@/components/ui/segmented-control';
import * as Select from '@/components/ui/select';
import * as Slider from '@/components/ui/slider';
import * as SocialButton from '@/components/ui/social-button';
import * as StatusBadge from '@/components/ui/status-badge';
import * as Switch from '@/components/ui/switch';
import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';
import * as TabMenuVertical from '@/components/ui/tab-menu-vertical';
import * as Table from '@/components/ui/table';
import * as Tag from '@/components/ui/tag';
import * as Textarea from '@/components/ui/textarea';
import { toast, Toaster } from '@/components/ui/toast';
import * as AlertToast from '@/components/ui/toast-alert';
import * as Tooltip from '@/components/ui/tooltip';
import * as VerticalStepper from '@/components/ui/vertical-stepper';
import { useNotification } from '@/hooks/use-notification';

export interface VisaRowItem {
  passport: string;
  unilateral: string;
  mutual: string;
  transit240h: string;
  ports: string;
  updated: string;
}

export interface AlignUIOfficialShowcaseProps {
  isZh: boolean;
  visaRows: VisaRowItem[];
  blocksHref: string;
}

export function AlignUIOfficialShowcase({
  isZh,
  visaRows,
  blocksHref,
}: AlignUIOfficialShowcaseProps): React.ReactElement {
  const { notification } = useNotification();
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    new Date(2026, 10, 23),
  );
  const [otp, setOtp] = React.useState('240888');
  const [notes, setNotes] = React.useState(
    isZh
      ? '持联程确定机票经北京首都机场入境，前往上海虹桥与杭州东站。'
      : 'Entering via Beijing PEK with confirmed onward ticket via Shanghai Hongqiao.',
  );
  const [sliderVal, setSliderVal] = React.useState<number[]>([65]);
  const [checkedA, setCheckedA] = React.useState<boolean | 'indeterminate'>(
    true,
  );
  const [checkedB, setCheckedB] = React.useState<boolean | 'indeterminate'>(
    'indeterminate',
  );
  const [switchOn, setSwitchOn] = React.useState(true);
  const [radioVal, setRadioVal] = React.useState('240h');
  const [countrySelect, setCountrySelect] = React.useState('fr');
  const [activeSeg, setActiveSeg] = React.useState('all');
  const [activeStep, setActiveStep] = React.useState(1);
  const [pageIdx, setPageIdx] = React.useState(2);
  const [cmdOpen, setCmdOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [tags, setTags] = React.useState(
    isZh
      ? ['240h 过境免签', '铁路 12306', 'Alipay 外卡', '离境退税']
      : ['240h Transit', '12306 Rail', 'Alipay Foreign Card', 'Tax Refund'],
  );

  return (
    <Tooltip.Provider delayDuration={150}>
      <div data-alignui-scope className='flex flex-col gap-12 pb-12'>
        <Toaster position='bottom-right' />
        <NotificationProvider />

        {/* Top Official Banner + Quick Jump to Pro Blocks & Templates */}
        <div className='flex flex-col gap-4'>
          <Banner.Root variant='filled' status='information' className='h-auto min-h-11 py-2.5'>
            <Banner.Content className='flex-wrap justify-center gap-y-1'>
              <Banner.Icon as={RiSparklingFill} />
              <span>
                {isZh
                  ? 'AlignUI Design System v2.0 官方源码分支：49 个 Free 基础原语（Radix UI + tv() + Tailwind v4）+ 22 类 Pro 官方区块 + 4 套行业模板库已全量挂载。'
                  : 'Official AlignUI v2.0 Branch: All 49 Free primitives (Radix UI + tv() + Tailwind v4) + 22 Official Pro Blocks + 4 Pro Templates live.'}
              </span>
              <a
                href={blocksHref}
                className='underline underline-offset-4 font-semibold whitespace-nowrap ml-2'
              >
                {isZh ? '查看 Pro 区块与模板库 →' : 'Open Pro Blocks & Templates →'}
              </a>
            </Banner.Content>
          </Banner.Root>
        </div>

        {/* SECTION 01: ACTIONS (Button, FancyButton, ButtonGroup, CompactButton, LinkButton, SocialButton) */}
        <section className='flex flex-col gap-5'>
          <div className='flex flex-wrap items-end justify-between gap-4 border-b border-stroke-soft-200 pb-4'>
            <div>
              <span className='text-subheading-xs uppercase text-primary-base'>
                01 · ACTIONS (6 COMPONENTS)
              </span>
              <h2 className='text-title-h5 text-text-strong-950 mt-1'>
                {isZh
                  ? 'Button · FancyButton · ButtonGroup · CompactButton · LinkButton · SocialButton'
                  : 'Button · FancyButton · ButtonGroup · CompactButton · LinkButton · SocialButton'}
              </h2>
            </div>
            <FancyButton.Root variant='primary' size='medium' asChild>
              <a href={blocksHref}>
                <FancyButton.Icon as={RiLayoutGridLine} />
                {isZh ? '浏览 Pro 区块与 4 套模板库' : 'Explore Pro Blocks & Templates'}
                <FancyButton.Icon as={RiArrowRightUpLine} />
              </a>
            </FancyButton.Root>
          </div>

          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
            <div className='flex flex-col gap-4 rounded-20 bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
              <span className='text-label-sm text-text-sub-600'>
                {isZh
                  ? '标准按钮矩阵（Primary #335cff / Neutral / Error × Filled / Stroke / Lighter / Ghost）'
                  : 'Standard Buttons (Primary #335cff / Neutral / Error)'}
              </span>
              <div className='flex flex-wrap items-center gap-2.5'>
                <Button.Root variant='primary' mode='filled' size='medium'>
                  <Button.Icon as={RiFlashlightFill} />
                  {isZh ? '主操作 Filled' : 'Primary Filled'}
                </Button.Root>
                <Button.Root variant='primary' mode='stroke' size='medium'>
                  {isZh ? '描边 Stroke' : 'Primary Stroke'}
                </Button.Root>
                <Button.Root variant='primary' mode='lighter' size='medium'>
                  {isZh ? '浅底 Lighter' : 'Primary Lighter'}
                </Button.Root>
                <Button.Root variant='primary' mode='ghost' size='medium'>
                  {isZh ? '幽灵 Ghost' : 'Primary Ghost'}
                </Button.Root>
              </div>
              <div className='flex flex-wrap items-center gap-2.5'>
                <Button.Root variant='neutral' mode='filled' size='small'>
                  Neutral Filled
                </Button.Root>
                <Button.Root variant='neutral' mode='stroke' size='small'>
                  Neutral Stroke
                </Button.Root>
                <Button.Root variant='error' mode='filled' size='small'>
                  Destructive
                </Button.Root>
                <Button.Root variant='neutral' mode='stroke' size='small' disabled>
                  Disabled
                </Button.Root>
              </div>
            </div>

            <div className='flex flex-col gap-4 rounded-20 bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
              <span className='text-label-sm text-text-sub-600'>
                {isZh
                  ? '标志性高光斜切 FancyButton · ButtonGroup · CompactButton · LinkButton · SocialButton'
                  : 'Signature Bevel FancyButton · ButtonGroup · CompactButton · SocialButton'}
              </span>
              <div className='flex flex-wrap items-center gap-2.5'>
                <FancyButton.Root variant='primary' size='medium'>
                  <FancyButton.Icon as={RiSparklingFill} />
                  Fancy Primary
                </FancyButton.Root>
                <FancyButton.Root variant='neutral' size='medium'>
                  Fancy Neutral
                </FancyButton.Root>
                <FancyButton.Root variant='basic' size='medium'>
                  Fancy Basic
                </FancyButton.Root>
                <FancyButton.Root variant='destructive' size='medium'>
                  Fancy Error
                </FancyButton.Root>
              </div>
              <div className='flex flex-wrap items-center gap-3'>
                <ButtonGroup.Root size='small'>
                  <ButtonGroup.Item>1D</ButtonGroup.Item>
                  <ButtonGroup.Item>7D</ButtonGroup.Item>
                  <ButtonGroup.Item>30D</ButtonGroup.Item>
                </ButtonGroup.Root>
                <CompactButton.Root variant='stroke' size='large' aria-label='More'>
                  <CompactButton.Icon as={RiMore2Line} />
                </CompactButton.Root>
                <LinkButton.Root variant='primary' underline>
                  {isZh ? '官方文字链接' : 'Official LinkButton'}
                  <LinkButton.Icon as={RiArrowRightUpLine} />
                </LinkButton.Root>
                <SocialButton.Root brand='apple' mode='filled'>
                  <SocialButton.Icon as={RiAppleFill} />
                  Apple
                </SocialButton.Root>
                <SocialButton.Root brand='github' mode='stroke'>
                  <SocialButton.Icon as={RiGithubFill} />
                  GitHub
                </SocialButton.Root>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: FORMS & PICKERS (13 COMPONENTS) */}
        <section className='flex flex-col gap-5'>
          <div className='border-b border-stroke-soft-200 pb-4'>
            <span className='text-subheading-xs uppercase text-primary-base'>
              02 · FORM CONTROLS & PICKERS (13 COMPONENTS)
            </span>
            <h2 className='text-title-h5 text-text-strong-950 mt-1'>
              Input · Select · Textarea · Checkbox · Radio · Switch · Label · Hint · Slider · DigitInput · Datepicker · ColorPicker · FileUpload
            </h2>
          </div>

          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
            {/* Column 1: Input, Select, Textarea, Hint, Label */}
            <div className='flex flex-col gap-4 rounded-20 bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
              <div className='flex flex-col gap-1.5'>
                <Label.Root htmlFor='ds-align-input'>
                  {isZh ? '官方联系邮箱' : 'Official Contact Email'}
                  <Label.Asterisk />
                  <Label.Sub>({isZh ? '必填' : 'Required'})</Label.Sub>
                </Label.Root>
                <Input.Root>
                  <Input.Wrapper>
                    <Input.Icon as={RiMailLine} />
                    <Input.Input
                      id='ds-align-input'
                      defaultValue='editor@chinawao.com'
                      placeholder='you@domain.com'
                    />
                  </Input.Wrapper>
                </Input.Root>
                <Hint.Root>
                  <Hint.Icon as={RiInformationFill} />
                  {isZh
                    ? '采用标准 AlignUI shadow-regular-xs 与 ring-stroke-soft-200。'
                    : 'Standard AlignUI shadow-regular-xs & ring-stroke-soft-200.'}
                </Hint.Root>
              </div>

              <div className='flex flex-col gap-1.5'>
                <Label.Root htmlFor='ds-align-select'>
                  {isZh ? '入境口岸护照国别' : 'Passport Jurisdiction'}
                </Label.Root>
                <Select.Root
                  value={countrySelect}
                  onValueChange={setCountrySelect}
                >
                  <Select.Trigger id='ds-align-select'>
                    <Select.TriggerIcon as={RiPassportLine} />
                    <Select.Value />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Group>
                      <Select.GroupLabel>
                        {isZh ? '免签与过境热门国别' : 'Popular Passports'}
                      </Select.GroupLabel>
                      <Select.Item value='fr'>France / Germany (30d)</Select.Item>
                      <Select.Item value='sg'>Singapore (30d Mutual)</Select.Item>
                      <Select.Item value='us'>United States (240h Transit)</Select.Item>
                      <Select.Item value='jp'>Japan / Australia (30d)</Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              </div>

              <div className='flex flex-col gap-1.5'>
                <Label.Root htmlFor='ds-align-textarea'>
                  {isZh ? '行程核验备注' : 'Itinerary Verification Note'}
                </Label.Root>
                <Textarea.Root
                  id='ds-align-textarea'
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={isZh ? '输入行程说明…' : 'Enter itinerary note...'}
                >
                  <Textarea.CharCounter current={notes.length} max={200} />
                </Textarea.Root>
              </div>
            </div>

            {/* Column 2: Checkbox, Radio, Switch, Slider, DigitInput */}
            <div className='flex flex-col gap-5 rounded-20 bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
              <div className='flex flex-col gap-2.5'>
                <span className='text-label-sm text-text-strong-950'>
                  Checkbox · Switch · RadioGroup
                </span>
                <label className='flex items-center gap-2.5 text-paragraph-sm text-text-strong-950 cursor-pointer'>
                  <Checkbox.Root
                    checked={checkedA}
                    onCheckedChange={setCheckedA}
                  />
                  <span>{isZh ? '已绑定外籍 Visa / Mastercard' : 'Foreign card linked in Alipay'}</span>
                </label>
                <label className='flex items-center gap-2.5 text-paragraph-sm text-text-sub-600 cursor-pointer'>
                  <Checkbox.Root
                    checked={checkedB}
                    onCheckedChange={setCheckedB}
                  />
                  <span>{isZh ? '部分车站自助闸机核验（半选态）' : 'Indeterminate gate check'}</span>
                </label>
                <label className='flex items-center justify-between rounded-10 bg-bg-weak-50 px-3 py-2 text-label-sm text-text-strong-950 cursor-pointer'>
                  <span>{isZh ? '开启放票实时提醒' : 'Ticket release alerts'}</span>
                  <Switch.Root checked={switchOn} onCheckedChange={setSwitchOn} />
                </label>
              </div>

              <Radio.Group
                value={radioVal}
                onValueChange={setRadioVal}
                className='flex flex-col gap-2'
              >
                <label className='flex items-center gap-2.5 text-paragraph-sm text-text-strong-950 cursor-pointer'>
                  <Radio.Item value='240h' />
                  <span>{isZh ? '240 小时跨省过境免签' : '240-Hour Visa-Free Transit'}</span>
                </label>
                <label className='flex items-center gap-2.5 text-paragraph-sm text-text-strong-950 cursor-pointer'>
                  <Radio.Item value='30d' />
                  <span>{isZh ? '30 天单方面免签入境' : '30-Day Unilateral Visa-Free'}</span>
                </label>
              </Radio.Group>

              <div className='flex flex-col gap-2'>
                <div className='flex justify-between text-label-xs text-text-sub-600'>
                  <span>{isZh ? '离境退税消费额度滑块 (Slider)' : 'Tax Refund Threshold Slider'}</span>
                  <span>¥{sliderVal[0]! * 100}</span>
                </div>
                <Slider.Root
                  value={sliderVal}
                  onValueChange={setSliderVal}
                  max={100}
                  step={1}
                >
                  <Slider.Thumb />
                </Slider.Root>
              </div>

              <div className='flex flex-col gap-2'>
                <span className='text-label-xs text-text-sub-600'>
                  {isZh ? '6 位核验码输入 (DigitInput)' : '6-Digit Verification OTP (DigitInput)'}
                </span>
                <DigitInput.Root
                  numInputs={6}
                  value={otp}
                  onChange={setOtp}
                />
              </div>
            </div>

            {/* Column 3: Official Datepicker Calendar + FileUpload + ColorPicker */}
            <div className='flex flex-col gap-4 rounded-20 bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
              <div className='overflow-x-auto rounded-2xl ring-1 ring-inset ring-stroke-soft-200 flex justify-center'>
                <Calendar
                  mode='single'
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                />
              </div>

              <FileUpload.Root className='p-4'>
                <FileUpload.Icon as={RiUploadCloud2Line} />
                <div className='flex items-center gap-2 mt-1'>
                  <FileFormatIcon.Root format='PDF' size='small' color='red' />
                  <span className='text-label-sm text-text-strong-950'>
                    {isZh ? '拖拽上传护照或行程单 PDF' : 'Drop passport or itinerary PDF'}
                  </span>
                </div>
                <FileUpload.Button className='mt-2'>
                  {isZh ? '选择文件' : 'Browse File'}
                </FileUpload.Button>
              </FileUpload.Root>

              <div className='flex items-center justify-between gap-2 rounded-10 bg-bg-weak-50 px-3 py-2'>
                <span className='text-label-xs text-text-sub-600'>
                  ColorPicker Swatches
                </span>
                <ColorPicker.Root defaultValue='#335cff'>
                  <ColorPicker.SwatchPicker className='flex gap-1.5'>
                    {['#335cff', '#1fc16b', '#fa7319', '#fb3748', '#7d52f4'].map(
                      (c) => (
                        <ColorPicker.SwatchPickerItem key={c} color={c}>
                          <ColorPicker.Swatch className='size-5 rounded-full' />
                        </ColorPicker.SwatchPickerItem>
                      ),
                    )}
                  </ColorPicker.SwatchPicker>
                </ColorPicker.Root>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: DATA DISPLAY (12 COMPONENTS) */}
        <section className='flex flex-col gap-5'>
          <div className='border-b border-stroke-soft-200 pb-4'>
            <span className='text-subheading-xs uppercase text-primary-base'>
              03 · DATA DISPLAY (12 COMPONENTS)
            </span>
            <h2 className='text-title-h5 text-text-strong-950 mt-1'>
              Badge · StatusBadge · Tag · Avatar · AvatarGroup · AvatarGroupCompact · Table · Divider · Kbd · ProgressBar · ProgressCircle · Rating
            </h2>
          </div>

          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
            <div className='flex flex-col gap-4 rounded-20 bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
              <div className='flex flex-wrap items-center gap-2'>
                {(
                  [
                    'blue',
                    'green',
                    'orange',
                    'red',
                    'purple',
                    'sky',
                    'teal',
                    'pink',
                    'yellow',
                    'gray',
                  ] as const
                ).map((c) => (
                  <Badge.Root key={c} variant='light' color={c} size='medium'>
                    <Badge.Dot />
                    {c}
                  </Badge.Root>
                ))}
              </div>

              <Divider.Root variant='line-text'>STATUS & TAGS</Divider.Root>

              <div className='flex flex-wrap items-center gap-2'>
                <StatusBadge.Root status='completed' variant='light'>
                  <StatusBadge.Icon as={RiCheckboxCircleFill} />
                  Verified Official
                </StatusBadge.Root>
                <StatusBadge.Root status='pending' variant='light'>
                  <StatusBadge.Dot />
                  WAF Standby
                </StatusBadge.Root>
                <StatusBadge.Root status='failed' variant='stroke'>
                  <StatusBadge.Dot />
                  Deprecated
                </StatusBadge.Root>
              </div>

              <div className='flex flex-wrap items-center gap-2'>
                {tags.map((t) => (
                  <Tag.Root key={t} variant='stroke'>
                    <span>{t}</span>
                    <Tag.DismissButton
                      aria-label={`Remove ${t}`}
                      onClick={() =>
                        setTags((prev) => prev.filter((item) => item !== t))
                      }
                    />
                  </Tag.Root>
                ))}
                <Kbd.Root>⌘K</Kbd.Root>
                <Kbd.Root>Esc</Kbd.Root>
              </div>
            </div>

            <div className='flex flex-col gap-4 rounded-20 bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
              <div className='flex flex-wrap items-center justify-between gap-4'>
                <div className='flex items-center gap-4'>
                  <Avatar.Root size='48' color='blue'>
                    CW
                    <Avatar.Indicator position='bottom'>
                      <Avatar.Status status='online' />
                    </Avatar.Indicator>
                  </Avatar.Root>
                  <AvatarGroup.Root size='40'>
                    <Avatar.Root size='40' color='purple'>
                      SH
                    </Avatar.Root>
                    <Avatar.Root size='40' color='sky'>
                      BJ
                    </Avatar.Root>
                    <Avatar.Root size='40' color='yellow'>
                      GZ
                    </Avatar.Root>
                    <AvatarGroup.Overflow>+12</AvatarGroup.Overflow>
                  </AvatarGroup.Root>
                  <AvatarGroupCompact.Root size='32' variant='stroke'>
                    <AvatarGroupCompact.Stack>
                      <Avatar.Root size='32' color='red'>
                        CN
                      </Avatar.Root>
                      <Avatar.Root size='32' color='blue'>
                        EN
                      </Avatar.Root>
                    </AvatarGroupCompact.Stack>
                    <AvatarGroupCompact.Overflow>+9</AvatarGroupCompact.Overflow>
                  </AvatarGroupCompact.Root>
                </div>
                <StarRating rating={4.5} />
              </div>

              <Divider.Root variant='line-spacing' />

              <div className='flex items-center gap-6'>
                <div className='flex-1 flex flex-col gap-2'>
                  <div className='flex justify-between text-label-xs text-text-sub-600'>
                    <span>{isZh ? '12×97 知识库官方信源核验率' : '12×97 Source Verification'}</span>
                    <span>88%</span>
                  </div>
                  <ProgressBar.Root value={88} max={100} color='blue' />
                  <ProgressBar.Root value={72} max={100} color='green' />
                </div>
                <ProgressCircle.Root value={88} max={100} size='64'>
                  <span className='text-label-xs text-text-strong-950'>88%</span>
                </ProgressCircle.Root>
              </div>
            </div>
          </div>

          {/* Official AlignUI Table */}
          <div className='rounded-20 bg-bg-white-0 p-4 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.Head>{isZh ? '护照类别' : 'Passport Group'}</Table.Head>
                  <Table.Head>{isZh ? '单方面免签' : 'Unilateral'}</Table.Head>
                  <Table.Head>{isZh ? '双边互免' : 'Mutual'}</Table.Head>
                  <Table.Head>{isZh ? '240h 过境免签' : '240h Transit'}</Table.Head>
                  <Table.Head>{isZh ? '适用口岸' : 'Ports'}</Table.Head>
                  <Table.Head>{isZh ? '核验日期' : 'Verified'}</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {visaRows.map((row, idx) => (
                  <React.Fragment key={row.passport}>
                    {idx > 0 && <Table.RowDivider />}
                    <Table.Row>
                      <Table.Cell className='font-medium text-text-strong-950'>
                        {row.passport}
                      </Table.Cell>
                      <Table.Cell>{row.unilateral}</Table.Cell>
                      <Table.Cell>{row.mutual}</Table.Cell>
                      <Table.Cell>
                        <StatusBadge.Root status='completed' variant='light'>
                          <StatusBadge.Dot />
                          {row.transit240h}
                        </StatusBadge.Root>
                      </Table.Cell>
                      <Table.Cell>{row.ports}</Table.Cell>
                      <Table.Cell>{row.updated}</Table.Cell>
                    </Table.Row>
                  </React.Fragment>
                ))}
              </Table.Body>
            </Table.Root>
          </div>
        </section>

        {/* SECTION 04: FEEDBACK & NOTIFICATIONS (5 COMPONENTS) */}
        <section className='flex flex-col gap-5'>
          <div className='border-b border-stroke-soft-200 pb-4'>
            <span className='text-subheading-xs uppercase text-primary-base'>
              04 · FEEDBACK & ALERTS (5 COMPONENTS)
            </span>
            <h2 className='text-title-h5 text-text-strong-950 mt-1'>
              Banner · Alert · Notification · Toast (AlertToast) · Tooltip
            </h2>
          </div>

          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
            <div className='flex flex-col gap-3 rounded-20 bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
              <Alert.Root variant='lighter' status='success' size='large'>
                <Alert.Icon as={RiShieldCheckFill} />
                <div className='flex flex-col gap-1'>
                  <span className='text-label-sm text-text-strong-950'>
                    {isZh ? '官方一手信源已核验' : 'Primary Official Source Verified'}
                  </span>
                  <span className='text-paragraph-xs text-text-sub-600'>
                    {isZh
                      ? '国家移民管理局门户中英条款已于 2026-11-23 完成交叉核对。'
                      : 'NIA bilingual policy clauses cross-checked on 2026-11-23.'}
                  </span>
                </div>
              </Alert.Root>
              <Alert.Root variant='stroke' status='warning' size='small'>
                <Alert.Icon as={RiAlertFill} />
                <span>
                  {isZh
                    ? '部分政务数据库开启瑞数 412 反爬保护，普通浏览器可直接正常查询。'
                    : 'WAF-Protected Standby: Accessible normally in standard desktop browsers.'}
                </span>
              </Alert.Root>
              <Alert.Root variant='light' status='error' size='small'>
                <Alert.Icon as={RiErrorWarningFill} />
                <span>
                  {isZh
                    ? '旧版 72/144 小时单口岸过境政策已统一升级为 240 小时跨省政策。'
                    : 'Legacy 72/144h single-port rules superseded by nationwide 240h transit.'}
                </span>
              </Alert.Root>
            </div>

            <div className='flex flex-col justify-between gap-4 rounded-20 bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
              <div className='flex flex-col gap-2'>
                <span className='text-label-md text-text-strong-950'>
                  {isZh
                    ? '实时触发官方 Sonner Toast · Radix Notification · Tooltip'
                    : 'Live Official Sonner Toast · Radix Notification · Tooltip'}
                </span>
                <p className='text-paragraph-sm text-text-sub-600'>
                  {isZh
                    ? '点击下方按钮实测 AlignUI 官方自定义 AlertToast 与 Notification 队列弹层。'
                    : 'Click below to trigger genuine AlignUI AlertToast and Radix Notification stack.'}
                </p>
              </div>
              <div className='flex flex-wrap items-center gap-3'>
                <Button.Root
                  variant='primary'
                  mode='filled'
                  size='small'
                  onClick={() =>
                    toast.custom((t) => (
                      <AlertToast.Root
                        t={t}
                        status='success'
                        variant='filled'
                        message={
                          isZh
                            ? '已同步最新 240 小时过境免签口岸清单'
                            : 'Synced latest 240h visa-free port list'
                        }
                      />
                    ))
                  }
                >
                  <Button.Icon as={RiFlashlightFill} />
                  {isZh ? '触发官方 Toast' : 'Trigger AlertToast'}
                </Button.Root>

                <Button.Root
                  variant='neutral'
                  mode='stroke'
                  size='small'
                  onClick={() =>
                    notification({
                      status: 'information',
                      title: isZh ? '故宫博物院放票提醒' : 'Palace Museum Tickets',
                      description: isZh
                        ? '门票提前 7 天于北京时间 20:00 准时开售。'
                        : 'Tickets open 7 days ahead at 20:00 Beijing Time.',
                    })
                  }
                >
                  <Button.Icon as={RiNotification3Line} />
                  {isZh ? '触发官方 Notification' : 'Trigger Notification'}
                </Button.Root>

                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <Button.Root variant='neutral' mode='lighter' size='small'>
                      {isZh ? '悬停查看 Tooltip' : 'Hover Tooltip'}
                    </Button.Root>
                  </Tooltip.Trigger>
                  <Tooltip.Content size='small'>
                    AlignUI Radix Tooltip · shadow-tooltip
                  </Tooltip.Content>
                </Tooltip.Root>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05: NAVIGATION & STEPPERS (9 COMPONENTS) */}
        <section className='flex flex-col gap-5'>
          <div className='border-b border-stroke-soft-200 pb-4'>
            <span className='text-subheading-xs uppercase text-primary-base'>
              05 · NAVIGATION & STEPPERS (9 COMPONENTS)
            </span>
            <h2 className='text-title-h5 text-text-strong-950 mt-1'>
              Breadcrumb · SegmentedControl · TabMenuHorizontal · TabMenuVertical · Accordion · DotStepper · HorizontalStepper · VerticalStepper · Pagination
            </h2>
          </div>

          <div className='flex flex-col gap-4 rounded-20 bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
              <Breadcrumb.Root>
                <Breadcrumb.Item asChild>
                  <a href='#'>
                    <Breadcrumb.Icon as={RiHome5Line} />
                    ChinaWao
                  </a>
                </Breadcrumb.Item>
                <Breadcrumb.ArrowIcon as={RiArrowRightSLine} />
                <Breadcrumb.Item asChild>
                  <a href='#'>AlignUI v2.0</a>
                </Breadcrumb.Item>
                <Breadcrumb.ArrowIcon as={RiArrowRightSLine} />
                <Breadcrumb.Item active>49 Free Primitives</Breadcrumb.Item>
              </Breadcrumb.Root>

              <SegmentedControl.Root
                value={activeSeg}
                onValueChange={setActiveSeg}
              >
                <SegmentedControl.List>
                  <SegmentedControl.Trigger value='all'>
                    {isZh ? '全部信源' : 'All Sources'}
                  </SegmentedControl.Trigger>
                  <SegmentedControl.Trigger value='verified'>
                    {isZh ? '已核验' : 'Verified'}
                  </SegmentedControl.Trigger>
                  <SegmentedControl.Trigger value='standby'>
                    {isZh ? '备用库' : 'Standby'}
                  </SegmentedControl.Trigger>
                </SegmentedControl.List>
              </SegmentedControl.Root>
            </div>

            <TabMenuHorizontal.Root defaultValue='rail'>
              <TabMenuHorizontal.List>
                <TabMenuHorizontal.Trigger value='rail'>
                  <TabMenuHorizontal.Icon as={RiTrainLine} />
                  {isZh ? '铁路 12306 刷证进站' : '12306 Rail E-Ticket'}
                </TabMenuHorizontal.Trigger>
                <TabMenuHorizontal.Trigger value='pay'>
                  <TabMenuHorizontal.Icon as={RiGlobalLine} />
                  {isZh ? '外卡扫码支付' : 'Foreign Card QR Pay'}
                </TabMenuHorizontal.Trigger>
                <TabMenuHorizontal.Trigger value='visa'>
                  <TabMenuHorizontal.Icon as={RiPassportLine} />
                  {isZh ? '240h 跨省联程' : '240h Multi-Province'}
                </TabMenuHorizontal.Trigger>
              </TabMenuHorizontal.List>
              <TabMenuHorizontal.Content value='rail' className='pt-4 text-paragraph-sm text-text-sub-600'>
                {isZh
                  ? '车票提前 15 天分批起售，外籍旅客在线上传护照核验通过后，可直接刷护照原件通过全国主要高铁站自助闸机。'
                  : 'Tickets go on sale 15 days ahead; verified foreign passports scan directly at automated high-speed rail gates.'}
              </TabMenuHorizontal.Content>
              <TabMenuHorizontal.Content value='pay' className='pt-4 text-paragraph-sm text-text-sub-600'>
                {isZh
                  ? '支付宝与微信支付均支持直连 Visa / Mastercard / JCB，单笔 ¥200 以内免收 3% 国际卡手续费。'
                  : 'Alipay and WeChat Pay link foreign Visa/Mastercard directly; single transactions under ¥200 waive the 3% fee.'}
              </TabMenuHorizontal.Content>
              <TabMenuHorizontal.Content value='visa' className='pt-4 text-paragraph-sm text-text-sub-600'>
                {isZh
                  ? '持确定第三国或港澳台联程机票，可在 24 个适用省份停留区域内跨省自由通行最长 240 小时。'
                  : 'With a confirmed onward ticket to a third country/region, travel across 24 provinces for up to 240 hours.'}
              </TabMenuHorizontal.Content>
            </TabMenuHorizontal.Root>

            <Divider.Root variant='line-spacing' />

            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
              <div className='flex flex-col gap-4'>
                <HorizontalStepper.Root>
                  <HorizontalStepper.Item
                    state='completed'
                    onClick={() => setActiveStep(0)}
                  >
                    <HorizontalStepper.ItemIndicator>1</HorizontalStepper.ItemIndicator>
                    {isZh ? '一手源定位' : 'Locate Source'}
                  </HorizontalStepper.Item>
                  <HorizontalStepper.SeparatorIcon />
                  <HorizontalStepper.Item
                    state='active'
                    onClick={() => setActiveStep(1)}
                  >
                    <HorizontalStepper.ItemIndicator>2</HorizontalStepper.ItemIndicator>
                    {isZh ? '条款核对' : 'Verify Clause'}
                  </HorizontalStepper.Item>
                  <HorizontalStepper.SeparatorIcon />
                  <HorizontalStepper.Item
                    state='default'
                    onClick={() => setActiveStep(2)}
                  >
                    <HorizontalStepper.ItemIndicator>3</HorizontalStepper.ItemIndicator>
                    {isZh ? '归档上线' : 'Publish'}
                  </HorizontalStepper.Item>
                </HorizontalStepper.Root>

                <VerticalStepper.Root>
                  <VerticalStepper.Item state='completed'>
                    <VerticalStepper.ItemIndicator>1</VerticalStepper.ItemIndicator>
                    {isZh ? '锁定部委政务公开 URL' : 'Lock Official Ministry URL'}
                  </VerticalStepper.Item>
                  <VerticalStepper.Item state='active'>
                    <VerticalStepper.ItemIndicator>2</VerticalStepper.ItemIndicator>
                    {isZh ? '实机校验中英双语细则' : 'Cross-check Bilingual Rules'}
                    <VerticalStepper.Arrow />
                  </VerticalStepper.Item>
                </VerticalStepper.Root>

                <div className='flex items-center justify-between pt-1'>
                  <DotStepper.Root>
                    {[0, 1, 2, 3].map((idx) => (
                      <DotStepper.Item
                        key={idx}
                        active={activeStep === idx}
                        onClick={() => setActiveStep(idx)}
                        aria-label={`Step ${idx + 1}`}
                      />
                    ))}
                  </DotStepper.Root>

                  <Pagination.Root variant='basic'>
                    <Pagination.NavButton
                      aria-label='Prev'
                      onClick={() => setPageIdx((p) => Math.max(1, p - 1))}
                    >
                      <Pagination.NavIcon as={RiArrowLeftSLine} />
                    </Pagination.NavButton>
                    {[1, 2, 3].map((p) => (
                      <Pagination.Item
                        key={p}
                        current={pageIdx === p}
                        onClick={() => setPageIdx(p)}
                      >
                        {p}
                      </Pagination.Item>
                    ))}
                    <Pagination.NavButton
                      aria-label='Next'
                      onClick={() => setPageIdx((p) => Math.min(3, p + 1))}
                    >
                      <Pagination.NavIcon as={RiArrowRightSLine} />
                    </Pagination.NavButton>
                  </Pagination.Root>
                </div>
              </div>

              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <TabMenuVertical.Root defaultValue='v1'>
                  <TabMenuVertical.List>
                    <TabMenuVertical.Trigger value='v1'>
                      <TabMenuVertical.Icon as={RiUserLine} />
                      Account
                      <TabMenuVertical.ArrowIcon as={RiArrowRightSLine} />
                    </TabMenuVertical.Trigger>
                    <TabMenuVertical.Trigger value='v2'>
                      <TabMenuVertical.Icon as={RiSettings3Line} />
                      Preferences
                      <TabMenuVertical.ArrowIcon as={RiArrowRightSLine} />
                    </TabMenuVertical.Trigger>
                  </TabMenuVertical.List>
                </TabMenuVertical.Root>

                <Accordion.Root type='single' collapsible defaultValue='faq-1'>
                  <Accordion.Item value='faq-1'>
                    <Accordion.Header>
                      <Accordion.Trigger>
                        <Accordion.Icon as={RiFileTextLine} />
                        {isZh ? '是否真正零删减官方源码？' : '100% Genuine AlignUI?'}
                        <Accordion.Arrow />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                      {isZh
                        ? '是。本分支直接挂载 AlignUI v1.2 / Pro 原版 Radix UI + tv() + @remixicon/react 组件源码。'
                        : 'Yes — verbatim AlignUI v1.2 / Pro Radix UI + tv() + @remixicon/react source.'}
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06: OVERLAYS & COMMAND MENU (5 COMPONENTS) */}
        <section className='flex flex-col gap-5'>
          <div className='border-b border-stroke-soft-200 pb-4'>
            <span className='text-subheading-xs uppercase text-primary-base'>
              06 · OVERLAYS & COMMAND MENU (5 COMPONENTS)
            </span>
            <h2 className='text-title-h5 text-text-strong-950 mt-1'>
              Modal · Drawer · Popover · Dropdown · CommandMenu (cmdk)
            </h2>
          </div>

          <div className='flex flex-wrap items-center gap-3 rounded-20 bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
            {/* Modal */}
            <Modal.Root open={modalOpen} onOpenChange={setModalOpen}>
              <Modal.Trigger asChild>
                <Button.Root variant='primary' mode='filled' size='medium'>
                  {isZh ? '打开官方 Modal 弹窗' : 'Open Official Modal'}
                </Button.Root>
              </Modal.Trigger>
              <Modal.Content>
                <Modal.Header
                  icon={RiShieldCheckFill}
                  title={isZh ? '官方信源核验确认' : 'Official Source Verification'}
                  description={
                    isZh
                      ? '基于 Radix Dialog 构建的正版 AlignUI Modal 组件。'
                      : 'Genuine AlignUI Modal built on Radix Dialog.'
                  }
                />
                <Modal.Body>
                  <p className='text-paragraph-sm text-text-sub-600'>
                    {isZh
                      ? '支持完整键盘焦点锁定、Esc 关闭与浅/深色平滑动画过渡。'
                      : 'Full keyboard focus trap, Escape dismissal, and tw-animate-css transitions.'}
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Modal.Close asChild>
                    <Button.Root variant='neutral' mode='stroke' size='small'>
                      {isZh ? '取消' : 'Cancel'}
                    </Button.Root>
                  </Modal.Close>
                  <Modal.Close asChild>
                    <Button.Root variant='primary' mode='filled' size='small'>
                      {isZh ? '确认归档' : 'Confirm'}
                    </Button.Root>
                  </Modal.Close>
                </Modal.Footer>
              </Modal.Content>
            </Modal.Root>

            {/* Drawer */}
            <Drawer.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
              <Drawer.Trigger asChild>
                <Button.Root variant='neutral' mode='stroke' size='medium'>
                  {isZh ? '打开右侧 Drawer 抽屉' : 'Open Slide-Over Drawer'}
                </Button.Root>
              </Drawer.Trigger>
              <Drawer.Content>
                <Drawer.Header>
                  <Drawer.Title>
                    {isZh ? '入境核验清单抽屉 (AlignUI Drawer)' : 'Arrival Checklist Drawer'}
                  </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body className='p-5 flex flex-col gap-3'>
                  <p className='text-paragraph-sm text-text-sub-600'>
                    {isZh
                      ? '此抽屉直接取自 AlignUI Finance Pro 模板复合组件 Drawer，支持丝滑右侧滑入与 Esc 退出。'
                      : 'Compound AlignUI Drawer component with Radix Dialog accessibility.'}
                  </p>
                </Drawer.Body>
                <Drawer.Footer>
                  <Drawer.Close asChild>
                    <Button.Root variant='primary' mode='filled' size='small'>
                      {isZh ? '完成并关闭' : 'Done'}
                    </Button.Root>
                  </Drawer.Close>
                </Drawer.Footer>
              </Drawer.Content>
            </Drawer.Root>

            {/* Popover */}
            <Popover.Root>
              <Popover.Trigger asChild>
                <Button.Root variant='neutral' mode='stroke' size='medium'>
                  <Button.Icon as={RiFilter3Line} />
                  {isZh ? '打开 Popover 浮层' : 'Open Popover'}
                </Button.Root>
              </Popover.Trigger>
              <Popover.Content className='w-72 p-4'>
                <div className='flex flex-col gap-2'>
                  <span className='text-label-sm text-text-strong-950'>
                    AlignUI Popover
                  </span>
                  <p className='text-paragraph-xs text-text-sub-600'>
                    {isZh
                      ? '带圆角 ring-stroke-soft-200 与 shadow-regular-md 的浮动卡片。'
                      : 'Floating surface with ring-stroke-soft-200 and shadow-regular-md.'}
                  </p>
                </div>
              </Popover.Content>
            </Popover.Root>

            {/* Dropdown */}
            <Dropdown.Root>
              <Dropdown.Trigger asChild>
                <Button.Root variant='neutral' mode='stroke' size='medium'>
                  <Button.Icon as={RiDownload2Line} />
                  {isZh ? '打开 Dropdown 菜单' : 'Open Dropdown'}
                </Button.Root>
              </Dropdown.Trigger>
              <Dropdown.Content align='start'>
                <Dropdown.Group>
                  <Dropdown.Label>Export Format</Dropdown.Label>
                  <Dropdown.Item>
                    <Dropdown.ItemIcon as={RiFileTextLine} />
                    Markdown (.md)
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown.ItemIcon as={RiCalendarLine} />
                    iCalendar (.ics)
                  </Dropdown.Item>
                </Dropdown.Group>
              </Dropdown.Content>
            </Dropdown.Root>

            {/* CommandMenu */}
            <Button.Root
              variant='primary'
              mode='lighter'
              size='medium'
              onClick={() => setCmdOpen(true)}
            >
              <Button.Icon as={RiCommandLine} />
              {isZh ? '打开 CommandMenu 命令面板' : 'Open CommandMenu'}
            </Button.Root>

            <CommandMenu.Dialog open={cmdOpen} onOpenChange={setCmdOpen}>
              <CommandMenu.DialogTitle className='sr-only'>
                Command Menu
              </CommandMenu.DialogTitle>
              <CommandMenu.DialogDescription className='sr-only'>
                Search AlignUI commands
              </CommandMenu.DialogDescription>
              <div className='flex items-center gap-2 border-b border-stroke-soft-200 px-4'>
                <RiSearch2Line className='size-5 text-text-sub-600' />
                <CommandMenu.Input
                  placeholder={
                    isZh
                      ? '输入关键词检索工具或区块…'
                      : 'Type a command or search...'
                  }
                />
              </div>
              <CommandMenu.List>
                <CommandMenu.Group heading={isZh ? '快捷跳转' : 'Quick Links'}>
                  <CommandMenu.Item
                    onSelect={() => {
                      window.location.href = blocksHref;
                    }}
                  >
                    <CommandMenu.ItemIcon as={RiLayoutGridLine} />
                    {isZh
                      ? '前往 22 类官方 Pro 区块与 4 套行业模板库'
                      : 'Go to 22 Official Pro Blocks & 4 Pro Templates'}
                  </CommandMenu.Item>
                  <CommandMenu.Item onSelect={() => setCmdOpen(false)}>
                    <CommandMenu.ItemIcon as={RiPassportLine} />
                    {isZh ? '240 小时过境免签判定器' : '240-Hour Visa-Free Checker'}
                  </CommandMenu.Item>
                </CommandMenu.Group>
              </CommandMenu.List>
              <CommandMenu.Footer>
                <div className='flex items-center gap-2 text-paragraph-xs text-text-sub-600'>
                  <CommandMenu.FooterKeyBox>↵</CommandMenu.FooterKeyBox>
                  <span>Select</span>
                  <CommandMenu.FooterKeyBox>Esc</CommandMenu.FooterKeyBox>
                  <span>Close</span>
                </div>
              </CommandMenu.Footer>
            </CommandMenu.Dialog>
          </div>
        </section>
      </div>
    </Tooltip.Provider>
  );
}
