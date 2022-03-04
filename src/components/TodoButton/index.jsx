import React from "react";
import "./TodoButton.scss"; //!(:@)====>styles;

const TodoButton =({ openModal, setOpenModal })=> {
const onClickButton =()=> setOpenModal(!openModal);

// const handleRef =(param)=> window.scrollTo(0, param); //todo mejorar el efecto de scrolling

return (
<>
  <button
  className="TodoButton"
  onClick={()=>{onClickButton(); /*handleRef(1000)*/ }     }
  >
  <span className="span1"></span>
  <span className="span2"></span>
  <span className="span3"></span>
  <span className="span4"></span>
  $$
  </button>
</>
); }; export { TodoButton };