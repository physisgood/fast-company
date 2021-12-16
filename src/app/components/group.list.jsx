import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({ items, valueProperty, contentProperty, onItemSelect, selectedItem }) => {
  // console.log('items', items);
  // items.map((item) => console.log('item', item));
  // items.map((item) => console.log(item[valueProperty]));

  return Array.isArray(items) ? (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={'list-group-item' + (item === selectedItem ? ' active' : '')}
          onClick={() => onItemSelect(item)}
          role={'button'}
        >
          {item[contentProperty]}
        </li>
      ))}
    </ul>
  ) : (
    // console.log('bbbbbbb')
    <ul className="list-group">
      {Object.keys(items).map((item) => (
        <li
          key={items[item][valueProperty]}
          className={'list-group-item' + (items[item] === selectedItem ? ' active' : '')}
          onClick={() => onItemSelect(items[item])}
          role={'button'}
        >
          {items[item][contentProperty]}
        </li>
      ))}
    </ul>
  );
};

GroupList.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name',
};

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object,
};

export default GroupList;
