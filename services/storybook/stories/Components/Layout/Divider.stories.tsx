import "@join-world/ui-components-layout/style.css";

import { Box, Divider as _Divider } from "@join-world/ui-components-layout";
import React from "react";

export default {
  title: "Components/Layout/Divider",
  component: _Divider,
  decorators: [
    (Story) => (
      <Box style={{ width: "400px", height: "100px" }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "radio",
    },
    variant: {
      options: ["solid", "dashed"],
      control: "radio",
    },
  },
};

export const Divider = {
  args: {
    size: 1,
    variant: "solid",
    orientation: "horizontal",
  },
};
