import { isLoadingReducer } from './isLoadingReducer';

describe('isLoadingReducer', () => {
  it('should return the initial state', () => {
    const expected = true;
    const result = isLoadingReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return updated state when type is UPDATE_LOADING_STATUS', () => {
    const testState = true;
    const expected = false;
    const action = {
      type: 'UPDATE_LOADING_STATUS',
      status: false
    };
    const result = isLoadingReducer(testState, action);
    expect(result).toEqual(expected);
  })
})
