import { Checkbox, FormControlLabel } from "@mui/material";

export interface ApplyToRelatedDaysCheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function ApplyToRelatedDaysCheckbox({
  label = "Apply change to all related days",
  checked = false,
  onChange,
}: ApplyToRelatedDaysCheckboxProps) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(event) => onChange?.(event.target.checked)}
          color="primary"
        />
      }
      label={label}
    />
  );
}
