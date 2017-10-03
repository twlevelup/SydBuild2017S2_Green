import React from 'react';
import { string, shape } from 'prop-types';

import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';

export const FoodScreenComponent = ({ food }) => {
  const { name, date, timeStart, timeEnd } = food;
  return (
    <div id='food-page'>
      <div id='food-container'>
        <div className='food-provider'>
          Food-Provider: {name}
        </div>

        <div className='food-date'>
          Date: {date}
        </div>
        <div className='time-start'>
          Time-Start: {timeStart}
        </div>
        <div className='time-finish'>
          Time-End: {timeEnd}
        </div>
      </div>
    </div>
  );
};

FoodScreenComponent.propTypes = {
  food: shape({
    name: string,
    date: string,
    timeStart: string,
    timeEnd: string,
  }).isRequired,
};

export const FoodScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
};

export default WithButtonConfigs(FoodScreenComponent, FoodScreenButtons);
