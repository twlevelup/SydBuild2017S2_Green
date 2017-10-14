import { connect } from 'react-redux';
import { hideNotification, pushNotification, pushAppointmentNotification } from '../actions/NotificationAction';
import { remapButtons } from '../actions/ButtonAction';

const NotificationContainer = (popup) => {
  const mapStateToProps = (state) => {
    if (state.NotificationReducer) {
      return {
        text: state.NotificationReducer.text,
        show: state.NotificationReducer.show,
      };
    }
    return {
      text: 'default text',
      show: false,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      remapButtons: (newButtonConfigs) => {
        dispatch(remapButtons(newButtonConfigs));
      },
      hideNotification: () => {
        dispatch(hideNotification());
      },
      pushNotification: (notification) => {
        dispatch(pushNotification(notification));
      },
      pushAppointmentNotification: (notification) => {
        dispatch(pushAppointmentNotification(notification));
      },
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(popup);
};

export default NotificationContainer;
