import React from "react";
import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return (
        <React.Fragment >
        <p className="TodoCounterCssCounter">{completed}$${total} </p>
        <h2 className="TodoCounterCss">TodoCounter</h2>
        <p className="TodoCounterCss3">App para agendar las tareas :D</p>
        </React.Fragment>
    );
}

export { TodoCounter };