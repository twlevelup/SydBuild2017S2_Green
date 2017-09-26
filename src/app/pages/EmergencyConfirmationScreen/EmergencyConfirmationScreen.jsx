import React from 'react';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

export const EmergencyConfirmationScreenComponent = () => {
  return (
    <div id='emergency-confirmation-page'>
      <p>
        Sent out successfully
      </p>
      <p>
        Click left to back homescreen
      </p>
    </div>
  );
};

export const EmergencyConfirmationScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
};

export default WithButtonConfigs(EmergencyConfirmationScreenComponent,
  EmergencyConfirmationScreenButtons);
