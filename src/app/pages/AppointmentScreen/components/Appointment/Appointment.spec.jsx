import React from 'react';
import { shallow } from 'enzyme';
import Appointment from './Appointment';

describe('Appointment', () => {
  const defaultProps = {
    id: '0',
    patient: 'Ash Ketchum',
    address: 'Pallet Town',
    provider: '???',
    time: '???',
  };

  const composeComponent = (props = {}) =>
    shallow(<Appointment { ...defaultProps } { ...props } />);

  test('It displays id,name, address, provider, and time', () => {
    const appointments = [
      { id: '1', patient: 'Brock Harrison', address: 'Pewter City', provider: '???', time: '1231' },
      { id: '2', patient: 'Misty Harrison', address: 'Pewter City', provider: '???', time: '1232' },
    ];
    appointments.forEach((appointment) => {
      const component = composeComponent(appointment);
      expect(component.find('.id').text()).toEqual(`Id: ${ appointment.id }`);
      expect(component.find('.patient').text()).toEqual(`Patient: ${ appointment.patient }`);
      expect(component.find('.address').text()).toEqual(`Address: ${ appointment.address }`);
      expect(component.find('.provider').text()).toEqual(`Provider: ${ appointment.provider }`);
      expect(component.find('.time').text()).toEqual(`Time: ${ appointment.time }`);
    });
  });

  test('it should have className appointment', () => {
    expect(composeComponent()).toHaveClassName('appointment');
  });
});
