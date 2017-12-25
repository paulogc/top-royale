export default function communication(state = {}, action) {
  const {
    meta,
  } = action;

  if (!meta) {
    return state;
  }

  const {
    type,
    selector,
    status,
  } = meta;

  return {
    ...state,
    [`${type}:${selector}`]: status,
  };
}
