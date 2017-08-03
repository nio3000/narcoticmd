import React from 'react';
import PropTypes from 'prop-types';
import LogoImage from './img/logo.svg';

const Logo = ({alt}) =>
  <img src={LogoImage} alt={alt} className="logo__image"/>;

Logo.defaultProps = {
  alt: 'Narcotic'
};
Logo.propTypes = {
  alt: PropTypes.string
};

export default Logo;
