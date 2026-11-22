"use client";

import * as React from "react";
import { Badge } from "@coss/badge";
import { Frame, FramePanel } from "@coss/frame";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@coss/number-field";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@coss/select";
import { Switch } from "@coss/switch";

export interface VisaProfileOption {
  code: string;
  country: string;
  unilateralDays: number;
  mutualDays: number;
  transit240h: boolean;
  note: string;
}

export interface VisaCheckerIslandProps {
  isZh: boolean;
  profiles: VisaProfileOption[];
}

export function VisaCheckerIsland({
  isZh,
  profiles,
}: VisaCheckerIslandProps): React.ReactElement {
  const [code, setCode] = React.useState<string>(profiles[0]?.code ?? "FR");
  const [days, setDays] = React.useState<number>(10);
  const [hasThirdCountry, setHasThirdCountry] = React.useState<boolean>(true);

  const selected =
    profiles.find((p) => p.code === code) ?? profiles[0];

  const items = React.useMemo(
    () => profiles.map((p) => ({ label: p.country, value: p.code })),
    [profiles],
  );

  let badgeVariant: "success" | "info" | "warning" = "warning";
  let badgeLabel = isZh ? "需提前办理常规签证" : "Standard Visa Required";
  let headline = isZh
    ? `出发前需提前办理中国签证（计划停留 ${days} 天）`
    : `Apply for a Chinese Visa Prior to Departure (${days} days)`;
  let detail = isZh
    ? `${selected?.country ?? ""}普通护照持有人在当前行程条件下计划停留 ${days} 天，请通过中国签证申请服务中心（CVASC）或驻外使领馆提前办理签证。${selected?.note ?? ""}`
    : `${selected?.country ?? ""} ordinary passport holders planning a ${days}-day stay under these routing conditions should apply for an L or M visa via CVASC. ${selected?.note ?? ""}`;

  if (selected) {
    if (selected.mutualDays > 0 && days <= selected.mutualDays) {
      badgeVariant = "success";
      badgeLabel = isZh ? "适用双边互免签证" : "Mutual Visa-Free Eligible";
      headline = isZh
        ? `适用 ${selected.mutualDays} 天双边互免签证入境`
        : `Eligible for ${selected.mutualDays}-Day Mutual Visa-Free Entry`;
      detail = isZh
        ? `${selected.country}与中国签有互免签证协定，单次停留最长 ${selected.mutualDays} 天（当前计划 ${days} 天）。${selected.note}`
        : `${selected.country} holds a mutual visa exemption allowing stays up to ${selected.mutualDays} days (${days} days planned). ${selected.note}`;
    } else if (selected.unilateralDays > 0 && days <= selected.unilateralDays) {
      badgeVariant = "success";
      badgeLabel = isZh ? "适用单方面免签" : "Unilateral Visa-Free Eligible";
      headline = isZh
        ? `适用 ${selected.unilateralDays} 天单方面免签入境`
        : `Eligible for ${selected.unilateralDays}-Day Unilateral Visa-Free Entry`;
      detail = isZh
        ? `${selected.country}普通护照持有人可享单方面免签最长 ${selected.unilateralDays} 天（当前计划 ${days} 天）。${selected.note}`
        : `${selected.country} ordinary passport holders qualify for up to ${selected.unilateralDays} days visa-free (${days} days planned). ${selected.note}`;
    } else if (selected.transit240h && days <= 10 && hasThirdCountry) {
      badgeVariant = "info";
      badgeLabel = isZh ? "适用 240 小时过境免签" : "240-Hour Transit Eligible";
      headline = isZh
        ? "适用 240 小时（10 天）跨省过境免签"
        : "Eligible for 240-Hour (10-Day) Visa-Free Transit";
      detail = isZh
        ? `持已确定日期及座位的第三国/地区（含港澳台）联程机票，${selected.country}护照可在全国 24 个省份内跨省免签停留最长 240 小时。${selected.note}`
        : `With a confirmed onward ticket to a third country/region (including HK, Macao, or Taiwan), ${selected.country} passport holders may stay up to 240 hours across 24 provinces. ${selected.note}`;
    }
  }

  return (
    <Frame>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-[1fr_1.15fr]">
        <FramePanel className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="font-medium text-foreground text-sm">
              {isZh ? "所持普通护照国籍" : "Ordinary Passport Nationality"}
            </span>
            <Select
              items={items}
              onValueChange={(val) => {
                if (val) setCode(String(val));
              }}
              value={code}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectPopup alignItemWithTrigger={false}>
                {profiles.map((p) => (
                  <SelectItem key={p.code} value={p.code}>
                    {p.country}
                  </SelectItem>
                ))}
              </SelectPopup>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-medium text-foreground text-sm">
              {isZh
                ? "计划在中国内地停留天数"
                : "Planned Mainland Stay (Days)"}
            </span>
            <NumberField
              className="w-36"
              max={180}
              min={1}
              onValueChange={(val) => {
                if (typeof val === "number" && !Number.isNaN(val)) {
                  setDays(val);
                }
              }}
              value={days}
            >
              <NumberFieldGroup>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
              </NumberFieldGroup>
            </NumberField>
          </div>

          <label className="flex cursor-pointer items-start gap-3">
            <Switch
              checked={hasThirdCountry}
              className="mt-0.5 data-checked:bg-brand"
              onCheckedChange={setHasThirdCountry}
            />
            <span className="flex flex-col gap-0.5 text-sm">
              <span className="font-medium text-foreground">
                {isZh
                  ? "持有第三国或港澳台联程确定客票"
                  : "Confirmed third-country/region onward ticket"}
              </span>
              <span className="text-muted-foreground text-xs">
                {isZh
                  ? "行程须为 A 国/地区 → 中国内地 → C 国/地区（含港澳台）"
                  : "Routing must follow Country/Region A → Mainland China → Country/Region C"}
              </span>
            </span>
          </label>
        </FramePanel>

        <FramePanel
          aria-live="polite"
          className="flex flex-col justify-between gap-4"
        >
          <div className="flex flex-col gap-3">
            <div>
              <Badge size="lg" variant={badgeVariant}>
                {badgeLabel}
              </Badge>
            </div>
            <h2 className="font-heading font-semibold text-foreground text-xl leading-snug">
              {headline}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {detail}
            </p>
          </div>
          <p className="border-t pt-3 font-mono text-muted-foreground text-xs">
            {isZh
              ? "依据：国家移民管理局 12367 现行免签与 240 小时过境规定"
              : "Basis: National Immigration Administration (12367) 2026 Rules"}
          </p>
        </FramePanel>
      </div>
    </Frame>
  );
}
