import React from 'react';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import './emergencyconfirmation_screen.css';

export const EmergencyConfirmationScreenComponent = () => {
  return (
    <div>
      <p className='emergency-confirmation-page'>
        Beacon sent!
        Help is on the way
      </p>
      <div className='location-icon' />
    </div>
  );
};

export const EmergencyConfirmationScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
};

export default WithButtonConfigs(EmergencyConfirmationScreenComponent,
  EmergencyConfirmationScreenButtons);
