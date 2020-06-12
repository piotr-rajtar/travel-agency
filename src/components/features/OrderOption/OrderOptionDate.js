import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import {setDataFormat} from '../../../utils/setDataFormat';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {

    static propTypes = {
      setOptionValue: PropTypes.func,
      currentValue: PropTypes.string,
    }
     
    render() {
      const {currentValue, setOptionValue} = this.props;
      return (
        <DatePicker
          value={currentValue}
          onChange={date => setOptionValue(setDataFormat(date))}
          minDate={new Date()}
        />
      );
    }
  
}

export default OrderOptionDate;
