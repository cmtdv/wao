import * as React from "react";

export interface NextImageMockProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string | { src: string };
  fill?: boolean;
  priority?: boolean;
  unoptimized?: boolean;
  quality?: number;
}

const Image = React.forwardRef<HTMLImageElement, NextImageMockProps>(
  (
    {
      src,
      alt = "",
      fill,
      priority: _priority,
      unoptimized: _unoptimized,
      quality: _quality,
      style,
      className,
      ...rest
    },
    ref,
  ) => {
    const resolvedSrc = typeof src === "string" ? src : src.src;
    const fillStyle: React.CSSProperties | undefined = fill
      ? {
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: 0,
        }
      : undefined;

    return (
      <img
        ref={ref}
        src={resolvedSrc}
        alt={alt}
        className={className}
        style={fill ? { ...fillStyle, ...style } : style}
        loading={_priority ? "eager" : "lazy"}
        {...rest}
      />
    );
  },
);

Image.displayName = "NextImageMock";

export default Image;
