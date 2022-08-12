import React from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { getTheme } from "theme";
import MainViewLayout from "Layouts/MainViewLayout";
import { Provider } from "react-redux";
import store from "redux/store";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={getTheme({ darkMode: false })}>
          <BrowserRouter>
            <MainViewLayout />
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
