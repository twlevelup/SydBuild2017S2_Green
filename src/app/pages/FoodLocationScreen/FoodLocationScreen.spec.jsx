import React from 'react';
import { shallow } from 'enzyme';
import { FoodLocationScreenComponent } from './FoodLocationScreen';

describe('<FoodLocationScreenComponent />', () => {
  let componentWrapper;
  const foodList = [
    {
      'name': 'Helpfulpeople',
      'date': '21/09/2017',
      'timeStart': '5:00PM',
      'timeEnd': '8:00PM',
      'location': 'location33',
      'id': 'location-3',
    },
    {
      'name': 'Helpfulpeople',
      'date': '21/09/2017',
      'timeStart': '5:00PM',
      'timeEnd': '8:00PM',
      'location': 'location444',
      'id': 'location-4',
    },
  ];
  beforeEach(() => {
    componentWrapper = shallow(<FoodLocationScreenComponent foodList={ foodList } />);
  });
  it('should display foodList', () => {
    const listItems = componentWrapper.find('h2');
    expect(listItems).toHaveLength(2);
  });
});
