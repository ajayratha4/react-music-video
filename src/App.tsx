import React from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { getTheme } from "theme";
import MainViewLayout from "Layouts/MainViewLayout";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={getTheme({ darkMode: false })}>
        <MainViewLayout />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
