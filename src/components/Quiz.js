import React from "react";
import data from "../data/data.json";
import Rating from "./Rating";
import "./quiz.css";

function Quiz() {
  return (
    <div className="card">
      {data.map((item, index) => {
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
            <div className="heading">
              <h1>
                Question {index} of {data.length}
              </h1>
              <p>{category}</p>
              <div>
                {
                  <Rating
                    rating={
                      difficulty === "easy"
                        ? 1
                        : difficulty === "medium"
                        ? 2
                        : 3
                    }></Rating>
                }
              </div>
            </div>
            <div className="para">
              <p>{question}</p>
            </div>
            <div className="container">
              <div className="row">
                <div className="btn btn-primary col-xs-2">
                  {incorrect_answers[0]}
                </div>
                <div className="btn btn-primary col-xs-2">
                  {incorrect_answers[1]}
                </div>
              </div>
              <div className="row">
                <div className="btn btn-primary col-xs-2">{correct_answer}</div>
                <div className="btn btn-primary col-xs-2">
                  {incorrect_answers[2]}
                </div>
              </div>
            </div>
            <div className="next">
              <h3>Correct!</h3>
              <button className="btn btn-primary">Next Question</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Quiz;
