import { vars } from "@join-world/themes";
import { recipe } from "@vanilla-extract/recipes";

export const textStyle = recipe({
  variants: {
    fontSize: {
      ...vars.sys.typescale,
    },
    defaultVariants: {
      fontSize: "labelR2",
    },
  },
});

export const headingStyle = recipe({
  variants: {
    fontSize: {
      ...vars.sys.typescale,
    },
    defaultVariants: {
      fontSize: "headlineB1",
    },
  },
});
