import "./Home.css";

import Episodes from './../components/episodes/Episodes';
import Footer from './../components/footer/Footer';
import Hero from './../components/hero/Hero';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Hero />
      <Episodes />
      <Footer />
    </div>
  );
};

export default Home;
