import { ComponentProps, ButtonHTMLAttributes } from "react";
import COLORS from "@/styles/colors";
import { Icon } from "../Icon/Icon";

export type ButtonProps = {
  /**
   * Button text content
   */
  label: string;
  /**
   * Button type based on UI spec
   * primary, secondary, tertiary
   */
  type: "primary";
  /**
   * Button icon appears at the left of text
   * based on Icon component
   */
  icon?: ComponentProps<typeof Icon>["type"];
  /**
   * Determines whether icon is placed
   * before or after the label
   */
  iconLocation: "before" | "after";
  /**
   * Use either dark or light theme
   */
  theme: "dark" | "light";
  /**
   * Disabled prop determines if button is pressable
   */
  disabled: ButtonHTMLAttributes<HTMLButtonElement>["disabled"];
};

const disabledClass = "disabled:bg-grey-5 disabled:shadow-none disabled:text-grey-1";
const darkThemeWrapper = "bg-primary-purple text-primary-white";
const lightThemeWrapper = "bg-primary-white text-primary-purple";

export const Button = ({
  label = "",
  icon,
  iconLocation = "before",
  disabled = false,
  type = "primary",
  theme = "dark",
}: ButtonProps) => {
  const flexDirection = iconLocation === "before" ? "flex-row" : "flex-row-reverse";
  const themeWrapper = theme === "dark" ? darkThemeWrapper : lightThemeWrapper;
  const baseClass = `flex ${flexDirection} ${themeWrapper} items-center px-10 py-4 text-xl leading-6 rounded-full shadow-sm font-bold`;
  const hoverClass = `hover:shadow-md ${
    theme === "dark" ? "hover:bg-primary-purple-semantic-2" : "hover:bg-primary-purple-semantic-4"
  }`;
  const focusClass = `focus:shadow-none focus:outline-none ${theme === "dark" ? "" : "focus:shadow-inner"}`;
  const wrapperClass = `${baseClass} ${hoverClass} ${focusClass} ${disabledClass}`;
  const iconMargin = iconLocation === "before" ? "mr-2" : "ml-2";
  const iconClass = `h-4 w-4 text-base leading-3 ${iconMargin}`;
  const iconFill = getIconFill({ disabled, theme });

  if (type === "primary") {
    return (
      <button type="button" aria-label={label} className={wrapperClass} disabled={disabled}>
        {!icon ? null : <Icon type={icon} className={iconClass} fill={iconFill} />}
        {label}
      </button>
    );
  }

  // TODO: handle secondary and tertiary variants
  return null;
};

function getIconFill({ disabled, theme }: Pick<ButtonProps, "disabled" | "theme">) {
  if (disabled) {
    return COLORS.grey1;
  }

  if (theme === "dark") {
    return COLORS.primaryWhite;
  }

  return COLORS.primaryPurple;
}
