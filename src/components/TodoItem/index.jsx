import React from "react";
import "./Todoitem.scss";//!(:@)====>styles;

const TodoItem =(props)=> { return ( <>
<section>
<div className="todoItem-box">
<li className="todoItem-li">
  <span 
    className={`todoItem-Icon todoItem-Icon-check ${props.completed && "todoItem-Icon-check--active"}`}
    onClick={props.onComplete}>
    @
  </span>
  <span 
    className={`todoItem-Icon-delete todoItem-Icon-deleted`}
    onClick={props.onDelete}>
    $
  </span>
  <p 
    className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
    {props.text}
  </p>
</li>
</div>
</section>
</> ) }; export { TodoItem };