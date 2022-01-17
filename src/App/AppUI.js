import React from 'react';
import { TodoSearch } from "../TodoSearch";
import { TodoCounter } from "../TodoCounter";
import { CreateTodoButton } from "../CreateTodoButton"; //import logo from './logo.svg'; //import './App.css';
import { TodoList } from "../TodoList";


function AppUI({
    searchValue,
    setSearchValue,
    totalTodos,
    completedTodos,
    setTodoas,
    todoas,
    searchedTodos ,
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
                searchedTodoas={searchedTodos}
				todoas={todoas}
				setTodoas={setTodoas}
			/>}
			{<CreateTodoButton />}
			{/*//!-- footer -----------------// */}
			{<img src='../SharedScreenshot.svg' style={{'width': 10+'%', 'display': 'block', 'border-radius': 9+'rem', 'background-color': 'red', 'margin-left': 'auto', 'margin-right': 'auto'}} />}
		</React.Fragment>
        
    );

};

export { AppUI }