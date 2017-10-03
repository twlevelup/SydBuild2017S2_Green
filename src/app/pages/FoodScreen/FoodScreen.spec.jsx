import React from 'react';
import { shallow } from 'enzyme';
import { FoodScreenComponent, FoodScreenButtons } from './FoodScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<FoodScreenComponent />', () => {
  let componentWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<FoodScreenComponent food={
    {
      'name': 'Helpfulpeople',
      'date': '21/09/2017',
      'timeStart': '5:00PM',
      'timeEnd': '8:00PM',
    } }
    />);
    jest.spyOn(ButtonAction, 'goToPage');
  });
  it('should display name', () => {
    expect(componentWrapper.find('.food-provider')).toIncludeText('Food-Provider: Helpfulpeople');
  });
  it('should display date', () => {
    expect(componentWrapper.find('.food-date')).toIncludeText('21/09/2017');
  });
  it('should display timeStart', () => {
    expect(componentWrapper.find('.time-start')).toIncludeText('5:00PM');
  });
  it('should display timeEnd', () => {
    expect(componentWrapper.find('.time-finish')).toIncludeText('8:00PM');
  });
  describe('FoodScreenButtons', () => {
    test('it should have a LEFT button config of going to Home Page', () => {
      FoodScreenButtons.LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });
  });
});
