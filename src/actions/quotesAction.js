export const CREATE_QUOTE = "CREATE_QUOTE";

export const createQuotes = quote => {
  return (dispatch, getState) => {
    dispatch({ type: CREATE_QUOTE, quote });
  };
};
