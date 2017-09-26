import React from 'react';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import './emergency_screen.css';

export const EmergencyScreenComponent = () => {
  return (
    <div id='emergency-screen-page'>
      <p id='emergency-question'>
          Would you like to contact emergency?
      </p>
      <div className='no-button button-container'>
        <span> No </span>
        <span> X </span>
      </div>
      <div className='yes-button button-container'>
        <span> Yes </span>
        <span> &#10004; </span>
      </div>
    </div>
  );
};

export const EmergencyScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/emergency-confirmation'),
};

export default WithButtonConfigs(EmergencyScreenComponent, EmergencyScreenButtons);
