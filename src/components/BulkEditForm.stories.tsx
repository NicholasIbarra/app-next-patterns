import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useMemo, useState } from "react";
import BulkEditForm, { SelectOption } from "./BulkEditForm";

const officeOptions: SelectOption[] = [
  { label: "Advanced Health & Wellness", value: "advanced" },
  { label: "North Clinic", value: "north" },
  { label: "Downtown Pediatrics", value: "downtown" },
];

const reasonOptions: SelectOption[] = [
  { label: "Daycare child problems", value: "daycare" },
  { label: "Medical leave", value: "medical" },
  { label: "Staff meeting", value: "meeting" },
];

const timeOptions: SelectOption[] = [
  { label: "12:00 AM", value: "00:00" },
  { label: "1:00 AM", value: "01:00" },
  { label: "2:00 AM", value: "02:00" },
  { label: "11:00 PM", value: "23:00" },
  { label: "11:59 PM", value: "23:59" },
];

const meta: Meta<typeof BulkEditForm> = {
  title: "Components/BulkEditForm",
  component: BulkEditForm,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BulkEditForm>;

export const Default: Story = {
  render: () => {
    const [selectedOffices, setSelectedOffices] = useState<SelectOption[]>([officeOptions[0]]);
    const [startTime, setStartTime] = useState("01:00");
    const [endTime, setEndTime] = useState("23:00");
    const [reason, setReason] = useState("daycare");
    const [specifyReason, setSpecifyReason] = useState("");
    const [applyAll, setApplyAll] = useState(true);

    const sortedTimeOptions = useMemo(
      () => [...timeOptions].sort((a, b) => a.value.localeCompare(b.value)),
      [],
    );

    return (
      <BulkEditForm
        offices={officeOptions}
        selectedOffices={selectedOffices}
        onOfficesChange={setSelectedOffices}
        onClearOffices={() => setSelectedOffices([])}
        startTimeOptions={sortedTimeOptions}
        startTime={startTime}
        onStartTimeChange={setStartTime}
        endTimeOptions={sortedTimeOptions}
        endTime={endTime}
        onEndTimeChange={setEndTime}
        reasonOptions={reasonOptions}
        reason={reason}
        onReasonChange={setReason}
        specifyReason={specifyReason}
        onSpecifyReasonChange={setSpecifyReason}
        applyToRelatedDays={applyAll}
        onApplyToRelatedDaysChange={setApplyAll}
        onDelete={action("delete")}
        onCancel={action("cancel")}
        onSave={action("save")}
      />
    );
  },
};
