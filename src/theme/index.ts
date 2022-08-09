import { createTheme } from "@mui/material/styles";

import light from "./palette/light";
import dark from "./palette/dark";
import components from "./components";

const theme = (darkMode: boolean) => ({
  palette: darkMode ? dark : light,
  components: components(darkMode),
  // typography,
});

export function getTheme({ darkMode = false }) {
  return createTheme(theme(darkMode));
}
