import { Card, CardActions, CardContent, Typography } from '@mui/material/';


export default function Header() {
    return (
        <Card sx={{ borderRadius: 0, paddingX: 4, paddingY: 5 }}>
            <CardContent sx={{ padding: 0 }}>
                <Typography variant="h4" component="div" sx={{ marginBottom: 3, width: '100%' }} >
                    Microsoft Forms
                </Typography>
                <Typography variant="body2">
                    A Demo
                </Typography>
            </CardContent>
        </Card>
    );
}
