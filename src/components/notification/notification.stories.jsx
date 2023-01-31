import { Notification } from "./notification";

/**
 * Notification Storybook Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

export default {
  title: "Components/Notification",
  component: Notification,
  argTypes: {
    src: { control: "text" },
    title: { control: "text" },
    summary: { control: "text" },
    status: {
      options: ["read", "unread"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Notification {...args} />;

export const Variants = Template.bind({});
Variants.args = {
  src: "https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  title: "Coinbase",
  summary: "Sign transaction for 0.008 ETH",
  status: "unread",
};
