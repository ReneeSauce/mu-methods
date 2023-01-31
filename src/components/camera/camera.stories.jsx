import { Camera } from "./camera";

/**
 * Camera Storybook Component
 * @author [Colburn Sanders](https://github.com/colburncodes)
 */

export default {
  title: "Components/Camera",
  component: Camera,
  argTypes: {
    title: { control: "text" },
    caption: { control: "text" },
    subTitle: { control: "text" },
    inputText: { control: "text", type: "input" },
    buttonText: { control: "text", type: "submit" },
  },
};

export const Template = (args) => <Camera {...args} />;

export const Variants = Template.bind({});

Variants.args = {
  title: "Adding account",
  caption: "Step 1 / 3",
  subTitle: "Scan QR code to connect your existing Web3 wallet",
  inputText: "Or enter public key manually",
  buttonText: "Continue",
};
