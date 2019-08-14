import React from "react";

const QuoteDisplay = ({ quote, author }) => {
  console.log(quote);
  return (
    <div className="quote-container">
      <h2>{quote}</h2>
      <p>{author}</p>
    </div>
  );
};

export default QuoteDisplay;
