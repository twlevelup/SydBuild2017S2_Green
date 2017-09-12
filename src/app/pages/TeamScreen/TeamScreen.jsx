import React from 'react';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';

export const TeamScreenComponent = () => {
  return (
    <div id='team-page'>
      <div id='team-container'>
        <div>
          <span id='heading'>Team green</span>
          <p>
            My new team members are:
            Jeremy
            Zinh
            Ulas
            Tammy
          </p>

        </div>
      </div>
    </div>
  );
};

export const TeamScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/contacts'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default WithButtonConfigs(TeamScreenComponent, TeamScreenButtons);
