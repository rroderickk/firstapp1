import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const useTodos =()=> {
const {
  item: todos,
  saveItem: saveTodos,
  loading,
  error,
} = useLocalStorage('TODOS_V1', []);
const [searchValue, setSearchValue] = React.useState('');
const [openModal,     setOpenModal] = React.useState(false);

const completedTodos = todos.filter(todo => !!todo.completed).length;
const totalTodos = todos.length;

let searchedTodos = [];

if (!searchValue.length >= 1) {
  searchedTodos = todos;
  } 
  else {
  searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
};

const completeTodo =(text,id)=> {
  // console.log(id) //todo debuggar
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos];
  // newTodos[todoIndex].completed =!newTodos[todoIndex].completed
  newTodos[todoIndex].completed === true ?
  newTodos[todoIndex].completed = false :
  newTodos[todoIndex].completed = true;
  saveTodos(newTodos);
};

const addTodo =(text)=> {
  const newTodos = [...todos];
  newTodos.push({
    id: newTodos.length + 1,
    completed: false,
    text,
  });
  saveTodos(newTodos);
  // console.log(newTodos) //todo debuggar
};

const deleteTodo =(text,id)=> {
  // console.log(id) //todo debuggar
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos];
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
};

  return {
    loading, error, totalTodos,
    completedTodos, searchValue,
    setSearchValue, searchedTodos,
    completeTodo,   deleteTodo,
    openModal,      setOpenModal,
    addTodo,
  } 
}; export { useTodos };