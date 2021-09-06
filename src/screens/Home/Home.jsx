import React from 'react';
import Header from '../../components/Header/Header';
import BuscaMobile from '../../components/Header/CampoBusca/BuscaMobile';
import Carrossel from '../../components/Carousel/Carrossel';
import Newsletter from '../../components/Newsletter/Newsletter';

const Home = () => {
  return (
    <body className="body">
      <Header />
      <BuscaMobile />
      <Carrossel />
      <Newsletter />
    </body>
  )
}

export default Home