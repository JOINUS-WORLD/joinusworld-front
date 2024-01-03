import { vars } from "@join-world/themes";
import { clsx } from "clsx";
import * as React from "react";

import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { BoxProps } from "./types";

const Box = (props: BoxProps, ref: React.Ref<HTMLElement>) => {
  const { as = "div", color, background, children } = props;
  console.log(vars.colors.mode.ref.palette.yellow200);
  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      style: {
        color: color && vars.colors.mode.ref.palette[color],
        background: background && vars.colors.mode.ref.palette[background],
        ...props.style,
      },
    },
    children,
  );
};

const _Box = React.forwardRef(Box);
export { _Box as Box };
