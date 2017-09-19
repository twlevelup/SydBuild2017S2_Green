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
    expect(emergencyFunction).toIncludeText('Would you like to contact emergency?');
  });

  it('should display a no button text', () => {
    expect(emergencyFunction.find('.no-button')).toIncludeText('No');
  });

  it('should display a yes button text', () => {
    expect(emergencyFunction.find('.yes-button')).toIncludeText('Yes');
  });

  it('should have a LEFT button config of going to Home Page', () => {
    EmergencyScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });

  xit('should have a RIGHT button config of going to Emergency Confirmation Page', () => {
    EmergencyScreenButtons.RIGHT();
  });
});
