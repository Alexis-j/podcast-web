// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';

const Navbar = () => {
  const [integrantes, setIntegrantes] = useState([]);

  useEffect(() => {
    const fetchIntegrantes = async () => {
      const { data, error } = await supabase.from('integrantes').select('*');
      if (error) console.error('Error al traer integrantes:', error);
      else setIntegrantes(data);
    };

    fetchIntegrantes();
  }, []);

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Inicio</Link>
      {integrantes.map(integrante => (
        <Link
          key={integrante.id}
          to={`/integrante/${integrante.id}`}
          style={{ marginRight: '1rem' }}
        >
          {integrante.nombre}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
