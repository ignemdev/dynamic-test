import { spacing, border } from '../helpers/theme';
import { Card, CardContent, Typography } from '@mui/material/';

const Header = () => {
    return (
        <Card variant="primary" sx={{ ...spacing, ...border }}>
            <CardContent sx={{ padding: 0 }}>
                <Typography variant="h4" component="div" sx={{ marginBottom: 3, width: '100%', fontWeight: 'bold', textTransform: 'uppercase' }} >
                    ¿Qué tan saludable eres?
                </Typography>
                <Typography variant="body2">
                    Health Test With DBL
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Header;