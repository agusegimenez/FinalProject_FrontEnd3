import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from './utils/global.context';
import '../Styles/Card.css';

const Card = ({ name, username, id, showDeleteButton, onDelete }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const newFav = { name, username, id };
    if (!favs.some(fav => fav.id === id)) {
      favs.push(newFav);
      localStorage.setItem('favs', JSON.stringify(favs));
    }
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className={`card ${state.theme}`}>
      <Link to={`/dentist/${id}`}>
        <img src="/images/doctor.jpg" alt="Doctorimg" />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      {showDeleteButton && (
        <button onClick={handleDelete} className="deleteButton">Delete</button>
      )}
      {!showDeleteButton && (
        <button onClick={addFav} className="favButton">Add fav</button>
      )}
    </div>
  );
};

export default Card;

