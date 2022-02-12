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
function TodoList({
	error,
	loading,
	todoas,
	setTodoas,
	searchedTodoas,
	completeTodos,
	deleteTodos, //!Tercera estacion del paseo
}) { 				//! a data la hemos sacado a pasear al parque adquirío un alias
//! ┌─┐┌─┐┬─┐┌─┐
//! │  │ │├┬┘├┤
//! └─┘└─┘┴└─└─┘


//! ╦═╗
//! ╠╦╝
//! ╩╚═
	return (
		<React.Fragment>
			<h4 className="TodoListCssBanner">
				{c}
			</h4>

					{error && <p>Error....</p>}
					{loading && <p>Loading....</p>}
					{(!loading && !searchedTodoas.length) && <p>¡Bienvenido crea un todo!....</p>}

					<ul className="TodoListCss2">
						{searchedTodoas.map((todoas) => (
						<TodoItem 
							key={todoas.text} 
							text={todoas.text} 
							completed={todoas.completed}
							onCompletes={() => completeTodos(todoas.text)}
							onDeletes={() => deleteTodos(todoas.text)}
							//!Cuarta estacion del paseo
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