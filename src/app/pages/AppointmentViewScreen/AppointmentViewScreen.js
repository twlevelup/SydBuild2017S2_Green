import React from 'react';
import {
  shape,
  string,
} from 'prop-types';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

export const AppointmentViewScreenComponent = ({ appointment }) => {
  return (
    <div className='appointment'>
      <div className='appointment-confirm-heading'>
        <h2 className='heading'>You are seeing</h2>
        <h2 className='provider'>{appointment.provider}</h2>
      </div>
      <div className='appointment-details'>
        <div className='datetime'>
          <p>Time:</p>
          <p>{appointment.datetime}</p>
        </div>
        <div className='address'>
          <p>Address:</p>
          <p>{appointment.address}</p>
        </div>
      </div>
      <div className='goBackMessage'>&lt;&lt; press left to go Back</div>
    </div>
  );
};

AppointmentViewScreenComponent.propTypes = {
  appointment: shape({
    name: string,
    phone: string,
    address: string,
    datetime: string,
  }).isRequired,
};

export const AppointmentViewScreenButtons = {
  LEFT: () => ButtonAction.goToPage({ pathname: '/appointments' }),
  RIGHT: () => ButtonAction.doNothing(),
  TOP: () => ButtonAction.doNothing(),
  BOTTOM: () => ButtonAction.doNothing(),
  SCREEN: () => ButtonAction.doNothing(),
};

export default WithButtonConfigs(AppointmentViewScreenComponent, AppointmentViewScreenButtons);

