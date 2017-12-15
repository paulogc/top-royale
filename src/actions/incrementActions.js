export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

export function increment(number) {
  console.log(number);
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
  return {
    type: DECREMENT,
    payload: {
      number,
    },
  };
}
