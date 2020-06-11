import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

import {formatPrice} from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

class OrderOptionCheckboxes extends React.Component {
  static propTypes = {
    values: PropTypes.array,
    setOptionValue: PropTypes.func,
    currentValue: PropTypes.array,
  }

  render() {
    const {values, setOptionValue, currentValue} = this.props;

    const ifChecked = (array, id) => {
      if (array.indexOf(id) < 0) {
        return false;
      } else {
        return true;
      }
    };

    return (
      <div className={styles.checkboxes}>
        {values.map( value =>(
          <label key={value.id}>
            <input 
              type = 'checkbox'
              value = {value.id}
              checked = {ifChecked(currentValue, value.id)}
              onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
            />
            {value.name}
            {formatPrice(value.price)}
          </label>
        ))}
      </div>
    );
  }
}

export default OrderOptionCheckboxes;