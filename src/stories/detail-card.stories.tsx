import type { Meta, StoryObj } from '@storybook/react';

import DetailCard from '../components/detail-card.tsx';

const meta = {
  component: DetailCard,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["lg", "md", "sm", "xs", "xxs"]
    },

  }
} satisfies Meta<typeof DetailCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "md",
    label: "this is test",
    children: "Test 2"
  },
};
