import { createTheme } from "@mui/material"
import COLORS from '../sass/_colors.scss'

export const useMuiTheme = () => {
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