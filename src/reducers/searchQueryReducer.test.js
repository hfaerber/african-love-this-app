import { searchQueryReducer } from './searchQueryReducer';

describe('searchQueryReducer', () => {
  it('should return the inital state', () => {
    const expected = '';
    const result = searchQueryReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the updated state if the type is UPDATE_SEARCH_QUERY', () => {
    const testState = 'Angola';
    const expected = 'Benin';
    const action = {
      type: 'UPDATE_SEARCH_QUERY',
      query: 'Benin'
    };
    const result = searchQueryReducer(testState, action);
    expect(result).toEqual(expected);
  });
});
