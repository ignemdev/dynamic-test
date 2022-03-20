import { useState, useEffect } from 'react';

import { Box, Typography, Modal } from '@mui/material'

import { palette } from '../helpers/theme';

import rangesJson from '../db/ranges'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 100,
    bgcolor: palette.secondary.main,
    boxShadow: 24,
    p: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
};

const Result = ({ open, handleCloseResult, testScore }) => {

    const [score, setScore] = useState(0);
    const [result, setResult] = useState('');

    const handleClose = () => {
        handleCloseResult();
    };

    const setResultFromRanges = () => {
        const range = rangesJson.find(
            range => range.min <= score && score <= range.max
        );

        setResult(range?.result);
    }

    useEffect(() => setScore(testScore), [testScore]);

    useEffect(setResultFromRanges, [score]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    {score}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    {result}
                </Typography>
            </Box>
        </Modal>
    )
}

export default Result;