import React, { Component } from "react";
import SearchInput from "../../components/SearchInput";
import SubmitButton from "../../components/SubmitButton";
import { connect } from "react-redux";
import { storeSubreddit, getPosts } from "./../../redux/actions/actions";

import PropTypes from "prop-types";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  handleInput = term => {
    this.setState({ input: term });
  };

  handleSubmit = () => {
    if (this.state.input) {
      const { storeSubreddit, getPosts } = this.props;
      storeSubreddit(this.state.input);
      getPosts(this.state.input);
      this.setState({ input: "" });
    }
  };

  render() {
    return (
      <div className="searchBar">
        <SearchInput value={this.state.input} handleInput={this.handleInput} />
        <SubmitButton handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: subreddit => dispatch(getPosts(subreddit)),
  storeSubreddit: subreddit => dispatch(storeSubreddit(subreddit))
});

SearchBar.propTypes = {
  getPosts: PropTypes.func.isRequired,
  storeSubreddit: PropTypes.func.isRequired,
  className: PropTypes.string
};
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
