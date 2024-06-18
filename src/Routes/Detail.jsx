import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
import "../Styles/Detail.css";

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const selectedDentist = state.data.find(d => d.id === parseInt(id));
    setDentist(selectedDentist);
  }, [id, state.data]);

  return (
    <div className={state.theme === "dark" ? "dark detail-container" : "detail-container"}>
      <h1>Detail Dentist {id}</h1>
      {dentist && (
        <div className="detail-grid">
        <div className="header">Name</div>
        <div className="header">Email</div>
        <div className="header">Phone</div>
        <div className="header">Website</div>
        <div>{dentist.name}</div>
        <div>{dentist.email}</div>
        <div>{dentist.phone}</div>
        <div>{dentist.website}</div>
      </div>
      )}
    </div>
  );
};

export default Detail;