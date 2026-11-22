"use client";

import * as React from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  GlobeIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import { Button } from "@coss/button";
import {
  Menu,
  MenuLinkItem,
  MenuPopup,
  MenuTrigger,
} from "@coss/menu";

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
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const syncFromDom = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    syncFromDom();
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      try {
        const stored = localStorage.getItem("color-scheme");
        if (stored !== "light" && stored !== "dark") {
          document.documentElement.classList.toggle("dark", mq.matches);
          setIsDark(mq.matches);
        }
      } catch {}
    };
    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  }, []);

  const toggleTheme = React.useCallback(() => {
    const nextDark = !document.documentElement.classList.contains("dark");
    const nextMode = nextDark ? "dark" : "light";
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="color-scheme"]',
    );
    if (meta) {
      meta.content = nextMode;
    }
    try {
      localStorage.setItem("color-scheme", nextMode);
    } catch {}
  }, []);

  return (
    <div className="inline-flex items-center gap-1">
      {/* Compact Language Dropdown */}
      <div className="pe-lang-dropdown-wrap">
        <Menu>
          <MenuTrigger
            render={
              <Button
                aria-label={isZh ? "切换语言" : "Switch language"}
                className="h-8 gap-1 px-2 text-xs font-medium"
                size="sm"
                variant="ghost"
              />
            }
          >
            <GlobeIcon className="size-3.5 opacity-80" />
            <span>{isZh ? "中文" : "EN"}</span>
            <ChevronDownIcon className="size-3 opacity-60" />
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

      {/* Borderless 1-Click Theme Toggle (Zero box, zero dropdown) */}
      <button
        aria-label={
          isZh
            ? isDark
              ? "切换为浅色模式"
              : "切换为深色模式"
            : isDark
              ? "Switch to light mode"
              : "Switch to dark mode"
        }
        className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        onClick={toggleTheme}
        title={
          isZh
            ? isDark
              ? "切换为浅色模式"
              : "切换为深色模式"
            : isDark
              ? "Switch to light mode"
              : "Switch to dark mode"
        }
        type="button"
      >
        {isDark ? (
          <SunIcon className="size-4" />
        ) : (
          <MoonIcon className="size-4" />
        )}
      </button>
    </div>
  );
}
