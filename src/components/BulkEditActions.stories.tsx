import type { Meta, StoryObj } from "@storybook/react";
import BulkEditActions from "./BulkEditActions";

const meta: Meta<typeof BulkEditActions> = {
  title: "Components/BulkEditActions",
  component: BulkEditActions,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BulkEditActions>;

export const Default: Story = {
  args: {
    onClear: () => undefined,
    onDelete: () => undefined,
    onCancel: () => undefined,
    onSave: () => undefined,
  },
};
