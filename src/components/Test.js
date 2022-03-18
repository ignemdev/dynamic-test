import { Box, Paper } from '@mui/material'

import Header from './Header'
import Question from './Question';

export default function Test() {
    return (
        <Box sx={{ minWidth: '45%', marginY: 3 }}>
            <Header />
            <Paper elevation={2}>
                <Question />
                <Question />
            </Paper>
        </Box>
    );
}