import { Box, Paper, Button, Card } from '@mui/material'
import { spacing, border } from '../helpers/theme';
import Header from './Header'
import Question from './Question';

export default function Test() {
    return (
        <Box sx={{ minWidth: '45%', marginY: 3 }}>
            <Header />
            <Paper elevation={2}>
                <Question />
                <Question />

                <Card variant="secondary" sx={{ ...spacing }}>
                    <Button color='info' variant='contained' sx={{ ...border }}>Hola</Button>
                </Card>
            </Paper>
        </Box>
    );
}