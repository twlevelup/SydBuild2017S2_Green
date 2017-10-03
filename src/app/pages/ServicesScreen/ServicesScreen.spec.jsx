import React from 'react';
import { shallow } from 'enzyme';
import { ServicesScreenComponent, ServicesScreenButtons } from './ServicesScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<ServicesScreenComponent />', () => {
  let componentWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<ServicesScreenComponent />);
    jest.spyOn(ButtonAction, 'goToPage');
  });
  it('should display Food option', () => {
    expect(componentWrapper.find('.menu')).toHaveText('Food');
  });

  describe('ServicesScreenButtons', () => {
    test('it should have a LEFT button config of going to Home Page', () => {
      ServicesScreenButtons.LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a RIGHT button config of going to contactList page', () => {
      ServicesScreenButtons.RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/services');
    });

    test('it should have a TOP button config of going to contactList page', () => {
      ServicesScreenButtons.TOP();
      expect(ButtonAction.scrollUp).toHaveBeenCalled();
    });

    test('it should have a BOTTOM button config of going to contactList page', () => {
      ServicesScreenButtons.BOTTOM();
      expect(ButtonAction.scrollDown).toHaveBeenCalled();
    });

    test('when you click on screen button it should navigate to food list based on location', () => {
      ServicesScreenButtons.SCREEN();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/food-location');
    });
  });
});
