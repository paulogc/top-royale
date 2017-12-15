import { INCREMENT, DECREMENT } from '../actions/incrementActions';

const INITIAL_STATE = { number: 10 };

export default function incrementReducer(
  state = INITIAL_STATE,
  action,
) {
  console.log('oio', action);
  switch (action.type) {
    case INCREMENT:
      return state.number + action.payload;
    case DECREMENT:
      return state.number - action.payload;
    default:
      return state;
  }
}
