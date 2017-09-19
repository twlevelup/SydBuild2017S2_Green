import React from 'react';
import {
  string,
  arrayOf,
  shape,
} from 'prop-types';

import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import GenericList from '../../../framework/components/GenericList/GenericList';
import Appointment from './components/Appointment/Appointment';


export const AppointmentScreenComponent = ({ appointments }) => {
  return (
    <div id='appointment-screen' className='appointment-screen'>
      <h1 className='title'>Appointments</h1>
      <GenericList
        className='appointments-list'
        items={ appointments }
        listItem={ Appointment }
      />
    </div>

  );
};

AppointmentScreenComponent.propTypes = {
  appointments: arrayOf(shape({
    id: string,
    patient: string,
    provider: string,
    address: string,
    time: string,
  })).isRequired,
};

export const AppointmentScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage(),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default WithButtonConfigs(AppointmentScreenComponent, AppointmentScreenButtons);
