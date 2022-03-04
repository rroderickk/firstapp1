import React from "react";
import "./TodoCounter.scss";//!(:@)====>styles;

const TodoCounter =({totalTodos, completedTodos})=> { 
return ( <>
<section>
<p  className="TodoCounter-Counter">{completedTodos}$${totalTodos}  </p>
<h1 className="TodoCounter-title">        TodoMachine               </h1>
<p  className="TodoCounter-info">  App para agendar las tareas :D   </p>
</section>
</> ) }; export { TodoCounter }; 