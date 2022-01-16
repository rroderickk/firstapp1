import React from "react";
import { TodoSearch } from "./TodoSearch";
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton"; //import logo from './logo.svg'; //import './App.css';
import { todos,TodoList } from "./TodoList";

function TodoMachine() {
	const [todoas,setTodoas] = React.useState(todos); 
	const [searchValue,setSearchValue] = React.useState("");

	const completedTodos = todoas.filter(todo => !!todo.completed).length;
	const totalTodos = todoas.length;

	let searchedTodos = []; 
	if (!searchValue.length >=1) {
		searchedTodos = todoas;
	} else {
		searchedTodos =  todoas.filter(todoas => {
			const todoText = todoas.text.toLowerCase()
			const searchText  = searchValue.toLowerCase()
			return todoText.includes(searchText);
		})
	};
	
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
			/>}
			{<CreateTodoButton />}
			{/*//!-- footer -----------------// */}
			{<img src='../SharedScreenshot.svg' style={{'width': 10+'%', 'display': 'block', 'border-radius': 9+'rem', 'background-color': 'red', 'margin-left': 'auto', 'margin-right': 'auto'}} />}
		</React.Fragment>
	);
}
export { TodoMachine };
