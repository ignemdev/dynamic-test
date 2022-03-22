import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import { Box, Paper, Button, CircularProgress, Typography } from '@mui/material'
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';

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
        <Box sx={{ width: '100%', maxWidth: '600px', marginY: 3 }}>
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
                    <Button
                        disabled={!formState.isValid}
                        onClick={handleSubmit(onSubmit)}
                        color='info'
                        variant='contained'
                        sx={{ ...border }}>
                        Resultados <ContentPasteGoIcon sx={{ marginLeft: 1 }} />
                    </Button>
                </Box>
                <Box sx={{ ...spacing, paddingTop: 0, backgroundColor: palette.secondary.main }}>
                    <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                        Este test está intencionado para uso informativo y de entretenimiento solamente. No es un sustituto de un diagnóstico profesional o tratamiento para alguna condición física. Si quiere obtener un diagnóstico favor visitar a un profesional en el área.
                    </Typography>
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