import React from 'react';
import { shallow } from 'enzyme';
import ScrollList from './ScrollList';

describe('ScrollList', () => {
  let items;
  beforeEach(() => {
    items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'];
  });

  describe('when the 1st item is selected', () => {
    it('should display the first item selected', () => {
      const wrapper = shallow(<ScrollList labels={ items } selectedIndex={ 0 } />);
      expect(wrapper.find('.selected')).toIncludeText('item 1');
    });

    it('should display all the items', () => {
      const wrapper = shallow(<ScrollList labels={ items } selectedIndex={ 0 } />);
      expect(wrapper).toIncludeText('item 1item 2item 3item 4item 5item 6');
    });
  });
});
