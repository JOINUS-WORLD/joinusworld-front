export type ButtonProps = {
  theme?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "neutral";
  variant?: "solid" | "outline" | "ghost";
  size?: "s" | "m" | "l" | "xl";
  isDisabled?: boolean;
  isLoading?: boolean;
  isFlexible?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonWithIconProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  icon?: React.ReactNode;
} & ButtonProps;

export type ColorType = {
  enableColor: string;
  enableTextColor: string;
  hoverColor: string;
  activeColor: string;
};

export const THEME = {
  PRIMARY: "primary",
  INFO: "info",
  SECONDARY: "secondary",
  SUCCESS: "success",
  TERTIARY: "tertiary",
  WARNING: "warning",
  DANGER: "danger",
  NEUTRAL: "neutral",
} as const;

export const VARIANT = {
  SOLID: "solid",
  GHOST: "ghost",
  OUTLINE: "outline",
} as const;
