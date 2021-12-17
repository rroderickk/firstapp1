import React from "react";
import  "./Todoitem.css";

function TodoItem(props) {
	return (
		<React.Fragment>
			<li className="TodoListCss2">
				<span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>@</span>


				<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>


				<span className={`Icon-delete Icon-deleted ${props.completed}`}>$</span>

			</li>
		</React.Fragment>
	);
}

export { TodoItem };