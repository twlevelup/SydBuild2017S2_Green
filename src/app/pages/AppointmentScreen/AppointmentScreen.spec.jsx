import React from 'react';
import { shallow } from 'enzyme';
import { AppointmentScreenComponent, AppointmentScreenButtons } from './AppointmentScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<AppointmentScreenComponent />', () => {
  let componentWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<AppointmentScreenComponent appointments={ [{
      'id': '1',
      'patient': 'Homer J Simpson',
      'address': 'Level 4, Somewhere St, Sydney',
      'provider': 'Doctor Helpful',
      'time': '01/01/2017 00:00',
    }] }
    />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  describe('AppointmentScreen', () => {
    describe('Appointment Screen Display', () => {
      test('it should display the title, Appointments', () => {
        expect(componentWrapper.find('.title')).toBePresent();
        expect(componentWrapper).toIncludeText('Appointments');
      });

      test('should have class[appointment-screen]', () => {
        expect(componentWrapper).toHaveClassName('appointment-screen');
      });
    });

    describe('Appointments List', () => {
      test('should contain a GenericList component', () => {
        expect(componentWrapper.find('GenericList')).toBePresent();
      });
    });
  });

  describe('AppointmentScreen Buttons', () => {
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
});
