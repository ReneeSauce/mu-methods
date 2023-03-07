import { Button } from "./button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    buttonKind: {
      options: ["primary", "primary_red", "secondary", "tertiary", "textOnly"],
      control: { type: "radio" },
    },
    disabled: {
      control: "boolean",
    },
    dangerText: {
      control: "boolean",
    },
    leftIcon: {
      options: [
        "add",
        "alert",
        "arrowDown",
        "arrowLeft",
        "arrowRight",
        "copy",
        "close",
        "delete",
        "fMolecule",
        "home",
        "minus",
        "mu",
        "notification",
        "profile",
        "regenerate",
        "settings",
      ],
      control: { type: "select" },
    },
    rightIcon: {
      options: [
        "add",
        "alert",
        "arrowDown",
        "arrowLeft",
        "arrowRight",
        "copy",
        "close",
        "delete",
        "fMolecule",
        "home",
        "minus",
        "mu",
        "notification",
        "profile",
        "regenerate",
        "settings",
      ],
      control: { type: "select" },
    },
    onClick: {
      control: "text",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});
export const TextOnly = Template.bind({});
export const Red = Template.bind({});
export const Disabled = Template.bind({});
export const Icon = Template.bind({});
export const TextAndIcon = Template.bind({});

Primary.args = {
  size: "lg",
  buttonKind: "primary",
  children: "Save settings",
};

Secondary.args = {
  size: "lg",
  buttonKind: "secondary",
  children: "Connect existing Web3 wallet",
};

Tertiary.args = {
  size: "lg",
  buttonKind: "tertiary",
  children: "New Group",
  leftIcon: "add",
};

TextOnly.args = {
  size: "lg",
  buttonKind: "textOnly",
  children: "Log in",
};

Red.args = {
  size: "md",
  buttonKind: "primary_red",
  children: "Delete",
};

Disabled.args = {
  disabled: true,
  children: "Share seed phrase",
  size: "lg",
  buttonKind: "primary",
};

Icon.args = {
  size: "sm",
  buttonKind: "textOnly",
  leftIcon: "settings",
};

TextAndIcon.args = {
  size: "md",
  buttonKind: "secondary",
  children: "Regenerate",
  leftIcon: "regenerate",
};
