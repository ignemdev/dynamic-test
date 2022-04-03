import { useState, useEffect } from 'react';

import { Box, Typography, Modal, Button } from '@mui/material'

import EmailInput from './EmailInput'

import {
    List,
    ListItem,
    Divider
} from '@mui/material';

import { palette, border } from '../helpers/theme';

import rangesJson from '../db/ranges'

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: palette.secondary.main,
};

const listItemStyle = {
    padding: 2,
    flexDirection: 'column'
}

const boxListItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 2
}

const Result = ({ open, handleCloseResult, testScore }) => {

    const [score, setScore] = useState(0);
    const [range, setRange] = useState('');
    const [isEmailSended, setEmailSended] = useState(false);

    const handleClose = () => {
        handleCloseResult();
        setEmailSended(false)
    };

    const handleEmailSend = () => {
        setEmailSended(!isEmailSended)
    }

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
            <Box sx={modalStyle}>
                <List
                    sx={{
                        width: '100%',
                        padding: 0,
                        color: palette.secondary.contrastText
                    }}
                >
                    <ListItem sx={{ ...listItemStyle, paddingX: 3 }}>
                        <Typography variant='h5' sx={{ color: range?.color, marginY: 1, textAlign: 'center' }}>{range?.result}</Typography>
                        <Typography variant='subtitle1' sx={{ textAlign: 'center' }} >{range?.message}</Typography>
                        <Button
                            color='info'
                            variant='contained'
                            href={range?.link.toString()}
                            sx={{ ...border, marginY: 1 }}>
                            DBL Blog
                        </Button>
                    </ListItem>
                    <ListItem sx={{ ...listItemStyle, paddingTop: 0, flexDirection: 'row', alignItems: 'center', height: '90px' }}>
                        <EmailInput EmailSended={isEmailSended} OnEmailSend={handleEmailSend}></EmailInput>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ padding: 0, justifyContent: 'space-evenly' }}>
                        <Box sx={{ ...boxListItemStyle }}>
                            <Typography variant='h6'>Score:</Typography>
                            <Typography variant='h1' sx={{ color: range?.color }}>{score}</Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem variant="middle"></Divider>
                        <Box sx={{ ...boxListItemStyle }} >
                            <Typography variant='h4' sx={{ color: range?.color }}>{range?.min} - {range?.max}</Typography>
                        </Box>
                    </ListItem>
                </List>
            </Box>
        </Modal >
    )
}

export default Result;