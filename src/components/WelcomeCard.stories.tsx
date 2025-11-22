import type { Meta, StoryObj } from "@storybook/react";
import WelcomeCard from "./WelcomeCard";

const meta: Meta<typeof WelcomeCard> = {
  title: "Components/WelcomeCard",
  component: WelcomeCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof WelcomeCard>;

export const Default: Story = {};
