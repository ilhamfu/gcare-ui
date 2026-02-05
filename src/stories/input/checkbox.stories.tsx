import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '../../components/input/checkbox.tsx';
import { fn } from 'storybook/test';
import { useState } from 'react';

const meta = {
  title: "Atom/Input/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true, onCheckedChange: fn()
  },
};
export const WithLabel: Story = {
  decorators: (Story) =>
    <label className='flex items-center gap-x-2 select-none'>
      <Story />
      This is label
    </label>,
  args: {
    checked: true
  },
};
