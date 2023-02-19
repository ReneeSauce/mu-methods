import { Button } from "./button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    bgColor: {
      options: ["primary", "danger"],
      control: { type: "radio" },
    },
    kind: {
      options: ["PRIMARY", "SECONDARY", "TERTIARY"],
      control: { type: "radio" },
    },
    disabled: {
      control: "boolean",
    },
    danger: {
      control: "boolean",
    },
    leftIcon: {
      control: "text",
    },
    rightIcon: {
      control: "text",
    },
    onClick: {
      control: "text",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Variants = Template.bind({});
Variants.args = {
  children: "Decline",
  disabled: false,
  danger: false,
  bgColor: "positive",
};
