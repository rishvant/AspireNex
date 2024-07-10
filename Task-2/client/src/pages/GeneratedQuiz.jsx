import { Link, useParams } from "react-router-dom"

const GeneratedQuiz = () => {
    const quizID = useParams().id;

    return (
      <>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[90%] sm:w-fit h-fit px-4 py-2 mt-48 border-4 border-purple-700 rounded-md">
            <p className="text-center text-xl sm:text-2xl">
              You have successfully generated the quiz
            </p>
            <p className="text-center text-xl sm:text-2xl text-wrap flex flex-col flex-wrap">
              Your generated quiz can be played on the below link:
              <Link to={`https://instant-quizzer.vercel.app/quiz/${quizID}`} className="text-blue-700 underline">
                https://instant-quizzer.vercel.app/startquiz/{quizID}
              </Link>
            </p>
          </div>
        </div>
      </>
    );
}

export default GeneratedQuiz;