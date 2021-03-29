import React, { useState, useEffect } from "react";
import data from "./data/data";
import Questions from "./components/Questions";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar } from "react-bootstrap";

function App() {
  const [questions, setQuestions] = useState(data);
  const [answerSelected, setAnswerSelected] = useState(false);
  let [correctAnswer, setCorrectAnswer] = useState(false);
  let [wrongAnswer, setWrongAnswer] = useState(false);
  let [rightAnswers, setRightAnswers] = useState(0);
  let [wrongAnswers, setWrongAnswers] = useState(0);
  let [currentPage, setCurrentPage] = useState(1);
  let [questionsPerPage, setQuestionsPerPage] = useState(1);
  let [score, setScore] = useState(0);
  let [wrongScore, setWrongScore] = useState(0);

  // get current posts
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestion = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const handleNext = () => {
    if (answerSelected) {
      if (currentPage >= 20 && correctAnswer) {
        setScore(score + 5);

        return alert(
          `You ev answered ${rightAnswers + 1} Questions Correctly.`
        );
      }
      if (currentPage >= 20 && wrongAnswer) {
        setWrongScore(wrongScore + 5);
        return alert(`You ev answered ${rightAnswers} Questions Correctly.`);
      }
      if (correctAnswer) {
        let sum = (num1, num2) => {
          return num1 + num2;
        };

        setRightAnswers(sum(rightAnswers, 1));
        setScore(score + 5);
        setCurrentPage(currentPage + 1);
        setCorrectAnswer(false);
        setWrongAnswer(false);
        setAnswerSelected(false);
      } else {
        let sum = (num1, num2) => {
          return num1 + num2;
        };
        setWrongAnswers(sum(wrongAnswers, 1));
        setWrongScore(wrongScore + 5);
        setCurrentPage(currentPage + 1);
        setCorrectAnswer(false);
        setWrongAnswer(false);
        setAnswerSelected(false);
      }
    } else {
      return null;
    }
  };

  const handleCorrectAnswer = (e) => {
    setAnswerSelected(true);
    setCorrectAnswer(true);
  };

  const handleWrongAnswer = (e) => {
    setAnswerSelected(true);
    setWrongAnswer(true);
  };

  const minPercentage = () => {
    let minPercent = Math.ceil((rightAnswers / questions.length) * 100);
    return minPercent;
  };
  const currentPercentage = () => {
    let currentPercent = Math.ceil(
      (rightAnswers / (rightAnswers + wrongAnswers)) * 100
    );
    return currentPercent;
  };
  const maxPercentage = () => {
    let maxPercent = Math.ceil(
      ((questions.length - wrongAnswers) / questions.length) * 100
    );
    return maxPercent;
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
            handleCorrectAnswer={handleCorrectAnswer}
            handleWrongAnswer={handleWrongAnswer}
          />
        </div>
      </div>
      <div className="footer">
        <div className="next">
          <h3>{correctAnswer ? "Correct!" : wrongAnswer ? "Sorry!" : null}</h3>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNext}>
            Next Question
          </button>
        </div>
        <div className="score">
          <h2>Minimum Percentage: {minPercentage()}%</h2>
          <h2>Current Percentage: {currentPercentage()}%</h2>
          <h2>Maximum Score: {maxPercentage()}%</h2>
        </div>
        <div className="progressBar">
          <ProgressBar>
            <ProgressBar
              striped
              variant="success"
              now={minPercentage()}
              key={1}
            />
            <ProgressBar variant="warning" now={25} key={2} />
            <ProgressBar striped variant="danger" now={15} key={3} />
          </ProgressBar>
        </div>
      </div>
    </div>
  );
}

export default App;
