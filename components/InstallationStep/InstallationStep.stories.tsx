import { Story, Meta } from "@storybook/react";
import { InstallationStep, InstallationStepProps } from "./InstallationStep";

const PLACEHOLDER_TITLE_HIGHLIGHT = "This is the title";
const PLACEHOLDER_TITLE_BASE = "and most likely ended up in two lines.";
const PLACEHOLDER_DESCRIPTION =
  "Detailed explanation. This explains the step in an in-depth manner and is very straightforward and understandable, and also has the tendency to end in three lines or more.";

export default {
  title: "Components/InstallationStep",
  component: InstallationStep,
  argTypes: {},
} as Meta;

const Template: Story<InstallationStepProps> = (args) => {
  return <InstallationStep {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  titleHighlight: PLACEHOLDER_TITLE_HIGHLIGHT,
  titleBase: PLACEHOLDER_TITLE_BASE,
  description: PLACEHOLDER_DESCRIPTION,
};
