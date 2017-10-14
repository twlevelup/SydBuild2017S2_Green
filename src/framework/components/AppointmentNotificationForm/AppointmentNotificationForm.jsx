import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './react-select.css';
import NotificationContainer from '../../containers/NotificationContainer';
import './appointment_notification_form.css';
import appointments from '../../../app/data/appointments.json';

export class AppointmentNotificationFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: '1',
    };
  }

  handleSelectionChange = (e) => {
    this.setState({
      selectedId: e.value,
    });
  }

  buttonConfigs = {
    OVERRIDE: () => {
      this.props.hideNotification();
      this.props.remapButtons({ OVERRIDE: false });
    },
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const selectedAppointment = appointments.filter((element) => {
      return element.id === this.state.selectedId;
    });
    this.props.pushAppointmentNotification(selectedAppointment[0]);
    this.props.remapButtons(this.buttonConfigs);
  }

  options = (data) => {
    return data.map((element) => {
      const label = `${ element.time } - ${ element.provider }`;
      return { value: element.id, label };
    });
  }
  render() {
    return (
      <form id='notification-form' onSubmit={ event => this.handleSubmit(event) }>
        <Select
          className='notification-dropdown'
          value={ this.state.selectedId }
          options={ this.options(appointments) }
          onChange={ event => this.handleSelectionChange(event) }
          clearable={ false }
        />
        <input type='submit' value='Send notification' className='submit-btn' />
      </form>
    );
  }
}

AppointmentNotificationFormComponent.propTypes = {
  pushAppointmentNotification: PropTypes.func.isRequired,
  hideNotification: PropTypes.func.isRequired,
  remapButtons: PropTypes.func.isRequired,
};

export default NotificationContainer(AppointmentNotificationFormComponent);
