import React from 'react';
import { AppUI } from './AppUI';
import { todos } from "../TodoList";
	
function TodoMachine() {
//?┬  ┌─┐┌─┐┌─┐┬
//?│  │ ││  ├─┤│
//?┴─┘└─┘└─┘┴ ┴┴─┘
//?localStorage.setItem('TODOS_V1', JSON.stringify(todos)); localStorage.seteaItems('base_datos_version#', JSON,stringify(todos))

		const localStorageTodos = localStorage.getItem('TODOS_V1');
		let parsedTodos;
	
		if(!localStorageTodos) {
			localStorage.setItem('TODOS_V1', JSON.stringify([]));
			parsedTodos = [];
		} 
		else {
			parsedTodos = JSON.parse(localStorageTodos);
		}
	
		/* Puente */
		const saveTodos = newTodos => {
			const stringifiedTodos = JSON.stringify(newTodos);
			localStorage.setItem('TODOS_V1', stringifiedTodos);
			setTodoas(newTodos);
		}
//?┬  ┌─┐┌─┐┌─┐┬
//?│  │ ││  ├─┤│
//?┴─┘└─┘└─┘┴ ┴┴─┘

//**┌─┐┌┬┐┌─┐┌┬┐┌─┐
//**└─┐ │ ├─┤ │ ├┤
//**└─┘ ┴ ┴ ┴ ┴ └─┘
	const [todoas,setTodoas] = React.useState(parsedTodos); 
	console.log(parsedTodos)
	const [searchValue,setSearchValue] = React.useState(``);

	const completedTodos = todoas.filter(todo => !!todo.completed).length;
	const totalTodos = todoas.length;

	let searchedTodos = []; 
	if (!searchValue.length >=1) {
		searchedTodos = [...todoas];
	} else {
		searchedTodos =  todoas.filter(todoas => {
			const todoText = todoas.text.toLowerCase();
			const searchText  = searchValue.toLowerCase();
			return todoText.includes(searchText);
		})	
	};	
//**┌─┐┌┬┐┌─┐┌┬┐┌─┐
//**└─┐ │ ├─┤ │ ├┤
//**└─┘ ┴ ┴ ┴ ┴ └─┘	

//?┬ ┬┌─┐┌┬┐
//?│ │├─┘ ││
//?└─┘┴  ─┴┘
	const completeTodos = (text) => {
		const todoIndex = todoas.findIndex(todo => todo.text === text); 			//! Lo ubicamos
		const newTodos = [...todoas];												//! Copiamos la data

		newTodos[todoIndex].completed === true ?  	//! ┌─┐┌─┐┌┬┐┌─┐┬─┐┌─┐┌┐ ┌─┐┬─┐ ! ┌┬┐┬┌─┐┌─┐┬┌┐┌┌─┐  ┌─┐┬ ┬┌─┐┌─┐┬┌─ ! Validamos si está completado
		newTodos[todoIndex].completed = false :		//! │  │ ││││├─┘├┬┘│ │├┴┐├─┤├┬┘ ! ││││└─┐└─┐│││││ ┬  │  ├─┤├┤ │  ├┴┐ 
		newTodos[todoIndex].completed = true;		//! └─┘└─┘┴ ┴┴  ┴└─└─┘└─┘┴ ┴┴└─ ! ┴ ┴┴└─┘└─┘┴┘└┘└─┘  └─┘┴ ┴└─┘└─┘┴ ┴

		saveTodos(newTodos);															//! Actualizamos la data
		/* todos[todoIndex] = {
			text: todos[todoIndex].text,
			completed: true,
			}
		*/
	}
//?┬ ┬┌─┐┌┬┐
//?│ │├─┘ ││
//?└─┘┴  ─┴┘

//! ┌┬┐┌─┐┬
//!  ││├┤ │
//! ─┴┘└─┘┴─┘
	const deleteTodos = (text) => {
		const todoIndex = todoas.findIndex(todo => todo.text === text);   //! Encontrar index del elemento si existe en la data [en este caso el arreglo de datos todoas que viene por parametro]
		const newTodos = [...todoas];									  //! Nuevo arreglo
		todoas[todoIndex].completed = true; 							  //! Verificar si está completado
		newTodos.splice(todoIndex, 1);									  //! Del nuevo arreglo quito el elemento del cual tengo su index
		console.log('pan',newTodos)
		saveTodos(newTodos);											  //! Actualizar estado
		// function deleteTodo(text){
			// 	const newTodos = todos.filter(todo => todo.text !== text)
			// 	console.log(newTodos)
			// 	setTodoas(newTodos) 									  //!Ejemplo que noMutaLaLista
			// }
	}
//! ┌┬┐┌─┐┬
//!  ││├┤ │
//! ─┴┘└─┘┴─┘




	return (
		<AppUI 
			//! Esto es un paseo de etiquetas
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			totalTodos={totalTodos}
			completeTodos={completeTodos}
			completedTodos={completedTodos}
			deleteTodos={deleteTodos}
			setTodoas={setTodoas}
			todoas={todoas}
			searchedTodos = {searchedTodos}
		/>
	);

}
export { TodoMachine };
