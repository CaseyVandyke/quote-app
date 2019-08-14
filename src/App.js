import React from "react";
import QuoteList from "./components/QuoteList";
import CreateQuote from "./components/CreateQuote";

function App() {
  return (
    <div className="App">
      <CreateQuote />
      <QuoteList />
    </div>
  );
}

export default App;
