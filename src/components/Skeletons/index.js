import React from "react";
import "./index.scss";//!(:@)====>styles;

const TodosError =()=> { return ( <>
  <p>Desespérate, hubo un error...</p>
</> ) };
  
const TodosLoading =()=> { return ( <>
<div className="loading-todo--container">
  <span className="loading-todo--completeIcon"></span>
    <p  className="loading-todo--text">Cargando...</p>
  <span className="loading-todo--deleteIcon"></span>
</div>
</> ) };

const TodosEmpty =()=> { return ( <>
  <p>¡Crea tu primer Tarea con el boton $$!</p>
</> ) };

export {TodosError, TodosLoading, TodosEmpty};