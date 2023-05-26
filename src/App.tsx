import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./common/contexts/LanguageContext";
import { ProductsProvider } from "./common/contexts/productsContext";
import { Dashboard } from "./dashboard/pages/Dashboard";
import { useMuiTheme } from "./hooks/useMuiTheme";
import Main from "./menu/pages/Main";
import "./sass/App.scss";
import "./sass/mui.scss";

const App = () => {
  const muiTheme = useMuiTheme();

  return (
    <LanguageProvider>
      <ThemeProvider theme={muiTheme}>
        <ProductsProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Main />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </ProductsProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
