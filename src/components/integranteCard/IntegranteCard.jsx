import './IntegranteCard.css';

import React from 'react';
import { getImageUrl } from '../../utils/getImageUrl';

const IntegranteCard = ({ nombre, bio, foto_url, ep_1_url, ep_2_url, ep_3_url }) => {
  const finalUrl = getImageUrl(foto_url.trim());

  return (
    <section>
      <div className="integrante-card">
        <img src={getImageUrl(foto_url.trim())} alt={nombre} />
        <div className="card-info">
          <h2>{nombre}</h2>
          <p>{bio}</p>

          <h3>fav armas</h3>
          <div className="episodios">
            {ep_1_url && <a href={ep_1_url} target="_blank" rel="noopener noreferrer">sierra</a>}
            {ep_2_url && <a href={ep_2_url} target="_blank" rel="noopener noreferrer">cuchillo</a>}
            {ep_3_url && <a href={ep_3_url} target="_blank" rel="noopener noreferrer">maso</a>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegranteCard;
