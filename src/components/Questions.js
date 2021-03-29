import React from "react";
import Rating from "./Rating";

const Questions = ({ questions, data, currentPage, handleAnswer }) => {
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
                <button
                  type="button"
                  className="btn btn-primary col-xs-2"
                  onClick={(e) =>
                    e.target.value === correct_answer
                      ? handleAnswer(e)
                      : alert("Sorry. Try Again")
                  }
                  value={incorrect_answers[0]}>
                  {incorrect_answers[0]}
                </button>
                <button
                  type="button"
                  className="btn btn-primary col-xs-2"
                  onClick={(e) =>
                    e.target.value === correct_answer
                      ? handleAnswer(e)
                      : alert("Sorry. Try Again")
                  }
                  value={incorrect_answers[1]}>
                  {incorrect_answers[1]}
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="btn btn-primary col-xs-2"
                  onClick={(e) =>
                    e.target.value === correct_answer
                      ? handleAnswer(e)
                      : alert("Sorry. Try Again")
                  }
                  value={correct_answer}>
                  {correct_answer}
                </button>
                <button
                  type="button"
                  className="btn btn-primary col-xs-2"
                  onClick={(e) =>
                    e.target.value === correct_answer
                      ? handleAnswer(e)
                      : alert("Sorry. Try Again")
                  }
                  value={incorrect_answers[2]}>
                  {incorrect_answers[2]}
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Questions;
