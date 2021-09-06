import React from 'react';
import ImageGallery from 'react-image-gallery';

import './Carrosel.css'

const images = [
  {
    original: 'https://i.ibb.co/ZBv9hcL/Banner.png',
  },
  {
    original: 'https://i.ibb.co/ZBv9hcL/Banner.png',
  },
  {
    original: 'https://i.ibb.co/ZBv9hcL/Banner.png',
  },
];

class Carrossel extends React.Component {
  render() {
    return <ImageGallery items={images} 
              autoplay={true} 
              showThumbnails={false}
              slideDuration={450}
              showPlayButton={false}
              showFullscreenButton={false}
              showBullets={true}
              showNav={false}/>;
  }
}

export default Carrossel