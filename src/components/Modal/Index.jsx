import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";//!(:@)====>styles;

const Modal = ({ children }) => {

return ReactDOM.createPortal(
  <div className="Modal">
    {children}
  </div>,
  document.getElementById("modal")
) }; export { Modal };