import "./sass/App.scss";
import "./sass/mui.scss";
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { useMuiTheme } from "./hooks/useMuiTheme";
import { ThemeProvider } from "@mui/material";
import { Dashboard } from "./dashboard/pages/Dashboard";
import { ProductsProvider } from "./common/contexts/productsContext";
import { LanguageProvider } from "./common/contexts/LanguageContext";
import Main from "./menu/pages/Main";
import { CategoriesProvider } from "./common/contexts/categoriesContext";

const App = () => {
  const muiTheme = useMuiTheme();

  return (
    <LanguageProvider>
      <ThemeProvider theme={muiTheme}>
        <CategoriesProvider>
            <ProductsProvider>
                <BrowserRouter>
                    <Routes>
                    <Route index element={<Main />} />
                    <Route path="/dashboard/*" element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
            </ProductsProvider>
        </CategoriesProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
