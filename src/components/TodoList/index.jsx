import   React from "react";
import { c,a } from "../Dataset";
import "./TodoList.scss";//!(:@)====>styles;

const TodoList =(props)=> { return ( <>

<section>
<div className="todoList-box"><h4 className="todoList-banner">{c}</h4></div>
  <ul className="todoList-ul">{props.children}</ul>
<div className="todoList-cheatmodes"><p>{c}{<br />}{a}{<br/>}{c}</p>{"demo: version 0.0.5"}</div>
</section>

</> ) }; export { TodoList };