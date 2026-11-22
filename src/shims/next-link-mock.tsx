import * as React from "react";

export interface NextLinkMockProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  prefetch?: boolean;
  scroll?: boolean;
  replace?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, NextLinkMockProps>(
  (
    {
      href,
      prefetch: _prefetch,
      scroll: _scroll,
      replace: _replace,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <a ref={ref} href={href} {...rest}>
        {children}
      </a>
    );
  },
);

Link.displayName = "NextLinkMock";

export default Link;
