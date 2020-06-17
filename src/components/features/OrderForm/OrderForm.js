import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';

import {Row, Col} from 'react-flexbox-grid';

import Button from '../../common/Button/Button';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings';

import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost, tripData) => {
  if ((options.name != '') && (options.contact != '')) {

    const totalCost = formatPrice(calculateTotal(tripCost, options));

    const payload = {
      ...tripData,
      ...options,
      totalCost,
    };
  
    const url = settings.db.url + '/' + settings.db.endpoint.orders;
  
    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
  
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else {

    return window.alert('Name and contact are required');

  }


};

class OrderForm extends React.Component {
    static propTypes = {
      tripCost: PropTypes.string,
      options: PropTypes.object,
      setOrderOption: PropTypes.func,
      tripId: PropTypes.string,
      tripName: PropTypes.string,
      tripCountryCode: PropTypes.object,
    }
  
    render() {
      const {tripCost, options, setOrderOption, tripId, tripName, tripCountryCode} = this.props;
      const tripData = {
        tripid: tripId, 
        tripName: tripName, 
        countryCode: tripCountryCode.alpha3Code,
      };

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
          <Col xs={12}>
            <Button onClick={() => sendOrder(options, tripCost, tripData)}>Order now!</Button>
          </Col>
        </Row>
      );
    }
}

export default OrderForm;