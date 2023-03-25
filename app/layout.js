"use client";
import { darkTheme } from "../components/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
// export const metadata = {
//   title: "Krishna Kalyana",
//   description: "",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
