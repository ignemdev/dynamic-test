import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import { Box, Paper, Button, CircularProgress } from '@mui/material'

import { spacing, border, palette } from '../helpers/theme';

import Header from './Header'
import Question from './Question';
import Result from './Result';

import questionsJson from '../db/questions'

const Test = () => {

    const methods = useForm({ mode: "onChange" });
    const { handleSubmit, reset, control, formState } = methods;

    const [isLoading, setIsLoading] = useState(true);
    const [isResultModalOpen, setIsResultModalOpen] = useState(false);

    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);

    const onSubmit = (data) => {
        const testScore = getTestScore(data);
        setScore(testScore);
        setIsResultModalOpen(true);
        reset();
    };

    const handleCloseResultModal = () => {
        setIsResultModalOpen(!isResultModalOpen);
        setScore(0);
    };

    const getTestScore = (answers) => {
        const values = Object.values(answers).map(value => Number(value));
        const accumulatedScore = values.reduce((acc, value) => acc + value);
        return accumulatedScore;
    }

    // request questions
    useEffect(() => {
        setQuestions(questionsJson);
    }, []);

    //loading handling
    useEffect(() => {
        if (questions?.length > 0) {
            setIsLoading(false);
        }
    }, [questions])

    return (
        <Box sx={{ minWidth: '45%', marginY: 3 }}>
            <Header />
            <Paper elevation={2}>
                {isLoading ?
                    (<Box sx={{ ...spacing, display: 'flex', justifyContent: 'center', backgroundColor: palette.secondary.main }}>
                        <CircularProgress />
                    </Box>) :
                    (<>
                        <form>
                            {questions?.map(question => (
                                <Question key={question.id} questionItem={question} control={control} />
                            ))}
                        </form>
                    </>)
                }
                <Box sx={{ ...spacing, backgroundColor: palette.secondary.main }}>
                    <Button disabled={!formState.isValid} onClick={handleSubmit(onSubmit)} color='info' variant='contained' sx={{ ...border }}>Resultados</Button>
                </Box>
            </Paper>
            <Result
                open={isResultModalOpen}
                testScore={score}
                handleCloseResult={handleCloseResultModal}
            />
        </Box>
    );
}


export default Test;