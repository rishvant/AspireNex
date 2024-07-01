import Quiz from "../models/quiz.js";

const QuizController = {
    createQuiz: async (req, res) => {
        try {
            const { username, title, description, questions } = req.body;
            if (!username) {
                return res.status(400).json({
                    success: false,
                    messages: "All fields are required"
                });
            }
        }
        catch (err) {
            console.log("Error:", err);
        }
    }
}