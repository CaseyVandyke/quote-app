import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteMap from "./QuoteMap";

class QuoteList extends Component {
  render() {
    const { quotes } = this.props;
    return <QuoteMap quotes={quotes} />;
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    quotes: state.quotes.quotes
  };
};

export default connect(mapStateToProps)(QuoteList);
