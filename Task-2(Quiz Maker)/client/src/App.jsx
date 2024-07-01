import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import CreateQuiz from "./pages/CreateQuiz";
import GeneratedQuiz from "./pages/GeneratedQuiz";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/createquiz" element={<CreateQuiz />} />
          <Route path="/generatedquiz/:id" element={<GeneratedQuiz />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
