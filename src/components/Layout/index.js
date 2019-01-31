import React, { Fragment } from "react";
import SearchBar from "./../../containers/SearchBar";
import List from "./../../containers/Posts/List";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import Loading from "../Loading";

function Layout(props) {
  const { isLoading, posts } = props;

  return (
    <Fragment>
      <SearchBar />
      {isLoading ? <Loading /> : posts.length > 0 ? <List /> : null}
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    posts: state.posts
  };
};
Layout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired
};
export default connect(mapStateToProps)(Layout);
