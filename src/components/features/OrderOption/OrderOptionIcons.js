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
      currentValue: PropTypes.string,
    }

    render() {
      const {values, required, setOptionValue, currentValue} = this.props;
        
      return(
        <div className={styles.icon}>

          {required ? '' : (
            <div
              className={styles.icon }
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
                (currentValue === value.id ? styles.iconActive : '')
              }
              onClick = {() => (setOptionValue(value.id))
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