import React from "react";
import "./Todoitem.scss"; //!(:@)====>styles;

const TodoItem = (props) => { return (

<React.Fragment>
<div className="todoItem-box">
<li className="todoItem-li">
  <span 
    className={`todoItem-Icon todoItem-Icon-check ${props.completed && "todoItem-Icon-check--active"}`}
    onClick={props.onComplete}>
    @
  </span>
  <p 
    className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
    {props.text}
  </p>
  <span 
    className={`todoItem-Icon-delete todoItem-Icon-deleted`}
    onClick={props.onDelete}>
    $
  </span>
</li>
</div>
</React.Fragment>
); }
export { TodoItem };