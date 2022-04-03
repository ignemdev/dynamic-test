import { useState } from 'react';

import { Box, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Alert } from '@mui/material';

import { palette } from '../helpers/theme';

import SendIcon from '@mui/icons-material/Send';

const EmailInput = ({ EmailSended, OnEmailSend }) => {

    const [emailValue, SetEmailValue] = useState('');

    const handleSend = () => {
        if (emailValue.trim().length <= 0) {
            return;
        }
        OnEmailSend();
    };

    const emailValueChange = (event) => SetEmailValue(event.target.value);

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            {!EmailSended ? (
                <FormControl variant="outlined" sx={{ width: '100%' }}>
                    <InputLabel color="info" htmlFor="correo">Déjanos tu correo</InputLabel>
                    <OutlinedInput
                        id="correo"
                        label="Déjanos tu correo"
                        placeholder='Correo'
                        value={emailValue}
                        type="email"
                        onChange={emailValueChange}
                        color="info"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={handleSend}>
                                    <SendIcon sx={{ color: palette.info.main }} />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            ) :
                (
                    <Alert variant="outlined" severity="success" color='info'>
                        ¡El correo ha sido enviado exitosamente!
                    </Alert>
                )
            }

        </Box>
    )
}

export default EmailInput;