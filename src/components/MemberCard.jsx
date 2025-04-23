import React, { useEffect, useState } from "react";

import { supabase } from "./supabase"; // Asegúrate de importar la conexión correctamente

const Supabase = () => {
  const [integrantes, setIntegrantes] = useState([]);

  useEffect(() => {
    // Función para obtener los datos de los integrantes
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("integrantes") // Nombre de la tabla que estás usando
        .select("id, nombre, bio, foto_url, ep_1_url, ep_2_url, ep_3_url");

      if (error) {
        console.error("Error al obtener los datos:", error);
      } else {
        setIntegrantes(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {integrantes.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        integrantes.map((integrante) => (
          <div key={integrante.id}>
            <h3>{integrante.nombre}</h3>
            <p>{integrante.bio}</p>
            <img src={integrante.foto_url} alt={integrante.nombre} width="150" height="150" />
            <p>
              Episodio 1: <a href={integrante.ep_1_url}>Escuchar</a>
            </p>
            <p>
              Episodio 2: <a href={integrante.ep_2_url}>Escuchar</a>
            </p>
            <p>
              Episodio 3: <a href={integrante.ep_3_url}>Escuchar</a>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Supabase;
