import React from "react";
import { TodoList    } from "../components/TodoList";    import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch  } from "../components/TodoSearch";  import { TodoButton  } from "../components/TodoButton";
import { TodoContext } from '../components/TodoContext'; import { TodoItem    } from '../components/TodoItem';
import { Modal       } from '../components/Modal'; //? document.body.style.zoom = "200%";

/*//!todo tamañoventana
function tamVentana() {
  var tam = [0, 0];
  if (typeof window.innerWidth != 'undefined')
  {
    tam = [window.innerWidth,window.innerHeight];
  }
  else if (typeof document.documentElement != 'undefined'
      && typeof document.documentElement.clientWidth !=
      'undefined' && document.documentElement.clientWidth != 0)
  {
    tam = [
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    ];
  }
  else   {
    tam = [
      document.getElementsByTagName('body')[0].clientWidth,
      document.getElementsByTagName('body')[0].clientHeight
    ];
  }
  return tam;
}
const tam = tamVentana();

const zoom = (param) => document.body.style.zoom = param;

tam[0]<500 ? zoom("100%") : zoom("133%");
*/


const Home =()=> { const {
  error, loading, searchedTodos,
  completeTodo, deleteTodo,
  openModal,
} = React.useContext(TodoContext); 

return ( <> 
{<TodoSearch/>}
{<TodoCounter/>}

{<TodoList>
  {error     && <p>Desespérate, hubo un error...                    </p>}
  {loading   && <p>Estamos cargando, no desesperes...               </p>}
  {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!  </p>}

        {searchedTodos.map(todo => (
                              <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                              />
        ))}
</TodoList>}

{!!openModal && (
  <Modal>
    {<p>
      {searchedTodos[0]?.text}
    </p>}
  </Modal>
)}

{<TodoButton />}


{<h1>footer</h1>}

</> ); }; export { Home };