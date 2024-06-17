import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: "SET_THEME", payload: state.theme === "light" ? "dark" : "light" });
  };

  return (
    <nav className={state.theme === "dark" ? "dark" : ""}>
      <Link to="/home">Home</Link>
      <Link to="/contacto">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
