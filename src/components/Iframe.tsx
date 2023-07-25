import { IframeHTMLAttributes } from "react";

export default function Iframe({
  src,
  width,
  height,
  ...rest
}: IframeHTMLAttributes<HTMLIFrameElement>) {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      allowFullScreen
      style={{ border: "none", width: "100%" }}
      loading="lazy"
      {...rest}
    ></iframe>
  );
}
