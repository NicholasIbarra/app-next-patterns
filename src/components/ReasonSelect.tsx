import { MenuItem, TextField } from "@mui/material";
import { SelectOption } from "./types";

export interface ReasonSelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export default function ReasonSelect({
  label = "Reason",
  options,
  value,
  onChange,
}: ReasonSelectProps) {
  return (
    <TextField
      select
      fullWidth
      label={`${label}*`}
      value={value ?? ""}
      onChange={(event) => onChange?.(event.target.value)}
      required
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
