import React from 'react';
import PropTypes from 'prop-types';

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
              fontSize: index === 2 ? 20 : null,

            } }
            className={ `scroll-item ${ index === selectedIndex ? 'selected' : '' }` }
          >
            { label }
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
