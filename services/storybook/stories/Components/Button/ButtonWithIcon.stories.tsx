/* eslint-disable react-hooks/rules-of-hooks */
import "@join-world/ui-components-button/style.css";
import "@join-world/ui-components-layout/style.css";

import { ButtonWithIcon as _ButtonWithIcon } from "@join-world/ui-components-button";
import React from "react";

export default {
  title: "Components/Button/ButtonWithIcon",
  component: _ButtonWithIcon,
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
    icon: {
      control: "text",
      description: "Select either icon or rightIcon with children",
    },
    rightIcon: {
      control: "text",
      description: "leftIcon functions the same way",
    },
    children: {
      control: "text",
    },
  },
};

export const onlyIconTertiaryS = {
  args: {
    size: "s",
    theme: "tertiary",
    isLoading: false,
    isDisabled: false,
    icon: "🐱",
  },
};

export const rightIconSecondarySolidM = {
  args: {
    size: "m",
    theme: "secondary",
    variant: "solid",
    children: "Button",
    isDisabled: false,
    isLoading: false,
    isFlexible: false,
    rightIcon: "✨",
  },
};

export const leftIconNeutralSolidL = {
  args: {
    size: "l",
    theme: "neutral",
    variant: "outline",
    children: "Button",
    isDisabled: false,
    isLoading: false,
    isFlexible: false,
    leftIcon: "☑️",
  },
};

export const leftIconPrimaryOutLineFlexibleXL = {
  args: {
    size: "xl",
    theme: "primary",
    variant: "outline",
    children: "Butttttonnnn..........",
    isDisabled: false,
    isLoading: false,
    isFlexible: true,
    leftIcon: "🤍",
  },
};

export const onClickButtonS = {
  render: () => {
    return (
      <_ButtonWithIcon
        theme="warning"
        variant="ghost"
        rightIcon="📌"
        isFlexible
        onClick={() =>
          console.log("Cats are dangerously adorable to the heart.. 🐱")
        }
      >
        Click to check a warning msg on console
      </_ButtonWithIcon>
    );
  },
};
