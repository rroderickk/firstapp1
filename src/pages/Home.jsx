import React, { useState, useEffect} from "react";
import { useTodos    } from "./useTodos"; 
import { TodoHeader  } from "@components/TodoHeader";
import { TodoSearch  } from "@components/TodoSearch"; 
import { TodoCounter } from "@components/TodoCounter";
import { TodoList    } from "@components/TodoList";    
import { TodoItem    } from "@components/TodoItem";
import { Modal       } from "@components/Modal"; //? document.body.style.zoom = "200%";
import { TodoForm    } from "@components/TodoForm";
import { TodoButton  } from "@components/TodoButton";
import { TodosError, TodosLoading, TodosEmpty  } from "@components/Skeletons";
import "../_vars.scss";//!(:@)====>styles;

const Home =()=> { 
const [width, setWidth] = useState(zoom);   
var zoom=window.innerWidth;                 //? ██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗███████╗
useEffect(() => {                           //! ██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝██╔════╝
var zoom=window.innerWidth;                 //@ ██║ █╗ ██║██║   ██║██████╔╝█████╔╝ ███████╗
zoom<430?  zoom="90%" : zoom="202%";        //* ██║█z█╗██║██║oom██║██╔══██╗██╔═██╗ ╚════██║
// console.log(zoom, window.innerWidth)     //! ╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗███████║
setWidth(document.body.style.zoom=zoom)     //?  ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
}, [zoom]);

const { error, loading, searchedTodos, completeTodo, 
  deleteTodo, openModal, totalTodos, completedTodos,
  searchValue, setSearchValue,
  setOpenModal,
  addTodo,
} = useTodos(); return ( <> 

<TodoHeader>
  <TodoSearch  searchValue={searchValue} setSearchValue={setSearchValue} />
  <TodoCounter totalTodos={totalTodos}   completedTodos={completedTodos} />
</TodoHeader>

{/* <TodoList
        error={error               }
      loading={loading             }
searchedTodos={searchedTodos       }
      onError={()=> <TodosError  />}
    onLoading={()=> <TodosLoading/>}
 onEmptyTodos={()=> <TodosEmpty  />}
render={ (todo,index)=> (
    <TodoItem
      key={index}
      text={todo.text}
      completed={todo.completed}
      onComplete={() => completeTodo(todo.text, todo.id)}
      onDelete={() =>   deleteTodo(todo.text,   todo.id)}
    />)}
/> */}

<TodoList>
  {error     && <TodosError/>}
  {loading   && <TodosLoading/>}
  {(!loading && !searchedTodos.length) && <TodosEmpty/>}

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

{!!openModal && (
<Modal>
  <TodoForm addTodo={addTodo} openModal={openModal} setOpenModal={setOpenModal}/>
</Modal> 
)}

<TodoButton  openModal={openModal} setOpenModal={setOpenModal} />

<footer style={{color: "white"}}>
  <h6>dont look the console</h6>
</footer>
</> ); }; export { Home };