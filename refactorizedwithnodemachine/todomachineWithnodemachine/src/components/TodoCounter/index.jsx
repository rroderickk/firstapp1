import React           from "react";
import { TodoContext } from '../TodoContext';
import './TodoCounter.scss'; //! (:@)====> styles;

const TodoCounter =()=> { 
const { totalTodos, completedTodos } = React.useContext(TodoContext);
return (
<>
<p  className="TodoCounter-Counter">{completedTodos}$${totalTodos}  </p>
<h2 className="TodoCounter-title">        TodoCounter               </h2>
<p  className="TodoCounter-info">  App para agendar las tareas :D   </p>
</>
); }
export { TodoCounter };