import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import CreateQuiz from "./pages/CreateQuiz";
import GeneratedQuiz from "./pages/GeneratedQuiz";
import StartQuiz from "./pages/StartQuiz";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startquiz/:id" element={<StartQuiz />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/createquiz" element={<CreateQuiz />} />
          <Route path="/generatedquiz/:id" element={<GeneratedQuiz />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
