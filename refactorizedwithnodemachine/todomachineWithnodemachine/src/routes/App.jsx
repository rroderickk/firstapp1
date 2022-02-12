import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext 		 } from "@context/AppContext";
import { useInitialState } from "@hooks/useInitialState";
import { Layout 				 } from "@containers/Layout";
import { Home 					 } from "@pages/Home";
import { NotFound 			 } from "@pages/NotFound";
import { TodoProvider 	 } from '../components/TodoContext';

const App =()=> {
const initialState = useInitialState();

return (

<AppContext.Provider value={initialState}>
	<BrowserRouter>
		<Layout>
				<TodoProvider>
			<Routes>
					<Route exact path="/" element={<Home 	/>} />

				{/* //todo ¡¡ InsertRoutes here !! */}

				<Route exact path="*" element={<NotFound />} />
			</Routes>
				</TodoProvider>
		</Layout>
	</BrowserRouter>
</AppContext.Provider>

); }; export { App };