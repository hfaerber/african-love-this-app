import { userReducer } from './userReducer';

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the updated state if type is UPDATE_USER', () => {
    const testState = '';
    const action = {
      type:'UPDATE_USER',
      user: 'Ben'
    };
    const result = userReducer(testState, action);
    const expectedState = 'Ben';
    expect(result).toEqual(expectedState);
  })
})
