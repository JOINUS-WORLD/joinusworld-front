import "@join-world/ui-components-layout/style.css";

import { vars } from "@join-world/themes";
import { Grid as _Grid, GridItem } from "@join-world/ui-components-layout";
import React from "react";

export default {
  title: "Components/Layout/Grid/Grid",
  component: _Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    padding: {
      options: Object.keys(vars.sys.spacing),
      control: "select",
    },
    boxShadow: {
      options: Object.keys(vars.sys.shadow),
      control: "select",
    },
  },
};

export const GridStory = {
  args: {
    templateColumns: "repeat(2, 1fr)",
    templateRows: "repeat(3, 1fr)",
    gap: 0,
    autoColumns: "",
    autoFlow: "",
    autoRows: "",
    columnGap: "",
    rowGap: "",
    templateAreas: "",
    column: "",
    padding: "size3",
    style: {
      width: "300px",
      height: "100px",
    },
    boxShadow: "level2",
    as: "div",
  },
  render: (args) => (
    <_Grid {...args}>
      <GridItem background={"orange50"}>1</GridItem>
      <GridItem background={"green50"}>2</GridItem>
      <GridItem background={"yellow50"}>3</GridItem>
      <GridItem background={"blue50"}>4</GridItem>
      <GridItem background={"gray50"}>5</GridItem>
      <GridItem background={"red50"}>6</GridItem>
    </_Grid>
  ),
};
