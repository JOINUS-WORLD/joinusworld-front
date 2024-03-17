import { vars } from "@join-world/themes";
import { createVar, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const enableColorVariant = createVar();
export const enableTextColorVariant = createVar();
export const hoverColorVariant = createVar();
export const activeColorVariant = createVar();
export const flexibleWidthVariant = createVar();

export const buttonStyle = recipe({
  base: {
    margin: 0,
    padding: 0,
    border: 0,
    background: "none",

    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    cursor: "pointer",
    userSelect: "none",
    transition: "background-color 0.2s, color 0.2s, border-color 0.2s", //

    ...vars.sys.typescale.labelSb1,
    gap: "5px",
    position: "relative",

    // @ts-ignore
    "&:focus-visible": {
      outline: `2px solid ${vars.colors.mode.sys.color.other.focusline}`,
      border: `1px solid ${vars.colors.mode.sys.color.text.other.white}`,
    },
    "&[disabled]": {
      pointerEvents: "none",
      opacity: 0.6,
    },
    '&[data-loading="true"]': {
      pointerEvents: "none",
      "& span": {
        opacity: 0,
      },
    },
  },
  variants: {
    isFlexible: {
      true: {
        padding: "0 27px",
      },
      false: {
        width: flexibleWidthVariant,
      },
    },
    size: {
      s: {
        height: "32px",
      },
      m: {
        height: "40px",
      },
      l: {
        height: "48px",
      },
      xl: {
        height: "54px",
      },
    },
    variant: {
      solid: {
        backgroundColor: enableColorVariant,
        color: enableTextColorVariant,
        "&[disabled]": {
          backgroundColor: vars.colors.mode.sys.color.stateLayer.baseOp4,
          color: vars.colors.mode.sys.color.text.other.white,
        },
      },
      outline: {
        border: `1px solid ${enableColorVariant}`,
        color: enableTextColorVariant,
        "&[disabled]": {
          border: `1px solid ${vars.colors.mode.sys.color.stateLayer.baseOp4}`,
          color: vars.colors.mode.sys.color.stateLayer.baseOp4,
        },
      },
      ghost: {
        color: enableTextColorVariant,
        "&[disabled]": {
          color: vars.colors.mode.sys.color.stateLayer.baseOp4,
        },
      },
    },
  },
});

export const layerStyle = recipe({
  base: {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0,
    width: "100%",
    height: "100%",
    borderRadius: "8px",

    // @ts-ignore
    "&:hover:not([disabled])": {
      backgroundColor: hoverColorVariant,
      opacity: 1,
    },
    "&:active:not([disabled])": {
      backgroundColor: activeColorVariant,
      opacity: 1,
    },
  },
});

export const spanStyle = recipe({
  base: {
    zIndex: 1,
    pointerEvents: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
  },
});

const spinKeyframes = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spinnerStyle = recipe({
  base: {
    position: "absolute",
    animation: `${spinKeyframes} 0.45s linear infinite`,
    display: "inline-block",
    borderTop: "2px solid currentcolor",
    borderRight: "2px solid currentcolor",
    borderBottom: "2px solid transparent",
    borderLeft: "2px solid transparent",
    borderRadius: "50%",
    width: "12px",
    height: "12px",
  },
});
