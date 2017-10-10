import React from 'react';
import { shallow } from 'enzyme';
import { AppointmentScreenComponent, AppointmentScreenButtons } from './AppointmentScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<AppointmentScreenComponent />', () => {
  let componentWrapper;
  const mockAppointments = [{
    'id': '1',
    'patient': 'Homer J Simpson',
    'address': 'Level 4, Somewhere St, Sydney',
    'provider': 'Doctor Helpful',
    'time': '01/01/2017 00:00',
  },
  {
    'id': '2',
    'patient': 'Hello appt',
    'address': 'Level 4, Somewhere St, Sydney',
    'provider': 'Doctor Helpful',
    'time': '01/01/2017 00:00',
  }];
  beforeEach(() => {
    jest.resetAllMocks();
    componentWrapper = shallow(<AppointmentScreenComponent
      appointments={ mockAppointments }
      selectedIndex={ 0 }
    />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  describe('AppointmentScreen', () => {
    describe('Appointment Screen Display', () => {
      test('it should display the title, Appointments', () => {
        expect(componentWrapper.find('.title')).toBePresent();
        expect(componentWrapper).toIncludeText('APPOINTMENTS');
      });

      test('should have class[appointment-screen]', () => {
        expect(componentWrapper).toHaveClassName('appointment-screen');
      });
    });

    describe('Appointments List', () => {
      test('should contain a ScrollList component', () => {
        expect(componentWrapper.find('ScrollList')).toBePresent();
      });
    });
    describe('Go back message', () => {
      test('should display go back message', () => {
        expect(componentWrapper.find('.goBackMessage')).toHaveText('<< press left to go Back');
      });
    });
  });

  describe('AppointmentScreen Buttons', () => {
    test('it should have a LEFT button config of going to home page', () => {
      AppointmentScreenButtons(componentWrapper).LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a RIGHT button config of doing nothing', () => {
      AppointmentScreenButtons(componentWrapper).RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalled();
    });

    describe('Top button', () => {
      test('it should have a TOP button config of selecting previous appointment', () => {
        AppointmentScreenButtons({ appointments: mockAppointments, selectedIndex: 1 }).TOP();
        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 0 },
        });
      });
      it('should roll back to the bottom', () => {
        AppointmentScreenButtons({ appointments: mockAppointments, selectedIndex: 0 }).TOP();

        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 1 },
        });
      });
    });

    describe('Bottom button', () => {
      it('should set previous appointment', () => {
        AppointmentScreenButtons({ appointments: mockAppointments, selectedIndex: 0 }).BOTTOM();

        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 1 },
        });
      });

      it('should roll back to the top', () => {
        AppointmentScreenButtons({ appointments: mockAppointments, selectedIndex: 1 }).BOTTOM();

        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 0 },
        });
      });

      it('should default the selectedIndex to 0', () => {
        AppointmentScreenButtons({ appointments: mockAppointments }).BOTTOM();

        expect(ButtonAction.goToPage).toHaveBeenCalledWith({
          state: { selectedIndex: 1 },
        });
      });
    });
  });
});
