import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useInitialState } from "@hooks/useInitialState";
import { Layout 				 } from "@containers/Layout";
import { Home 					 } from "@pages/Home";
import { NotFound 			 } from "@pages/NotFound";

const App =()=> {
const initialState = useInitialState();

return (

	<BrowserRouter basename="/firstapp1">
		<Layout>
			<Routes>
					<Route exact path="/" element={<Home 	/>} />

				{/* //todo ¡¡ InsertRoutes here !! */}

				<Route exact path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	</BrowserRouter>

); }; export { App };
