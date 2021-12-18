import React from "react";
import "./Todoitem.css";

function TodoItem(key,text,complete) {
	const onComplete = () => {
		alert("Completado" + text.text); //--evento
	};
	const onDelete = () => {
		alert("Eliminado" + text.text); //--evento
	};

	return (
		<React.Fragment>
			<li className="TodoListCss2">
				<span className={`Icon Icon-check ${key.completed && "Icon-check--active"}`}
				onClick={onComplete}>
				@
				</span>

				<p className={`TodoItem-p ${key.completed && "TodoItem-p--complete"}`}>
				{key.text}
				</p>

				<span className={`Icon-delete Icon-deleted ${key.completed}`}
				onClick={onDelete}
				>
				$
				</span>
			</li>
		</React.Fragment>
	);
}

export { TodoItem };
