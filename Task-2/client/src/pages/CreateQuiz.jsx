import React, { useState } from "react";
import { MdDoneOutline } from "react-icons/md";
import { createQuiz } from "../utils/quizService";
import { useNavigate } from "react-router-dom";

const CreateQuiz = () => {
  const [questions, setQuestions] = useState([
    { question: "", options: [{ text: "", isCorrect: false }] },
  ]);
  const [quizLink, setQuizLink] = useState("");
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: [{ text: "", isCorrect: false }] },
    ]);
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const handleAddOption = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options.push({ text: "", isCorrect: false });
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex].text = value;
    setQuestions(newQuestions);
  };

  const handleToggleCorrect = (questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex].isCorrect =
      !newQuestions[questionIndex].options[optionIndex].isCorrect;
    setQuestions(newQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const quizData = { username, title, description, questions };

    try {
      const response = await createQuiz(quizData);
      console.log(response)

      if (response.status===201) {
        navigate(`/generatedquiz/${response.data.savedQuiz._id}`);
      } else {
        console.error("Failed to create quiz");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mt-20">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center gap-2">
              <input
                type="text"
                value={username}
                placeholder="Your Name"
                className="w-[300px] p-2 text-xl border border-[3px] rounded-md border-purple-700 focus:border-[3px] focus:outline-none"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="text"
                value={title}
                placeholder="Quiz Name"
                className="w-[300px] p-2 text-xl border border-[3px] rounded-md border-purple-700 focus:border-[3px] focus:outline-none"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            {questions.map((question, qIndex) => (
              <div
                key={qIndex}
                className="mt-4   mb-8 border-[3px] border-purple-700 p-4 flex flex-col"
              >
                <input
                  type="text"
                  value={question.question}
                  placeholder={`Enter Question ${qIndex + 1}`}
                  className="w-full p-2 text-xl border border-[3px] rounded-md border-purple-700 focus:border-[3px] focus:outline-none focus"
                  onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                  required
                />
                <div className="flex flex-col flex-wrap items-center justify-center gap-3 mt-8">
                  {question.options.map((option, oIndex) => (
                    <div key={oIndex} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={option.text}
                        placeholder={`Enter Option ${oIndex + 1}`}
                        className="w-[250px] sm:w-[300px] p-2 text-xl border border-[3px] rounded-md border-purple-700 focus:border-[3px] focus:outline-none focus"
                        onChange={(e) =>
                          handleOptionChange(qIndex, oIndex, e.target.value)
                        }
                        required
                      />
                      <button
                        type="button"
                        className={`rounded-full p-2 ${
                          option.isCorrect
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}
                        onClick={() => handleToggleCorrect(qIndex, oIndex)}
                      >
                        <MdDoneOutline size={24} />
                      </button>
                    </div>
                  ))}
                </div>
                {question.options.length < 4 && (
                  <button
                    type="button"
                    onClick={() => handleAddOption(qIndex)}
                    className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-all"
                  >
                    Add Option
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddQuestion}
              className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition-all"
            >
              Add Question
            </button>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
            >
              Submit Quiz
            </button>
            {quizLink && (
              <div className="mt-4">
                <p>Quiz Link:</p>
                <a
                  href={quizLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {quizLink}
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateQuiz;
