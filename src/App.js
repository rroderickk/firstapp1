import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton"; //import logo from './logo.svg'; //import './App.css';

function TodoMachine() {
	return (
		<React.Fragment>
			{<TodoSearch />}

			{<TodoCounter />}

			<input placeholder="todos" />
			{<CreateTodoButton />}

			{<TodoList />}
		</React.Fragment>
	);
}
export { TodoMachine };
