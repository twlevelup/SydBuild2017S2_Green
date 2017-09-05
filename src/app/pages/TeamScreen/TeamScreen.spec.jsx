import React from 'react';
import { shallow } from 'enzyme';
import { TeamScreenComponent, TeamScreenButtons } from './TeamScreen';
import ButtonAction from '../../../framework/util/ButtonAction';

jest.mock('../../../framework/util/ButtonAction');

describe('<TeamScreenComponent />', () => {
  let componentWrapper;

  beforeEach(() => {
    componentWrapper = shallow(<TeamScreenComponent />);
    jest.spyOn(ButtonAction, 'goToPage');
  });
  it('should display the heading', () => {
    expect(componentWrapper.find('#heading')).toHaveText('Team green');
  });
  it('should display Jeremy', () => {
    expect(componentWrapper).toIncludeText('Jeremy');
  });
  it('should display Zinh', () => {
    expect(componentWrapper).toIncludeText('Zinh');
  });
  // it('should display the article publish date', () => {
  //   expect(componentWrapper.find('#publish-date')).toHaveText('Publish date: 23/05/1823');
  // });
  //
  // it('should display (my first news article) by default', () => {
  //   expect(componentWrapper).toIncludeText('My first news article');
  // });

  describe('TeamScreenButtons', () => {
    test('it should have a LEFT button config of going to Home Page', () => {
      TeamScreenButtons.LEFT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/');
    });

    test('it should have a RIGHT button config of going to contactList page', () => {
      TeamScreenButtons.RIGHT();
      expect(ButtonAction.goToPage).toHaveBeenCalledWith('/contacts');
    });

    test('it should have a TOP button config of going to contactList page', () => {
      TeamScreenButtons.TOP();
      expect(ButtonAction.scrollUp).toHaveBeenCalled();
    });

    test('it should have a BOTTOM button config of going to contactList page', () => {
      TeamScreenButtons.BOTTOM();
      expect(ButtonAction.scrollDown).toHaveBeenCalled();
    });
  });
});
