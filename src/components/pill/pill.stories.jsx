import { Pill } from "./pill";

export default {
  title: "Components/Pill",
  component: Pill,
  argTypes: {
    isCopiable: {
      options: ["true", "false"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Pill {...args} />;

export const Variants = Template.bind({});
Variants.args = {
  isCopiable: "false",
};
