import { createTheme } from '@mui/material/styles';

export const palette = {
    primary: {
        main: '#f2653d',
        contrastText: '#fbfaf9',
    },
    secondary: {
        main: '#fbfaf9',
        contrastText: '#333130',
    },
    info: {
        main: '#3c7b53',
        contrastText: '#fbfaf9',
    }
}

export const spacing = {
    paddingX: 5,
    paddingBottom: 3,
    paddingTop: 5
}

export const border = {
    borderRadius: 0,
}

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins', //Montserrat, Poppins, Barlow Semi Condensed
            'sans-serif',
        ].join(','),
    },

    palette: { ...palette },
    components: {
        MuiCard: {
            variants: [
                {
                    props: { variant: 'primary' },
                    style: {
                        border: 0,
                        backgroundColor: palette.info.main,
                        color: palette.primary.contrastText,
                    },
                },
                {
                    props: { variant: 'secondary' },
                    style: {
                        backgroundColor: palette.secondary.main,
                        color: palette.secondary.contrastText,
                    },
                }
            ],
        },
    }
});