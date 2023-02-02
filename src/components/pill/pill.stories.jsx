import { Pill } from "./pill";

export default {
  title: "Components/Pill",
  component: Pill,
  argTypes: {
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
  isCopiable: false,
  text: "text",
  opacity: "20",
  textOpacity: 100,
  shape: "square",
};
