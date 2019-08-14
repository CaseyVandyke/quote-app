import { CREATE_QUOTE } from "../actions/quotesAction";
const initState = {
  quotes: [
    { id: 1, author: "Winston Churchill", quote: "Never never never give up" }
  ]
};

const quoteReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_QUOTE:
      console.log("created quote", action.quote);
  }
  return state;
};

export default quoteReducer;
