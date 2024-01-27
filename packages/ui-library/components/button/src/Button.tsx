import { vars } from "@join-world/themes";
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

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const { buttonProps } = useButton(props);

  // default
  const {
    state = "primary",
    flexible = true,
    size = "s",
    variant = "solid",
    leftIcon,
    rightIcon,
    isLoading,
    children,
    style,
  } = props;

  let enableColor;
  let enableTextColor = vars.colors.mode.sys.color.text.other.white;
  let hoverColor = vars.colors.mode.sys.color.stateLayer.baseOp2;
  let activeColor = vars.colors.mode.sys.color.stateLayer.baseOp4;

  switch (state) {
    case "primary":
    case "info":
      enableColor = vars.colors.mode.sys.color.container.primary.fill.dark2;
      switch (variant) {
        case "ghost":
        case "outline":
          hoverColor = vars.colors.mode.sys.color.stateLayer.primaryOp1;
          activeColor = vars.colors.mode.sys.color.stateLayer.primaryOp4;
          break;
      }
      break;
    case "secondary":
    case "success":
      enableColor = vars.colors.mode.sys.color.container.secondary.fill.dark2;
      switch (variant) {
        case "ghost":
        case "outline":
          hoverColor = vars.colors.mode.sys.color.stateLayer.secondaryOp1;
          activeColor = vars.colors.mode.sys.color.stateLayer.secondaryOp4;
          break;
      }
      break;
    case "tertiary":
      enableColor = vars.colors.mode.sys.color.container.tertiary.fill.dark2;
      enableTextColor = vars.colors.mode.sys.color.text.other.black;
      switch (variant) {
        case "ghost":
        case "outline":
          hoverColor = vars.colors.mode.sys.color.stateLayer.tertiaryOp1;
          activeColor = vars.colors.mode.sys.color.stateLayer.tertiaryOp4;
          break;
      }
      break;
    case "warning":
      enableColor = vars.colors.mode.sys.color.container.warning.fill.dark2;
      switch (variant) {
        case "ghost":
        case "outline":
          hoverColor = vars.colors.mode.sys.color.stateLayer.warningOp1;
          activeColor = vars.colors.mode.sys.color.stateLayer.warningOp4;
          break;
      }
      break;
    case "danger":
      enableColor = vars.colors.mode.sys.color.container.danger.fill.dark2;
      switch (variant) {
        case "ghost":
        case "outline":
          hoverColor = vars.colors.mode.sys.color.stateLayer.dangerOp1;
          activeColor = vars.colors.mode.sys.color.stateLayer.dangerOp4;
          break;
      }
      break;
    case "neutral":
      enableColor = vars.colors.mode.sys.color.container.base.fill.light1;
      enableTextColor = vars.colors.mode.sys.color.text.other.black;
      break;
    default:
      enableColor = vars.colors.mode.sys.color.container.primary.fill.dark2;
  }

  const btnWidth = leftIcon || rightIcon ? "86px" : "64px";

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={clsx([
        buttonStyle({
          flexible,
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
      {leftIcon && <span className={spanStyle()}>{leftIcon}</span>}
      <span className={spanStyle()}>{children}</span>
      {rightIcon && <span className={spanStyle()}>{rightIcon}</span>}
      <div className={layerStyle()} />
    </button>
  );
};

const _Button = React.forwardRef(Button);
export { _Button as Button };
