import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import SpecifyReasonInput from "./SpecifyReasonInput";

const meta: Meta<typeof SpecifyReasonInput> = {
  title: "Components/SpecifyReasonInput",
  component: SpecifyReasonInput,
};

export default meta;

type Story = StoryObj<typeof SpecifyReasonInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return <SpecifyReasonInput value={value} onChange={setValue} />;
  },
};
