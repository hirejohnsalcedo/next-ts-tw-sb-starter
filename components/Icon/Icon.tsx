import COLORS from "@/styles/colors";
import { Heart } from "./assets/Heart";
import { ActiveArrowIndicator } from "./assets/ActiveArrowIndicator";

type IconEnum = "heart" | "activeArrowIndicator";

export interface IconProps {
  /**
   * Pick from a predefined set of icons
   * e.g. "heart"
   */
  type: IconEnum;
  /**
   * CSS class name
   */
  className?: string;
  /**
   * fill color
   */
  fill: string;
}

export const Icon = ({ type, className, fill = COLORS.primaryWhite }: IconProps) => {
  const SelectedIcon = iconHashMap[type];

  return <SelectedIcon className={className} fill={fill} />;
};

const iconHashMap = {
  heart: Heart,
  activeArrowIndicator: ActiveArrowIndicator,
};
