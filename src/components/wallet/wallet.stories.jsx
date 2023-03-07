import { Wallet } from "./wallet";

/**
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 */

export default {
  title: "Components/Wallet",
  component: Wallet,
  argTypes: {
    src: { control: "text" },
    alt: { contorl: "text" },
    wallet: { control: "text" },
    name: { control: "text" },
    id: { control: "text" },
  },
};

const Template = (args) => <Wallet {...args} />;

export const Variants = Template.bind({});
Variants.args = {
  src: "https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  alt: "wallet avatar",
  wallet: "METAMASK",
  name: "MyMetamaskAkk",
  id: "1234567",
};
