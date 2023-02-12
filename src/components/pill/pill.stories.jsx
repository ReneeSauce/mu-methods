import { Pill } from "./pill";

export default {
  title: "Components/Pill",
  component: Pill,
  argTypes: {
    className: {
      options: ["", "fs-16px", "fs-18px"],
      control: { type: "radio" },
    },
    isCopiable: {
      options: [true, false],
      control: { type: "radio" },
    },
    text: { control: "text" },
    shape: {
      options: ["round", "square"],
      control: { type: "radio" },
    },
    opacity: {
      options: ["10", "20"],
      control: { type: "radio" },
    },
    textOpacity: {
      options: [100, "70"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Pill {...args} />;

export const Variants = Template.bind({});
Variants.args = {
  className: "",
  isCopiable: false,
  text: "text",
  opacity: "20",
  textOpacity: 100,
  shape: "square",
};
