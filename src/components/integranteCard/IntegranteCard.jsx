import './IntegranteCard.css';

import React from 'react';
import { getImageUrl } from '../../utils/getImageUrl';

const IntegranteCard = ({ nombre, bio, foto_url, ep_1_url, ep_2_url, ep_3_url }) => {
  // Imprimir los datos de las props para ver qué estamos recibiendo
  console.log('Integrante Card Data:', { nombre, bio, foto_url, ep_1_url, ep_2_url, ep_3_url });
  const finalUrl = getImageUrl(foto_url.trim());
console.log('📸 URL Final:', finalUrl);


  return (
    <div className="integrante-card">
      {/* Mostrar la foto usando la función getImageUrl */}
      <img src={getImageUrl(foto_url.trim())} alt={nombre} />

      <h2>{nombre}</h2>
      <p>{bio}</p>
      <div className="episodios">
        {ep_1_url && <a href={ep_1_url} target="_blank" rel="noopener noreferrer">🎧 Episodio 1</a>}
        {ep_2_url && <a href={ep_2_url} target="_blank" rel="noopener noreferrer">🎧 Episodio 2</a>}
        {ep_3_url && <a href={ep_3_url} target="_blank" rel="noopener noreferrer">🎧 Episodio 3</a>}
      </div>
    </div>
  );
};

export default IntegranteCard;
