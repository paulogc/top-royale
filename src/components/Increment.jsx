import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { increment } from '../actions/incrementActions';

const mapState = (state) => {
  console.log(state);
  return state.incrementReducer;
};

const Increment = props => (
  <div>
    {props.number}
    <button onClick={props.onIncrement}>
      Add
    </button>
  </div>
);

Increment.propTypes = {
  number: PropTypes.number,
  onIncrement: PropTypes.func,
};

Increment.defaultProps = {
  number: 0,
  onIncrement: () => { console.log('hu'); },
};

export default connect(
  mapState,
  () => ({
    onIncrement: () => increment(10),
  }),
)(Increment);
