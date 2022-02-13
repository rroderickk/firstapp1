import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.scss"; //!(:@)====>styles;


const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, openModal, setOpenModal } = React.useContext(TodoContext);

  const onSubmit =(event)=> { 
    event.preventDefault();
    if(newTodoValue.length <= 0)return;
    addTodo(newTodoValue); 
    setOpenModal(false); //todo mejorar
  };
  const onChange =(event)=> setNewTodoValue(event.target.value); 
  const onCancel =()=>      setOpenModal(false);

return (
<form onSubmit={onSubmit}>
  <label className="TodoForm-label">NEW TODO</label>

  <textarea 
    className="TodoForm-textarea" 
    placeholder="nueva tarea..." 
    value={newTodoValue}
    onChange={onChange}
  />

  <div className="TodoForm-button">
    <button className="TodoForm-button-add" type="button" onClick={onCancel}>Cancelar</button>  
    <button className="TodoForm-button-cancel" type="submit">Añadir</button>  
  </div>
</form>
) }; export { TodoForm };