import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';

class OrderOptionIcons extends React.Component {
    static propTypes = {
      values: PropTypes.array,
      required: PropTypes.bool,
      setOptionValue: PropTypes.func,
    }

    render() {
      const {values, required, setOptionValue} = this.props;
      let checked = false;

      let className = styles.icon;

      if (checked) {
        className+=styles.iconActive;
      }
        
      return(
        <div className={className}>

          {required ? '' : (
            <div
              className={
                styles.icon, 
                checked? styles.iconActive : ''
              }
              setOptionValue=''
            >
              <Icon name='times-circle'></Icon>
              none
            </div>
          )}

          {values.map(value => (
            <div
              key={value.id}
              className={
                styles.icon, 
                checked? styles.iconActive : ''
              }
              onClick = {
                checked = true, 
                event => (
                  setOptionValue(event.currentTarget.value)
                )
              }
            >
              <Icon name={value.icon} />
              {value.name}
              ({formatPrice(value.price)})
            </div>
          ))}
        </div>
      );
    }
}


export default OrderOptionIcons;