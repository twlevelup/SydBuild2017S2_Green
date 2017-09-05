import React from 'react';
import { shallow } from 'enzyme';
import { NewsScreenComponent, NewsScreenButtons } from './NewsScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<NewsScreenComponent />', () => {
  let componentWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<NewsScreenComponent />);
    jest.spyOn(ButtonAction, 'goToPage');
  });

  it('should display the article publish date', () => {
    expect(componentWrapper.find('#publish-date')).toHaveText('Publish date: 23/05/1823');
  });

  it('should display (my first news article) by default', () => {
    expect(componentWrapper).toIncludeText('My first news article');
  });

  describe('NewsScreenButtons', () => {
    test('it should have a LEFT button config of going to Home Page', () => {
      NewsScreenButtons.LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a RIGHT button config of going to contactList page', () => {
      NewsScreenButtons.RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/contacts');
    });

    test('it should have a TOP button config of going to contactList page', () => {
      NewsScreenButtons.TOP();
      expect(ButtonAction.scrollUp).toHaveBeenCalled();
    });

    test('it should have a BOTTOM button config of going to contactList page', () => {
      NewsScreenButtons.BOTTOM();
      expect(ButtonAction.scrollDown).toHaveBeenCalled();
    });
  });
});
