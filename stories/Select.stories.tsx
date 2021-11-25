import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select, Props } from '../src/Select';

const meta: Meta = {
  title: 'Select',
  component: Select
}

export default meta;

const Template:Story<Props> = (args) => <Select {...args} />

export const Primary = Template.bind({});
Primary.args = { children:'This is a primary select' }

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, children: 'Secondary!' }