import React from "react";
import { TodoItem } from "./TodoItem";

const todos = [
	{ text: "Entrenar", completed: false },
	{ text: "Correr en la bici", completed: false },
	{ text: "Producir $$$$", completed: false },
	{ text: "Que mas?", completed: false },
];

function TodoList() {
	return (
		<React.Fragment>
			<h4>IiniciaTOdo</h4>

			<ul>
				{todos.map((todo) => (
					<TodoItem key={todo.text} text={todo.text} />
				))}
			</ul>

			<h4>Fin TodoList</h4>
		</React.Fragment>
	);
}

export { TodoList };
