import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ApplyToRelatedDaysCheckbox from "./ApplyToRelatedDaysCheckbox";

const meta: Meta<typeof ApplyToRelatedDaysCheckbox> = {
  title: "Components/ApplyToRelatedDaysCheckbox",
  component: ApplyToRelatedDaysCheckbox,
};

export default meta;

type Story = StoryObj<typeof ApplyToRelatedDaysCheckbox>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);

    return <ApplyToRelatedDaysCheckbox checked={checked} onChange={setChecked} />;
  },
};
