import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

import {formatPrice} from '../../../utils/formatPrice';
import {parseOptionPrice} from '../../../utils/parseOptionPrice';

const OrderOptionNumber = ({currentValue, limits, setOptionValue, tripCost, price}) => (
  <div className = {styles.number}>
    <input 
      type='number'
      className = {styles.inputSmall}
      value = {currentValue}
      min = {limits.min}
      max = {limits.max}
      onChange = {event => setOptionValue(parseInt(event.currentTarget.value))}
    />
    price: {formatPrice((parseOptionPrice(tripCost).value) * currentValue * (parseInt(price)/100))}
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
  tripCost: PropTypes.string,
  price: PropTypes.string,
};

export default OrderOptionNumber;