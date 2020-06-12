import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {

    static propTypes = {
      setOptionValue: PropTypes.func,
      currentValue: PropTypes.string,
    }

    setDataFormat(date) {
      const {setOptionValue} = this.props;

      const convertedDate = date.toLocaleString().slice(0, 10);

      setOptionValue(convertedDate);
    }
     
    render() {
      const {currentValue} = this.props;
      return (
        <DatePicker
          value={currentValue}
          onChange={date => this.setDataFormat(date)}
        />
          
      );
    }
  
}

export default OrderOptionDate;
