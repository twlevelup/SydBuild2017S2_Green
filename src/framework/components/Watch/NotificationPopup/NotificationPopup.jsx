import React from 'react';
import PropTypes from 'prop-types';
import NotificationContainer from '../../../containers/NotificationContainer';
import './notification_popup.css';
import alarm from './alarm.png';

export const NotificationPopupComp = ({ show, text }) => {
  const visibilityClass = show ? '' : 'hidden';
  return (
    <div className={ `notification-popup ${ visibilityClass }` }>
      <p>
        {text}{show}
      </p>
      <img className='alarm-style' src={ alarm } alt='alarm' />
    </div>
  );
};

NotificationPopupComp.propTypes = {
  show: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default NotificationContainer(NotificationPopupComp);
