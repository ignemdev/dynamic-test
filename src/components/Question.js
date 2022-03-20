import { useState, useEffect } from 'react';
import { Controller } from "react-hook-form";

import { Card, Box, Skeleton } from '@mui/material/';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'

import { spacing, border, palette } from '../helpers/theme';

const Question = ({ questionItem, control }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [question, setQuestion] = useState({});

    useEffect(() => {
        setQuestion(questionItem);
    }, [questionItem])

    useEffect(() => {
        if (question.options && question?.options?.length > 0) {
            setIsLoading(false);
        }
    }, [question])

    return (
        <Card variant="secondary" sx={{ ...spacing, ...border }}>

            {isLoading ?
                (<Box sx={{ width: '100%', backgroundColor: palette.secondary.main }}>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </Box>
                ) :
                (<>

                    <Controller
                        name={`question-${question?.id}`}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <FormControl>
                                <FormLabel sx={{ overflow: 'hidden', whiteSpace: 'wrap' }}>{`${question?.id}. ${question?.description}`}</FormLabel>
                                <RadioGroup row value={value} onChange={onChange}>
                                    {question?.options?.map(option => (
                                        <FormControlLabel key={option?.id} value={option?.value} control={<Radio />} label={option?.text} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        )}
                        rules={{ required: true }}
                        defaultValue={question?.value}
                    />
                </>)
            }
        </Card>
    );
}

export default Question;