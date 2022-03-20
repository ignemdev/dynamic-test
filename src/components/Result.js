import { useState, useEffect } from 'react';

import { Box, Typography, Modal } from '@mui/material'

import {
    List,
    ListItem,
    Divider
} from '@mui/material';

import { palette } from '../helpers/theme';

import rangesJson from '../db/ranges'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: palette.secondary.main,
};

const listItemStyles = {
    display: 'flex',
    justifyContent: 'center'
}

const Result = ({ open, handleCloseResult, testScore }) => {

    const [score, setScore] = useState(0);
    const [range, setRange] = useState('');

    const handleClose = () => {
        handleCloseResult();
    };

    const setResultFromRanges = () => {
        const range = rangesJson.find(
            range => range.min <= score && score <= range.max
        );

        setRange(range);
    }

    useEffect(() => setScore(testScore), [testScore]);

    useEffect(setResultFromRanges, [score]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <List
                    sx={{
                        width: '100%',
                        color: palette.secondary.contrastText
                    }}
                >
                    <ListItem sx={{ padding: 2, flexDirection: 'column', ...listItemStyles }}>
                        <Typography variant='h5' sx={{ color: range?.color }}>{range?.result}</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ padding: 2, ...listItemStyles }}>
                        <Typography variant='h6'>Rango:</Typography>
                        <Typography variant='h6' sx={{ margin: 2, color: range?.color }}>{range?.min} - {range?.max}</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ padding: 2, flexDirection: 'column', ...listItemStyles }}>
                        <Typography variant='h6'>Score:</Typography>
                        <Typography variant='h1' sx={{ color: range?.color }}>{score}</Typography>
                    </ListItem>
                </List>
            </Box>
        </Modal>
    )
}

export default Result;