"use client";

import * as React from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  GlobeIcon,
  MonitorIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import { Button } from "@coss/button";
import {
  Menu,
  MenuLinkItem,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@coss/menu";

type SchemePref = "light" | "dark" | "system";

export interface HeaderUtilityMenusProps {
  locale: "en" | "zh";
  enHref: string;
  zhHref: string;
}

export function HeaderUtilityMenus({
  locale,
  enHref,
  zhHref,
}: HeaderUtilityMenusProps): React.ReactElement {
  const isZh = locale === "zh";
  const [pref, setPref] = React.useState<SchemePref>("system");

  const applyTheme = React.useCallback((next: SchemePref, persist: boolean) => {
    setPref(next);
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="color-scheme"]',
    );
    if (meta) {
      meta.content = next === "system" ? "light dark" : next;
    }
    const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = next === "dark" || (next === "system" && sysDark);
    document.documentElement.classList.toggle("dark", isDark);
    if (persist) {
      try {
        if (next === "system") {
          localStorage.removeItem("color-scheme");
        } else {
          localStorage.setItem("color-scheme", next);
        }
      } catch {}
    }
  }, []);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("color-scheme");
      if (stored === "light" || stored === "dark") {
        setPref(stored);
      }
    } catch {}
  }, []);

  const ThemeIcon =
    pref === "light" ? SunIcon : pref === "dark" ? MoonIcon : MonitorIcon;

  return (
    <div className="inline-flex items-center gap-1.5">
      {/* Official coss Menu: Language Dropdown */}
      <div className="pe-lang-dropdown-wrap">
        <Menu>
          <MenuTrigger
            render={
              <Button
                aria-label={isZh ? "切换语言" : "Switch language"}
                size="sm"
                variant="outline"
              />
            }
          >
            <GlobeIcon className="size-3.5" />
            <span>{isZh ? "简体中文" : "English"}</span>
            <ChevronDownIcon className="size-3 opacity-70" />
          </MenuTrigger>
          <MenuPopup align="end">
            <MenuLinkItem
              className="justify-between"
              href={enHref}
              hrefLang="en"
            >
              <span>English</span>
              {locale === "en" && (
                <CheckIcon className="size-3.5 text-brand" />
              )}
            </MenuLinkItem>
            <MenuLinkItem
              className="justify-between"
              href={zhHref}
              hrefLang="zh-CN"
            >
              <span>简体中文</span>
              {locale === "zh" && (
                <CheckIcon className="size-3.5 text-brand" />
              )}
            </MenuLinkItem>
          </MenuPopup>
        </Menu>
      </div>

      {/* Official coss Menu: 3-Mode Theme Dropdown */}
      <Menu>
        <MenuTrigger
          render={
            <Button
              aria-label={
                isZh
                  ? "切换主题模式（浅色 / 深色 / 跟随系统）"
                  : "Switch theme (Light / Dark / System)"
              }
              size="sm"
              variant="outline"
            />
          }
        >
          <ThemeIcon className="size-3.5" />
          <ChevronDownIcon className="size-3 opacity-70" />
        </MenuTrigger>
        <MenuPopup align="end">
          <MenuRadioGroup
            onValueChange={(val) => applyTheme(val as SchemePref, true)}
            value={pref}
          >
            <MenuRadioItem closeOnClick value="light">
              <span className="inline-flex items-center gap-2">
                <SunIcon className="size-3.5" />
                <span>{isZh ? "浅色模式" : "Light"}</span>
              </span>
            </MenuRadioItem>
            <MenuRadioItem closeOnClick value="dark">
              <span className="inline-flex items-center gap-2">
                <MoonIcon className="size-3.5" />
                <span>{isZh ? "深色模式" : "Dark"}</span>
              </span>
            </MenuRadioItem>
            <MenuRadioItem closeOnClick value="system">
              <span className="inline-flex items-center gap-2">
                <MonitorIcon className="size-3.5" />
                <span>{isZh ? "跟随系统" : "System"}</span>
              </span>
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuPopup>
      </Menu>
    </div>
  );
}
