import React from "react";
import Rating from "./Rating";

const Questions = ({ questions, data, currentPage }) => {
  return (
    <div>
      {questions.map((item) => {
        const {
          category,
          type,
          difficulty,
          question,
          correct_answer,
          incorrect_answers,
        } = item;

        return (
          <article key={currentPage}>
            <div className="heading">
              <h1>
                Question {currentPage} of {data}
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
          </article>
        );
      })}
    </div>
  );
};

export default Questions;
