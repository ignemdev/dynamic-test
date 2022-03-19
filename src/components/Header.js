import { spacing, border } from '../helpers/theme';
import { Card, CardContent, Typography } from '@mui/material/';

export default function Header() {
    return (
        <Card variant="primary" sx={{ ...spacing, ...border }}>
            <CardContent sx={{ padding: 0 }}>
                <Typography variant="h4" component="div" sx={{ marginBottom: 3, width: '100%', fontWeight: 'light' }} >
                    Mariam Forms
                </Typography>
                <Typography variant="body2">
                    Test
                </Typography>
            </CardContent>
        </Card>
    );
}
