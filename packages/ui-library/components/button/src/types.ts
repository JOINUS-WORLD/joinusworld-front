export type ButtonProps = {
  state?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "neutral";
  variant?: "solid" | "outline" | "ghost";
  flexible?: boolean;
  size?: "s" | "m" | "l" | "xl";
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
