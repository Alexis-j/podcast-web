import "./Hero.css";

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import asalto from './../../assets/asalto.png';
import bastion from './../../assets/bastion.png';
import logo from './../../assets/logo.png';
import tactical from './../../assets/tactical.png';
import vanguard from './../../assets/vanguard.png';

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const integrantes = [
    { img: asalto, alt: "Kelvin", link: "/integrante/1" },
    { img: bastion, alt: "Integrante 2", link: "/integrante/2" },
    { img: vanguard, alt: "Integrante 3", link: "/integrante/3" },
    { img: tactical, alt: "Integrante 4", link: "/integrante/4" },
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <img src={logo} alt="Logo del podcast" className="logo" />
        <div className="integrantes-row">
          {integrantes.map((int, index) => (
            <Link
              to={int.link}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={int.img}
                alt={int.alt}
                className={`integrante-img ${hoveredIndex !== null && hoveredIndex !== index ? 'desaturado' : ''}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
