import { spacing, border } from '../helpers/theme';
import { Card, CardContent, Typography } from '@mui/material/';

function Question() {

    return (
        <Card variant="secondary" sx={{ ...spacing, ...border }}>
            <CardContent sx={{ padding: 0 }}>
                <Typography variant="p" component="div" sx={{ marginBottom: 2, width: '100%' }} >
                    1. ¿Como esta?
                </Typography>
                <Typography variant="body2">
                    Opciones
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Question;