import { vars } from "@join-world/themes";
import { clsx } from "clsx";
import * as React from "react";

import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { GridProps } from "./types";

const Grid = (props: GridProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "div",
    color,
    background,
    children,
    autoColumns,
    autoFlow,
    autoRows,
    columnGap,
    column,
    gap,
    row,
    rowGap,
    templateColumns,
    templateRows,
    templateAreas,
  } = props;

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
        display: "grid",
        gridAutoColumns: autoColumns,
        gridAutoFlow: autoFlow,
        gridAutoRows: autoRows,
        gridColumnGap: columnGap,
        gridGap: gap,
        gridRowGap: rowGap,
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        gridTemplateAreas: templateAreas,
        gridColumn: column,
        gridRow: row,
        color: color && vars.colors.mode.ref.palette[color],
        background: background && vars.colors.mode.ref.palette[background],
        ...props.style,
      },
    },
    children,
  );
};

const _Grid = React.forwardRef(Grid);
export { _Grid as Grid };
