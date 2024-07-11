import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ccb23e',
            light: '#EEEEEE',
            dark: '#66591f',
            contrastText: '#fff',
        },
    },
    typography:{
        fontFamily: 'Montserrat, sans-serif', // Set Montserrat as the default font family
        h1: {
            fontSize: '2.5rem', // Larger font size for h1
            fontWeight: 700,
            
        },
        h2: {
            fontSize: '2rem', // Slightly smaller for h2
            fontWeight: 600,
            
        },
        h3: {
            fontSize: '1.75rem', // Smaller for h3
            fontWeight: 500,
            
        },
        h4: {
            fontSize: '1.5rem', // Adding h4 for completeness
            fontWeight: 500,
            
        },

        body1: {
            fontSize: '1rem', // Standard body text
            
        },
        body2: {
            fontSize: '0.875rem', // Smaller body text
            
        },
    }
});

