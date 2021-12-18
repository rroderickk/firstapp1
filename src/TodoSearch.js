import React from "react";
import "./TodoSearch.css";

function TodoSearch( { searchValue, setSearchValue } ) {
	const onSearchValueChange = (e) => { //--Guardando el contenido del evento e  
		setSearchValue(e.target.value); //--Guardando el contenido del evento e y mostrando su target value
	};
	/* ReRenderizando el componente */
	
	// const [searchValue, editSearchValue] = React.useState(""); //-- Estado anterior y estado editado 
	/* const onSearchValueChange = (event) => {console.log(event.target.value);}
	const onSearchValueChange = (e) => {console.log(e.target.value);} */

	return (
		<React.Fragment>
			<h2 className="TodoSearchCss">
				TodoSearch
				<input 
					autoFocus 
					className="TodoSearchCssBarr"
					placeholder="$$$$$$$$$$$$$$$$$"
					value={searchValue} //-- Estado anterior
					onChange={onSearchValueChange} //-- Funcion que Cambia el contenido del estado anterior => estado Editado
				/>
				<p>{searchValue}</p>
			</h2>
		</React.Fragment>
	);
}

export { TodoSearch };
