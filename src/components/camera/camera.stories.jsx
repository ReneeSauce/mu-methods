/**
 * Camera Storybook Component
 * @author [Colburn Sanders](https://github.com/colburncodes)
 */

import { Camera } from "./Camera";

export default {
  title: "Camera",
  component: Camera,
};

const Template = (args) => <Camera {...args} />;

export const Default = Template.bind({});
Default.args = {
  delay: 300,
  facingMode: "environment",
};
