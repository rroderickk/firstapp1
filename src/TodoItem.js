import React from "react";

function TodoItem(props) {
	return (
		<React.Fragment>
			<li className="TodoListCss1">
				{props.text}
			</li>
		</React.Fragment>
	);
}

export { TodoItem };