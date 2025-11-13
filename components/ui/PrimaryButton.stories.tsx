import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import PrimaryButton from "./PrimaryButton";

const meta: Meta<typeof PrimaryButton> = {
  title: "UI/PrimaryButton",
  component: PrimaryButton,
  args: {
    label: "Primary action",
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        component:
          "A convenient wrapper around MUI's contained button for showcasing primary actions.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    startIcon: "🚀",
    label: "Launch",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled",
  },
};
