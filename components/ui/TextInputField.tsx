"use client";

import TextField, { type TextFieldProps } from "@mui/material/TextField";

export type TextInputFieldProps = TextFieldProps & {
  /**
   * Optional helper text displayed underneath the input.
   */
  helper?: string;
};

/**
 * A single-line text field that fills its container width by default and forwards
 * native `TextField` props for advanced usage.
 */
const TextInputField = ({ helper, fullWidth = true, ...props }: TextInputFieldProps) => (
  <TextField
    {...props}
    fullWidth={fullWidth}
    helperText={helper ?? props.helperText}
  />
);

export default TextInputField;
