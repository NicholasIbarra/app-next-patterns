import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import { useMemo, useState } from "react";
import TimeSelect from "./TimeSelect";
import { SelectOption } from "./types";

const timeOptions: SelectOption[] = [
  { label: "12:00 AM", value: "00:00" },
  { label: "1:00 AM", value: "01:00" },
  { label: "2:00 AM", value: "02:00" },
  { label: "11:00 PM", value: "23:00" },
  { label: "11:59 PM", value: "23:59" },
];

const meta: Meta<typeof TimeSelect> = {
  title: "Components/TimeSelect",
  component: TimeSelect,
};

export default meta;

type Story = StoryObj<typeof TimeSelect>;

export const StartAndEnd: Story = {
  render: () => {
    const options = useMemo(
      () => [...timeOptions].sort((a, b) => a.value.localeCompare(b.value)),
      [],
    );
    const [startTime, setStartTime] = useState("01:00");
    const [endTime, setEndTime] = useState("23:00");

    return (
      <Stack spacing={2} maxWidth={400}>
        <TimeSelect label="Start Time" options={options} value={startTime} onChange={setStartTime} />
        <TimeSelect label="End Time" options={options} value={endTime} onChange={setEndTime} />
      </Stack>
    );
  },
};
