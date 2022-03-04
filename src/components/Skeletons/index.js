import React from "react";

const TodosError =()=> { return ( <>
  <p>Desespérate, hubo un error...</p>
</> ) };
  
const TodosLoading =()=> { return ( <>
  <p>Cargando, no desesperes...</p>
</> ) };

const TodosEmpty =()=> { return ( <>
  <p>¡Crea tu primer Tarea con el boton $$!</p>
</> ) };

export {TodosError, TodosLoading, TodosEmpty};