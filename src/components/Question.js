import { useState, useEffect } from 'react';

import { spacing, border, palette } from '../helpers/theme';
import { Card, CircularProgress, Box } from '@mui/material/';

import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'

function Question({ questionItem, onAnswer }) {

    const [isLoading, setIsLoading] = useState(true);
    const [question, setQuestion] = useState({});
    const [value, setValue] = useState(0);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setValue(value);
        onAnswer({ id: question.id, name, value });
    }

    useEffect(() => {
        setQuestion(questionItem);
        setValue(questionItem.value);
    }, [questionItem])

    useEffect(() => {
        if (question.options && question?.options?.length > 0) {
            setIsLoading(false);
        }
    }, [question])

    return (
        <Card variant="secondary" sx={{ ...spacing, ...border }}>
            <FormControl>
                <FormLabel>{question?.description}</FormLabel>
                <RadioGroup row name={question?.name} value={value} onChange={handleChange}>
                    {isLoading ?
                        (<Box sx={{ ...spacing, display: 'flex', justifyContent: 'center', backgroundColor: palette.secondary.main }}>
                            <CircularProgress />
                        </Box>
                        ) :
                        (<>{question?.options?.map(option => (
                            <FormControlLabel key={option?.id} value={option?.value} control={<Radio />} label={option?.text} />
                        ))}</>)
                    }
                </RadioGroup>
            </FormControl>
        </Card>
    );
}

export default Question;