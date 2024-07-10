import { useNavigate, useParams } from "react-router-dom";
import Options from "../components/Options";
import { useEffect, useState } from "react";
import { getQuizById } from "../utils/quizService";

const StartQuiz = () => {
    const quizID = useParams().id;
    const navigate = useNavigate();
    const [noOfQuestions, setNoOfQuestions] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getQuizById(quizID);
                setNoOfQuestions(response.data.questions.length);
            }
            catch (err) {
                console.log("Error:", err);
            }
        }
        fetchData();
    }, []);

    const handleStartQuiz = () => {
        navigate(`/quiz/${quizID}`);
    }

    return (
        <>
            <div className="w-fit h-fit px-4 py-2 rounded-lg bg-purple-700 text-white mt-10 absolute ml-10">
                Quiz ID: {quizID}
            </div>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-purple-500 flex items-center justify-center">
                    <div onClick={()=>handleStartQuiz()} className="w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-purple-700 flex flex-col items-center justify-center hover:bg-purple-800 hover:cursor-pointer transition-all">
                        <h1 className="text-3xl sm:text-4xl">Start Quiz</h1>
                        <p className="text-xl sm:text-2xl mt-4">No. of Questions: {noOfQuestions}</p>
                        {/* <p className="text-3xl sm:text-4xl">Start Quiz</p> */}
                    </div>
                </div>
            </div>
            <Options option="Hello"  />
        </>
    )
}

export default StartQuiz;