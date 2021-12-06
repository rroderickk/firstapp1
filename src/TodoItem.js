import React from "react";

function TodoItem(props) {
	return (
		<React.Fragment>
			<li>
				{props.text}
			</li>
		</React.Fragment>
	);
}

export { TodoItem };