import { vars } from "@join-world/themes";
import { CSSProperties } from "@vanilla-extract/css";

import { AsElementProps, StyleProps } from "../core/types";

export type TextProps = AsElementProps &
  StyleProps & {
    fontSize: keyof typeof vars.sys.typescale;
    align?: CSSProperties["textAlign"];
    casing?: CSSProperties["textTransform"];
    decoration?: CSSProperties["textDecoration"];
  };

export type HeadingProps = StyleProps &
  AsElementProps & {
    fontSize: keyof typeof vars.sys.typescale;
  };
