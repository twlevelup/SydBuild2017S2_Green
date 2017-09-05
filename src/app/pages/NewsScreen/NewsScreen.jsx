import React from 'react';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';

export const NewsScreenComponent = () => {
  return (
    <div id='news-page'>
      <div id='news-articles-container'>
        <div>
          <span id='publish-date'>Publish date: 23/05/1823</span>
          <p>My first news article </p>
        </div>
      </div>
    </div>
  );
};

export const NewsScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/contacts'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default WithButtonConfigs(NewsScreenComponent, NewsScreenButtons);
