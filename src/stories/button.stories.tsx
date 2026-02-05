import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/button';

const meta = {
  title: "Atom/Button/Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["lg", "md", "sm"]
    },
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "tertiary",
        "outline",
        "outline-danger",
        "ghost",
        "text",
      ]
    }
  }
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Hello"
  },
};
