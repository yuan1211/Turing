import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";
import StartPage from "./pages/StartPage";

function App() {
    const [score, setScore] = useState(0);

    return (
        <Routes>
            <Route path="/" element={<StartPage setScore={setScore} />} />
            <Route path="/questions" element={<QuestionPage score={score} setScore={setScore} />} />
            <Route path="/result" element={<ResultPage score={score} setScore={setScore} />} />
        </Routes>
    );
}

export default App;
