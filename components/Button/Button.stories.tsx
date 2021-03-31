import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    icon: {
      control: {
        type: "inline-radio",
        options: [null, "heart"],
      },
    },
    iconLocation: {
      control: {
        type: "inline-radio",
        options: ["before", "after"],
      },
    },
    theme: {
      control: {
        type: "inline-radio",
        options: ["dark", "light"],
      },
    },
    disabled: {
      control: "boolean",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  label: "CTA",
  disabled: false,
};
