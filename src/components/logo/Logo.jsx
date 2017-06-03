import React from 'react';
import LogoImage from './img/logo.png';
const Logo = ()  => {
  const logoPath = `${LogoImage}`;
  return(
    <img src={LogoImage} />
  );
};

export default Logo;