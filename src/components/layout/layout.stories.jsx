import { Layout } from "./layout";

/**
 * Step Storybook Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 */

export default {
  title: "Components/Layout",
  component: Layout,
  argTypes: {
    header: { header },
    body: { body },
    footer: { footer },
  },
};

const Template = ({ ...args }) => {
  return <Layout {...args} />;
};
