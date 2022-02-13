import React from "react";
import { TodoContext } from '../TodoContext';
import "./TodoSearch.scss"; //! (:@)====>styles;

const TodoSearch =()=> { 
const { searchValue, setSearchValue } = React.useContext(TodoContext);
const onSearchValueChange = (e) => {
  setSearchValue(e.target.value);
};

return (
<>
  <input 
    autoFocus 
    className="TodoSearch-input"
    placeholder="Search..."
    value={searchValue} //-- Estado anterior
    onChange={onSearchValueChange} //-- Funcion que Cambia el contenido del estado anterior => estado Editado
  />
  {/* <p>{searchValue}</p> */}
</>
); }; export { TodoSearch };
