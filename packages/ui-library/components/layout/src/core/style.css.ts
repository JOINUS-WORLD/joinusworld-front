// .css.ts에서 작성하는 모든 스타일 코드들은 컴파일 타임에서 빌드됩니다.
import { vars } from "@join-world/themes";
import { style } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

export const BaseStyle = style({
  padding: 0,
  margin: 0,

  // @ts-ignore
  "&:focus-visible": {
    boxShadow: vars.sys.shadow.level1, // temporary
  },
});

const MarginAndPaddingProperties = defineProperties({
  properties: {
    marginTop: vars.sys.spacing,
    marginRight: vars.sys.spacing,
    marginBottom: vars.sys.spacing,
    marginLeft: vars.sys.spacing,
    paddingTop: vars.sys.spacing,
    paddingRight: vars.sys.spacing,
    paddingBottom: vars.sys.spacing,
    paddingLeft: vars.sys.spacing,
  },
  shorthands: {
    margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

const BoxShadowStyleProps = defineProperties({
  properties: {
    boxShadow: vars.sys.shadow,
  },
});

export const StyleSprinkles = createSprinkles(
  MarginAndPaddingProperties,
  BoxShadowStyleProps,
);
