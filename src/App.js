import React from "react";
import questions from "./data/data.json";
import "./app.css";

function App() {
  return (
    <div className="App">
      {questions.map((item, index) => {
        const {
          category,
          type,
          difficulty,
          question,
          correct_answer,
          incorrect_answers,
        } = item;
        return (
          <div key={index}>
            <div className="top-bar">
              <div className="progress">
                <progress
                  style={{ width: "100%" }}
                  id="file"
                  value="32"
                  max="100">
                  32%
                </progress>
              </div>
            </div>
            <div className="content">
              <div className="card">
                <div className="heading">
                  <h1>
                    Question {index} of {questions.length}
                  </h1>
                  <p>{category}</p>
                  <div>{difficulty}</div>
                </div>
                <div className="para">
                  <p>{question}</p>
                </div>
                <div className="container">
                  {incorrect_answers.map((answer, index) => {
                    return (
                      <div key={index} className="container">
                        <div className="row">
                          <button className="btn btn-primary">{answer}</button>
                        </div>
                      </div>
                    );
                  })}

                  <button className="btn btn-primary">{correct_answer}</button>

                  <div className="next">
                    <h3>Correct!</h3>
                    <button className="btn btn-primary">Next Question</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
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
      })}
    </div>
  );
}

export default App;
