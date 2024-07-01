import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    type: {
        String
    },
    quizId: {
        type: String
    },
    title: {
        String
    },
    username: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    questions: [{
        question: {
            type: String
        },
        answer: {
            type: String
        },
        correctOptions: [{
            option: {
                type: String
            }
        }]
    }],
});

const Quiz = new mongoose.model("Quiz", quizSchema);

export default Quiz;