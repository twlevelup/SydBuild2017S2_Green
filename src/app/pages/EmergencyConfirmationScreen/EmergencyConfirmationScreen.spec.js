import React from 'react';
import { shallow } from 'enzyme';
import {
  EmergencyConfirmationScreenComponent,
  EmergencyConfirmationScreenButtons,
} from './EmergencyConfirmationScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<EmergencyConfirmationScreenComponent />', () => {
  let emergencyConfirmationWrapper;

  beforeEach(() => {
    emergencyConfirmationWrapper = shallow(<EmergencyConfirmationScreenComponent />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  it('should display emergency confirmation success', () => {
    expect(emergencyConfirmationWrapper).toIncludeText('Sent out successfully');
    expect(emergencyConfirmationWrapper).toIncludeText('Click left to back homescreen');
  });

  it('should have a LEFT button config of going to Home Page', () => {
    EmergencyConfirmationScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });
});
