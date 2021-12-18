import React from "react";
import { TodoSearch } from "./TodoSearch";
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton"; //import logo from './logo.svg'; //import './App.css';
import { todos,TodoList } from "./TodoList";


function TodoMachine() {
	const [todoas,setTodoas] = React.useState(todos)
	const [searchValue,setSearchValue] = React.useState("")

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = []; 
	if (!searchValue.length >=1) {
		searchedTodos = todos;
	} else {
		searchedTodos =  todoas.filter(todoas => {
			const todoText = todoas.text.toLowerCase()
			const searchText  = searchValue.toLowerCase()
			return todoText.includes(searchText);
		})
	};
	
	const completeTodos = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text == text);
		todos[todoIndex].completed = true;
		/* todos[todoIndex] = {
			text: todos[todoIndex].text,
			completed: true,
		} */

		const newTodos = [...todos];
		newTodos[todoIndex].completed = true;
		setTodoas(newTodos);

	}

	return (
		<React.Fragment>
			{<TodoSearch 
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>}
			{<TodoCounter 
				total={totalTodos}
				completed={completedTodos}
			/>}
			{<TodoList 
				todoas={searchedTodos}
				setTodoas={setTodoas}
				onComplete={ () => completeTodos(todos.text)  }
			/>}
		{<CreateTodoButton />}
		</React.Fragment>
	);
}
export { TodoMachine };
