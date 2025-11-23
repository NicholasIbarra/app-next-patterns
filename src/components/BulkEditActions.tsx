import { Clear, Delete } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

export interface BulkEditActionsProps {
  onDelete?: () => void;
  onCancel?: () => void;
  onSave?: () => void;
  onClear?: () => void;
}

export default function BulkEditActions({ onDelete, onCancel, onSave, onClear }: BulkEditActionsProps) {
  return (
    <Box display="flex" justifyContent="flex-end" gap={1}>
      <Button variant="text" color="primary" size="small" startIcon={<Clear />} onClick={onClear}>
        Clear
      </Button>
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
  );
}
