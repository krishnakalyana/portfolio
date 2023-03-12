"use client";
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f0f0f0",
    },
    secondary: {
      main: "#606060",
    },
  },
});
