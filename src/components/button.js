import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { label, clickFn, addClass } = props;

  return (
    <button className={`prev-next-button ${addClass}`} onClick={clickFn}>
      <span className="button-text">{label}</span>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  clickFn: PropTypes.func.isRequired,
  addClass: PropTypes.string.isRequired
};


export default Button;