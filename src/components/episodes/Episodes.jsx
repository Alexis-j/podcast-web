import './Episodes.css';

import React from 'react';

const UltimoEpisodio = () => {
  return (
    <div className="episodio-container">
      <h2>🎙 Último Episodio</h2>
      <div className="audio-wrapper">
        <h3>📻 Escuchalo en Spotify</h3>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/episode/7makk4oTQel546B0PZlDM5?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Episode Player"
        ></iframe>
      </div>

      <div className="audio-wrapper">
        <iframe
          src="https://www.buzzsprout.com/2442242/16637174-con-carlita?client_source=small_player&iframe=true"
          width="100%"
          height="200"
          frameBorder="0"
          scrolling="no"
          title="Buzzsprout Episode Player"
        ></iframe>
      </div>
      <div className="audio-wrapper no-margin-bottom">
        <h3>🎥 Miralo en Youtube</h3>
        <iframe
          style={{ borderRadius: '12px' }}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7PC67zfXSLI"
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default UltimoEpisodio;
