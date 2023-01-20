import React from 'react';

import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'danger', 'success'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Variants = Template.bind({});
Variants.args = {
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: 'Button',
};