import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/incrementActions';

import styles from './Increment.css';

const mapState = state => state.incrementReducer;

const Increment = props => (
  <div className={styles.container}>
    {props.number}
    <button className={styles.button} onClick={() => props.onIncrement(10)}>
      Add
    </button>
    <button className={styles.button} onClick={() => props.onDecrement(10)}>
      Remove
    </button>
  </div>
);

Increment.propTypes = {
  number: PropTypes.number,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

Increment.defaultProps = {
  number: 0,
};

export default connect(
  mapState,
  {
    onIncrement: increment,
    onDecrement: decrement,
  },
)(Increment);
