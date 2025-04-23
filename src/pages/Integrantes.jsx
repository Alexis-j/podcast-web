// IntegrantePage.jsx
import React, { useEffect, useState } from 'react';

import { supabase } from '../config/Supabase';
import { useParams } from 'react-router-dom';

const IntegrantePage = () => {
  const { id } = useParams(); // Obtén el id del integrante desde la URL
  const [integrante, setIntegrante] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener un integrante específico
    const fetchIntegrante = async () => {
      const { data, error } = await supabase
        .from('integrantes')
        .select('*')
        .eq('id', id)  // Filtramos por id
        .single();  // Solo obtenemos un resultado

      if (error) {
        setError(error.message);
      } else {
        setIntegrante(data);  // Guardamos el integrante obtenido
      }

      setLoading(false);
    };

    fetchIntegrante();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!integrante) {
    return <div>No se encontró el integrante.</div>;
  }

  return (
    <div>
      <h1>{integrante.nombre}</h1>
      <img src={integrante.foto_url} alt={integrante.nombre} width="200" />
      <p>{integrante.bio}</p>
      <div>
        <p>Episodes:</p>
        <ul>
          {integrante.ep_1_url && <li><a href={integrante.ep_1_url} target="_blank" rel="noopener noreferrer">Episode 1</a></li>}
          {integrante.ep_2_url && <li><a href={integrante.ep_2_url} target="_blank" rel="noopener noreferrer">Episode 2</a></li>}
          {integrante.ep_3_url && <li><a href={integrante.ep_3_url} target="_blank" rel="noopener noreferrer">Episode 3</a></li>}
        </ul>
      </div>
    </div>
  );
};

export default IntegrantePage;
