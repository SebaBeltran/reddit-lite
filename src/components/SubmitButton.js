import React from "react";
import PropTypes from "prop-types";

function SubmitButton(props) {
  const { handleSubmit } = props;
  return <button onClick={handleSubmit}>Search</button>;
}

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
export default SubmitButton;
