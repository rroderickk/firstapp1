import React from "react";
import { TodoItem } from "./TodoItem";
import  "./TodoList.css";

const br='\n';
const c = ";$$,$$;######;   $$,$$;;         $$,$$;♦♦♦♦;     $$,$$;";
const d = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur magnam culpa modi itaque quae ratione voluptatem officiis id tenetur, aut, eaque labore quibusdam distinctio? Dicta commodi laboriosam pariatur vel sequi!hlorem ipsum;$$,$$;######;   $$,$$;;         $$,$$;♦♦♦♦;     $$,$$;";
const a = '⠄⠄⠄⠄⠄⠄⠄⢀⣠⣶⣾⣿⣶⣦⣤⣀⠄⢀⣀⣤⣤⣤⣤⣄⠄⠄⠄⠄⠄⠄'+br.[0]+'⠄⠄⠄⠄⠄⢀⣴⣿⣿⣿⡿⠿⠿⠿⠿⢿⣷⡹⣿⣿⣿⣿⣿⣿⣷⠄⠄⠄⠄\n⠄⠄⠄⠄⠄⣾⣿⣿⣿⣯⣵⣾⣿⣿⡶⠦⠭⢁⠩⢭⣭⣵⣶⣶⡬⣄⣀⡀⠄⠄ ⠄⠄⠄⡀⠘⠻⣿⣿⣿⣿⡿⠟⠩⠶⠚⠻⠟⠳⢶⣮⢫⣥⠶⠒⠒⠒⠒⠆⠐⠒ ⠄⢠⣾⢇⣿⣿⣶⣦⢠⠰⡕⢤⠆⠄⠰⢠⢠⠄⠰⢠⠠⠄⡀⠄⢊⢯⠄⡅⠂⠄ ⢠⣿⣿⣿⣿⣿⣿⣿⣏⠘⢼⠬⠆⠄⢘⠨⢐⠄⢘⠈⣼⡄⠄⠄⡢⡲⠄⠂⠠⠄ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣥⣀⡁⠄⠘⠘⠘⢀⣠⣾⣿⢿⣦⣁⠙⠃⠄⠃⠐⣀ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿CheatMode: ; $$,$$;######;   $$,$$;;         $$,$$;♦♦♦♦;     $$,$$;alias: $$ bash2021 CHEATSHEET:         bashcs; $$ html52021 CHEATSHEET:                html5; $$ js2019 CHEATSHEET:           jscs; $$ node CHEATSHEET:     nodecs; $$ git CHEATSHEET:              gitcs $$ git2021 CHEATSHEET:                  gitcs2021; $$,$$;######;   $$,$$;;         $$,$$;♦♦♦♦;     $$,$$;';

const todos = [
	{ text: "Producir $$$$" + c, completed: false },
	{ text: "Entrenar"+c, completed: false },
	{ text: "Correr en la bici"+c, completed: false },
	{ text: "Programar más"+c, completed: false },
	{ text: "APAP"+d, completed: false },
	{ text: "alias Md CheatSheet"+d, completed: false },
	{ text: "alias Css CheatSheet "+d, completed: false },
	{ text: "alias Reacs CheatSheet "+d, completed: false },
	{ text: d, completed: false },
];

function TodoList() {
	return (
		<React.Fragment>
			<h4 className="TodoListCssBanner">
				:♦♦♦♦::$$:$$:####:{<br />} Inicia Todo {<br />}
				\3>:$$:$$:$$:$$:♦♦♦♦:{" "}
			</h4>

			<ul className="TodoListCss2">
				{todos.map((todo) => (
					<TodoItem key={todo.text} text={todo.text} />
				))}
			</ul>

			<h4 className="TodoListCssBannerF">
				{c}:♦♦♦♦::$$:$$:####:{<br />} Finaliza Todo {<br />}\3IloveReact>
				{<br />}:$$:$$:$$:$$:♦♦♦♦:{<br />}{c}{c}{a}{c}
			</h4>
		</React.Fragment>
	);
}

export { TodoList };
