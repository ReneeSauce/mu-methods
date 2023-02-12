import { Step } from "./step";

/**
 * Step Storybook Component
 * @author [K. Ehrenclou](https://github.com/kehrenclou)
 */

export default {
  title: "Components/Step/Step",
  component: Step,
  argTypes: {},
};

const Template = (args) => <Step {...args} />;
