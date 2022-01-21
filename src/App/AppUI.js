import React from 'react';
import { TodoSearch } from "../TodoSearch";
import { TodoCounter } from "../TodoCounter";
import { CreateTodoButton } from "../CreateTodoButton"; //import logo from './logo.svg'; //import './App.css';
import { TodoList } from "../TodoList";


function AppUI({
	loading,	
	error,	
	searchValue,
	setSearchValue,
	totalTodos,
	completedTodos,
	completeTodos,
	deleteTodos,
	setTodoas,
	todoas,
	searchedTodos,
	//!Primera estacion del paseo
}) {

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
				loading = {loading}
				error = {error}
				searchedTodoas={searchedTodos}
				todoas={todoas}
				setTodoas={setTodoas}
				completeTodos={completeTodos}
				deleteTodos={deleteTodos}
				//!Segunda estacion del paseo
			/>}
			{<CreateTodoButton />}
			{/*//!-- footer -----------------// */}
			{/* {<img src='../SharedScreenshot.svg' style={{'width': 10+'%', 'display': 'block', 'border-radius': 9+'rem', 'background-color': 'red', 'margin-left': 'auto', 'margin-right': 'auto'}} />} */}
		</React.Fragment>
        
    );

};

export { AppUI }