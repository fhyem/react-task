import React, { useState, useEffect } from "react";
import data from "../src/data/data.json";
import Questions from "./components/Questions";
import "./app.css";

function App() {
  const [questions, setQuestions] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage, setQuestionsPerPage] = useState(1);

  // get current posts
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestion = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const handleNext = () => {
    if (currentPage >= 20) {
      return null;
    }
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="App">
      <div className="top-bar">
        <div className="progress">
          <progress
            style={{ width: "100%" }}
            id="file"
            value={currentPage * 5}
            max="100">
            32%
          </progress>
        </div>
      </div>
      <div className="content">
        <div className="card">
          <Questions
            questions={currentQuestion}
            data={questions.length}
            currentPage={currentPage}
          />
        </div>
      </div>
      <div className="footer">
        <div className="next">
          <h3>Correct!</h3>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNext}>
            Next Question
          </button>
        </div>
        <div className="score">
          <h5>Score: 67%</h5>
          <h4>Max Score: 75%</h4>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            aria-valuenow="70"
            aria-valuemin="67"
            aria-valuemax="75"
            style={{ width: "70%" }}>
            <span className="sr-only">70% Complete</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
