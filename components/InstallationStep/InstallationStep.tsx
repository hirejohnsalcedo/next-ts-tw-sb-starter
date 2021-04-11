import colors from "@/styles/colors";
import { Icon } from "../Icon/Icon";

export type InstallationStepProps = {
  /**
   * Title copy with highlighted color
   */
  titleHighlight: string;
  /**
   * Title copy with base color
   */
  titleBase: string;
  /**
   * Description copy
   */
  description: string;
};

export const InstallationStep = ({ titleHighlight = "", titleBase = "", description = "" }: InstallationStepProps) => {
  return (
    <div className="flex">
      <ActiveArrowIndicatorWrapper />
      <Card titleHighlight={titleHighlight} titleBase={titleBase} description={description} />
    </div>
  );
};

function ActiveArrowIndicatorWrapper() {
  return (
    <div className="w-42 items-center flex">
      <Icon type="activeArrowIndicator" fill={colors.primaryPurple} />
    </div>
  );
}

function Card({ titleBase, titleHighlight, description }) {
  return (
    <div className="relative border-2 w-480 h-216 border-primary-purple rounded-20">
      <div className="p-8">
        <div className="w-323 font-bold text-xl">
          <span className="text-primary-purple">{titleHighlight}</span>
          <span>{` ${titleBase}`}</span>
        </div>
        <div className="mt-4 text-base">
          <span>{description}</span>
        </div>
      </div>
      <StepBadge />
    </div>
  );
}

function StepBadge() {
  return (
    <>
      <div className="absolute -top-0.5 -right-0.5 pl-2 w-96 h-48 bg-primary-white border-primary-purple rounded-bl-20 border-2 flex items-center justify-center p-0 pb-2 pl-2">
        <span className="text-xl text-primary-purple font-bold">STEP 1</span>
      </div>
      <div className="absolute -top-0.5 -right-0.5 w-96 h-2 bg-primary-white" />
      <div className="absolute -top-0.5 -right-0.5 w-2 h-48 bg-primary-white" />
    </>
  );
}
