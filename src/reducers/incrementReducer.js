import { INCREMENT, DECREMENT } from '../actions/incrementActions';

export const INITIAL_STATE = { number: 0 };

export default function incrementReducer(
  state = INITIAL_STATE,
  action,
) {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + action.payload.number,
      };
    case DECREMENT:
      return {
        number: state.number - action.payload.number,
      };
    default:
      return state;
  }
}
