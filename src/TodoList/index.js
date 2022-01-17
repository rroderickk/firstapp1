//todo ╦╦╔╦╗╔═╗╔═╗╦═╗╔╦╗
import React from "react";
import { TodoItem } from "../TodoItem"; 				//todo║║║║╠═╝║ ║╠╦╝ ║║║║║╠═╝║ ║╠╦╝ ║
import  "./TodoList.css";
//todo ╩╩╩ ╩╩  ╚═╝╩╚═ ╩


//* ┌┬┐┌─┐┌┬┐┌─┐
//*  ││├─┤ │ ├─┤
//* ─┴┘┴ ┴ ┴ ┴ ┴
const br='\n';
const c = ";$$,$$;######;   $$,$$;;         $$,$$;♦♦♦♦;     $$,$$;";
const d = " Lorem";
const a = '⠄⠄⠄⠄⠄⠄⠄⢀⣠⣶⣾⣿⣶⣦⣤⣀⠄⢀⣀⣤⣤⣤⣤⣄⠄⠄⠄⠄⠄⠄'+br+'⠄⠄⠄⠄⠄⢀⣴⣿⣿⣿⡿⠿⠿⠿⠿⢿⣷⡹⣿⣿⣿⣿⣿⣿⣷⠄⠄⠄⠄\n⠄⠄⠄⠄⠄⣾⣿⣿⣿⣯⣵⣾⣿⣿⡶⠦⠭⢁⠩⢭⣭⣵⣶⣶⡬⣄⣀⡀⠄⠄ ⠄⠄⠄⡀⠘⠻⣿⣿⣿⣿⡿⠟⠩⠶⠚⠻⠟⠳⢶⣮⢫⣥⠶⠒⠒⠒⠒⠆⠐⠒ ⠄⢠⣾⢇⣿⣿⣶⣦⢠⠰⡕⢤⠆⠄⠰⢠⢠⠄⠰⢠⠠⠄⡀⠄⢊⢯⠄⡅⠂⠄ ⢠⣿⣿⣿⣿⣿⣿⣿⣏⠘⢼⠬⠆⠄⢘⠨⢐⠄⢘⠈⣼⡄⠄⠄⡢⡲⠄⠂⠠⠄ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣥⣀⡁⠄⠘⠘⠘⢀⣠⣾⣿⢿⣦⣁⠙⠃⠄⠃⠐⣀'+br+' ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\nCheatMode: ; $$,$$;######;   $$,$$;;         $$,$$;♦♦♦♦;     $$,$$;alias: $$ bash2021 CHEATSHEET:         bashcs; $$ html52021 CHEATSHEET:                html5; $$ js2019 CHEATSHEET:           jscs; $$ node CHEATSHEET:     nodecs; $$ git CHEATSHEET:              gitcs $$ git2021 CHEATSHEET:                  gitcs2021; $$,$$;######;   $$,$$;;         $$,$$;♦♦♦♦;     $$,$$;';
const todos = [
	{ text: 'uno', completed: false },
	{ text: "Entrenar"+c, completed: false },
	{ text: "Correr en la bici"+c, completed: false },
	{ text: "Programar más"+c, completed: false },
	{ text: "APAP"+d, completed: false },
	{ text: "alias Md CheatSheet"+d, completed: false },
	{ text: "alias Css CheatSheet "+d, completed: false },
	{ text: "alias Reacs CheatSheet "+d, completed: false },
	{ text: d+d+c, completed: false }
];
//* ┌┬┐┌─┐┌┬┐┌─┐
//*  ││├─┤ │ ├─┤
//* ─┴┘┴ ┴ ┴ ┴ ┴

//! ┌─┐┌─┐┬─┐┌─┐
//! │  │ │├┬┘├┤
//! └─┘└─┘┴└─└─┘
function TodoList({todoas,setTodoas,searchedTodoas}) { 				//! a data la hemos sacado a pasear al parque adquirío un alias
//! ┌─┐┌─┐┬─┐┌─┐
//! │  │ │├┬┘├┤
//! └─┘└─┘┴└─└─┘

//?┬ ┬┌─┐┌┬┐
//?│ │├─┘ ││
//?└─┘┴  ─┴┘
	const completeTodos = (text) => {
		const todoIndex = todoas.findIndex(todo => todo.text === text); 			//! Lo ubicamos
		const newTodos = [...todoas];												//! Copiamos la data

		newTodos[todoIndex].completed === true ?  	//! ┌─┐┌─┐┌┬┐┌─┐┬─┐┌─┐┌┐ ┌─┐┬─┐ ! ┌┬┐┬┌─┐┌─┐┬┌┐┌┌─┐  ┌─┐┬ ┬┌─┐┌─┐┬┌─ ! Validamos si está completado
		newTodos[todoIndex].completed = false :				//! │  │ ││││├─┘├┬┘│ │├┴┐├─┤├┬┘ ! ││││└─┐└─┐│││││ ┬  │  ├─┤├┤ │  ├┴┐ 
		newTodos[todoIndex].completed = true;				//! └─┘└─┘┴ ┴┴  ┴└─└─┘└─┘┴ ┴┴└─ ! ┴ ┴┴└─┘└─┘┴┘└┘└─┘  └─┘┴ ┴└─┘└─┘┴ ┴

		setTodoas(newTodos);															//! Actualizamos la data
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
		setTodoas(newTodos);											  //! Actualizar estado
		// function deleteTodo(text){
			// 	const newTodos = todos.filter(todo => todo.text !== text)
			// 	console.log(newTodos)
			// 	setTodoas(newTodos) 									  //!noMutaLaLista
			// }
	}
//! ┌┬┐┌─┐┬
//!  ││├┤ │
//! ─┴┘└─┘┴─┘

//! ╦═╗
//! ╠╦╝
//! ╩╚═
	return (
		<React.Fragment>
			<h4 className="TodoListCssBanner">
				{c}
			</h4>

					<ul className="TodoListCss2">
						{searchedTodoas.map((todoas) => (
						<TodoItem 
							key={todoas.text} 
							text={todoas.text} 
							completed={todoas.completed}
							onCompletes={() => completeTodos(todoas.text)}
							onDeletes={() => deleteTodos(todoas.text)}
						/>
						) ) }
					</ul>

			<p className="TodoListCssBannerF">
				{c}{<br />}{a}{<br />}{c}
			</p>
		</React.Fragment>
	);
//! ╦═╗
//! ╠╦╝
//! ╩╚═



}//todo ╔═╗═╗ ╦╔═╗╔═╗╦═╗╔╦╗
export { TodoList, todos };//todo ║╣ ╔╩╦╝╠═╝║ ║╠╦╝ ║
//todo ╚═╝╩ ╚═╩  ╚═╝╩╚═ ╩