import "./sass/App.scss";
import "./sass/mui.scss";
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { useMuiTheme } from "./hooks/useMuiTheme";
import { ThemeProvider } from "@mui/material";
import { Dashboard } from "./dashboard/pages/Dashboard";
import { ProductsProvider } from "./common/contexts/productsContext";
import Main from "./menu/pages/Main";

const App = () => {
  const muiTheme = useMuiTheme();

  return (
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
  );
};

export default App;

