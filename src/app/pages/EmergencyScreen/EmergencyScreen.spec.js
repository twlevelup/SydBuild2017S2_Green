import React from 'react';
import { shallow } from 'enzyme';
import { EmergencyScreenComponent, EmergencyScreenButtons } from './EmergencyScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<EmergencyScreenComponent />', () => {
  let emergencyFunction;

  beforeEach(() => {
    emergencyFunction = shallow(<EmergencyScreenComponent />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  it('should display contact emergency question', () => {
    expect(emergencyFunction).toIncludeText('Send');
    expect(emergencyFunction).toIncludeText('EMERGENCY');
    expect(emergencyFunction).toIncludeText('beacon?');
  });

  it('should display a no button text', () => {
    expect(emergencyFunction.find('.no-button')).toIncludeText('«press left to Cancel');
  });

  it('should display a yes button text', () => {
    expect(emergencyFunction.find('.yes-button')).toIncludeText('Tap to confirm');
  });

  it('should have a LEFT button config of going to Home Page', () => {
    EmergencyScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });

  it('should have a SCREEN button config of going to Emergency Confirmation Page', () => {
    EmergencyScreenButtons.SCREEN();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/emergency-confirmation');
  });
});
