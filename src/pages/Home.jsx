import React, { useState, useEffect} from "react";
import { TodoContext } from "../components/TodoContext"; 
import { TodoHeader  } from "../components/TodoHeader";
import { TodoSearch  } from "../components/TodoSearch"; 
import { TodoCounter } from "../components/TodoCounter";
import { TodoList    } from "../components/TodoList";    
import { TodoItem    } from "../components/TodoItem";
import { Modal       } from "../components/Modal"; //? document.body.style.zoom = "200%";
import { TodoForm    } from "../components/TodoForm";
import { TodoButton  } from "../components/TodoButton";
import "../_vars.scss";

const Home =()=> { 
const [width, setWidth] = useState(zoom);   
var zoom=window.innerWidth;                 //? ██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗███████╗
useEffect(() => {                           //! ██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝██╔════╝
var zoom=window.innerWidth;                 //@ ██║ █╗ ██║██║   ██║██████╔╝█████╔╝ ███████╗
zoom<430?  zoom="90%" : zoom="202%";        //* ██║█z█╗██║██║oom██║██╔══██╗██╔═██╗ ╚════██║
// console.log(zoom, window.innerWidth)     //! ╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗███████║
setWidth(document.body.style.zoom=zoom)     //?  ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
}, [zoom]);

const { 
  error, 
  loading, 
  searchedTodos, 
  completeTodo, 
  deleteTodo,
  openModal,
  totalTodos, 
  completedTodos,
  searchValue,
  setSearchValue,
} = React.useContext(TodoContext); return ( <> 

<TodoHeader>
  <TodoSearch  searchValue={searchValue} setSearchValue={setSearchValue} />
  <TodoCounter totalTodos={totalTodos}   completedTodos={completedTodos} />
</TodoHeader>

<TodoList>
  {error     && <p>Desespérate, hubo un error...                    </p>}
  {loading   && <p>Cargando, no desesperes...               </p>}
  {(!loading && !searchedTodos.length) && <p>¡Crea tu primer Tarea con el boton $$!  </p>}

  {searchedTodos.map( (todo,index)=> (
    <TodoItem
      key={index}
      text={todo.text}
      completed={todo.completed}
      onComplete={() => completeTodo(todo.text, todo.id)}
      onDelete={() =>   deleteTodo(todo.text,   todo.id)}
    />
  ))}
</TodoList>

{!!openModal && ( <Modal><TodoForm/></Modal> )}

<TodoButton />

<footer><h6>footer</h6></footer>

</> ); }; export { Home };