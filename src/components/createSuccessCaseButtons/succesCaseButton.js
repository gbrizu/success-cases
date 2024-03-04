// SuccesCaseButton.js

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ProcessContextProvider } from "../../context/process.context";
import "./buttonStyle.css"; // Create a separate CSS file for styling

const SuccesCaseButton = ({ onClick, children, targetStep }) => {
  const { step } = useContext(ProcessContextProvider);
  const isActive = step === targetStep;

  return (
    <button className={`button ${isActive ? "active" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

SuccesCaseButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  targetStep: PropTypes.number.isRequired,
};

export default SuccesCaseButton;
