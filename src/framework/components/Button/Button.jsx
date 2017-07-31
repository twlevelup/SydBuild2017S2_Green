import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ id, onClick }) => {
  return (<button id={ id } className='button' onClick={ onClick } />);
};


Button.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  id: undefined,
  onClick: () => {},
};

export default Button;
