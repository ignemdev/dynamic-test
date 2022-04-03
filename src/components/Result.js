import { useState, useEffect } from 'react';

import { Box, Typography, Modal, Button } from '@mui/material'

import {
    List,
    ListItem,
    Divider
} from '@mui/material';

import { palette, border } from '../helpers/theme';

import rangesJson from '../db/ranges'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: palette.secondary.main,
};

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
                    <ListItem sx={{ padding: 2, flexDirection: 'column' }}>
                        <Typography variant='h5' sx={{ color: range?.color, marginY: 1 }}>{range?.result}</Typography>
                        <Typography variant='subtitle1' sx={{ textAlign: 'center' }} >{range?.message}</Typography>
                        <Button
                            color='info'
                            variant='contained'
                            href={range?.link}
                            sx={{ ...border, marginY: 1 }}>
                            DBL Blog
                        </Button>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ padding: 2, flexDirection: 'column' }}>

                    </ListItem>
                    <Divider />
                    <ListItem sx={{ padding: 0, justifyContent: 'space-evenly' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 2 }}>
                            <Typography variant='h6'>Score:</Typography>
                            <Typography variant='h1' sx={{ color: range?.color }}>{score}</Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem></Divider>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 2 }}>
                            <Typography variant='h6'>Rango:</Typography>
                            <Typography variant='h6' sx={{ color: range?.color }}>{range?.min} - {range?.max}</Typography>
                        </Box>
                    </ListItem>
                </List>
            </Box>
        </Modal >
    )
}

export default Result;