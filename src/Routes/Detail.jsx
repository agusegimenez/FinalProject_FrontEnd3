import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const selectedDentist = state.data.find(d => d.id === parseInt(id));
    setDentist(selectedDentist);
  }, [id, state.data]);

  return (
    <div className={state.theme === "dark" ? "dark" : ""}>
      <h1>Detail Dentist id {id}</h1>
      {dentist && (
        <div>
          <p>Name: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;