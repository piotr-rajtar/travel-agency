import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';

import {Row, Col} from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

class OrderForm extends React.Component {
    static propTypes = {
      tripCost: PropTypes.string,
      options: PropTypes.object,
      setOrderOption: PropTypes.func,
    }
  
    render() {
      const {tripCost, options, setOrderOption} = this.props;

      return (
        <Row>
          {pricing.map(optionData => (
            <Col md={4} key={optionData.id} >
              <OrderOption {...optionData} currentValue={options[optionData.id]} setOrderOption={setOrderOption} tripCost={tripCost} />
            </Col>
          ))}
          <Col xs={12}>
            <OrderSummary tripCost={tripCost} options={options} />
          </Col>
        </Row>
      );
    }
}

/*const OrderForm = ({tripCost, options}) => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
}; */

export default OrderForm;