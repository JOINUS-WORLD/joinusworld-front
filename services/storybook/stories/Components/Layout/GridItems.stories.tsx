import "@join-world/ui-components-layout/style.css";

import { Grid as _Grid, GridItem } from "@join-world/ui-components-layout";
import React from "react";

export default {
  title: "Components/Layout/Grid/GridItem",
  component: _Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    colEnd: {
      control: "number",
    },
    colStart: {
      control: "number",
    },
    colSpan: {
      control: "number",
    },
    rowStart: {
      control: "number",
    },
    rowEnd: {
      control: "number",
    },
    rowSpan: {
      control: "number",
    },
  },
};

export const GridStory = {
  args: {
    colStart: "",
    colSpan: "",
    colEnd: "",
    rowStart: "",
    rowSpan: "",
    rowEnd: "",
  },
  render: (args) => (
    <_Grid
      templateColumns={"repeat(3, 1fr)"}
      templateRows={"repeat(2, 1fr)"}
      gap={5}
      padding="size3"
      style={{
        width: "300px",
        height: "100px",
      }}
      boxShadow="level2"
    >
      <GridItem {...args} background={"yellow50"}>
        Test용 아이템
      </GridItem>
      <GridItem background={"orange50"}>-</GridItem>
      <GridItem background={"green50"}>-</GridItem>
      <GridItem background={"blue50"}>-</GridItem>
      <GridItem background={"gray50"}>-</GridItem>
      <GridItem background={"red50"}>-</GridItem>
    </_Grid>
  ),
};
