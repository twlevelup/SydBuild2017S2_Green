// import React from 'react';
// import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
// import ButtonAction from '../../../framework/util/ButtonAction';
// import foodList from './../../data/food-location.json';
// export const FoodScreenComponent = ({ props }) => {
//
//   const food = foodList.filter(item => item.id === props.id);
//
//   const { name, date, timeStart, timeEnd } = food;
//   return (
//     <div id='food-page'>
//       <div id='food-container'>
//         <div className='food-provider'>
//           Food-Provider: {name}
//         </div>
//
//         <div className='food-date'>
//           Date: {date}
//         </div>
//         <div className='time-start'>
//           Time-Start: {timeStart}
//         </div>
//         <div className='time-finish'>
//           Time-End: {timeEnd}
//         </div>
//       </div>
//     </div>
//   );
// };
//
// FoodScreenComponent.propTypes = {
//   food: PropTypes.objectOf(PropTypes.any).isRequired,
//   id: PropTypes.string.isRequired,
// };
//
// export const FoodScreenButtons = {
//   LEFT: () => ButtonAction.goToPage('/'),
// };
//
// export default withRouter(FoodScreenComponent);
import React from 'react';
import { string, shape, object } from 'prop-types';
import { withRouter } from 'react-router-dom';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import foodList from '../../data/food.json';

export const FoodScreenComponent = ({ food }) => {
  const { name, date, timeStart, timeEnd, location, id } = food;
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
        <div className='location'>
          Location: {location}
        </div>
        <div className='id'>
          Id: {id}
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
    location: string,
    id: string,
  }).isRequired,
};
export const FoodScreenLayout = (props) => {
  const foodId = props.match.params.id;
  const foodItem = foodList.filter(item => item.id === foodId)[0];
  return <FoodScreenComponent food={ foodItem } />;
};
FoodScreenLayout.propTypes = {
  match: shape({
    params: object,
  }).isRequired,
};

export const FoodLayoutButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/food-location'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default withRouter(WithButtonConfigs(FoodScreenLayout, FoodLayoutButtons));
