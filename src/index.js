import React from 'react';
import ReactDOM from 'react-dom';
import TeamScreen from './app/pages/TeamScreen/TeamScreen';
import HomeScreen from './app/pages/HomeScreen/HomeScreen';
import CounterScreen from './app/pages/CounterScreen/CounterScreen';
import ContactScreen from './app/pages/ContactListScreen/ContactListScreen';
import NotFoundScreen from './app/pages/NotFoundScreen/NotFoundScreen';
import contacts from './app/data/contacts.json';
import WatchApp from './framework';
import NewsScreen from './app/pages/NewsScreen/NewsScreen';

const pages = [
  { path: '/', Component: HomeScreen },
  { path: '/contacts', Component: ContactScreen, props: { contacts } },
  { path: '/counter', Component: CounterScreen },
  // { path: '/news', Component: NewsScreen },
  { path: '/team', Component: TeamScreen },
  { path: '/notfound', Component: NotFoundScreen },
  { path: '/news', Component: NewsScreen },
];

ReactDOM.render(
  <WatchApp pages={ pages } />,
  document.getElementById('root'));
