import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import OfficeMultiSelect from "./OfficeMultiSelect";
import { SelectOption } from "./types";

const options: SelectOption[] = [
  { label: "Advanced Health & Wellness", value: "advanced" },
  { label: "North Clinic", value: "north" },
  { label: "Downtown Pediatrics", value: "downtown" },
];

const meta: Meta<typeof OfficeMultiSelect> = {
  title: "Components/OfficeMultiSelect",
  component: OfficeMultiSelect,
};

export default meta;

type Story = StoryObj<typeof OfficeMultiSelect>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<SelectOption[]>([options[0]]);

    return (
      <OfficeMultiSelect
        options={options}
        value={value}
        onChange={setValue}
        onClear={() => setValue([])}
      />
    );
  },
};
