import React from 'react';
import { shallow } from 'enzyme';
import { AppointmentScreenComponent, AppointmentScreenButtons } from './AppointmentScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<AppointmentScreenComponent />', () => {
  let componentWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<AppointmentScreenComponent />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  describe('AppointmentScreen', () => {
    it('should display no appointments', () => {
      expect(componentWrapper).toIncludeText('No appointments');
    });
  });

  test('it should have a LEFT button config of going to home page', () => {
    AppointmentScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
  });

  test('it should have a RIGHT button config of doing nothing', () => {
    AppointmentScreenButtons.RIGHT();
    expect(ButtonAction.goToPage).toHaveBeenCalled();
  });

  test('it should have a TOP button config of doing nothing', () => {
    AppointmentScreenButtons.TOP();
    expect(ButtonAction.goToPage).toHaveBeenCalled();
  });

  test('it should have a BOTTOM button config of doing nothing', () => {
    AppointmentScreenButtons.BOTTOM();
    expect(ButtonAction.scrollDown).toHaveBeenCalled();
  });
});
