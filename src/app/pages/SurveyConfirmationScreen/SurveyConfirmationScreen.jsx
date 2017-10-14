import React from 'react';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import './survey_confirmation_screen.css';

export const SurveyConfirmationScreenComponent = () => {
  return (
    <div id='survey-confirmation-screen-page'>
      <h2 className='confirmMessage'>Your responses have been recorded</h2>
      <h1 className='thankYouMessage'>Thank you</h1>
    </div>
  );
};

export const SurveyConfirmationScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
};

export default WithButtonConfigs(SurveyConfirmationScreenComponent, SurveyConfirmationScreenButtons);
