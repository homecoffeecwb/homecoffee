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
import { CategoriesProvider } from "./common/contexts/categoriesContext";
import { Snackbar, SnackbarProvider } from "burgos-snackbar"

const App = () => {
    const muiTheme = useMuiTheme()

    return (
        <SnackbarProvider>
            <LanguageProvider>
                <ThemeProvider theme={muiTheme}>
                    <CategoriesProvider>
                        <ProductsProvider>
                            <BrowserRouter>
                                <Snackbar />
                                <Routes>
                                    <Route index element={<Main />} />
                                    <Route path="/dashboard/*" element={<Dashboard />} />
                                </Routes>
                            </BrowserRouter>
                        </ProductsProvider>
                    </CategoriesProvider>
                </ThemeProvider>
            </LanguageProvider>
        </SnackbarProvider>
    )
}

export default App;
