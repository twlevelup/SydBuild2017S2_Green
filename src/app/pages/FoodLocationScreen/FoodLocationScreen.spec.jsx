import React from 'react';
import { shallow } from 'enzyme';
import { FoodLocationScreenComponent } from './FoodLocationScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<FoodLocationScreenComponent />', () => {
  let componentWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<FoodLocationScreenComponent />);
    jest.spyOn(ButtonAction, 'goToPage');
  });
  it('should display name', () => {
    expect(componentWrapper).toIncludeText('Food List');
  });
});
