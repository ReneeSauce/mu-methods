import React from "react";

import { SlideShow } from "./slideshow";

export default {
  title: "Components/SlideShow",
  component: SlideShow,
  argTypes: {
    src: { control: "text" },
  },
};

// const Template = (args) => <SlideShow {...args} />;

// export const Variants = Template.bind({});

// Variants.args = {
//   children: "Hello",
// };

export const PrimarySlideshow = (args) => {
  <SlideShow {...args}>
    <SlideShow.Image src={args.src} />
  </SlideShow>;
};

PrimarySlideshow.args = {
  src: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
};
