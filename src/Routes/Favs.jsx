import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const [favDentists, setFavDentists] = useState(JSON.parse(localStorage.getItem('favs')) || []);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavDentists(storedFavs);
  }, []);

  const removeFromFavs = (id) => {
    const updatedFavs = favDentists.filter(dentist => dentist.id !== id);
    localStorage.setItem('favs', JSON.stringify(updatedFavs));
    setFavDentists(updatedFavs); 
  };

  return (
    <div className={state.theme === "dark" ? "dark" : ""}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favDentists.map(dentist => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
            showDeleteButton={true} // Muestra el botón de eliminar solo en Favs
            onDelete={removeFromFavs}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
