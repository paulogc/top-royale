import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/incrementActions';

const mapState = state => state.incrementReducer;

const Increment = props => (
  <div>
    {props.number}
    <button onClick={() => props.onIncrement(10)}>
      Add
    </button>
    <button onClick={() => props.onDecrement(10)}>
      Remove
    </button>
  </div>
);

Increment.propTypes = {
  number: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

Increment.defaultProps = {
  number: 0,
  onIncrement: () => {},
  onDecrement: () => {},
};

export default connect(
  mapState,
  {
    onIncrement: increment,
    onDecrement: decrement,
  },
)(Increment);
