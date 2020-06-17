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

    /*componentDidMount() {
      const {required, setOptionValue} = this.props;

      if (!required) {
        setOptionValue('');
      }
    } /* -----> must be commented, hotel must stay as default value if option is not required

    /*constructor(props) {  //same functionality as componentDidMount()
      super(props);

      if (!this.props.required) {
        this.props.setOptionValue('');
      }
    }*/



    render() {
      const {values, required, setOptionValue, currentValue} = this.props;
        
      if (required) {
        return (
          <div>
            {values.map(value => (
              <div
                key={value.id}
                className={
                  styles.icon, 
                  (currentValue === value.id ? styles.iconActive : '')
                }
                onClick = {() => (setOptionValue(value.id))}
              >
                <Icon name={value.icon} />
                {value.name}
                ({formatPrice(value.price)})
              </div>
            ))}
          </div>
        );
      } else {
        return (
          <div 
            className={styles.icon}
            onClick = {() => (setOptionValue())}
          >
            <Icon name='times-circle'></Icon>
            none
          </div>
        );
      }
    }
}


export default OrderOptionIcons;