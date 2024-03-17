import { vars } from "@join-world/themes";

import { ColorType, THEME, VARIANT } from "../types";

type StateLayerColors = {
  [key: string]: string;
};

const getColor = (
  theme: (typeof THEME)[keyof typeof THEME],
  isSolid: boolean,
): ColorType => {
  const stateLayer: StateLayerColors = vars.colors.mode.sys.color.stateLayer;

  if (isSolid) {
    return {
      enableColor:
        theme === THEME.NEUTRAL
          ? vars.colors.mode.sys.color.container.base.fill.light1
          : vars.colors.mode.sys.color.container[theme].fill.dark2,
      enableTextColor:
        theme === THEME.TERTIARY
          ? vars.colors.mode.sys.color.text.other.black
          : theme === THEME.NEUTRAL
            ? vars.colors.mode.sys.color.text.base.dark2
            : vars.colors.mode.sys.color.text.other.white,
      hoverColor: vars.colors.mode.sys.color.stateLayer.baseOp2,
      activeColor: vars.colors.mode.sys.color.stateLayer.baseOp4,
    };
  } else
    return {
      enableColor:
        theme === THEME.NEUTRAL
          ? vars.colors.mode.sys.color.container.base.border.dark1
          : vars.colors.mode.sys.color.container[theme].border.dark1,
      enableTextColor:
        theme === THEME.NEUTRAL
          ? vars.colors.mode.sys.color.text.base.dark2
          : vars.colors.mode.sys.color.text[theme].dark1,
      hoverColor:
        theme === THEME.NEUTRAL
          ? stateLayer.baseOp1
          : stateLayer[theme + "Op1"],
      activeColor:
        theme === THEME.NEUTRAL
          ? stateLayer.baseOp4
          : stateLayer[theme + "Op4"],
    };
};

export const getBtnColor = ({
  theme,
  variant,
}: {
  theme: (typeof THEME)[keyof typeof THEME];
  variant: (typeof VARIANT)[keyof typeof VARIANT];
}) => {
  switch (theme) {
    case THEME.PRIMARY:
    case THEME.INFO:
      return variant === VARIANT.SOLID
        ? getColor(THEME.PRIMARY, true)
        : getColor(THEME.PRIMARY, false);
    case THEME.SECONDARY:
    case THEME.SUCCESS:
      return variant === VARIANT.SOLID
        ? getColor(THEME.SECONDARY, true)
        : getColor(THEME.SECONDARY, false);
    case THEME.TERTIARY:
      return variant === VARIANT.SOLID
        ? getColor(THEME.TERTIARY, true)
        : getColor(THEME.TERTIARY, false);
    case THEME.WARNING:
      return variant === VARIANT.SOLID
        ? getColor(THEME.WARNING, true)
        : getColor(THEME.WARNING, false);
    case THEME.DANGER:
      return variant === VARIANT.SOLID
        ? getColor(THEME.DANGER, true)
        : getColor(THEME.DANGER, false);
    case THEME.NEUTRAL:
      return variant === VARIANT.SOLID
        ? getColor(THEME.NEUTRAL, true)
        : getColor(THEME.NEUTRAL, false);
    default:
      return getColor(THEME.PRIMARY, true);
  }
};
