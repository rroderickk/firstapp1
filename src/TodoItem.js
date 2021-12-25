import React from "react";
import "./Todoitem.css";

function TodoItem(text) {
	const onDelete = () => {
		alert("Eliminado" + text.text); //--evento
	};

	return (
		<React.Fragment>
			<li className="TodoListCss2">
				<span className={`Icon Icon-check ${text.completed && "Icon-check--active"}`}
				onClick={text.onCompletes}>
				@
				</span>

				<p className={`TodoItem-p ${text.completed && "TodoItem-p--complete"}`}>
				{text.text}
				</p>

				<span className={`Icon-delete Icon-deleted ${text.completed}`}
				onClick={onDelete}
				>
				$
				</span>
			</li>
		</React.Fragment>
	);
}

export { TodoItem };
