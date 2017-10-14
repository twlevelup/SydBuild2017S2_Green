import React from 'react';
import { shallow } from 'enzyme';
import ButtonAction from '../../../framework/util/ButtonAction';
import { AppointmentViewScreenComponent as AppointmentViewScreen,
  AppointmentViewScreenButtons } from './AppointmentViewScreen';

jest.mock('../../../framework/util/ButtonAction');

describe('AppointmentViewScreen ', () => {
  let componentWrapper;
  const mockAppointment = {
    id: '1',
    patient: 'Homer J Simpson',
    address: 'Level 4, Somewhere St, Sydney',
    provider: 'Doctor Helpful',
    datetime: 'Today' };

  beforeEach(() => {
    componentWrapper = shallow(
      <AppointmentViewScreen appointment={ mockAppointment } />
    );
  });

  it('should have a header', () => {
    expect(componentWrapper.find('.heading')).toHaveText('You are seeing');
  });

  it('should display the required appointment provider based on the url path', () => {
    expect(componentWrapper.find('.provider')).toHaveText('Doctor Helpful');
  });

  it('should display the required appointment time based on the url path', () => {
    expect(componentWrapper.find('.datetime')).toIncludeText('Time:');
    expect(componentWrapper.find('.datetime')).toIncludeText('Today');
  });

  it('should display the required appointment address based on the url path', () => {
    expect(componentWrapper.find('.address')).toIncludeText('Address:');
    expect(componentWrapper.find('.address')).toIncludeText('Level 4, Somewhere St, Sydney');
  });

  test('it should have a LEFT button config of going to appointments list', () => {
    AppointmentViewScreenButtons.LEFT();
    expect(ButtonAction.goToPage).toHaveBeenCalledWith({ pathname: '/appointments' });
  });

  test('it should have a RIGHT button config of doing nothing', () => {
    AppointmentViewScreenButtons.RIGHT();
    expect(ButtonAction.doNothing).toHaveBeenCalled();
  });

  test('it should have a TOP button config of nothing', () => {
    AppointmentViewScreenButtons.TOP();
    expect(ButtonAction.doNothing).toHaveBeenCalled();
  });

  test('it should have a BOTTOM button config of nothing', () => {
    AppointmentViewScreenButtons.BOTTOM();
    expect(ButtonAction.doNothing).toHaveBeenCalled();
  });

  test('it should have a SCREEN button config of nothing', () => {
    AppointmentViewScreenButtons.SCREEN();
    expect(ButtonAction.doNothing).toHaveBeenCalled();
  });
});
