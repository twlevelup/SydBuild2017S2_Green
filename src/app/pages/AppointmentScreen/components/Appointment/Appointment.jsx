import React from 'react';
import { string } from 'prop-types';

const Appointment = (props) => {
  const {
    id,
    patient,
    address,
    provider,
    time,
  } = props;

  return (
    <div className='appointment'>
      <div className='id'>
        <b>Id</b>: {id}
      </div>
      <div className='patient'>
        <b>Patient</b>: {patient}
      </div>
      <div className='address'>
        <b>Address</b>: {address}
      </div>
      <div className='provider'>
        <b>Provider</b>: {provider}
      </div>
      <div className='time'>
        <b>Time</b>: {time}
      </div>
      <br />
    </div>
  );
};


Appointment.propTypes = {
  id: string.isRequired,
  patient: string.isRequired,
  address: string.isRequired,
  provider: string.isRequired,
  time: string.isRequired,
};

export default Appointment;
