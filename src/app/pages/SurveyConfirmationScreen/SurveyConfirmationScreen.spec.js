import React from 'react';
import { shallow } from 'enzyme';
import { SurveyConfirmationScreenComponent, SurveyConfirmationScreenButtons } from './SurveyConfirmationScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<SurveyConfirmationScreenComponent />', () => {
  let surveyConfirmation;

  beforeEach(() => {
    surveyConfirmation = shallow(<SurveyConfirmationScreenComponent />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  it('should display Your responses have been recorded', () => {
    expect(surveyConfirmation).toIncludeText('Your responses have been recorded');
    expect(surveyConfirmation).toIncludeText('Thank you');
  });

  it('should have a LEFT button config of going to Home Page', () => {
    SurveyConfirmationScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });
});
