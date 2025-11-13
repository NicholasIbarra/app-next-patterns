"use client";

import Button, { type ButtonProps } from "@mui/material/Button";

export interface PrimaryButtonProps extends ButtonProps {
  /**
   * Text content to display inside the button.
   */
  label?: string;
}

/**
 * A convenience wrapper around MUI's contained button that is configured with the
 * application's default primary color palette.
 */
const PrimaryButton = ({ label = "Click me", ...props }: PrimaryButtonProps) => (
  <Button variant="contained" color="primary" {...props}>
    {label}
  </Button>
);

export default PrimaryButton;
