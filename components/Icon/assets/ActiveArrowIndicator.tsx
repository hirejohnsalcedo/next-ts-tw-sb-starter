import colors from "@/styles/colors";

const TITLE_ID = "TITLE_ID";

interface Props {
  className?: string;
  fill?: string;
}

export const ActiveArrowIndicator = ({ className, fill = colors.primaryPurple }: Props) => (
  <svg width="18" height="21" viewBox="0 0 18 21" className={className} aria-labelledby={TITLE_ID} role="img">
    <title id={TITLE_ID}>active arrow indicator icon</title>
    <path
      d="M17 9.02015C18.3333 9.78995 18.3333 11.7144 17 12.4842L3.5 20.2785C2.16667 21.0483 0.499999 20.086 0.499999 18.5464L0.5 2.95797C0.5 1.41837 2.16667 0.456117 3.5 1.22592L17 9.02015Z"
      fill={fill}
    />
  </svg>
);
