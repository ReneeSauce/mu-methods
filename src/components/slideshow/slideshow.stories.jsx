import React from "react";

import { SlideShow } from "./slideshow";

export default {
  title: "Components/SlideShow",
  component: SlideShow,
  argTypes: {
    variant: {
      options: ["primary", "danger", "success"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <SlideShow {...args} />;

export const Variants = Template.bind({});
Variants.args = {
  children: "Hello",
};
