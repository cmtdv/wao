'use client';

import * as React from 'react';
import {
  RiAddLine,
  RiCheckboxCircleFill,
  RiInformationFill,
  RiPassportLine,
  RiSubtractLine,
  RiTimeFill,
} from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as ButtonGroup from '@/components/ui/button-group';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Select from '@/components/ui/select';
import * as StatusBadge from '@/components/ui/status-badge';
import * as Switch from '@/components/ui/switch';

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
  const [code, setCode] = React.useState<string>(profiles[0]?.code ?? 'FR');
  const [days, setDays] = React.useState<number>(10);
  const [hasThirdCountry, setHasThirdCountry] = React.useState<boolean>(true);

  const selected = profiles.find((p) => p.code === code) ?? profiles[0];

  let statusTone: 'completed' | 'pending' | 'failed' = 'pending';
  let alertStatus: 'success' | 'information' | 'warning' = 'warning';
  let badgeLabel = isZh ? '需提前办理常规签证' : 'Standard Visa Required';
  let headline = isZh
    ? `出发前需提前办理中国签证（计划停留 ${days} 天）`
    : `Apply for a Chinese Visa Prior to Departure (${days} days)`;
  let detail = isZh
    ? `${selected?.country ?? ''}普通护照持有人在当前行程条件下计划停留 ${days} 天，请通过中国签证申请服务中心（CVASC）或驻外使领馆提前办理签证。${selected?.note ?? ''}`
    : `${selected?.country ?? ''} ordinary passport holders planning a ${days}-day stay under these routing conditions should apply for an L or M visa via CVASC. ${selected?.note ?? ''}`;

  if (selected) {
    if (selected.mutualDays > 0 && days <= selected.mutualDays) {
      statusTone = 'completed';
      alertStatus = 'success';
      badgeLabel = isZh ? '适用双边互免签证' : 'Mutual Visa-Free Eligible';
      headline = isZh
        ? `适用 ${selected.mutualDays} 天双边互免签证入境`
        : `Eligible for ${selected.mutualDays}-Day Mutual Visa-Free Entry`;
      detail = isZh
        ? `${selected.country}与中国签有互免签证协定，单次停留最长 ${selected.mutualDays} 天（当前计划 ${days} 天）。${selected.note}`
        : `${selected.country} holds a mutual visa exemption allowing stays up to ${selected.mutualDays} days (${days} days planned). ${selected.note}`;
    } else if (selected.unilateralDays > 0 && days <= selected.unilateralDays) {
      statusTone = 'completed';
      alertStatus = 'success';
      badgeLabel = isZh ? '适用单方面免签' : 'Unilateral Visa-Free Eligible';
      headline = isZh
        ? `适用 ${selected.unilateralDays} 天单方面免签入境`
        : `Eligible for ${selected.unilateralDays}-Day Unilateral Visa-Free Entry`;
      detail = isZh
        ? `${selected.country}普通护照持有人可享单方面免签最长 ${selected.unilateralDays} 天（当前计划 ${days} 天）。${selected.note}`
        : `${selected.country} ordinary passport holders qualify for up to ${selected.unilateralDays} days visa-free (${days} days planned). ${selected.note}`;
    } else if (selected.transit240h && days <= 10 && hasThirdCountry) {
      statusTone = 'completed';
      alertStatus = 'information';
      badgeLabel = isZh ? '适用 240 小时过境免签' : '240-Hour Transit Eligible';
      headline = isZh
        ? '适用 240 小时（10 天）跨省过境免签'
        : 'Eligible for 240-Hour (10-Day) Visa-Free Transit';
      detail = isZh
        ? `持已确定日期及座位的第三国/地区（含港澳台）联程机票，${selected.country}护照可在全国 24 个省份内跨省免签停留最长 240 小时。${selected.note}`
        : `With a confirmed onward ticket to a third country/region (including HK, Macao, or Taiwan), ${selected.country} passport holders may stay up to 240 hours across 24 provinces. ${selected.note}`;
    }
  }

  return (
    <div
      data-alignui-scope
      className='rounded-20 bg-bg-weak-50 p-1.5 ring-1 ring-inset ring-stroke-soft-200'
    >
      <div className='grid grid-cols-1 gap-1.5 md:grid-cols-[1fr_1.15fr]'>
        <div className='flex flex-col gap-5 rounded-2xl bg-bg-white-0 p-5 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
          <div className='flex flex-col gap-1.5'>
            <Label.Root htmlFor='alignui-visa-country'>
              {isZh ? '所持普通护照国籍' : 'Ordinary Passport Nationality'}
            </Label.Root>
            <Select.Root value={code} onValueChange={setCode}>
              <Select.Trigger id='alignui-visa-country'>
                <Select.TriggerIcon as={RiPassportLine} />
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                {profiles.map((p) => (
                  <Select.Item key={p.code} value={p.code}>
                    {p.country}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </div>

          <div className='flex flex-col gap-1.5'>
            <Label.Root htmlFor='alignui-visa-days'>
              {isZh ? '计划停留天数' : 'Planned Length of Stay (Days)'}
            </Label.Root>
            <div className='flex items-center gap-2'>
              <Input.Root className='flex-1'>
                <Input.Wrapper>
                  <Input.Input
                    id='alignui-visa-days'
                    type='number'
                    min={1}
                    max={90}
                    value={days}
                    onChange={(e) => {
                      const next = Number.parseInt(e.target.value, 10);
                      if (!Number.isNaN(next)) {
                        setDays(Math.max(1, Math.min(90, next)));
                      }
                    }}
                  />
                  <Input.InlineAffix>{isZh ? '天' : 'days'}</Input.InlineAffix>
                </Input.Wrapper>
              </Input.Root>
              <ButtonGroup.Root size='small'>
                <ButtonGroup.Item
                  aria-label={isZh ? '减少一天' : 'Decrease days'}
                  onClick={() => setDays((d) => Math.max(1, d - 1))}
                >
                  <ButtonGroup.Icon as={RiSubtractLine} />
                </ButtonGroup.Item>
                <ButtonGroup.Item
                  aria-label={isZh ? '增加一天' : 'Increase days'}
                  onClick={() => setDays((d) => Math.min(90, d + 1))}
                >
                  <ButtonGroup.Icon as={RiAddLine} />
                </ButtonGroup.Item>
              </ButtonGroup.Root>
            </div>
          </div>

          <label className='flex cursor-pointer items-center justify-between gap-3 rounded-10 bg-bg-weak-50 px-3.5 py-3 ring-1 ring-inset ring-stroke-soft-200'>
            <span className='text-label-sm text-text-strong-950'>
              {isZh
                ? '持有前往第三国/地区（含港澳台）联程客票'
                : 'Holding confirmed onward ticket to a 3rd country/region'}
            </span>
            <Switch.Root
              checked={hasThirdCountry}
              onCheckedChange={setHasThirdCountry}
            />
          </label>
        </div>

        <div className='flex flex-col justify-between gap-4 rounded-2xl bg-bg-white-0 p-5 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-wrap items-center justify-between gap-2'>
              <StatusBadge.Root status={statusTone} variant='light'>
                <StatusBadge.Icon
                  as={
                    statusTone === 'completed'
                      ? RiCheckboxCircleFill
                      : RiTimeFill
                  }
                />
                {badgeLabel}
              </StatusBadge.Root>
              <span className='text-paragraph-xs text-text-sub-600'>
                NIA · 2026-11
              </span>
            </div>

            <h3 className='text-title-h6 text-text-strong-950'>{headline}</h3>
            <p className='text-paragraph-sm text-text-sub-600'>{detail}</p>
          </div>

          <Alert.Root variant='lighter' status={alertStatus} size='small'>
            <Alert.Icon as={RiInformationFill} />
            <span>
              {isZh
                ? '入境前请以国家移民管理局（NIA）及驻外使领馆最新正式公告为准。'
                : 'Always verify final entry rules against the latest National Immigration Administration (NIA) notice.'}
            </span>
          </Alert.Root>
        </div>
      </div>
    </div>
  );
}
