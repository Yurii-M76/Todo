"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "montserrat, sans-serif",
  primaryColor: "green",
  headings: {
    fontFamily: "montserrat",
    sizes: {
      h1: {
        fontSize: "2rem",
        fontWeight: "600",
      },
      h2: {
        fontSize: "1.8rem",
        fontWeight: "600",
      },
      h3: {
        fontSize: "1.6rem",
        fontWeight: "600",
      },
    },
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "nav-link-md": "2rem",
  },
});
