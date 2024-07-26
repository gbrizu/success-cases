import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ProcessContextProvider } from "../../context/process.context";
import "./buttonStyle.css"; 

const SuccesCaseButton = ({ onClick, children, targetName }) => {
  const { screen } = useContext(ProcessContextProvider);
  const isActive = screen === targetName;

  return (
    <button className={`button ${isActive ? "active" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

SuccesCaseButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  targetName: PropTypes.number.isRequired,
};

export default SuccesCaseButton;
