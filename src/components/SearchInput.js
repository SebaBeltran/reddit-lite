import React from "react";
import PropTypes from "prop-types";

function SearchInput(props) {
  const { handleInput, value } = props;
  return <input value={value} onChange={e => handleInput(e.target.value)} />;
}

SearchInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default SearchInput;
