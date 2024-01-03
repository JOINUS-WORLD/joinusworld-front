import { vars } from "@join-world/themes";

import { StyleSprinkles } from "./style.css";

type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

export type AsElementProps = AsProps & ElementProps;

export type ColorProps = {
  color?: keyof typeof vars.colors.mode.ref.palette;
  background?: keyof typeof vars.colors.mode.ref.palette;
};

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
