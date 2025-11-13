import type { Meta, StoryObj } from "@storybook/react";

import TextInputField from "./TextInputField";

const meta: Meta<typeof TextInputField> = {
  title: "UI/TextInputField",
  component: TextInputField,
  args: {
    label: "Email",
    placeholder: "name@example.com",
  },
  parameters: {
    docs: {
      description: {
        component:
          "A full-width text field that forwards all of MUI's TextField props for flexible usage.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextInputField>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    helper: "We'll never share your email.",
  },
};

export const Error: Story = {
  args: {
    error: true,
    helper: "Please provide a valid email address.",
  },
};
