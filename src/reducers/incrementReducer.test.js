import incrementReducer, { INITIAL_STATE } from './incrementReducer';
import { INCREMENT, DECREMENT } from '../actions/incrementActions';

const incrementAction = {
  type: INCREMENT,
  payload: {
    number: 10,
  },
};

const decrementAction = {
  type: DECREMENT,
  payload: {
    number: 10,
  },
};

const UPDATED_STATE = { number: 10 };

describe('incrementReducer', () => {
  describe('given no action type', () => {
    it('should return inicial state', () => {
      const result = incrementReducer(undefined, { payload: {}, type: undefined });
      expect(result).toBe(INITIAL_STATE);
    });
  });
  describe('given an action with type increment', () => {
    it('should update inicial state incrementing when no state is passed', () => {
      const result = incrementReducer(undefined, incrementAction);
      expect(result.number).toBe(10);
    });
    it('should update state incrementing when state is passed', () => {
      const result = incrementReducer(UPDATED_STATE, incrementAction);
      expect(result.number).toBe(20);
    });
  });
  describe('given an action wit type decrement', () => {
    it('should update inicial state decrementing when no state is passed', () => {
      const result = incrementReducer(undefined, decrementAction);
      expect(result.number).toBe(-10);
    });
    it('should update state decrementing when state is passed', () => {
      const result = incrementReducer(UPDATED_STATE, decrementAction);
      expect(result.number).toBe(0);
    });
  });
});
