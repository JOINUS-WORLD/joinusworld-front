import "@join-world/ui-components-layout/style.css";

import { vars } from "@join-world/themes";
import { Flex as _Flex } from "@join-world/ui-components-layout";
import React from "react";

export default {
  title: "Components/Layout/Flex",
  component: _Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      options: ["row", "column"],
      control: "radio",
    },
    padding: {
      options: Object.keys(vars.sys.spacing),
      control: "select",
    },
    boxShadow: {
      options: Object.keys(vars.sys.shadow),
      control: "select",
    },
    justify: {
      options: [
        "space-between",
        "center",
        "flex-start",
        "flex-end",
        "space-around",
        "space-evenly",
        "end",
        "normal",
        "left",
        "right",
        "stretch",
      ],
      control: "select",
    },
    align: {
      options: [
        "-moz-initial",
        "inherit",
        "revert",
        "revert-layer",
        "unset",
        "normal",
        "stretch",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "start",
        "baseline",
        "self-end",
        "self-start",
      ],
      control: "select",
    },
  },
};

export const FlexStory = {
  args: {
    direction: "row",
    justify: "space-between",
    align: "",
    grow: "revert",
    padding: "size3",
    style: {
      width: "300px",
      height: "100px",
    },
    boxShadow: "level2",
    as: "div",
  },
  render: (args) => (
    <_Flex {...args}>
      <div>테스트</div>
      <div>해보세요</div>
    </_Flex>
  ),
};
