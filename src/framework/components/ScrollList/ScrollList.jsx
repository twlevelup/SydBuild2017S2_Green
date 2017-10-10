import React from 'react';
import PropTypes from 'prop-types';
import smallTick from './small_tick.png';
import './scroll_list.css';

const ScrollList = ({ labels, selectedIndex, itemHeight }) => {
  return (
    <ul style={ {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    } }
    >
      {
        labels.map((label, index) => (
          <li
            key={ `scroll-list-item-${ index + 1 }` }
            style={ {
              height: itemHeight,
              verticalAlign: 'middle',
            } }
            className={ `scroll-item ${ index === selectedIndex ? 'selected' : '' }` }
          >
            { label }
            { index === selectedIndex &&
            <img src={ smallTick } className='selectedTick' alt='selected option' />
            }
          </li>
        ))
    }
    </ul>
  );
};

ScrollList.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number,
  itemHeight: PropTypes.number,
};

ScrollList.defaultProps = {
  selectedIndex: 0,
  itemHeight: 30,
};

export default ScrollList;
