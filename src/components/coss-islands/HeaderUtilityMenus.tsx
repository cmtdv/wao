"use client";

import * as React from "react";
import { CheckIcon, MoonIcon, SunIcon } from "lucide-react";
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

function FlagCn(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      className="h-3 w-4 shrink-0 rounded-[2px] ring-1 ring-black/10 dark:ring-white/15"
      viewBox="0 0 24 16"
    >
      <rect fill="#DE2910" height="16" width="24" />
      <polygon
        fill="#FFDE00"
        points="4.2,2.1 4.78,3.88 6.65,3.88 5.14,4.98 5.72,6.76 4.2,5.66 2.68,6.76 3.26,4.98 1.75,3.88 3.62,3.88"
      />
      <circle cx="8.2" cy="2.1" fill="#FFDE00" r="0.65" />
      <circle cx="9.4" cy="3.6" fill="#FFDE00" r="0.65" />
      <circle cx="9.4" cy="5.6" fill="#FFDE00" r="0.65" />
      <circle cx="8.2" cy="7.1" fill="#FFDE00" r="0.65" />
    </svg>
  );
}

function FlagEn(): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      className="h-3 w-4 shrink-0 rounded-[2px] ring-1 ring-black/10 dark:ring-white/15"
      viewBox="0 0 24 16"
    >
      <rect fill="#012169" height="16" width="24" />
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#FFFFFF" strokeWidth="3.2" />
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" strokeWidth="1.6" />
      <path d="M12,0 V16 M0,8 H24" stroke="#FFFFFF" strokeWidth="4.8" />
      <path d="M12,0 V16 M0,8 H24" stroke="#C8102E" strokeWidth="2.8" />
    </svg>
  );
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
      {/* Compact Flag + Short Code Language Switcher (No Chevron, Non-Modal so scrollbar never jumps) */}
      <div className="pe-lang-dropdown-wrap">
        <Menu modal={false}>
          <MenuTrigger
            render={
              <Button
                aria-label={isZh ? "切换语言" : "Switch language"}
                className="h-8 gap-1.5 px-2 text-xs font-medium"
                size="sm"
                variant="ghost"
              />
            }
          >
            {isZh ? <FlagCn /> : <FlagEn />}
            <span>{isZh ? "中文" : "EN"}</span>
          </MenuTrigger>
          <MenuPopup align="end">
            <MenuLinkItem
              className="justify-between gap-4"
              href={enHref}
              hrefLang="en"
            >
              <span className="inline-flex items-center gap-2">
                <FlagEn />
                <span>English</span>
              </span>
              {locale === "en" && (
                <CheckIcon className="size-3.5 text-brand" />
              )}
            </MenuLinkItem>
            <MenuLinkItem
              className="justify-between gap-4"
              href={zhHref}
              hrefLang="zh-CN"
            >
              <span className="inline-flex items-center gap-2">
                <FlagCn />
                <span>简体中文</span>
              </span>
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
