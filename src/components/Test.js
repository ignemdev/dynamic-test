import { useState, useEffect } from 'react';
import { Box, Paper, Button, CircularProgress } from '@mui/material'
import { spacing, border, palette } from '../helpers/theme';
import Header from './Header'
import Question from './Question';
import questionsJson from '../db/questions'

export default function Test() {

    const [isLoading, setIsLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [cleanForm, setCleanForm] = useState(false);

    const handleAnswer = answer => {
        const { id } = answer;
        var notRepeatedAnswers = answers.filter(e => e.id !== id);
        setAnswers([...notRepeatedAnswers, answer])
    }

    const handleResultsButton = () => {
        setQuestions([]);
        setCleanForm(true);
    }

    //request questions
    useEffect(() => setQuestions(questionsJson), []);

    //limpiar form
    useEffect(() => {
        setQuestions(questionsJson);
        setAnswers([]);
    }, [cleanForm]);

    //loading handling
    useEffect(() => {
        if (questions?.length > 0) {
            setIsLoading(false);
        }
        setCleanForm(false);
    }, [questions])

    //testear
    useEffect(() => {
        console.log(answers);
    }, [answers])

    return (
        <Box sx={{ minWidth: '45%', marginY: 3 }}>
            <Header />
            <Paper elevation={2}>
                {isLoading ?
                    (<Box sx={{ ...spacing, display: 'flex', justifyContent: 'center', backgroundColor: palette.secondary.main }}>
                        <CircularProgress />
                    </Box>) :
                    (<>{questions?.map(question => (
                        <Question key={question.id} questionItem={question} onAnswer={handleAnswer} />
                    ))}</>)
                }
                <Box sx={{ ...spacing, backgroundColor: palette.secondary.main }}>
                    <Button color='info' variant='contained' sx={{ ...border }} onClick={handleResultsButton}>Hola</Button>
                </Box>
            </Paper>
        </Box>
    );
}