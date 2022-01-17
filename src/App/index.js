import React from 'react';
import { AppUI } from './AppUI';
import { todos } from "../TodoList";
	
function TodoMachine() {
	const [todoas,setTodoas] = React.useState(todos); 
	const [searchValue,setSearchValue] = React.useState(``);

	const completedTodos = todoas.filter(todo => !!todo.completed).length;
	const totalTodos = todoas.length;

	let searchedTodos = []; 
	if (!searchValue.length >=1) {
		searchedTodos = [...todoas];
	} else {
		searchedTodos =  todoas.filter(todoas => {
			const todoText = todoas.text.toLowerCase()
			const searchText  = searchValue.toLowerCase()
			return todoText.includes(searchText);
		})
	};
	
	return (
		<AppUI 
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			totalTodos={totalTodos}
			completedTodos={completedTodos}
			setTodoas={setTodoas}
			todoas={todoas}
			searchedTodos = {searchedTodos}
		/>
	);
}
export { TodoMachine };
