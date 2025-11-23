import { Delete, Clear } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export type SelectOption = {
  label: string;
  value: string;
};

export interface BulkEditFormProps {
  title?: string;
  offices: SelectOption[];
  selectedOffices: SelectOption[];
  onOfficesChange?: (value: SelectOption[]) => void;
  onClearOffices?: () => void;
  startTimeOptions: SelectOption[];
  startTime?: string;
  onStartTimeChange?: (value: string) => void;
  endTimeOptions: SelectOption[];
  endTime?: string;
  onEndTimeChange?: (value: string) => void;
  reasonOptions: SelectOption[];
  reason?: string;
  onReasonChange?: (value: string) => void;
  specifyReason?: string;
  onSpecifyReasonChange?: (value: string) => void;
  applyToRelatedDays?: boolean;
  onApplyToRelatedDaysChange?: (checked: boolean) => void;
  onDelete?: () => void;
  onCancel?: () => void;
  onSave?: () => void;
}

export default function BulkEditForm({
  title = "Bulk Edit",
  offices,
  selectedOffices,
  onOfficesChange,
  onClearOffices,
  startTimeOptions,
  startTime,
  onStartTimeChange,
  endTimeOptions,
  endTime,
  onEndTimeChange,
  reasonOptions,
  reason,
  onReasonChange,
  specifyReason,
  onSpecifyReasonChange,
  applyToRelatedDays = false,
  onApplyToRelatedDaysChange,
  onDelete,
  onCancel,
  onSave,
}: BulkEditFormProps) {
  return (
    <Card sx={{ p: 3, maxWidth: 960, boxShadow: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight={700}>
          {title}
        </Typography>
        <Button color="primary" variant="text" size="small" startIcon={<Clear />} onClick={onClearOffices}>
          Clear All
        </Button>
      </Stack>

      <Autocomplete
        multiple
        options={offices}
        value={selectedOffices}
        onChange={(_, value) => onOfficesChange?.(value)}
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Office(s)*"
            placeholder={selectedOffices.length ? undefined : "Select an office"}
            required
          />
        )}
        sx={{ mb: 3 }}
      />

      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            label="Start Time*"
            value={startTime ?? ""}
            onChange={(event) => onStartTimeChange?.(event.target.value)}
            required
          >
            {startTimeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            label="End Time*"
            value={endTime ?? ""}
            onChange={(event) => onEndTimeChange?.(event.target.value)}
            required
          >
            {endTimeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <Grid container spacing={2} mb={1}>
        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            label="Reason*"
            value={reason ?? ""}
            onChange={(event) => onReasonChange?.(event.target.value)}
            required
          >
            {reasonOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Specify Reason"
            placeholder="Provide a specific reason"
            value={specifyReason ?? ""}
            onChange={(event) => onSpecifyReasonChange?.(event.target.value)}
          />
        </Grid>
      </Grid>

      <FormControlLabel
        control={
          <Checkbox
            checked={applyToRelatedDays}
            onChange={(event) => onApplyToRelatedDaysChange?.(event.target.checked)}
            color="primary"
          />
        }
        label="Apply change to all related days"
        sx={{ mb: 3, ml: 1 }}
      />

      <Box display="flex" justifyContent="flex-end" gap={1}>
        <Button variant="outlined" color="error" startIcon={<Delete />} onClick={onDelete}>
          Delete
        </Button>
        <Button variant="text" color="primary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={onSave}>
          Save
        </Button>
      </Box>
    </Card>
  );
}
