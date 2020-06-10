import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

import {formatPrice} from '../../../utils/formatPrice';

class OrderOptionCheckboxes extends React.Component {
  static propTypes = {
    values: PropTypes.array,
  }

  render() {
    const {values} = this.props;

    return (
      <div className={styles.checkboxes}>
        {values.map( value =>(
          <label key={value.id}>
            <input 
              type = 'checkbox'
              value = {value.id}
            />
            {value.name}
            {formatPrice(value.price)}
          </label>
        ))}
      </div>
    );
  }
}

/*const OrderOptionCheckboxes = () => (
  <div>OrderOptionCheckboxes</div>
); */

export default OrderOptionCheckboxes;