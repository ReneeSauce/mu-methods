import { Avatar } from "./avatar";

/**
 * Avatar Storybook Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    shape: {
      options: ["round", "square"],
      control: { type: "radio" },
    },
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
    src: { control: "text" },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Variants = Template.bind({});
Variants.args = {
  shape: "round",
  size: "md",
  src: "https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
};
