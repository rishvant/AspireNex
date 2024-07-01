import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getQuizById } from "../utils/quizService";

const Quiz = () => {
  const quizID = useParams().id;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionID, setSelectedOptionID] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await getQuizById(quizID);
        setQuestions(response.data.questions);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };
    fetchQuiz();
  }, [quizID]);

  const handleOptionSet = (id) => {
    if (selectedOptionID.includes(id)) {
      setSelectedOptionID(
        selectedOptionID.filter((optionID) => optionID !== id)
      );
    } else {
      setSelectedOptionID([...selectedOptionID, id]);
    }
  };

  const handleNext = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect =
      currentQuestion.correctOptions.length === selectedOptionID.length &&
      currentQuestion.correctOptions.every((id) =>
        selectedOptionID.includes(id)
      );

    if (isCorrect) {
      setScore(score + 1);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOptionID([]);
  };

  const handleSubmit = async () => {
    const results = {
      answers: questions.map((question, index) => ({
        questionId: question._id,
        selectedOptionID: selectedOptionID[index],
      })),
    };

    try {
      await axios.post(`http://localhost:5000/quiz/${id}/submit`, results);
      // Handle successful submission (e.g., navigate to results page)
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div className="w-fit h-fit px-4 py-2 rounded-lg bg-purple-700 text-white mt-10 absolute ml-10">
        Quiz ID: {quizID}
      </div>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-[280px] sm:w-[400px] md:w-[750px] h-[500px] md:h-[600px] bg-white shadow-2xl rounded-xl flex flex-col">
          <div className="flex flex-row justify-between">
            <span className="bg-purple-700 text-white w-fit px-4 py-1 rounded-tl-xl rounded-br-xl">
              Question: {currentQuestionIndex + 1}/{questions.length}
            </span>
            <span className="bg-red-700 text-white w-fit px-4 py-1 rounded-tr-xl rounded-bl-xl">
              Quit
            </span>
          </div>
          <p className="text-2xl sm:text-3xl text-center mt-5">
            {currentQuestion.question}
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-y-8 gap-8 mt-8">
            {currentQuestion.options.map((option, index) => (
              <div
                onClick={() => handleOptionSet(index)}
                key={index}
                className={`w-[200px] md:w-[300px] h-[50px] md:h-[200px] flex items-center justify-center ${
                  selectedOptionID.includes(index)
                    ? "bg-purple-600 text-white"
                    : "bg-white"
                } active:bg-purple-900 text-purple-700 rounded-md border-2 border-purple-700 hover:bg-purple-700 hover:text-white transition-all`}
              >
                <p className="text-xl sm:text-2xl">{option.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-end items-end h-[100px]">
            {selectedOptionID.length > 0 &&
              currentQuestionIndex < questions.length - 1 && (
                <span
                  className="bg-purple-700 text-white w-fit px-4 py-1 rounded-tl-xl rounded-br-xl hover:cursor-pointer"
                  onClick={handleNext}
                >
                  NEXT
                </span>
              )}
            {currentQuestionIndex === questions.length - 1 && (
              <span
                className="bg-blue-700 text-white w-fit px-4 py-1 rounded-tl-xl rounded-br-xl hover:cursor-pointer"
                onClick={handleSubmit}
              >
                SUBMIT
              </span>
            )}
          </div>
          <div className="flex flex-row justify-end items-end h-[100px] mt-4">
            <span className="bg-green-700 text-white w-fit px-4 py-1 rounded-tl-xl rounded-br-xl">
              Score: {score}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
