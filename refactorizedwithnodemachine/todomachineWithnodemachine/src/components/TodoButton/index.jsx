import React from "react";
import { TodoContext } from '../TodoContext';
import "./TodoButton.scss"; //!(:@)====>styles;

const TodoButton    =()=> {

const { openModal, setOpenModal } = React.useContext(TodoContext);

const onClickButton =()=> setOpenModal(!openModal);

const handleRef     =(param)=> window.scrollTo(0, param);

return (
<>
  <button
  className="TodoButton"
  onClick={     ()=>{onClickButton(); handleRef(1000)}     }
  >
  <span className="span1"></span>
  <span className="span2"></span>
  <span className="span3"></span>
  <span className="span4"></span>
  $$
  </button>
</>
); }; export { TodoButton };