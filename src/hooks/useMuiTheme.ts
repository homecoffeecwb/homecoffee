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
            // success: {

            // }
        }
    })
    
    return THEME
}