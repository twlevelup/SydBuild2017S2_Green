import React from 'react';
import {
  string,
  arrayOf,
  shape,
  number,
} from 'prop-types';

import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import ScrollList from '../../../framework/components/ScrollList/ScrollList';

import './appointment_screen.css';

export const AppointmentScreenComponent = ({ appointments, selectedIndex }) => {
  return (
    <div id='appointment-screen' className='appointment-screen'>
      <h1 className='title'>Appointments</h1>
      <ScrollList
        labels={ appointments.map(a => <p>{ a.provider } : {a.time}</p>) }
        selectedIndex={ selectedIndex }
      />
    </div>

  );
};

const getNextIndex = (indexChange, selectedIndex, appointments) => {
  const newIndex = selectedIndex + indexChange;
  return Math.abs((newIndex + appointments.length) % appointments.length);
};

AppointmentScreenComponent.propTypes = {
  selectedIndex: number.isRequired,
  appointments: arrayOf(shape({
    id: string,
    patient: string,
    provider: string,
    address: string,
    time: string,
  })).isRequired,
};

export const AppointmentScreenButtons = ({ appointments, selectedIndex = 0 }) => ({
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage(),
  BOTTOM: () => {
    ButtonAction.goToPage({ state: { selectedIndex: getNextIndex(1, selectedIndex, appointments) } });
  },
  TOP: () => {
    ButtonAction.goToPage({ state: { selectedIndex: getNextIndex(-1, selectedIndex, appointments) } });
  },
});

export default WithButtonConfigs(AppointmentScreenComponent, AppointmentScreenButtons);
