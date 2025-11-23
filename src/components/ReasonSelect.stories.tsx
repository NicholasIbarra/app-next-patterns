import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ReasonSelect from "./ReasonSelect";
import { SelectOption } from "./types";

const options: SelectOption[] = [
  { label: "Daycare child problems", value: "daycare" },
  { label: "Medical leave", value: "medical" },
  { label: "Staff meeting", value: "meeting" },
];

const meta: Meta<typeof ReasonSelect> = {
  title: "Components/ReasonSelect",
  component: ReasonSelect,
};

export default meta;

type Story = StoryObj<typeof ReasonSelect>;

export const Default: Story = {
  render: () => {
    const [reason, setReason] = useState(options[0].value);

    return <ReasonSelect options={options} value={reason} onChange={setReason} />;
  },
};
