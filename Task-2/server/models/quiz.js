import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    type: {
        String
    },
    title: {
        String
    },
    username: {
        type: String
    },
    description: {
        type: String
    },
    questions: [
        {
            question: {
                type: String
            },
            options: [
                {
                    text: {
                        type: String
                    },
                    isCorrect: {
                        type: Boolean
                    },
                },
            ],
        },
    ]
});

const Quiz = new mongoose.model("Quiz", quizSchema);

export default Quiz;