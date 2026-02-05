import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '../../components/input/checkbox.tsx';
import { fn } from 'storybook/test';
import { useState } from 'react';

const meta = {
  title: "Input/Checkbox",
  component: Checkbox,
  decorators: (Story) => {
    const [checked, setChecked] = useState(false);
    return <Story args={{
      checked,
      onCheckedChange: (e) => setChecked(!!e)
    }}></Story>
  }

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
      This is abel
    </label>,
  args: {
    checked: true
  },
};
