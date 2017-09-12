import React from 'react';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';

export const AppointmentScreenComponent = () => {
  return (
    <div id='appointments-page'>
      <div id='appointments-container'>
        <div>
            No appointments
        </div>
      </div>
    </div>
  );
};

export const AppointmentScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage(),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default WithButtonConfigs(AppointmentScreenComponent, AppointmentScreenButtons);
