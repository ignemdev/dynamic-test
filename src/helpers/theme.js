import { createTheme } from '@mui/material/styles';

const palette = {
    primary: {
        main: '#f2653d',
        contrastText: '#fff',
    },
    secondary: {
        main: '#fff',
        contrastText: '#000',
    },
    info: {
        main: '#3c7b53',
        contrastText: '#fff',
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
    palette: { ...palette },
    components: {
        MuiCard: {
            variants: [
                {
                    props: { variant: 'primary' },
                    style: {
                        border: 0,
                        backgroundColor: palette.primary.main,
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