"use client";

import * as React from "react";
import {
  ChevronDownIcon,
  CircleAlertIcon,
  CircleCheckIcon,
  CopyIcon,
  ExternalLinkIcon,
  GlobeIcon,
  InfoIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
  TriangleAlertIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@coss/accordion";
import { Alert, AlertDescription, AlertTitle } from "@coss/alert";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@coss/avatar";
import { Badge } from "@coss/badge";
import { Button } from "@coss/button";
import { Calendar } from "@coss/calendar";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@coss/card";
import { Checkbox } from "@coss/checkbox";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@coss/collapsible";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@coss/dialog";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@coss/empty";
import { Field, FieldDescription, FieldLabel } from "@coss/field";
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@coss/frame";
import { Group, GroupSeparator } from "@coss/group";
import { Input } from "@coss/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@coss/input-group";
import { Kbd, KbdGroup } from "@coss/kbd";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuTrigger,
} from "@coss/menu";
import {
  Meter,
  MeterIndicator,
  MeterLabel,
  MeterTrack,
  MeterValue,
} from "@coss/meter";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@coss/number-field";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@coss/popover";
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@coss/progress";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@coss/select";
import { Separator } from "@coss/separator";
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@coss/sheet";
import { Skeleton } from "@coss/skeleton";
import { Slider, SliderValue } from "@coss/slider";
import { Spinner } from "@coss/spinner";
import { Switch } from "@coss/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@coss/table";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@coss/tabs";
import { Textarea } from "@coss/textarea";
import { ToastProvider, toastManager } from "@coss/toast";
import {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupSeparator,
} from "@coss/toggle-group";
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
} from "@coss/toolbar";
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "@coss/tooltip";

export interface VisaRowItem {
  passport: string;
  unilateral: string;
  mutual: string;
  transit240h: string;
  ports: string;
  updated: string;
}

export interface CossOfficialShowcaseProps {
  isZh: boolean;
  visaRows: VisaRowItem[];
  localePrefix: string;
}

export function CossOfficialShowcase({
  isZh,
  visaRows,
  localePrefix,
}: CossOfficialShowcaseProps): React.ReactElement {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    new Date(2026, 11, 15),
  );
  const [spendRmb, setSpendRmb] = React.useState<number[]>([3200]);
  const [stayDays, setStayDays] = React.useState<number | null>(10);
  const [channel, setChannel] = React.useState<string>("visit");
  const [hasTicket, setHasTicket] = React.useState<boolean>(true);
  const [includeStandby, setIncludeStandby] = React.useState<boolean>(true);

  const lp = (p: string) =>
    localePrefix ? `${localePrefix}${p === "/" ? "/" : p}` : p;

  const channelItems = isZh
    ? [
        { value: "visit", label: "来华旅行与 240h 过境免签" },
        { value: "live", label: "留学长居与工作许可计点" },
        { value: "business", label: "商务采购与 18 位信用码核验" },
      ]
    : [
        { value: "visit", label: "Visit China & 240h Transit" },
        { value: "live", label: "Live, Study & Work Permit" },
        { value: "business", label: "Sourcing & 18-Digit USCC" },
      ];

  return (
    <ToastProvider position="bottom-right">
      <TooltipProvider>
        <div className="flex flex-col gap-16">
          {/* 02 · Surfaces */}
          <section id="coss-surfaces" className="ds-section">
            <span className="kicker">
              {isZh
                ? "02 · 容器与表面（官方 @coss/frame · @coss/card · @coss/collapsible · @coss/empty）"
                : "02 · Surfaces (Official @coss/frame · @coss/card · @coss/collapsible · @coss/empty)"}
            </span>
            <h2>
              {isZh
                ? "Frame 静音托盘、1px 内切微高光面板与三叠扇形空状态"
                : "Muted Frame Trays, 1px Bevel Panels & Stacked-Tile Empty State"}
            </h2>

            <div className="ds-group-stack">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Frame>
                  <FrameHeader className="flex-row items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <FrameTitle>
                        {isZh
                          ? "口岸核验工作台（官方 Frame + FramePanel）"
                          : "Port Verification Tray (Official Frame + FramePanel)"}
                      </FrameTitle>
                      <FrameDescription>
                        {isZh
                          ? "外层 bg-muted/72 p-1 rounded-2xl 托盘包裹内层 rounded-xl 面板"
                          : "Outer bg-muted/72 p-1 rounded-2xl tray cradling inner rounded-xl panels"}
                      </FrameDescription>
                    </div>
                    <Badge variant="success">
                      {isZh ? "官方组件" : "Official TSX"}
                    </Badge>
                  </FrameHeader>

                  <FramePanel>
                    <p className="text-foreground/85 text-sm leading-relaxed">
                      {isZh
                        ? "此分支直接运行 coss.com/ui 官方注册表源码（@base-ui/react + Tailwind CSS v4），完整保留 1px 内切微阴影（before:shadow）与暗色顶边微高光。"
                        : "Runs 100% genuine coss.com/ui registry source (@base-ui/react + Tailwind v4), preserving exact 1px inner bevel shadows and dark-mode top highlights."}
                    </p>
                  </FramePanel>

                  <FramePanel>
                    <Collapsible>
                      <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between gap-2 font-medium text-foreground text-sm outline-none data-panel-open:[&_svg]:rotate-180">
                        <span>
                          {isZh
                            ? "展开查看边检现场核验材料清单（@base-ui Collapsible）"
                            : "Inspect immigration counter checklist (@base-ui Collapsible)"}
                        </span>
                        <ChevronDownIcon className="size-4 text-muted-foreground transition-transform duration-200" />
                      </CollapsibleTrigger>
                      <CollapsiblePanel>
                        <p className="pt-3 text-muted-foreground text-sm leading-relaxed">
                          {isZh
                            ? "请准备有效期不少于 6 个月的普通护照、已确定日期及座位的第三国（或港澳台）联程机票行程单，以及首晚住宿预订单。"
                            : "Carry an ordinary passport valid for ≥ 6 months, a confirmed onward ticket to a third country/region with fixed date and seat, and your first-night hotel booking."}
                        </p>
                      </CollapsiblePanel>
                    </Collapsible>
                  </FramePanel>

                  <FrameFooter className="flex items-center justify-between text-muted-foreground text-xs">
                    <span>
                      {isZh
                        ? "一手信源：国家移民管理局 12367"
                        : "Primary Source: NIA 12367 Official Portal"}
                    </span>
                    <span className="font-mono">2026-11-22</span>
                  </FrameFooter>
                </Frame>

                <Card className="justify-between">
                  <CardHeader>
                    <CardTitle>
                      {isZh
                        ? "独立微切边卡片（官方 Card）"
                        : "Standalone Bevel Card (Official Card)"}
                    </CardTitle>
                    <CardDescription>
                      {isZh
                        ? "支持右上角 CardAction 槽位、Separator 细线与 KbdGroup"
                        : "Supports CardAction header slot, 1px Separator, and KbdGroup"}
                    </CardDescription>
                    <CardAction>
                      <Badge variant="info">coss.com/ui</Badge>
                    </CardAction>
                  </CardHeader>

                  <CardPanel className="flex flex-col gap-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {isZh
                        ? "独立功能单元采用 rounded-2xl 微切边卡片承载，严格遵循单卡至多一个 #E43216 品牌主动作的克制原则。"
                        : "Self-contained interactive modules use rounded-2xl bevel cards with at most one #E43216 brand action per surface."}
                    </p>
                    <Separator />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {isZh ? "全局命令面板快捷键" : "Global Command Palette"}
                      </span>
                      <KbdGroup>
                        <Kbd>⌘</Kbd>
                        <Kbd>K</Kbd>
                      </KbdGroup>
                    </div>
                  </CardPanel>

                  <CardFooter className="justify-end gap-2 border-t bg-muted/40 py-4">
                    <Button
                      render={<a href={lp("/portals/")} />}
                      size="sm"
                      variant="outline"
                    >
                      {isZh ? "查看政务源" : "Data Portals"}
                    </Button>
                    <Button
                      render={<a href={lp("/tools/visa-checker/")} />}
                      size="sm"
                      variant="brand"
                    >
                      {isZh ? "免签测算器 →" : "Visa Checker →"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Frame>
                <FramePanel className="py-2">
                  <Empty className="py-10 md:py-12">
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <SearchIcon />
                      </EmptyMedia>
                      <EmptyTitle>
                        {isZh
                          ? "未找到匹配的入境口岸（官方三叠扇形 Empty）"
                          : "No matching entry ports found (Official 3-Tile Empty)"}
                      </EmptyTitle>
                      <EmptyDescription>
                        {isZh
                          ? "EmptyMedia variant=\"icon\" 原生渲染 coss 标志性的左右 10° 旋转三叠微切边图标卡。"
                          : "EmptyMedia variant=\"icon\" renders coss ui’s signature ±10° rotated 3-card bevel stack."}
                      </EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          toastManager.add({
                            title: isZh ? "筛选条件已重置" : "Filters reset",
                            description: isZh
                              ? "已恢复显示全部 24 省 60 个过境免签口岸。"
                              : "Restored all 60 transit visa-free ports across 24 provinces.",
                            type: "info",
                          })
                        }
                      >
                        {isZh ? "重置筛选条件" : "Reset Port Filters"}
                      </Button>
                    </EmptyContent>
                  </Empty>
                </FramePanel>
              </Frame>
            </div>
          </section>

          {/* 03 · Actions & Toolbars */}
          <section id="coss-actions" className="ds-section">
            <span className="kicker">
              {isZh
                ? "03 · 按钮与工具组（官方 @coss/button · @coss/group · @coss/toolbar · @coss/toggle-group）"
                : "03 · Actions & Toolbars (Official @coss/button · @coss/group · @coss/toolbar · @coss/toggle-group)"}
            </span>
            <h2>
              {isZh
                ? "按钮变体阶梯、无缝贴合按钮组与浮动工具条"
                : "Button Variants, Attached Button Groups & Toolbars"}
            </h2>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    {isZh ? "Button 变体与尺寸阶梯" : "Button Variants & Sizes"}
                  </CardTitle>
                </CardHeader>
                <CardPanel className="flex flex-col gap-4 pb-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Button variant="brand">
                      {isZh ? "品牌主按钮" : "Brand Accent"}
                    </Button>
                    <Button variant="default">
                      {isZh ? "中性实心" : "Neutral Solid"}
                    </Button>
                    <Button variant="outline">
                      {isZh ? "微切边描边" : "Outline"}
                    </Button>
                    <Button variant="secondary">
                      {isZh ? "次要填充" : "Secondary"}
                    </Button>
                    <Button variant="ghost">{isZh ? "幽灵态" : "Ghost"}</Button>
                    <Button variant="destructive-outline">
                      {isZh ? "危险描边" : "Destructive"}
                    </Button>
                    <Button variant="link">{isZh ? "文本链接" : "Link"}</Button>
                  </div>
                  <Separator />
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Button size="xs" variant="outline">
                      XS
                    </Button>
                    <Button size="sm" variant="outline">
                      SM
                    </Button>
                    <Button size="default" variant="outline">
                      Default
                    </Button>
                    <Button size="lg" variant="outline">
                      LG
                    </Button>
                    <Button size="xl" variant="outline">
                      XL
                    </Button>
                    <Button disabled variant="outline">
                      <Spinner className="size-3.5" />
                      {isZh ? "核验中" : "Verifying"}
                    </Button>
                  </div>
                </CardPanel>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    {isZh
                      ? "Group · Toolbar · ToggleGroup"
                      : "Group · Toolbar · ToggleGroup"}
                  </CardTitle>
                </CardHeader>
                <CardPanel className="flex flex-col gap-4 pb-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Group aria-label={isZh ? "字卡操作组" : "Card actions"}>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          toastManager.add({
                            title: isZh ? "已复制双语地址" : "Copied address",
                            type: "success",
                          })
                        }
                      >
                        <CopyIcon />
                        {isZh ? "复制中文" : "Copy ZH"}
                      </Button>
                      <GroupSeparator />
                      <Button size="sm" variant="outline">
                        {isZh ? "拼音标注" : "Pinyin"}
                      </Button>
                      <GroupSeparator />
                      <Button
                        render={<a href={lp("/cards/")} />}
                        size="sm"
                        variant="outline"
                      >
                        <ExternalLinkIcon />
                        {isZh ? "全屏卡片" : "Cards"}
                      </Button>
                    </Group>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Toolbar aria-label={isZh ? "视图工具栏" : "View toolbar"}>
                      <ToolbarGroup>
                        <ToolbarButton
                          render={<Button size="xs" variant="ghost" />}
                        >
                          <GlobeIcon />
                          {isZh ? "双语" : "Bilingual"}
                        </ToolbarButton>
                        <ToolbarButton
                          render={<Button size="xs" variant="secondary" />}
                        >
                          <SlidersHorizontalIcon />
                          {isZh ? "筛选" : "Filter"}
                        </ToolbarButton>
                      </ToolbarGroup>
                      <ToolbarSeparator orientation="vertical" />
                      <ToolbarGroup>
                        <Badge variant="outline">240h</Badge>
                      </ToolbarGroup>
                    </Toolbar>

                    <ToggleGroup defaultValue={["verified"]} variant="outline">
                      <ToggleGroupItem value="all">
                        {isZh ? "全部" : "All"}
                      </ToggleGroupItem>
                      <ToggleGroupSeparator />
                      <ToggleGroupItem value="verified">
                        {isZh ? "直连可用" : "Direct"}
                      </ToggleGroupItem>
                      <ToggleGroupSeparator />
                      <ToggleGroupItem value="standby">
                        {isZh ? "反爬备用" : "Standby"}
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </CardPanel>
              </Card>
            </div>
          </section>

          {/* 04 · Forms, Inputs & Calendar */}
          <section id="coss-forms" className="ds-section">
            <span className="kicker">
              {isZh
                ? "04 · 表单控件与日历（官方 InputGroup · NumberField · Select · Switch · Slider · Calendar）"
                : "04 · Forms & Calendar (Official InputGroup · NumberField · Select · Switch · Slider · Calendar)"}
            </span>
            <h2>
              {isZh
                ? "@base-ui 无障碍表单原语与 DayPicker 日历组件"
                : "@base-ui Accessible Form Controls & DayPicker Calendar"}
            </h2>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <Frame className="lg:col-span-7">
                <FramePanel className="flex flex-col gap-5">
                  <Field>
                    <FieldLabel>
                      {isZh
                        ? "组合搜索框（InputGroup + Kbd）"
                        : "InputGroup with Addons"}
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupAddon align="inline-start">
                        <SearchIcon className="text-muted-foreground" />
                      </InputGroupAddon>
                      <InputGroupInput
                        placeholder={
                          isZh
                            ? "搜索 60 个免签口岸、高铁站或 18 位统一社会信用代码…"
                            : "Search 60 visa-free ports, rail hubs, or 18-digit USCC…"
                        }
                        type="search"
                      />
                      <InputGroupAddon align="inline-end">
                        <Kbd>⌘K</Kbd>
                      </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription>
                      {isZh
                        ? "点击前后缀区域会自动聚焦内部输入框。"
                        : "Clicking leading or trailing addons automatically focuses the input."}
                    </FieldDescription>
                  </Field>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field>
                      <FieldLabel>
                        {isZh
                          ? "入境口岸城市（Input）"
                          : "Entry Port City (Input)"}
                      </FieldLabel>
                      <Input
                        defaultValue={
                          isZh ? "上海浦东国际机场 (PVG)" : "Shanghai Pudong (PVG)"
                        }
                      />
                    </Field>

                    <div className="flex flex-col gap-2">
                      <span className="font-medium text-foreground text-sm">
                        {isZh
                          ? "计划停留天数（NumberField）"
                          : "Planned Stay Days (NumberField)"}
                      </span>
                      <NumberField
                        max={30}
                        min={1}
                        value={stayDays}
                        onValueChange={(v) => setStayDays(v)}
                      >
                        <NumberFieldGroup>
                          <NumberFieldDecrement />
                          <NumberFieldInput />
                          <NumberFieldIncrement />
                        </NumberFieldGroup>
                      </NumberField>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-foreground text-sm">
                      {isZh
                        ? "目标专题（@base-ui Select）"
                        : "Target Pillar (@base-ui Select)"}
                    </span>
                    <Select
                      items={channelItems}
                      value={channel}
                      onValueChange={(val) => {
                        if (val) setChannel(val);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectPopup alignItemWithTrigger={false}>
                        {channelItems.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectPopup>
                    </Select>
                  </div>

                  <Field>
                    <FieldLabel>
                      {isZh ? "现场核验备注（Textarea）" : "Field Note (Textarea)"}
                    </FieldLabel>
                    <Textarea
                      placeholder={
                        isZh
                          ? "输入口岸自助申报机、12306 护照核验或移动支付实测体验…"
                          : "Record e-arrival card, 12306 passport check, or Alipay field notes…"
                      }
                    />
                  </Field>

                  <div className="flex flex-col gap-3 rounded-xl border bg-muted/40 p-3.5">
                    <label className="flex cursor-pointer items-center justify-between gap-3 text-sm">
                      <span className="font-medium">
                        {isZh
                          ? "已持有第三国（或港澳台）确定联程机票（Switch）"
                          : "Confirmed onward ticket to a 3rd country/region (Switch)"}
                      </span>
                      <Switch
                        checked={hasTicket}
                        onCheckedChange={setHasTicket}
                      />
                    </label>
                    <Separator />
                    <label className="flex cursor-pointer items-center gap-2.5 text-muted-foreground text-sm">
                      <Checkbox
                        checked={includeStandby}
                        onCheckedChange={setIncludeStandby}
                      />
                      <span>
                        {isZh
                          ? "检索结果包含反爬拦截官方备用数据源（Checkbox）"
                          : "Include WAF-protected official standby sources (Checkbox)"}
                      </span>
                    </label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Slider
                      max={10000}
                      min={200}
                      step={100}
                      value={spendRmb}
                      onValueChange={(val) =>
                        setSpendRmb(Array.isArray(val) ? [...val] : [val])
                      }
                    >
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="font-medium">
                          {isZh
                            ? "离境退税即买即退消费额（Slider）"
                            : "Instant Tax-Free Spend (Slider)"}
                        </span>
                        <span className="font-mono text-muted-foreground">
                          ¥{spendRmb[0]} ·{" "}
                          {isZh
                            ? `约退 ¥${Math.round((spendRmb[0] ?? 0) * 0.09)}`
                            : `~¥${Math.round((spendRmb[0] ?? 0) * 0.09)} net`}
                        </span>
                      </div>
                      <SliderValue className="sr-only" />
                    </Slider>
                  </div>
                </FramePanel>
              </Frame>

              <Frame className="lg:col-span-5">
                <FrameHeader>
                  <FrameTitle>
                    {isZh
                      ? "放票日历选框（官方 @coss/calendar）"
                      : "Release Date Picker (Official @coss/calendar)"}
                  </FrameTitle>
                  <FrameDescription>
                    {isZh
                      ? "基于 @daypicker/react 构建，用于 12306 提前 15 天与博物馆提前 7 天起售测算"
                      : "Powered by @daypicker/react for 15-day rail and 7-day museum ticket release windows"}
                  </FrameDescription>
                </FrameHeader>
                <FramePanel className="flex flex-col items-center justify-center gap-3">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                  />
                  <div className="w-full rounded-lg bg-muted/60 px-3 py-2 text-center text-muted-foreground text-xs">
                    {selectedDate
                      ? (() => {
                          const formatted = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;
                          return isZh
                            ? `已选出行日：${formatted}`
                            : `Selected travel date: ${formatted}`;
                        })()
                      : isZh
                        ? "请点选出行日期"
                        : "Select a travel date"}
                  </div>
                </FramePanel>
              </Frame>
            </div>
          </section>

          {/* 05 · Data & Status */}
          <section id="coss-data" className="ds-section">
            <span className="kicker">
              {isZh
                ? "05 · 状态与反馈（官方 Alert · Badge · AvatarGroup · Meter · Progress · Skeleton）"
                : "05 · Data & Feedback (Official Alert · Badge · AvatarGroup · Meter · Progress · Skeleton)"}
            </span>
            <h2>
              {isZh
                ? "柔和语义告警、镂空叠排头像组、计量条与骨架流光"
                : "Semantic Alerts, Cutout Avatar Groups, Meter, Progress & Skeleton"}
            </h2>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex flex-col gap-3">
                <Alert variant="success">
                  <CircleCheckIcon />
                  <AlertTitle>
                    {isZh
                      ? "官方一手信源已核验（Alert success）"
                      : "Primary official source verified (Alert success)"}
                  </AlertTitle>
                  <AlertDescription>
                    {isZh
                      ? "国家移民管理局门户中英文条款已于 2026-11-20 完成逐字核对。"
                      : "NIA bilingual clauses verified word-for-word on 2026-11-20."}
                  </AlertDescription>
                </Alert>

                <Alert variant="warning">
                  <TriangleAlertIcon />
                  <AlertTitle>
                    {isZh
                      ? "反爬拦截官方备用数据源（Alert warning）"
                      : "WAF-protected official standby (Alert warning)"}
                  </AlertTitle>
                  <AlertDescription>
                    {isZh
                      ? "自动化脚本返回 HTTP 412，普通人类浏览器可直接正常访问免费查询。"
                      : "Automated fetch returned HTTP 412; normal human browsers can query freely."}
                  </AlertDescription>
                </Alert>

                <Alert variant="error">
                  <CircleAlertIcon />
                  <AlertTitle>
                    {isZh
                      ? "旧版单口岸临时规定已废止（Alert error）"
                      : "Legacy single-port rule superseded (Alert error)"}
                  </AlertTitle>
                  <AlertDescription>
                    {isZh
                      ? "请以现行全国统一 24 省 60 口岸 240 小时过境免签政策为准。"
                      : "Superseded by the nationwide 24-province, 60-port 240-hour policy."}
                  </AlertDescription>
                </Alert>

                <Alert variant="info">
                  <InfoIcon />
                  <AlertTitle>
                    {isZh
                      ? "铁路 12306 外籍护照在线核验"
                      : "Railway 12306 Passport Verification"}
                  </AlertTitle>
                  <AlertDescription>
                    {isZh
                      ? "上传护照资料页后一般 5–15 分钟完成核验，支持直接刷护照进站。"
                      : "Online verification completes in 5–15 minutes; scan your physical passport at e-gates."}
                  </AlertDescription>
                </Alert>
              </div>

              <Card>
                <CardPanel className="flex flex-col gap-5 pt-6 pb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">
                      {isZh ? "描边默认" : "Outline"}
                    </Badge>
                    <Badge variant="secondary">
                      {isZh ? "次要灰底" : "Secondary"}
                    </Badge>
                    <Badge variant="info">{isZh ? "信息提示" : "Info"}</Badge>
                    <Badge variant="success">
                      {isZh ? "核验有效" : "Verified"}
                    </Badge>
                    <Badge variant="warning">
                      {isZh ? "反爬备用" : "Standby"}
                    </Badge>
                    <Badge variant="error">
                      {isZh ? "失效警示" : "Superseded"}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                      {isZh
                        ? "一线核验协作组（CSS Mask 镂空 AvatarGroup）"
                        : "Verification Editors (CSS-Mask Cutout AvatarGroup)"}
                    </span>
                    <AvatarGroup>
                      <Avatar>
                        <AvatarFallback>CW</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>SH</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>BJ</AvatarFallback>
                      </Avatar>
                      <AvatarGroupCount>+5</AvatarGroupCount>
                    </AvatarGroup>
                  </div>

                  <Meter value={94}>
                    <div className="flex items-center justify-between">
                      <MeterLabel>
                        {isZh
                          ? "政务公开数据库直连可用率（Meter）"
                          : "Official Portal Direct Uptime (Meter)"}
                      </MeterLabel>
                      <MeterValue />
                    </div>
                    <MeterTrack>
                      <MeterIndicator />
                    </MeterTrack>
                  </Meter>

                  <Progress max={97} value={84}>
                    <div className="flex items-center justify-between">
                      <ProgressLabel>
                        {isZh
                          ? "全站专题核验进度（Progress）"
                          : "Topic Verification Progress (Progress)"}
                      </ProgressLabel>
                      <ProgressValue />
                    </div>
                    <ProgressTrack>
                      <ProgressIndicator />
                    </ProgressTrack>
                  </Progress>

                  <div className="flex flex-col gap-2 pt-1">
                    <Skeleton className="h-4 w-3/5" />
                    <Skeleton className="h-3.5 w-4/5" />
                  </div>
                </CardPanel>
              </Card>
            </div>
          </section>

          {/* 06 · Card Table */}
          <section id="coss-table" className="ds-section">
            <span className="kicker">
              {isZh
                ? "06 · 卡片式数据表格（官方 Frame + Table variant=\"card\"）"
                : "06 · Card Table (Official Frame + Table variant=\"card\")"}
            </span>
            <h2>
              {isZh
                ? "9.1 中国免签与 240 小时过境免签速查矩阵"
                : "9.1 China Visa-Free & 240-Hour Transit Matrix"}
            </h2>

            <Frame>
              <Table variant="card">
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      {isZh ? "护照签发国" : "Passport"}
                    </TableHead>
                    <TableHead>
                      {isZh ? "单方面免签" : "Unilateral 30d"}
                    </TableHead>
                    <TableHead>
                      {isZh ? "互免签证" : "Mutual"}
                    </TableHead>
                    <TableHead>
                      {isZh ? "240 小时过境" : "240h Transit"}
                    </TableHead>
                    <TableHead>
                      {isZh ? "适用口岸" : "Eligible Ports"}
                    </TableHead>
                    <TableHead>
                      {isZh ? "核验日期" : "Verified"}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visaRows.map((row) => (
                    <TableRow key={row.passport}>
                      <TableCell className="font-medium text-foreground">
                        {row.passport}
                      </TableCell>
                      <TableCell>{row.unilateral}</TableCell>
                      <TableCell>{row.mutual}</TableCell>
                      <TableCell>
                        <Badge variant="success">{row.transit240h}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {row.ports}
                      </TableCell>
                      <TableCell className="font-mono text-muted-foreground text-xs">
                        {row.updated}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Frame>
          </section>

          {/* 07 · Navigation & Overlays */}
          <section id="coss-overlays" className="ds-section">
            <span className="kicker">
              {isZh
                ? "07 · 滑动指示器标签页与顶层浮层（Tabs · Accordion · Dialog · Sheet · Menu · Popover · Tooltip · Toast）"
                : "07 · Sliding-Indicator Tabs & Overlays (Tabs · Accordion · Dialog · Sheet · Menu · Popover · Tooltip · Toast)"}
            </span>
            <h2>
              {isZh
                ? "带平滑位移动画的胶囊/下划线 Tabs 与 @base-ui 浮窗体系"
                : "Animated Sliding-Pill / Underline Tabs & @base-ui Overlays"}
            </h2>

            <div className="ds-group-stack">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Frame>
                  <FrameHeader>
                    <FrameTitle>
                      {isZh
                        ? "胶囊轨道滑动指示器（Tabs variant=\"default\"）"
                        : "Sliding Pill Indicator (Tabs variant=\"default\")"}
                    </FrameTitle>
                  </FrameHeader>
                  <FramePanel>
                    <Tabs defaultValue="source">
                      <TabsList variant="default">
                        <TabsTab value="source">
                          {isZh ? "官方注册表源码" : "Official Registry"}
                        </TabsTab>
                        <TabsTab value="motion">
                          {isZh ? "平滑指示器" : "Sliding Indicator"}
                        </TabsTab>
                        <TabsTab value="palette">
                          {isZh ? "单一品牌色" : "Single Accent"}
                        </TabsTab>
                      </TabsList>
                      <TabsPanel
                        className="mt-2 rounded-lg border bg-muted/30 p-4 text-sm leading-relaxed"
                        value="source"
                      >
                        {isZh
                          ? "路线 A 直接拉取 https://coss.com/ui/r/*.json 官方源码放入 src/components/coss/，原汁原味保留 @base-ui/react 行为。"
                          : "Branch A pulls official https://coss.com/ui/r/*.json source directly into src/components/coss/, preserving 100% authentic @base-ui/react behavior."}
                      </TabsPanel>
                      <TabsPanel
                        className="mt-2 rounded-lg border bg-muted/30 p-4 text-sm leading-relaxed"
                        value="motion"
                      >
                        {isZh
                          ? "点击上方标签切换时，白色微切边滑块（TabsPrimitive.Indicator）自动读取 --active-tab-left 与 --active-tab-width 平滑过渡。"
                          : "Switching tabs animates TabsPrimitive.Indicator smoothly across --active-tab-left and --active-tab-width."}
                      </TabsPanel>
                      <TabsPanel
                        className="mt-2 rounded-lg border bg-muted/30 p-4 text-sm leading-relaxed"
                        value="palette"
                      >
                        {isZh
                          ? "浅色纯白 #FFFFFF + 深色中性碳灰 #141414，全站仅保留 #E43216 朱砂红作为唯一品牌强调色。"
                          : "Pure white #FFFFFF in light mode and deep neutral #141414 in dark mode, with #E43216 as the sole brand accent."}
                      </TabsPanel>
                    </Tabs>
                  </FramePanel>
                </Frame>

                <Frame>
                  <FrameHeader>
                    <FrameTitle>
                      {isZh
                        ? "下划线滑动指示器（Tabs variant=\"underline\"）"
                        : "Sliding Underline Indicator (Tabs variant=\"underline\")"}
                    </FrameTitle>
                  </FrameHeader>
                  <FramePanel>
                    <Tabs defaultValue="rail">
                      <TabsList className="border-b" variant="underline">
                        <TabsTab value="rail">
                          {isZh ? "9.4 铁路 12306" : "9.4 Railway 12306"}
                        </TabsTab>
                        <TabsTab value="pay">
                          {isZh ? "9.2 扫码支付" : "9.2 Mobile Pay"}
                        </TabsTab>
                        <TabsTab value="tax">
                          {isZh ? "9.8 离境退税" : "9.8 Tax Refund"}
                        </TabsTab>
                      </TabsList>
                      <TabsPanel
                        className="pt-3 text-muted-foreground text-sm leading-relaxed"
                        value="rail"
                      >
                        {isZh
                          ? "车票提前 15 天分批起售，外籍旅客凭护照原件走人工或自助闸机直接刷证进站，无需换取纸质车票。"
                          : "Tickets open 15 days ahead; foreign travelers scan physical passports directly at station e-gates."}
                      </TabsPanel>
                      <TabsPanel
                        className="pt-3 text-muted-foreground text-sm leading-relaxed"
                        value="pay"
                      >
                        {isZh
                          ? "支付宝与微信支付均支持直绑境外 Visa / Mastercard；单笔人民币 200 元及以下免收 3% 境外卡手续费。"
                          : "Alipay and WeChat Pay link foreign Visa/Mastercard directly; transactions ≤ ¥200 RMB waive the 3% card fee."}
                      </TabsPanel>
                      <TabsPanel
                        className="pt-3 text-muted-foreground text-sm leading-relaxed"
                        value="tax"
                      >
                        {isZh
                          ? "同人同日同店满 200 元即可开具退税申请单，主要口岸支持即买即退，实得净退税约 9%。"
                          : "Spend ≥ ¥200 RMB same-day same-store to qualify; instant downtown refund yields ~9% net."}
                      </TabsPanel>
                    </Tabs>
                  </FramePanel>
                </Frame>
              </div>

              <Frame>
                <FramePanel className="py-2">
                  <Accordion defaultValue={["a1"]}>
                    <AccordionItem value="a1">
                      <AccordionTrigger>
                        {isZh
                          ? "路线 A、路线 B、路线 C 三个 Git 分支的核心区别是什么？"
                          : "How do Git branches A, B, and C differ?"}
                      </AccordionTrigger>
                      <AccordionPanel>
                        {isZh
                          ? "路线 A（feat/coss-ui-a-official）基于 Astro Islands 运行 100% 官方 coss.com/ui 源码（@base-ui/react + Tailwind v4）；路线 B（feat/coss-ui-b-astro-pure）为彻底清退 AlignUI 后的纯 .astro 零 React 版本；路线 C（feat/coss-ui-c-hybrid）保留了历史沉淀的 39 套业务排版区块并换装 coss 令牌。"
                          : "Branch A runs 100% official coss.com/ui TSX source via Astro Islands; Branch B is pure zero-React .astro purged of AlignUI; Branch C retains the 39 legacy editorial/marketing blocks skinned with coss tokens."}
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem value="a2">
                      <AccordionTrigger>
                        {isZh
                          ? "为什么部分国家政务数据库标记为反爬拦截官方备用数据源？"
                          : "Why are some government portals marked as WAF-protected official standby?"}
                      </AccordionTrigger>
                      <AccordionPanel>
                        {isZh
                          ? "部分部委与省市公开数据库开启瑞数 412、创宇 521 或动态令牌防护拦截脚本，但在普通浏览器中完全免费公开可查。ChinaWao 如实记录为备用一手源，绝不静默剔除。"
                          : "Some ministry portals return HTTP 412/521 to automated scripts while remaining 100% free and public in human browsers. ChinaWao documents them transparently as official standby sources."}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </FramePanel>
              </Frame>

              <Frame>
                <FramePanel className="flex flex-wrap items-center gap-3">
                  {/* Dialog */}
                  <Dialog>
                    <DialogTrigger render={<Button variant="brand" />}>
                      {isZh ? "打开模态框 (Dialog)" : "Open Dialog"}
                    </DialogTrigger>
                    <DialogPopup>
                      <DialogHeader>
                        <DialogTitle>
                          {isZh
                            ? "导出行前核验清单（@coss/dialog）"
                            : "Export Pre-Trip Checklist (@coss/dialog)"}
                        </DialogTitle>
                        <DialogDescription>
                          {isZh
                            ? "由 @base-ui/react Dialog 驱动，支持缩放过渡、焦点锁定与移动端底部贴合。"
                            : "Powered by @base-ui/react Dialog with scale transitions, focus trapping, and mobile bottom-sheet stickiness."}
                        </DialogDescription>
                      </DialogHeader>
                      <DialogPanel>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {isZh
                            ? "包含 240 小时过境免签口岸清单、支付宝/微信绑卡限额说明以及中英双语紧急就医/出租车亮屏卡。"
                            : "Includes the 60-port 240h transit list, Alipay/WeChat card linking limits, and bilingual taxi & medical show-to-local cards."}
                        </p>
                      </DialogPanel>
                      <DialogFooter>
                        <DialogClose render={<Button variant="ghost" />}>
                          {isZh ? "取消" : "Cancel"}
                        </DialogClose>
                        <DialogClose
                          render={
                            <Button
                              variant="default"
                              onClick={() =>
                                toastManager.add({
                                  title: isZh
                                    ? "清单已生成"
                                    : "Checklist ready",
                                  description: isZh
                                    ? "已按最新核验快照打包。"
                                    : "Packaged from the latest verified snapshot.",
                                  type: "success",
                                })
                              }
                            />
                          }
                        >
                          {isZh ? "确认导出" : "Confirm Export"}
                        </DialogClose>
                      </DialogFooter>
                    </DialogPopup>
                  </Dialog>

                  {/* Inset Sheet */}
                  <Sheet>
                    <SheetTrigger render={<Button variant="outline" />}>
                      {isZh
                        ? "打开悬浮侧滑窗 (Inset Sheet)"
                        : "Open Inset Sheet"}
                    </SheetTrigger>
                    <SheetPopup side="right" variant="inset">
                      <SheetHeader>
                        <SheetTitle>
                          {isZh
                            ? "口岸详情侧滑面板（@coss/sheet）"
                            : "Port Detail Sheet (@coss/sheet)"}
                        </SheetTitle>
                        <SheetDescription>
                          {isZh
                            ? "variant=\"inset\" 距视口四周留出圆角悬浮边距"
                            : "variant=\"inset\" floats cleanly inside the viewport"}
                        </SheetDescription>
                      </SheetHeader>
                      <SheetPanel>
                        <div className="flex flex-col gap-3 text-sm leading-relaxed">
                          <p>
                            <strong>
                              {isZh
                                ? "上海浦东国际机场 (PVG)"
                                : "Shanghai Pudong Intl Airport (PVG)"}
                            </strong>
                          </p>
                          <p className="text-muted-foreground">
                            {isZh
                              ? "T1 / T2 航站楼均设有 240 小时临时入境许可专窗，支持入境前在线填报外国人入境卡二维码。"
                              : "Dedicated 240-hour temporary entry permit counters operate 24/7 in both T1 and T2 terminals."}
                          </p>
                        </div>
                      </SheetPanel>
                      <SheetFooter>
                        <SheetClose render={<Button variant="outline" />}>
                          {isZh ? "关闭面板" : "Close"}
                        </SheetClose>
                      </SheetFooter>
                    </SheetPopup>
                  </Sheet>

                  {/* Menu */}
                  <Menu>
                    <MenuTrigger render={<Button variant="outline" />}>
                      {isZh ? "下拉菜单 (Menu)" : "Dropdown Menu"}
                      <ChevronDownIcon className="size-4 opacity-70" />
                    </MenuTrigger>
                    <MenuPopup align="start">
                      <MenuItem
                        onClick={() =>
                          toastManager.add({
                            title: isZh ? "链接已复制" : "Page link copied",
                            type: "info",
                          })
                        }
                      >
                        <CopyIcon />
                        {isZh ? "复制本页链接" : "Copy page link"}
                      </MenuItem>
                      <MenuSeparator />
                      <MenuItem
                        onClick={() => {
                          window.location.href = lp("/tools/visa-checker/");
                        }}
                      >
                        <SparklesIcon />
                        {isZh ? "打开免签测算器" : "Open Visa Checker"}
                      </MenuItem>
                    </MenuPopup>
                  </Menu>

                  {/* Popover */}
                  <Popover>
                    <PopoverTrigger render={<Button variant="outline" />}>
                      {isZh ? "浮窗说明 (Popover)" : "Open Popover"}
                    </PopoverTrigger>
                    <PopoverPopup className="w-76">
                      <div className="flex flex-col gap-1.5">
                        <PopoverTitle className="text-base">
                          {isZh ? "一手信源核验纪律" : "Primary-Source Discipline"}
                        </PopoverTitle>
                        <PopoverDescription>
                          {isZh
                            ? "每条关键数字均绑定部委或政务公开 URL 与 YYYY-MM-DD 核验日期。"
                            : "Every hard number links to an official ministry URL with an explicit YYYY-MM-DD verification stamp."}
                        </PopoverDescription>
                      </div>
                    </PopoverPopup>
                  </Popover>

                  {/* Tooltip */}
                  <Tooltip>
                    <TooltipTrigger render={<Button variant="outline" />}>
                      {isZh ? "悬停提示 (Tooltip)" : "Hover Tooltip"}
                    </TooltipTrigger>
                    <TooltipPopup>
                      {isZh
                        ? "官方 @coss/tooltip 微切边气泡"
                        : "Official @coss/tooltip bevel popup"}
                    </TooltipPopup>
                  </Tooltip>

                  {/* Stacked Toast Trigger */}
                  <Button
                    variant="secondary"
                    onClick={() =>
                      toastManager.add({
                        title: isZh
                          ? "官方叠放吐司通知已触发"
                          : "Official stacked toast triggered",
                        description: isZh
                          ? "连续点击可预览 coss 标志性的三维叠放与悬停展开动画。"
                          : "Click multiple times to preview coss ui’s 3D stack & hover-expand toast viewport.",
                        type: "success",
                      })
                    }
                  >
                    {isZh ? "触发叠放吐司 (Toast)" : "Trigger Stacked Toast"}
                  </Button>
                </FramePanel>
              </Frame>
            </div>
          </section>
        </div>
      </TooltipProvider>
    </ToastProvider>
  );
}

export default CossOfficialShowcase;
