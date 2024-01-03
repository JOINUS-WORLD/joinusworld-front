import "@join-world/ui-components-layout/style.css";

import { Box as _Box } from "@join-world/ui-components-layout";

export default {
  title: "Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// 예시
export const BoxStory = {
  args: {
    as: "button",
    padding: "size9",
    color: "blue",
    background: "blue900",
    width: "100px",
    height: "50px",
    boxShadow: "level3",
  },
};
