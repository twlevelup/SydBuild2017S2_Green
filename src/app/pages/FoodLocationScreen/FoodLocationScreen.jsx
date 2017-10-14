
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

export const FoodLocationScreenComponent = ({ foodList }) => (
  <div>
    {foodList.map(foodItem => (
      <h2 key={ foodItem.id }><Link to={ `/food/${ foodItem.id }` }>{foodItem.location}</Link></h2>
    ))}
  </div>
  )
;
FoodLocationScreenComponent.propTypes = {
  foodList: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export const FoodLocationScreenButtons = {
};
export default WithButtonConfigs(FoodLocationScreenComponent, FoodLocationScreenButtons);

