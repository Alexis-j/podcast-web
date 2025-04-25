import React, { useEffect, useState } from 'react';

import IntegranteCard from '../components/integranteCard/IntegranteCard';
import { supabase } from '../config/Supabase';
import { useParams } from 'react-router-dom';

const IntegrantePage = () => {
  const { id } = useParams();
  const [integrante, setIntegrante] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIntegrante = async () => {
      const { data, error } = await supabase
        .from('integrantes')
        .select('*')
        .eq('id', id)
        .single();

      if (error) setError(error.message);
      else setIntegrante(data);

      setLoading(false);
    };

    fetchIntegrante();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!integrante) return <div>No se encontró el integrante.</div>;

  return <IntegranteCard {...integrante} />;
};

export default IntegrantePage;
