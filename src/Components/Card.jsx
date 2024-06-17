import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from './utils/global.context';

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const newFav = { name, username, id };
    if (!favs.some(fav => fav.id === id)) {
      favs.push(newFav);
      localStorage.setItem('favs', JSON.stringify(favs));
    }
  };

  return (
    <div className={`card ${state.theme}`}>
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
        <p>{username}</p>
        <p>ID: {id}</p>
      </Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;

