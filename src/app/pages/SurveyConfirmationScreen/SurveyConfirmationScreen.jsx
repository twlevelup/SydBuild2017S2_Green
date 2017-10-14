import React from 'react';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

export const SurveyConfirmationScreenComponent = () => {
  return (
    <div id='survey-confirmation-screen-page'>
      <h2>Your responses have been recorded</h2>
      <h1>Thank you</h1>
    </div>
  );
};

export const SurveyConfirmationScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
};

export default WithButtonConfigs(SurveyConfirmationScreenComponent, SurveyConfirmationScreenButtons);
