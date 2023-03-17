import { createTheme } from "@mui/material/styles";

const themeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#00BCD4",
      dark: "#00bcd4",
      contrastText: "#a7ffeb",
      light: "#ffff8d",
    },
    secondary: {
      main: "#2c7d7d",
      contrastText: "#f5f5f5",
    },
    text: {
      primary: "#4CAF50",
      secondary: "#66BB6A",
    },
    warning: {
      main: "#daca15",
    },
    info: {
      main: "#3e778c",
    },
    background: {
      paper: "#010916",
    },
    divider: "#03a9f4",
    error: {
      main: "#d83332",
    },
    success: {
      main: "#0091ea",
    },
  },
  typography: {
    fontFamily: 'Merriweather Sans, Sans Serif'
  },
};

export const theme = createTheme(themeOptions);
