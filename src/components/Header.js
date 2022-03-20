import { spacing, border } from '../helpers/theme';
import { Card, CardContent, Typography } from '@mui/material/';

const Header = () => {
    return (
        <Card variant="primary" sx={{ ...spacing, ...border }}>
            <CardContent sx={{ padding: 0 }}>
                <Typography variant="h4" component="div" sx={{ marginBottom: 3, width: '100%', fontWeight: 'light' }} >
                    Estilo de vida saludable
                </Typography>
                <Typography variant="body2">
                    Grupo #
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Header;