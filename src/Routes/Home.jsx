import React, { useContext, useEffect } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    // Aquí se podría agregar la lógica para obtener los datos si no se ha hecho antes
  }, []);

  return (
    <main className={state.theme === "dark" ? "dark" : ""}>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.map(dentist => (
          <Card key={dentist.id} {...dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;