import "@join-world/ui-components-layout/style.css";

import { vars } from "@join-world/themes";
import { Text as _Text } from "@join-world/ui-components-layout";

export default {
  title: "Components/Layout/Typography/Text",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["p", "span", "div", "b", "i", "u", "strong", "em"],
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
    background: {
      options: Object.keys(vars.colors.mode.ref.palette),
      control: "select",
    },
  },
};

export const Text = {
  args: {
    as: "p",
    children:
      "This project focuses on renewing 'Joinus World', a platform that is a multilingual question and answer website that covers a broad spectrum of topics related to Korea and its neighboring regions. It operates under the guidance of a non-profit network known as JOINUS FOUNDATION or JOINUS KOREA.",
    fontSize: "bodyM1",
    color: "gray700",
    background: "white",
  },
};
