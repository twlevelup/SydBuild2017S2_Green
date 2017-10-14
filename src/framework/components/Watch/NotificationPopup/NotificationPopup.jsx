import React from 'react';
import PropTypes from 'prop-types';
import NotificationContainer from '../../../containers/NotificationContainer';
import './notification_popup.css';
import alarm from './alarm.png';

export const NotificationPopupComp = ({ show, text, appointment }) => {
  const visibilityClass = show ? '' : 'hidden';
  if (appointment !== undefined) {
    return (
      <div className={ `notification-popup ${ visibilityClass }` }>
        <div className='notification-content'>
          You are seeing
        </div>
        <div className='notification-content'>
          { appointment.provider }
        </div>
        <div className='notification-content'>
          { appointment.time }
        </div>
        <img className='alarm-style' src={ alarm } alt='alarm' />
      </div>
    );
  }
  return (
    <div className={ `notification-popup ${ visibilityClass }` }>
      <p>
        { text }{ show }
      </p>
    </div>
  );
};

NotificationPopupComp.propTypes = {
  show: PropTypes.bool.isRequired,
  text: PropTypes.string,
  appointment: PropTypes.object,
};

NotificationPopupComp.getDefaultProps = (
{
  text: undefined,
  appointment: undefined,
}
);

export default NotificationContainer(NotificationPopupComp);
