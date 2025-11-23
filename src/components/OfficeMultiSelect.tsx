import { Clear } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SelectOption } from "./types";

export interface OfficeMultiSelectProps {
  label?: string;
  helperText?: string;
  options: SelectOption[];
  value: SelectOption[];
  onChange?: (value: SelectOption[]) => void;
  onClear?: () => void;
}

export default function OfficeMultiSelect({
  label = "Office(s)",
  helperText,
  options,
  value,
  onChange,
  onClear,
}: OfficeMultiSelectProps) {
  return (
    <Stack spacing={1} alignItems="flex-start">
      <Stack direction="row" spacing={1} alignItems="center" width="100%">
        <Typography variant="subtitle1" fontWeight={700} sx={{ flex: 1 }}>
          {label}
        </Typography>
        <Button
          color="primary"
          variant="text"
          size="small"
          startIcon={<Clear />}
          onClick={onClear}
        >
          Clear All
        </Button>
      </Stack>

      <Autocomplete
        multiple
        options={options}
        value={value}
        onChange={(_, nextValue) => onChange?.(nextValue)}
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, nextValue) => option.value === nextValue.value}
        renderInput={(params) => (
          <TextField
            {...params}
            label={`${label}*`}
            placeholder={value.length ? undefined : `Select ${label.toLowerCase()}`}
            required
            helperText={helperText}
          />
        )}
        sx={{ width: "100%" }}
      />
    </Stack>
  );
}
