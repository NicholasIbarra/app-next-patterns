import { TextField } from "@mui/material";

export interface SpecifyReasonInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function SpecifyReasonInput({
  label = "Specify Reason",
  placeholder = "Provide a specific reason",
  value,
  onChange,
}: SpecifyReasonInputProps) {
  return (
    <TextField
      fullWidth
      label={label}
      placeholder={placeholder}
      value={value ?? ""}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
}
