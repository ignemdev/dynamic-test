import { useState, useEffect } from 'react';
import { Box, Paper, Button, CircularProgress } from '@mui/material'
import { spacing, border, palette } from '../helpers/theme';
import Header from './Header'
import Question from './Question';
import questionsJson from '../db/questions'

export default function Test() {

    const [isLoading, setIsLoading] = useState(true);
    const [isFromValid, setIsFromValid] = useState(false);

    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    const handleAnswer = answer => {
        const { id } = answer;
        var notRepeatedAnswers = answers.filter(e => e.id !== id);
        setAnswers([...notRepeatedAnswers, answer])
    }

    const handleResultsButton = () => {
        const testScore = getTestScore(answers);
        setScore(testScore);
        setQuestions([]);
        setAnswers([]);
    }

    const getTestScore = (answers) => {
        const values = answers.map(answer => Number(answer.value));
        const accumulatedScore = values.reduce((acc, value) => acc + value);
        return accumulatedScore;
    }

    // request questions
    useEffect(() => {
        console.log('first')
        setQuestions(questionsJson);
    }, []);

    //limpiar form
    useEffect(() => {
        console.log(score);
        setQuestions(questionsJson);
    }, [score]);

    //loading handling
    useEffect(() => {
        if (questions?.length > 0) {
            setIsLoading(false);
        }
    }, [questions])

    //testear
    useEffect(() => {
        setIsFromValid(questions.length === answers.length);
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
                    <Button disabled={!isFromValid} color='info' variant='contained' sx={{ ...border }} onClick={handleResultsButton}>Hola</Button>
                </Box>
            </Paper>
        </Box>
    );
}