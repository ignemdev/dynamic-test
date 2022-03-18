import { createTheme } from '@mui/material/styles';

const palette = {
    primary: {
        main: '#008272',
        contrastText: '#E9F2F6',
    },
    secondary: {
        main: '#fff',
        contrastText: '#212121',
    },
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