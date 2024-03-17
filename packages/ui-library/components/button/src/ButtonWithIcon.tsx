import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as React from "react";

import { Button } from "./Button";
import { flexibleWidthVariant, spanStyle } from "./style.css";
import { ButtonWithIconProps } from "./types";
import { getBtnWidth } from "./utils/getBtnWidth";

const ButtonWithIcon = (
  props: ButtonWithIconProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const { leftIcon, rightIcon, icon, style, size = "s", ...rest } = props;

  const btnWidth = getBtnWidth("iconWithText", size);

  if (leftIcon || rightIcon) {
    return (
      <Button
        {...rest}
        ref={ref}
        size={size}
        style={{
          ...assignInlineVars({
            [flexibleWidthVariant]: btnWidth,
          }),
          ...style,
        }}
      >
        {leftIcon && <span className={spanStyle()}>{leftIcon}</span>}
        <span className={spanStyle()}>{rest.children}</span>
        {rightIcon && <span className={spanStyle()}>{rightIcon}</span>}
      </Button>
    );
  }

  if (icon) {
    const btnWidth = getBtnWidth("icon", size);

    return (
      <Button
        {...rest}
        ref={ref}
        variant="ghost"
        size={size}
        style={{
          ...assignInlineVars({
            [flexibleWidthVariant]: btnWidth,
          }),
          ...style,
        }}
      >
        {icon}
      </Button>
    );
  }
};

const _ButtonWithIcon = React.forwardRef(ButtonWithIcon);
export { _ButtonWithIcon as ButtonWithIcon };
