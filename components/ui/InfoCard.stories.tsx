import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import InfoCard from "./InfoCard";

const meta: Meta<typeof InfoCard> = {
  title: "UI/InfoCard",
  component: InfoCard,
  args: {
    title: "Getting started with Storybook",
    subtitle: "Interactive documentation",
    body: "Use this card to highlight helpful resources or announcements across your product.",
  },
  parameters: {
    docs: {
      description: {
        component: "A simple informational card with an optional primary action button.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InfoCard>;

export const Static: Story = {};

export const WithAction: Story = {
  args: {
    actionLabel: "Explore docs",
    onAction: fn(),
  },
};
