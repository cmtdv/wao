"use client";

import * as React from "react";
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

  return (
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
  );
}
