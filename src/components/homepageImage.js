import React from 'react';

function HomepageImage() {
  const url = './public/barbershop.jpg'
  return(
    <img src={url} style ={{width: 700}} alt='Classic Barbershop' />
  );
}

export default HomepageImage;
