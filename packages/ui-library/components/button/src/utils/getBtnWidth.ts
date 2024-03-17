export const getBtnWidth = (
  type: "default" | "icon" | "iconWithText",
  size: "s" | "m" | "l" | "xl",
): string => {
  const iconSizeMap = {
    s: "32px",
    m: "40px",
    l: "48px",
    xl: "54px",
  };

  const defaultSizeMap = {
    s: "64px",
    m: "70px",
    l: "76px",
    xl: "84px",
  };

  const iconWithTextSizeMap = {
    s: "86px",
    m: "92px",
    l: "98px",
    xl: "110px",
  };

  if (type === "icon") {
    return iconSizeMap[size];
  } else if (type === "iconWithText") {
    return iconWithTextSizeMap[size];
  } else {
    return defaultSizeMap[size];
  }
};
