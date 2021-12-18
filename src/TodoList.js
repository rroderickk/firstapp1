import React from "react";
import { TodoItem } from "./TodoItem";
import  "./TodoList.css";

const br='\n';
const c = ";$$,$$;######;   $$,$$;;         $$,$$;♦♦♦♦;     $$,$$;";
const d = " Lorem";
const a = '⠄⠄⠄⠄⠄⠄⠄⢀⣠⣶⣾⣿⣶⣦⣤⣀⠄⢀⣀⣤⣤⣤⣤⣄⠄⠄⠄⠄⠄⠄'+br+'⠄⠄⠄⠄⠄⢀⣴⣿⣿⣿⡿⠿⠿⠿⠿⢿⣷⡹⣿⣿⣿⣿⣿⣿⣷⠄⠄⠄⠄\n⠄⠄⠄⠄⠄⣾⣿⣿⣿⣯⣵⣾⣿⣿⡶⠦⠭⢁⠩⢭⣭⣵⣶⣶⡬⣄⣀⡀⠄⠄ ⠄⠄⠄⡀⠘⠻⣿⣿⣿⣿⡿⠟⠩⠶⠚⠻⠟⠳⢶⣮⢫⣥⠶⠒⠒⠒⠒⠆⠐⠒ ⠄⢠⣾⢇⣿⣿⣶⣦⢠⠰⡕⢤⠆⠄⠰⢠⢠⠄⠰⢠⠠⠄⡀⠄⢊⢯⠄⡅⠂⠄ ⢠⣿⣿⣿⣿⣿⣿⣿⣏⠘⢼⠬⠆⠄⢘⠨⢐⠄⢘⠈⣼⡄⠄⠄⡢⡲⠄⠂⠠⠄ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣥⣀⡁⠄⠘⠘⠘⢀⣠⣾⣿⢿⣦⣁⠙⠃⠄⠃⠐⣀'+br+' ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\nCheatMode: ; $$,$$;######;   $$,$$;;         $$,$$;♦♦♦♦;     $$,$$;alias: $$ bash2021 CHEATSHEET:         bashcs; $$ html52021 CHEATSHEET:                html5; $$ js2019 CHEATSHEET:           jscs; $$ node CHEATSHEET:     nodecs; $$ git CHEATSHEET:              gitcs $$ git2021 CHEATSHEET:                  gitcs2021; $$,$$;######;   $$,$$;;         $$,$$;♦♦♦♦;     $$,$$;';

const todos = [
	{ text: c, completed: true },
	{ text: "Entrenar"+c, completed: false },
	{ text: "Correr en la bici"+c, completed: false },
	{ text: "Programar más"+c, completed: true },
	{ text: "APAP"+d, completed: true },
	{ text: "alias Md CheatSheet"+d, completed: false },
	{ text: "alias Css CheatSheet "+d, completed: false },
	{ text: "alias Reacs CheatSheet "+d, completed: false },
	{ text: d+d+c, completed: true },
];

function TodoList({todoas,setTodoas}) {
	return (
		<React.Fragment>
			<h4 className="TodoListCssBanner">
				{c}
			</h4>
					<ul className="TodoListCss2">
						{todoas.map((todoas) => (
						<TodoItem 
						key={todoas.text} 
						text={todoas.text} 
						completed={todoas.completed}/>
						) ) }
					</ul>

			<p className="TodoListCssBannerF">
				{c}{<br />}{a}{<br />}{c}
			</p>
		</React.Fragment>
	);
}

export { TodoList, todos };