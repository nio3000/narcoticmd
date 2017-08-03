import React from 'react';
import PropTypes from 'prop-types';
import './Subtitle.css';

const Subtitle = ({value}) =>
    Boolean(value) && <h2 className="subtitle">{ value }</h2>;

Subtitle.propTypes = {
  value: PropTypes.node
};
export default Subtitle;
