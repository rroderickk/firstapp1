import   React from "react";
import { c,a } from "../Dataset";
import "./TodoList.scss"; //! (:@)====> styles;

const TodoList =(props)=> { return (
<>
<div className="todoList-box"> <h4 className="todoList-banner"> {c} </h4></div>
  <section>
    <ul className="todoList-ul"> {props.children} </ul>
  </section>
<div className="todoList-cheatmodes" > <p> {c}{<br />}{a}{<br />}{c} </p> </div>
{"demo: version 0.0.4"}
</>
); } 
export { TodoList };