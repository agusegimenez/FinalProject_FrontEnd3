import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import '../Styles/Header.css'

const Header = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`Header ${state.theme}`}>
      <img src="/DH.ico" alt="DHicon" className="header-icon" />
    </div>
  ); 
};

export default Header;