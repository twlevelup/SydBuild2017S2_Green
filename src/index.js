import React from 'react';
import ReactDOM from 'react-dom';

import AppointmentScreen from './app/pages/AppointmentScreen/AppointmentScreen';

import HomeScreen from './app/pages/HomeScreen/HomeScreen';
import CounterScreen from './app/pages/CounterScreen/CounterScreen';
import ContactScreen from './app/pages/ContactListScreen/ContactListScreen';
import ContactViewScreen from './app/pages/ContactViewScreen/ContactViewScreen';
import NotFoundScreen from './app/pages/NotFoundScreen/NotFoundScreen';
import FoodScreen from './app/pages/FoodScreen/FoodScreen';
import contacts from './app/data/contacts.json';

import appointments from './app/data/appointments.json';

import SurveyScreen from './app/pages/SurveyScreen/SurveyScreen';
import surveyResponses from './app/data/survey.json';
import SurveyConfirmationScreen from './app/pages/SurveyConfirmationScreen/SurveyConfirmationScreen';

import FoodLocationScreen from './app/pages/FoodLocationScreen/FoodLocationScreen';

import WatchApp from './framework';
import NewsScreen from './app/pages/NewsScreen/NewsScreen';
import EmergencyScreen from './app/pages/EmergencyScreen/EmergencyScreen';
import ServicesScreen from './app/pages/ServicesScreen/ServicesScreen';
import EmergencyConfirmationScreen from './app/pages/EmergencyConfirmationScreen/EmergencyConfirmationScreen';

const pages = [
  { path: '/', Component: HomeScreen },
  { path: '/contacts', Component: ContactScreen, props: { contacts } },
  { path: '/contact-view', Component: ContactViewScreen },
  { path: '/counter', Component: CounterScreen },

  { path: '/appointments', Component: AppointmentScreen, props: { appointments } },

  { path: '/food', Component: FoodScreen },
  { path: '/food-location', Component: FoodLocationScreen },
  { path: '/notfound', Component: NotFoundScreen },
  { path: '/news', Component: NewsScreen },
  { path: '/emergency', Component: EmergencyScreen },
  { path: '/services', Component: ServicesScreen },
  { path: '/survey', Component: SurveyScreen, props: { surveyResponses } },
  { path: '/emergency-confirmation', Component: EmergencyConfirmationScreen },
  { path: '/survey-confirmation', Component: SurveyConfirmationScreen },
];

ReactDOM.render(
  <WatchApp pages={ pages } />,
  document.getElementById('root'));
