import React from 'react';
import { shallow } from 'enzyme';
import { AppointmentNotificationFormComponent } from './AppointmentNotificationForm';

describe('NotificationForm', () => {
  let defaultProps;
  let componentWrapper;
  beforeEach(() => {
    defaultProps = {
      pushAppointmentNotification: jest.fn(),
      hideNotification: jest.fn(),
      remapButtons: jest.fn(),
    };
    componentWrapper = shallow(<AppointmentNotificationFormComponent { ...defaultProps } />);
  });

  test('it should have an drop down menu', () => {
    expect(componentWrapper.find('Select.notification-dropdown')).toBePresent();
  });

  test('it should have a submit notification button', () => {
    expect(componentWrapper.find('.submit-btn')).toBePresent();
  });

  describe('buttonConfigs.OVERRIDE', () => {
    it('calls hideNotifictionAction', () => {
      componentWrapper.instance().buttonConfigs.OVERRIDE();
      expect(defaultProps.hideNotification).toHaveBeenCalled();
    });

    it('calls remapButtons with OVERRIDE: false', () => {
      componentWrapper.instance().buttonConfigs.OVERRIDE();
      expect(defaultProps.remapButtons).toHaveBeenCalledWith({ OVERRIDE: false });
    });
  });

  describe('options', () => {
    test('it should make given appointments to be valid option format', () => {
      const firstAppointment = {
        'id': '1',
        'patient': 'Homer J Simpson',
        'address': 'Level 4, Somewhere St, Sydney',
        'provider': 'Doctor Helpful',
        'datetime': 'Today',
      };
      const appoinments = [firstAppointment];
      expect(componentWrapper.instance().options(appoinments))
        .toEqual([{ value: firstAppointment.id, label: 'Today - Doctor Helpful' }]);
    });
  });

  describe('On the notification dropdown select', () => {
    test('it should set selectedId in state to be the id of appointment selected', () => {
      const appointment = { value: '100', label: 'label' };
      componentWrapper.find('.notification-dropdown').simulate('change', appointment);
      expect(componentWrapper.state().selectedId).toEqual('100');
    });
  });

  describe('When send notification button is clicked', () => {
    const submissionEvent = {
      preventDefault: jest.fn(),
    };
    const composeFormAndSimulateSubmission = () => {
      componentWrapper.find('#notification-form').simulate('submit', submissionEvent);
    };

    test('it should call pushAppointmentNotification', () => {
      composeFormAndSimulateSubmission();
      expect(defaultProps.pushAppointmentNotification).toBeCalled();
    });
  });
});
