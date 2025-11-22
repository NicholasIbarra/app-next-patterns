import type { Preview } from "@storybook/react";
import React from "react";
import "../src/app/globals.css";
import ThemeRegistry from "../src/theme/ThemeRegistry";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeRegistry>
        <Story />
      </ThemeRegistry>
    ),
  ],
};

export default preview;
