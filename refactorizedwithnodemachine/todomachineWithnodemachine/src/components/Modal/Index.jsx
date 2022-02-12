import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Modal = ({ children }) => {

return ReactDOM.createPortal(
  <div className="Modal">
    {children}
    <p>alksdhfaklsfd</p>
  </div>,
  document.getElementById("modal")
); }; 
export { Modal };