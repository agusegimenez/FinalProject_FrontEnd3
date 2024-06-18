import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import '../Styles/Header.css'
import Navbar from "./Navbar";

const Header = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`Header-styles ${state.theme}`}>
      <div className={`Header ${state.theme}`}>
        <img src="/DH.ico" alt="DHicon" className="header-icon" />
      </div>
      <Navbar />
    </div>
  ); 
};

export default Header;