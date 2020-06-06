import React from 'react';
//import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';

//import {Row, Col} from 'react-flexbox-grid';

const OrderSummary = () => (
  <h2 className={styles.component}>
      Total: <strong>$12,345</strong>
  </h2>
);

export default OrderSummary;