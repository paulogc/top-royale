import communication from './communication';

const INITIAL_STATE = {
  state: 'initial',
};

const meta = {
  type: 'FETCH_USERS',
  selector: 'userId',
  status: 'loading',
};

describe('communication', () => {
  describe('meta has no data', () => {
    it('should return initial state', () => {
      expect(communication(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
    });
    describe('passingo no state', () => {
      it('should return empty object', () => {
        expect(communication(undefined, {})).toEqual({});
      });
    });
  });

  describe('having meta data', () => {
    it('shoudl return state with communication atribute', () => {
      const response = communication(INITIAL_STATE, { meta });
      expect(response[`${meta.type}:${meta.selector}`]).toBe(meta.status);
    });
  });
});
