
import React from 'react';
import PropTypes from 'prop-types';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ScrollList from '../../../framework/components/ScrollList/ScrollList';
import ButtonAction from '../../../framework/util/ButtonAction';

export const FoodLocationScreenComponent = ({ foodList, selectedIndex }) => (
  <div>
    <ScrollList
      labels={ foodList.map((foodItem) => {
        return <h2 key={ foodItem.id }>{foodItem.location}</h2>;
      }) }
      selectedIndex={ selectedIndex }
    />

  </div>
  )
;
FoodLocationScreenComponent.propTypes = {
  selectedIndex: PropTypes.number,
  foodList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

FoodLocationScreenComponent.defaultProps = {
  selectedIndex: 0,
};

const getNextIndex = (indexChange, selectedIndex, foodList) => {
  const newIndex = selectedIndex + indexChange;
  return Math.abs((newIndex + foodList.length) % foodList.length);
};


export const FoodLocationScreenButtons = ({ foodList, selectedIndex = 0 }) => ({
  BOTTOM: () => {
    ButtonAction.goToPage({ state: { selectedIndex: getNextIndex(1, selectedIndex, foodList) } });
  },
  TOP: () => {
    ButtonAction.goToPage({ state: { selectedIndex: getNextIndex(-1, selectedIndex, foodList) } });
  },
  SCREEN: () => ButtonAction.goToPage({
    pathname: `/food/${ foodList[selectedIndex].id }`,
  }),
});
export default WithButtonConfigs(FoodLocationScreenComponent, FoodLocationScreenButtons);
