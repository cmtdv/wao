/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    locale?: 'en' | 'zh';
    originalPathname?: string;
  }
}
