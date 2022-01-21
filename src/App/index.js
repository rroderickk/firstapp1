import React from 'react';
import { AppUI } from './AppUI';
// import { todos } from "../TodoList";

//!╔═╗┬ ┬┌─┐┌┬┐┌─┐╔╦╗╦ ╦┌─┐┌─┐╦╔═┌─┐
//!║  │ │└─┐ │ │ │║║║╠═╣│ ││ │╠╩╗└─┐
//!╚═╝└─┘└─┘ ┴ └─┘╩ ╩╩ ╩└─┘└─┘╩ ╩└─┘
function useLocalStorage(itemName, initialValue) {
	const [error,setError] = React.useState(false); 
	const [loading,setLoading] = React.useState(true); 
	const [item,setItem] = React.useState(initialValue); 

	React.useEffect(() => {
		setTimeout (()=> {
			try {	
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				if(!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = [];
				} 
				else {
					// throw new Error('wtf') //! Probar error
					parsedItem = JSON.parse(localStorageItem);
				}

				setItem(parsedItem);
				setLoading(false);
			} 
			catch(error) {	
				setError(error);
			};
		}, 1000);
	});

	const saveItem = newItem => {														
		try {	
			const stringifiedItem = JSON.stringify(newItem); 	//todo ╔═╗╦ ╦╔═╗╔╗╔╔╦╗╔═╗
			localStorage.setItem(itemName, stringifiedItem);	//todo ╠═╝║ ║║╣ ║║║ ║ ║╣
			setItem(newItem);																	//todo ╩  ╚═╝╚═╝╝╚╝ ╩ ╚═╝
		} 
		catch(error) {	
			setError(error);
		};
		
	};

	return {
		item,
		saveItem,
		loading,
		error,
	};

};
//!╔═╗┬ ┬┌─┐┌┬┐┌─┐╔╦╗╦ ╦┌─┐┌─┐╦╔═┌─┐
//!║  │ │└─┐ │ │ │║║║╠═╣│ ││ │╠╩╗└─┐
//!╚═╝└─┘└─┘ ┴ └─┘╩ ╩╩ ╩└─┘└─┘╩ ╩└─┘


function TodoMachine() {
//**┌─┐┌┬┐┌─┐┌┬┐┌─┐
//**└─┐ │ ├─┤ │ ├┤
//**└─┘ ┴ ┴ ┴ ┴ └─┘
	const {
		item: todoas,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage('TODOS_V1', []);
	// console.log(todoas)
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
		const todoIndex = todoas.findIndex(todo => todo.text === text); //! Ubicamos(index)
		const newTodos = [...todoas];																		//! Copiamos la data(ArrayDeTodos)

		newTodos[todoIndex].completed === true ?  //! ┌─┐┌─┐┌┬┐┌─┐┬─┐┌─┐┌┐ ┌─┐┬─┐ ! ┌┬┐┬┌─┐┌─┐┬┌┐┌┌─┐  ┌─┐┬ ┬┌─┐┌─┐┬┌─ ! Validamos si está completado
		newTodos[todoIndex].completed = false :		//! │  │ ││││├─┘├┬┘│ │├┴┐├─┤├┬┘ ! ││││└─┐└─┐│││││ ┬  │  ├─┤├┤ │  ├┴┐ 
		newTodos[todoIndex].completed = true;			//! └─┘└─┘┴ ┴┴  ┴└─└─┘└─┘┴ ┴┴└─ ! ┴ ┴┴└─┘└─┘┴┘└┘└─┘  └─┘┴ ┴└─┘└─┘┴ ┴

		saveTodos(newTodos);															//! Actualizamos la data y estado
	}
//?┬ ┬┌─┐┌┬┐
//?│ │├─┘ ││
//?└─┘┴  ─┴┘

//! ┌┬┐┌─┐┬
//!  ││├┤ │
//! ─┴┘└─┘┴─┘
	const deleteTodos = (text) => {
		const todoIndex = todoas.findIndex(todo => todo.text === text);   //! Encontrar index del elemento si existe en la data [en este caso el arreglo de datos todoas que viene por parametro]
		const newTodos = [...todoas];									  									//! Nuevo arreglo
		todoas[todoIndex].completed = true; 							  							//! Verificar si está completado
		newTodos.splice(todoIndex, 1);									  								//! Del nuevo arreglo quito el elemento del cual tengo su index
		console.log('pan',newTodos)
		saveTodos(newTodos);														//!	==============>	 Actualizar estado
	}
//! ┌┬┐┌─┐┬
//!  ││├┤ │
//! ─┴┘└─┘┴─┘

	return (
		<AppUI 
			//! Esto es un paseo de etiquetas
			loading={loading}
			error={error}
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

	//? Manejo de efectos(eventos externos)
	// React.useEffect( () => { 						//?==> useEffect Renderiza antes, useLayout Renderiza despues
	// 	console.log('useEffect);
	// }, [totalTodos]); 										//?==> Si le envio el array el useEffect solo renderiza una sola vez

//** Capitulo uno: este eres tu queriendo spammear el chat de Platzi live un jueves por la tarde */
//** Capitulo uno: Para mandarle muchos besitos a angela; entonces: en la consola del nav*/
//! Accedemos buscamos el valor del textArea donde se envian los mensajes en el Chat*/
	// const hola = document.getElementsByClassName("ChatForm-field")
//** Donde hola es el array; y apuntandole a hola[0].value  podemos guardar el emoji  :* como string */
	// function mandar(besitos) { for ( let i= 0 ; i <= besitos; i++ ) { hola[0].value += i  } }; mandar(besitos=1000)
//? (() => Platzi.forEach( (array) => console.log("Saludando: ", array.users)))(Platzi)

// 	//?┬  ┌─┐┌─┐┌─┐┬
// 	//?│  │ ││  ├─┤│
// 	//?┴─┘└─┘└─┘┴ ┴┴─┘
// 	//?localStorage.setItem('TODOS_V1', JSON.stringify(todos)); localStorage.seteaItems('base_datos_version#', JSON,stringify(todos))

// 	const localStorageTodos = localStorage.getItem('TODOS_V1');
// 	let parsedTodos;

// 	if(!localStorageTodos) {
// 		localStorage.setItem('TODOS_V1', JSON.stringify([]));
// 		parsedTodos = [];
// 	} 
// 	else {
// 		parsedTodos = JSON.parse(localStorageTodos);
// 	}

// 	//todo Como se logra la persistencia de datos? */	
// 	/** localStorage es un objeto mas que contiene el navegador, y contiene funciones dentro que podemos utilizar
// 	/** Storage {TODOS_V1: '[]', length: 1};  //!   <=== Este es el objeto que tenemos al verlo con console.log(localStorage)
// 		TODOS_V1: "[]" 													//! <=== ( Y esto es lo que contiene array vacio)
// 		length: 1 		 													//! <==== Adema que se guarda la longitud del array, "magnitud del vector"  
// 			[[Prototype]]: Storage         				//!   <==== y estas son las f() que contiene de forma intrinseca o nativa
// 			clear: ƒ clear()															//todo 	 ====> limpiar la memoria localStorage?
// 			getItem: ƒ getItem()													//todo  ====> mostrar, traer lo que contiene localStorage?										
// 			key: ƒ key()																	//todo ====> clave, de lo que contiene localStorage?																											
// 			length: (...)																	//todo ====> la longitud?
// 			removeItem: ƒ removeItem()										//todo  ====>  remover?
// 			setItem: ƒ setItem() 													//todo   ====>  agregar?
// 			constructor: ƒ Storage()											//todo   		====>  wtf, clase para construir?
// 			Symbol(Symbol.toStringTag): "Storage"					//todo   			====>  reWtf ?
// 			get length: ƒ length()												//todo   				====>  ? reWtf ?
// 			[[Prototype]]: Object*/	

// 	/* Digrama de persistencia de datos */	
// 	/*Persistencia *///?           f(_)     <==== estado    <======	   Persistencia   <======||
// 	/* Puente *///!    		f(DEL,UPD)=> ||=>  estado  ===> Puente ==> localStorage[estado] =||
// 	//todo Como se logra la persistencia de datos? */	

// 		const saveTodos = newTodos => {														//todo ╔═╗╦ ╦╔═╗╔╗╔╔╦╗╔═╗
// 			const stringifiedTodos = JSON.stringify(newTodos);			//todo ╠═╝║ ║║╣ ║║║ ║ ║╣
// 			localStorage.setItem('TODOS_V1', stringifiedTodos);			//todo ╩  ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// 			setTodoas(newTodos);
// 		}
// //?┬  ┌─┐┌─┐┌─┐┬
// //?│  │ ││  ├─┤│
// //?┴─┘└─┘└─┘┴ ┴┴─┘

