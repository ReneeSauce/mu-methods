import { Pill } from "./pill";

export default {
  title: "Components/Pill",
  component: Pill,
  argTypes: {
    isCopiable: {
      options: ["true", "false"],
      control: { type: "radio" },
    },
    text: { control: "text" },
    shape: {
      options: ["round", "square"],
      control: { type: "radio" },
    },
    opacity: {
      options: ["10", "25"],
      control: { type: "radio" },
    },
    textOpacity: {
      options: ["100", "75"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Pill {...args} />;

export const Variants = Template.bind({});
Variants.args = {
  isCopiable: "false",
  text: "text",
  opacity: "25",
  textOpacity: "100",
};
