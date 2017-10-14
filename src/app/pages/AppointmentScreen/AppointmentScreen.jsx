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
      <h1 className='title'>APPOINTMENTS</h1>
      <ScrollList
        labels={ appointments.map(a => <p>{ a.provider } <span className='appointmentTime'>{a.datetime } </span></p>) }
        selectedIndex={ selectedIndex }
      />
      <div className='goBackMessage'>&lt;&lt; press left to go Back</div>
    </div>

  );
};

const getNextIndex = (indexChange, selectedIndex, appointments) => {
  const newIndex = selectedIndex + indexChange;
  return Math.abs((newIndex + appointments.length) % appointments.length);
};

AppointmentScreenComponent.propTypes = {
  selectedIndex: number,
  appointments: arrayOf(shape({
    id: string,
    patient: string,
    provider: string,
    address: string,
    time: string,
  })).isRequired,
};

AppointmentScreenComponent.defaultProps = {
  selectedIndex: 0,
};

export const AppointmentScreenButtons = ({ appointments, selectedIndex = 0 }) => ({
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.doNothing(),
  BOTTOM: () => {
    ButtonAction.goToPage({ state: { selectedIndex: getNextIndex(1, selectedIndex, appointments) } });
  },
  TOP: () => {
    ButtonAction.goToPage({ state: { selectedIndex: getNextIndex(-1, selectedIndex, appointments) } });
  },
  SCREEN: () => ButtonAction.goToPage({
    pathname: '/appointment-view',
    state: { appointment: appointments[selectedIndex] },
  }),
});

export default WithButtonConfigs(AppointmentScreenComponent, AppointmentScreenButtons);
