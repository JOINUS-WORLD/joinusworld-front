/* eslint-disable react-hooks/rules-of-hooks */
import "@join-world/ui-components-button/style.css";
import "@join-world/ui-components-layout/style.css";

import { Button as _Button } from "@join-world/ui-components-button";
import React from "react";

export default {
  title: "Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["s", "m", "l", "xl"],
      control: "inline-radio",
    },
    state: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "danger",
        "neutral",
      ],
      control: "inline-radio",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "inline-radio",
    },
  },
};

export const PrimarySolidS = {
  args: {
    size: "s",
    state: "primary",
    variant: "solid",
    children: "Button",
    isLoading: false,
    isDisabled: false,
    flexible: false,
  },
};

export const SecondaryOutlineM = {
  args: {
    size: "m",
    state: "secondary",
    variant: "outline",
    children: "Button",
    isDisabled: false,
    isLoading: false,
    flexible: false,
  },
};

export const TertiaryGhostL = {
  args: {
    size: "l",
    state: "tertiary",
    variant: "ghost",
    children: "Button",
    isDisabled: false,
    isLoading: false,
    flexible: false,
  },
};

export const WarningSolidFlexibleXL = {
  args: {
    size: "xl",
    state: "warning",
    variant: "solid",
    children: "Cats are dangerously adorable to the heart..",
    isDisabled: false,
    isLoading: false,
    flexible: true,
  },
};

export const DangerOutlineWithRightIconM = {
  args: {
    size: "m",
    state: "danger",
    variant: "outline",
    children: "Button",
    isLoading: false,
    isDisabled: false,
    flexible: false,
    rightIcon: "❌",
  },
};

export const onClickButton = {
  render: () => {
    return (
      <_Button onClick={() => console.log("click! 🐱")}>
        Click to console log something
      </_Button>
    );
  },
};
