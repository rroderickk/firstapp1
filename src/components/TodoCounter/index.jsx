import React from "react";
import "./TodoCounter.scss";//!(:@)====>styles;

const TodoCounter =({totalTodos, completedTodos})=> { 
return ( <>
<section>
<p  className="TodoCounter-Counter">{completedTodos}$${totalTodos}  </p>
<h2 className="TodoCounter-title">        TodoMachine               </h2>
<p  className="TodoCounter-info">  App para agendar las tareas :D   </p>
</section>
</> ) }; export { TodoCounter }; 