import React from "react";
import QuoteDisplay from "./QuoteDisplay";

const QuoteMap = ({ quotes }) => {
  return (
    <div>
      {quotes.map(quote => {
        return (
          <QuoteDisplay
            quote={quote.quote}
            key={quote.id}
            author={quote.author}
          />
        );
      })}
    </div>
  );
};

export default QuoteMap;
