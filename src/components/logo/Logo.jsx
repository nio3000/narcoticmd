import React from 'react';
import LogoImage from './img/logo.svg';
const Logo = ( alt="Nacotic logo" )  => {
  return(
    <img src={LogoImage} alt={alt} className="logo__image" />
  );
};

export default Logo;