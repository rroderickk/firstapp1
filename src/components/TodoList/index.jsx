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









// const TodoList = ({ // error, // loading, // todoas, // setTodoas, // searchedTodoas, // completeTodos, // deleteTodos,

// }) => { return ( 
// <React.Fragment>
// <div className="todoList-box"> <h4 className="todoList-banner"> {c} </h4>
//   {/* {error && <p>Error....</p>} */}
//   {/* {loading && <p>Loading....</p>} */}
//   {/* {(!loading && !searchedTodoas.length) && <p>¡Bienvenido crea un todo!....</p>} */}
//   <ul className="todoList-ul">
//     {todos.map((todo) => (
//       <TodoItem 
//         key={`${todo.id}`+Math.random()} 
//         text={todo.text} 
//         completed={todo.completed}
//         // onCompletes={/* () => completeTodos(todoas.text) */}
//         // onDeletes={/*() => deleteTodos(todoas.text) */}
//       />
//     ))}
//   </ul>
//   <div className="todoList-cheatmodes" >
//     <p> {c}{<br />}{a}{<br />}{c} </p>
//   </div>
// </div>
// </React.Fragment>
// ); }
// export { TodoList };