/**
 * Camera Storybook Component
 * @author [Colburn Sanders](https://github.com/colburncodes)
 */

import { QRCodeScanner } from "./qr-reader";

export default {
  title: "QRCodeScanner",
  component: QRCodeScanner,
};

const Template = (args) => <QRCodeScanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  delay: 300,
  facingMode: "user",
};
