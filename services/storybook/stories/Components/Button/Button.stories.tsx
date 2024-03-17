/* eslint-disable react-hooks/rules-of-hooks */
import "@join-world/ui-components-button/style.css";
import "@join-world/ui-components-layout/style.css";

import { Button as _Button } from "@join-world/ui-components-button";
import React from "react";

export default {
  title: "Components/Button/Default",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["s", "m", "l", "xl"],
      control: "inline-radio",
      table: {
        defaultValue: { summary: "s" },
      },
    },
    theme: {
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
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "inline-radio",
      table: {
        defaultValue: { summary: "solid" },
      },
    },
  },
};

export const PrimarySolidS = {
  args: {
    size: "s",
    theme: "primary",
    variant: "solid",
    children: "Button",
    isLoading: false,
    isDisabled: false,
    isFlexible: false,
  },
};

export const SecondaryOutlineM = {
  args: {
    size: "m",
    theme: "secondary",
    variant: "outline",
    children: "Button",
    isDisabled: false,
    isLoading: false,
    isFlexible: false,
  },
};

export const TertiaryGhostL = {
  args: {
    size: "l",
    theme: "tertiary",
    variant: "ghost",
    children: "Button",
    isDisabled: false,
    isLoading: false,
    isFlexible: false,
  },
};

export const WarningSolidFlexibleXL = {
  args: {
    size: "xl",
    theme: "warning",
    variant: "solid",
    children: "Cats are dangerously adorable to the heart..",
    isDisabled: false,
    isLoading: false,
    isFlexible: true,
  },
};

export const loadingIconM = {
  args: {
    size: "l",
    theme: "danger",
    variant: "outline",
    children: "Button",
    isLoading: true,
    isDisabled: false,
    isFlexible: false,
  },
};

export const onClickButton = {
  render: () => {
    return (
      <_Button isFlexible onClick={() => console.log("click! 🐱")}>
        Click to console log something
      </_Button>
    );
  },
};
