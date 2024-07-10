import express from 'express';
import { createQuiz, getAllQuizzes, getQuizById, updateQuiz, deleteQuiz } from '../controllers/quiz.js';

const router = express.Router();

router.post('/quizzes', createQuiz);

router.get('/quizzes', getAllQuizzes);

router.get('/quizzes/:id', getQuizById);

router.put('/quizzes/:id', updateQuiz);

router.delete('/quizzes/:id', deleteQuiz);

export default router;