export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

export function increment(number) {
  return (dispatch) => {
    dispatch({
      type: INCREMENT,
      payload: {
        number,
      },
    });
  };
}

export function decrement(number) {
  return (dispatch) => {
    dispatch({
      type: DECREMENT,
      payload: {
        number,
      },
    });
  };
}
