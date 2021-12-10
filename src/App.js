import React from "react";
import { TodoSearch } from "./TodoSearch";
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton"; //import logo from './logo.svg'; //import './App.css';
import { TodoList } from "./TodoList";

function TodoMachine() {
	return (
		<React.Fragment>
			{<TodoSearch />}
			{<TodoCounter />}
			{<TodoList />}
		{<CreateTodoButton />}
		</React.Fragment>
	);
}
export { TodoMachine };
