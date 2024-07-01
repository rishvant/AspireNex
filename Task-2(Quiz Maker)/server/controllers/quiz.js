import Quiz from '../models/quiz.js';

export const createQuiz = async (req, res) => {
    try {
        const { title, description, questions } = req.body;

        const newQuiz = new Quiz({
            title,
            description,
            questions,
        });

        const savedQuiz = await newQuiz.save();
        res.status(201).json({ savedQuiz });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getQuizById = async (req, res) => {
    const { id } = req.params;
    try {
        const quiz = await Quiz.findById(id);
        if (!quiz) return res.status(404).json({ message: "Quiz not found" });
        res.status(200).json(quiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateQuiz = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedQuiz = await Quiz.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedQuiz) return res.status(404).json({ message: "Quiz not found" });
        res.status(200).json(updatedQuiz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteQuiz = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedQuiz = await Quiz.findByIdAndDelete(id);
        if (!deletedQuiz) return res.status(404).json({ message: "Quiz not found" });
        res.status(200).json({ message: "Quiz deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};