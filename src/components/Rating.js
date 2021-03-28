import React from "react";

export default function Rating(props) {
  const { rating } = props;
  return (
    <div className="rating">
      {rating === 1 ? (
        <span>
          <i className="fa fa-star"></i>
        </span>
      ) : rating === 2 ? (
        <>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
        </>
      ) : (
        <>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
        </>
      )}
    </div>
  );
}
