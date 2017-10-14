import React from 'react';
import { shallow, mount } from 'enzyme';
import { FoodScreenComponent,
  FoodLayoutButtons,
  FoodScreenLayout,
} from './FoodScreen';
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
      'location': 'location11',
      'id': 'my-home',
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
  it('should display location', () => {
    expect(componentWrapper.find('.location')).toIncludeText('location11');
  });
  it('should display id', () => {
    expect(componentWrapper.find('.id')).toIncludeText('my-home');
  });
  describe('FoodScreenButtons', () => {
    test('it should have a LEFT button config of going to Home Page', () => {
      FoodLayoutButtons.LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });
  });
});

describe('<FoodScreenLayout />', () => {
  let componentWrapper;
  const props = { match: { params: { id: '1' } } };
  beforeEach(() => {
    componentWrapper = mount(<FoodScreenLayout
      { ...props }
    />);
  });

  it('should filter food by id and display name', () => {
    expect(componentWrapper.find('.food-provider')).toIncludeText('Food-Provider: Helpfulpeople');
  });
});


describe('Bottom button', () => {
  it('should scroll down', () => {
    FoodLayoutButtons.BOTTOM();
    expect(ButtonAction.scrollDown).toHaveBeenCalled();
  });
});


describe('Top button', () => {
  it('should scroll top', () => {
    FoodLayoutButtons.TOP();
    expect(ButtonAction.scrollUp).toHaveBeenCalled();
  });
});

test('it should have a RIGHT button config of doing nothing', () => {
  FoodLayoutButtons.RIGHT();
  expect(ButtonAction.goToPage).toHaveBeenCalled();
});
