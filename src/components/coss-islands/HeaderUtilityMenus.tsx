"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import cnFlagUrl from "circle-flags/flags/cn.svg?url";
import gbFlagUrl from "circle-flags/flags/gb.svg?url";
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
    <img
      alt=""
      aria-hidden="true"
      className="size-4 shrink-0 rounded-full ring-1 ring-black/10 dark:ring-white/15"
      decoding="async"
      height={16}
      src={cnFlagUrl}
      width={16}
    />
  );
}

function FlagEn(): React.ReactElement {
  return (
    <img
      alt=""
      aria-hidden="true"
      className="size-4 shrink-0 rounded-full ring-1 ring-black/10 dark:ring-white/15"
      decoding="async"
      height={16}
      src={gbFlagUrl}
      width={16}
    />
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
                className="h-8 gap-1.5 px-2 text-xs font-medium active:scale-[0.97] max-md:h-10"
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
              aria-current={locale === "en" ? "true" : undefined}
              className={
                locale === "en"
                  ? "gap-2 bg-accent font-medium text-foreground"
                  : "gap-2"
              }
              href={enHref}
              hrefLang="en"
            >
              <FlagEn />
              <span>English</span>
            </MenuLinkItem>
            <MenuLinkItem
              aria-current={locale === "zh" ? "true" : undefined}
              className={
                locale === "zh"
                  ? "gap-2 bg-accent font-medium text-foreground"
                  : "gap-2"
              }
              href={zhHref}
              hrefLang="zh-CN"
            >
              <FlagCn />
              <span>简体中文</span>
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
        className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent text-muted-foreground transition-[color,background-color,transform] duration-150 hover:bg-accent hover:text-foreground active:scale-[0.97] max-md:size-10"
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
