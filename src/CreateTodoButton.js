import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
	const onClickButton = (msg) => {

		// abrir modal
	};return (
		<React.Fragment>
			<button
				className="CreateTodoButtonCss"
				onClick={ () => onClickButton("que es un modal ? msg") }
			><span className="span1"></span><span className="span2"></span><span className="span3"></span><span className="span4"></span>
				$$
			</button>
		</React.Fragment>
	);
}

export { CreateTodoButton };
