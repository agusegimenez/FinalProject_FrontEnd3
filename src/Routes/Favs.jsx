import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  const favDentists = JSON.parse(localStorage.getItem('favs')) || [];

  return (
    <div className={state.theme === "dark" ? "dark" : ""}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favDentists.map(dentist => (
          <Card key={dentist.id} {...dentist} />
        ))}
      </div>
    </div>
  );
};

export default Favs;

