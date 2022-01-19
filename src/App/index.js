import React from 'react';
import { AppUI } from './AppUI';
import { todos } from "../TodoList";


//todo ╔╦╗┬ ┬╔═╗┬ ┬┌┐┌╦═╗┌─┐┌─┐┌─┐┌┬┐╦ ╦┌─┐┌─┐┬┌─
//todo ║║║└┬┘║ ║││││││╠╦╝├┤ ├─┤│   │ ╠═╣│ ││ │├┴┐
//todo ╩ ╩ ┴ ╚═╝└┴┘┘└┘╩╚═└─┘┴ ┴└─┘ ┴ ╩ ╩└─┘└─┘┴ ┴

function useLocalStorage(itenName, initialValue) {

	const localStorageItem = localStorage.getItem(itenName);
	let parsedItem;
	
	if(!localStorageItem) {
		localStorage.setItem(itenName, JSON.stringify(initialValue));
		parsedItem = initialValue;
	} 
	else {
		parsedItem = JSON.parse(localStorageItem);
	}
	
	/*Persistencia *///?           f(_)     <==== estado    <======	   Persistencia   <======||
	const [item, setItem] = React.useState(parsedItem); 
/* Puente *///!    		f(DEL,UPD)=> ||=>  estado  ===> Puente ==> localStorage[estado] =||

	const saveItem = newItem => {								//todo ╔═╗╦ ╦╔═╗╔╗╔╔╦╗╔═╗
		const stringifiedItem = JSON.stringify(newItem);		//todo ╠═╝║ ║║╣ ║║║ ║ ║╣
		localStorage.setItem(itenName, stringifiedItem);		//todo ╩  ╚═╝╚═╝╝╚╝ ╩ ╚═╝
		setItem(newItem);
	}

	return [
		item,
		saveItem
	]

}
//todo ╔╦╗┬ ┬╔═╗┬ ┬┌┐┌╦═╗┌─┐┌─┐┌─┐┌┬┐╦ ╦┌─┐┌─┐┬┌─
//todo ║║║└┬┘║ ║││││││╠╦╝├┤ ├─┤│   │ ╠═╣│ ││ │├┴┐
//todo ╩ ╩ ┴ ╚═╝└┴┘┘└┘╩╚═└─┘┴ ┴└─┘ ┴ ╩ ╩└─┘└─┘┴ ┴

// //?┬  ┌─┐┌─┐┌─┐┬
// //?│  │ ││  ├─┤│
// //?┴─┘└─┘└─┘┴ ┴┴─┘
// //?localStorage.setItem('TODOS_V1', JSON.stringify(todos)); localStorage.setItems('base_datos_version#', JSON,stringify([objeto]))

// 	const localStorageTodos = localStorage.getItem('TODOS_V1');
// 	let parsedTodos;

// 	if(!localStorageTodos) {
	// 		localStorage.setItem('TODOS_V1', JSON.stringify([]));
// 		parsedTodos = [];
// 	} 
// 	else {
// 		parsedTodos = JSON.parse(localStorageTodos);
// 	}

// /*Persistencia *///?           f(_)     <==== estado    <======	   Persistencia   <======||
// /* Puente *///!    		f(DEL,UPD)=> ||=>  estado  ===> Puente ==> localStorage[estado] =||

// 	const saveTodos = newTodos => {								//todo ╔═╗╦ ╦╔═╗╔╗╔╔╦╗╔═╗
// 		const stringifiedTodos = JSON.stringify(newTodos);		//todo ╠═╝║ ║║╣ ║║║ ║ ║╣
// 		localStorage.setItem('TODOS_V1', stringifiedTodos);		//todo ╩  ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// 		setTodoas(newTodos);
// 	}
// //?┬  ┌─┐┌─┐┌─┐┬
// //?│  │ ││  ├─┤│
// //?┴─┘└─┘└─┘┴ ┴┴─┘


function TodoMachine() {

//**┌─┐┌┬┐┌─┐┌┬┐┌─┐
//**└─┐ │ ├─┤ │ ├┤
//**└─┘ ┴ ┴ ┴ ┴ └─┘
	const [todoas, saveTodos] = useLocalStorage('TODOS_V1', []);
	// const [todoas,setTodoas] = React.useState(parsedTodos); 
	// console.log(parsedTodos)
	const [searchValue,setSearchValue] = React.useState(``);

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = []; 
	if (!searchValue.length >=1) {
		searchedTodos = [...todos];
	} else {
		searchedTodos =  todos.filter(todoas => {
			const todoText = todos.text.toLowerCase();
			const searchText  = searchValue.toLowerCase();
			return todoText.includes(searchText);
		})	
	};	

//**┌─┐┌┬┐┌─┐┌┬┐┌─┐ NEW STATE
//**└─┐ │ ├─┤ │ ├┤  new state
//**└─┘ ┴ ┴ ┴ ┴ └─┘	NEW STATE
/*  new obj ==> new todo */

//**┌─┐┌┬┐┌─┐┌┬┐┌─┐ NEW STATE
//**└─┐ │ ├─┤ │ ├┤  new state
//**└─┘ ┴ ┴ ┴ ┴ └─┘	NEW STATE
/*  new obj ==> new todo */

//?┬ ┬┌─┐┌┬┐
//?│ │├─┘ ││
//?└─┘┴  ─┴┘
	const completeTodos = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text); 			//! Lo ubicamos
		const newTodos = [...todos];												//! Copiamos la data

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
		const todoIndex = todos.findIndex(todo => todo.text === text);   //! Encontrar index del elemento si existe en la data [en este caso el arreglo de datos todoas que viene por parametro]
		console.log(todoIndex,todos,text);
		const newT = [...todos];									  //! Nuevo arreglo
		newT[todoIndex].completed = true; 							  //! Verificar si está completado
		newT.splice(todoIndex, 4);									  //! Del nuevo arreglo quito el elemento del cual tengo su index
		console.log('pan',newT)
		saveTodos(newT);											  //! Actualizar estado
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
			// setTodoas={setTodoas}
			todoas={todoas}
			searchedTodos = {searchedTodos}
		/>
	);

}
export { TodoMachine };
