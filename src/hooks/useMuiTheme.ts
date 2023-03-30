import { makeStyles } from "@mui/material";
import { createTheme } from "@mui/material"
import { useColors } from "./useColors"

export const useMuiTheme = () => {
    const COLORS = useColors()
    const THEME = createTheme({
        typography: {
        //  "fontFamily": ["Poppins"].join(','),
        //  "fontSize": 14,
        //  "fontWeightLight": 300,
        //  "fontWeightRegular": 400,
        //  "fontWeightMedium": 500
        },
        palette: {
            // mode: 'dark',

            primary: {
                main: COLORS.primary,
            },
            secondary: {
                main: '#fff',
            },
            text: {
                primary: COLORS.primary,
                // secondary: COLORS.primary,
                // disabled: COLORS.primary,
            },
            error: {
                main: '#d32f2f',
                light: '#ef5350',
                dark: '#c62828',
                contrastText: '#fff'
            }
        }
    })
    
    return THEME
}