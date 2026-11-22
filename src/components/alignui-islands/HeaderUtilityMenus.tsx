'use client';

import * as React from 'react';
import {
  RiArrowDownSLine,
  RiCheckLine,
  RiComputerLine,
  RiGlobalLine,
  RiMoonLine,
  RiSunLine,
} from '@remixicon/react';

import * as Button from '@/components/ui/button';
import * as Dropdown from '@/components/ui/dropdown';

type SchemePref = 'light' | 'dark' | 'system';

export interface HeaderUtilityMenusProps {
  locale: 'en' | 'zh';
  enHref: string;
  zhHref: string;
}

export function HeaderUtilityMenus({
  locale,
  enHref,
  zhHref,
}: HeaderUtilityMenusProps): React.ReactElement {
  const isZh = locale === 'zh';
  const [pref, setPref] = React.useState<SchemePref>('system');

  const applyTheme = React.useCallback((next: SchemePref, persist: boolean) => {
    setPref(next);
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="color-scheme"]',
    );
    if (meta) {
      meta.content = next === 'system' ? 'light dark' : next;
    }
    const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = next === 'dark' || (next === 'system' && sysDark);
    document.documentElement.classList.toggle('dark', isDark);
    if (persist) {
      try {
        if (next === 'system') {
          localStorage.removeItem('color-scheme');
        } else {
          localStorage.setItem('color-scheme', next);
        }
      } catch {}
    }
  }, []);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem('color-scheme');
      if (stored === 'light' || stored === 'dark') {
        setPref(stored);
      }
    } catch {}
  }, []);

  const ThemeIcon =
    pref === 'light' ? RiSunLine : pref === 'dark' ? RiMoonLine : RiComputerLine;

  return (
    <div data-alignui-scope className='inline-flex items-center gap-1.5'>
      {/* Official AlignUI Dropdown: Language Switcher */}
      <div className='pe-lang-dropdown-wrap'>
        <Dropdown.Root>
          <Dropdown.Trigger asChild>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='xsmall'
              aria-label={isZh ? '切换语言' : 'Switch language'}
            >
              <Button.Icon as={RiGlobalLine} />
              <span>{isZh ? '简体中文' : 'English'}</span>
              <Button.Icon as={RiArrowDownSLine} />
            </Button.Root>
          </Dropdown.Trigger>
          <Dropdown.Content align='end' className='w-44'>
            <Dropdown.Item asChild>
              <a
                href={enHref}
                hrefLang='en'
                className='flex items-center justify-between'
              >
                <span>English</span>
                {locale === 'en' && (
                  <RiCheckLine className='size-4 text-primary-base' />
                )}
              </a>
            </Dropdown.Item>
            <Dropdown.Item asChild>
              <a
                href={zhHref}
                hrefLang='zh-CN'
                className='flex items-center justify-between'
              >
                <span>简体中文</span>
                {locale === 'zh' && (
                  <RiCheckLine className='size-4 text-primary-base' />
                )}
              </a>
            </Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Root>
      </div>

      {/* Official AlignUI Dropdown: 3-Mode Theme Switcher */}
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button.Root
            variant='neutral'
            mode='stroke'
            size='xsmall'
            aria-label={isZh ? '切换外观模式' : 'Switch color theme'}
          >
            <Button.Icon as={ThemeIcon} />
          </Button.Root>
        </Dropdown.Trigger>
        <Dropdown.Content align='end' className='w-44'>
          <Dropdown.Item
            onSelect={() => applyTheme('light', true)}
            className='justify-between'
          >
            <span className='inline-flex items-center gap-2'>
              <Dropdown.ItemIcon as={RiSunLine} />
              <span>{isZh ? '浅色模式' : 'Light'}</span>
            </span>
            {pref === 'light' && (
              <RiCheckLine className='size-4 text-primary-base' />
            )}
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => applyTheme('dark', true)}
            className='justify-between'
          >
            <span className='inline-flex items-center gap-2'>
              <Dropdown.ItemIcon as={RiMoonLine} />
              <span>{isZh ? '深色模式' : 'Dark'}</span>
            </span>
            {pref === 'dark' && (
              <RiCheckLine className='size-4 text-primary-base' />
            )}
          </Dropdown.Item>
          <Dropdown.Item
            onSelect={() => applyTheme('system', true)}
            className='justify-between'
          >
            <span className='inline-flex items-center gap-2'>
              <Dropdown.ItemIcon as={RiComputerLine} />
              <span>{isZh ? '跟随系统' : 'System'}</span>
            </span>
            {pref === 'system' && (
              <RiCheckLine className='size-4 text-primary-base' />
            )}
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Root>
    </div>
  );
}
