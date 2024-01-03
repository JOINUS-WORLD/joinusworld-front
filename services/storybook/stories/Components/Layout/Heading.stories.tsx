import "@join-world/ui-components-layout/style.css";

import { vars } from "@join-world/themes";
import { Heading as _Heading } from "@join-world/ui-components-layout";
export default {
  title: "Components/Layout/Typography/Heading",
  component: _Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: "select",
    },
    fontSize: {
      options: Object.keys(vars.sys.typescale),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.mode.ref.palette),
      control: "select",
    },
  },
};

export const Heading = {
  args: {
    as: "h1",
    children: "JoinUs World",
    fontSize: "headlineB1",
    color: "black",
  },
};
