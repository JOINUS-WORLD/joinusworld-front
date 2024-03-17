import { useButton } from "@join-world/ui-hooks-button";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { clsx } from "clsx";
import * as React from "react";

import {
  activeColorVariant,
  buttonStyle,
  enableColorVariant,
  enableTextColorVariant,
  flexibleWidthVariant,
  hoverColorVariant,
  layerStyle,
  spanStyle,
  spinnerStyle,
} from "./style.css";
import { ButtonProps } from "./types";
import { getBtnColor } from "./utils/getBtnColor";
import { getBtnWidth } from "./utils/getBtnWidth";

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const { buttonProps } = useButton(props);

  // default
  const {
    theme = "primary",
    size = "s",
    variant = "solid",
    isFlexible = false,
    isLoading,
    children,
    style,
  } = props;

  const { enableColor, enableTextColor, hoverColor, activeColor } = getBtnColor(
    { theme: theme, variant: variant },
  );

  const btnWidth = getBtnWidth("default", size);

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={clsx([
        buttonStyle({
          isFlexible,
          size,
          variant,
        }),
      ])}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [enableTextColorVariant]: enableTextColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
          [flexibleWidthVariant]: btnWidth,
        }),
        ...style,
      }}
    >
      {isLoading && <div className={spinnerStyle()} />}
      <span className={spanStyle()}>{children}</span>
      <div className={layerStyle()} />
    </button>
  );
};

const _Button = React.forwardRef(Button);
export { _Button as Button };
