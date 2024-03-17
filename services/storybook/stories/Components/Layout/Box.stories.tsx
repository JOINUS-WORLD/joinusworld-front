import "@join-world/ui-components-layout/style.css";

import { vars } from "@join-world/themes";
import { Box as _Box } from "@join-world/ui-components-layout";

export default {
  title: "Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    padding: {
      options: Object.keys(vars.sys.spacing),
      control: "select",
    },
    background: {
      options: Object.keys(vars.colors.mode.ref.palette),
      control: "select",
    },
    boxShadow: {
      options: Object.keys(vars.sys.shadow),
      control: "select",
    },
  },
};

// 예시
export const BoxStory = {
  args: {
    as: "button",
    padding: "size9",
    background: "blue50",
    boxShadow: "level3",
  },
};
