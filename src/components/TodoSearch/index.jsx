import   React         from "react";
import "./TodoSearch.scss";//!(:@)====>styles;

const TodoSearch =({searchValue, setSearchValue})=> { 
const onSearchValueChange =(e)=> setSearchValue(e.target.value);

return ( <>
<header>
<input autoFocus 
  className="TodoSearch-input"
  placeholder="Search..."
  value={searchValue} //-- Estado anterior
  onChange={onSearchValueChange} //-- Funcion que Cambia el contenido del estado anterior => estado Editado
/>
</header>
{/* <p>{searchValue}</p> //? debugMode  */}

</> ) }; export { TodoSearch };
