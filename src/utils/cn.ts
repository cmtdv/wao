// Modified from AlignUI ai-template utils/cn.ts per AGENTS.md §2.4:
// Added shadow and rounded classGroups to twMergeConfig so Tailwind v4 overrides merge cleanly.
import clsx, { type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export { type ClassValue } from "clsx";

const typographyConfig = {
  title: ["h1", "h2", "h3", "h4", "h5", "h6"],
  label: ["xl", "lg", "md", "sm", "xs"],
  paragraph: ["xl", "lg", "md", "sm", "xs"],
  subheading: ["md", "sm", "xs", "2xs"],
  doc: ["label", "paragraph"],
};

const typographyPatterns = Object.entries(typographyConfig).flatMap(
  ([category, sizes]) => sizes.map((size) => `${category}-${size}`),
);

export const twMergeConfig = {
  extend: {
    classGroups: {
      "font-size": [
        {
          text: typographyPatterns,
        },
      ],
      shadow: [
        {
          shadow: [
            "regular-xs",
            "regular-sm",
            "regular-md",
            "button-primary-focus",
            "button-important-focus",
            "button-error-focus",
            "fancy-buttons-neutral",
            "fancy-buttons-primary",
            "fancy-buttons-error",
            "fancy-buttons-stroke",
            "toggle-switch",
            "switch-thumb",
            "tooltip",
            "custom-xs",
            "custom-sm",
            "custom-md",
            "custom-lg",
            "complex",
            "complex-2",
            "complex-3",
            "gray-shadow",
            "gray-shadow-2",
            "gray-shadow-4",
            "custom-input",
          ],
        },
      ],
      rounded: [{ rounded: ["10", "20"] }],
    },
  },
};

const customTwMerge = extendTailwindMerge(twMergeConfig);

export function cn(...classes: ClassValue[]) {
  return customTwMerge(clsx(...classes));
}
