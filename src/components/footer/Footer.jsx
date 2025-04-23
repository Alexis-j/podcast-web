import './Footer.css';

import {
  FaInstagram,
  FaPodcast,
  FaSpotify,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://open.spotify.com/show/0lVUf3uHInursmp8ACuZ7f" target="_blank" rel="noopener noreferrer">
          <FaSpotify size={28} color="#1DB954" />
        </a>
        <a href="https://www.instagram.com/hablandopurapaja/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={28} color="#E1306C" />
        </a>
        <a href="https://www.youtube.com/@hablandopurapajapodcast" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={28} color="#FF0000" />
        </a>
        <a href="https://www.buzzsprout.com/2442242" target="_blank" rel="noopener noreferrer">
          <FaPodcast size={28} color="#f27121" />
        </a>
        <a href="https://www.twitch.tv/hablandopurapaja" target="_blank" rel="noopener noreferrer">
          <FaTwitch size={28} color="#9146FF" />
        </a>
        <a href="https://x.com/hpp_podcast" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={28} color="#1DA1F2" />
        </a>
      </div>

      <div className="footer-links">
        <a href="/nosotros">Nosotros</a>
        <a href="/episodios">Episodios</a>
        <a href="/contacto">Contacto</a>
        <a href="/terminos">Términos</a>
        <a href="/privacidad">Privacidad</a>
      </div>

      <div className="footer-copy">
        <p>© {new Date().getFullYear()} Hablando Pura Paja. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
