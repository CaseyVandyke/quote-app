import React, { Component } from "react";
import { createQuotes } from "../actions/quotesAction";
import { connect } from "react-redux";

class CreateQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
  }

  handleQuoteChange = e => {
    this.setState = {
      quote: e.target.value
    };
  };

  handleAuthorChange = e => {
    this.setState = {
      author: e.target.value
    };
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createQuote(this.state);
  };
  render() {
    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <label htmlFor="quote" />
        <input
          id="quote"
          onChange={this.handleQuoteChange}
          type="text"
          placeholder="Enter favorite quote"
        />
        <label htmlFor="author" />
        <input
          id="author"
          onChange={this.handleAuthorChange}
          type="text"
          placeholder="Enter the author"
        />
        <button>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createQuote: quote => dispatch(createQuotes(quote))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateQuote);
