import React from 'react';
import LogoImage from './img/head.svg';
const Logo = ( alt="Nacotic logo" )  => {
  return(
    <img src={LogoImage} alt={alt} />
  );
};

export default Logo;