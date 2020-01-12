import { errorReducer } from './errorReducer';

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = errorReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the updated state when type is UPDATE_ERROR', () => {
    const testState = '';
    const expected = 'Error loading data';
    const action = {
      type: 'UPDATE_ERROR',
      errorMessage: 'Error loading data'
    };
    const result = errorReducer(testState, action);
    expect(result).toEqual(expected);
  })
})
