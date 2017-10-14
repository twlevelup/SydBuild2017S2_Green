import React from 'react';
import {
  string,
  arrayOf,
  shape,
  number,
} from 'prop-types';

import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import ScrollList from '../../../framework/components/ScrollList/ScrollList';
import './survey_screen.css';

export const SurveyScreenComponent = ({ surveyResponses, selectedIndex }) => {
  return (
    <div id='survey-screen' className='survey-screen'>
      <h1 className='title'>SURVEY</h1>
      <p className='question'>How is your level of feeling today?</p>
      <ScrollList
        labels={ surveyResponses.map(s => <p>{ s.response }</p>) }
        selectedIndex={ selectedIndex }
      />
    </div>

  );
};

const getNextIndex = (indexChange, selectedIndex, survey) => {
  const newIndex = selectedIndex + indexChange;
  return Math.abs((newIndex + survey.length) % survey.length);
};

SurveyScreenComponent.propTypes = {
  selectedIndex: number.isRequired,
  surveyResponses: arrayOf(shape({
    response: string,
  })).isRequired,
};

export const SurveyScreenButtons = ({ surveyResponses, selectedIndex = 0 }) => ({
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage(),
  SCREEN: () => ButtonAction.goToPage('/survey-confirmation'),
  BOTTOM: () => {
    ButtonAction.goToPage({ state: { selectedIndex: getNextIndex(1, selectedIndex, surveyResponses) } });
  },
  TOP: () => {
    ButtonAction.goToPage({ state: { selectedIndex: getNextIndex(-1, selectedIndex, surveyResponses) } });
  },
});

export default WithButtonConfigs(SurveyScreenComponent, SurveyScreenButtons);
