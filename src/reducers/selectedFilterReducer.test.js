import { selectedFilterReducer } from './selectedFilterReducer';

describe('selectedFilterReducer', () => {
  it('should return the initial state', () => {
    const expected = 'All';
    const result = selectedFilterReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the updated state if type is UPDATE_SELECTED_FILTER', () => {
    const testState = 'All';
    const action = {
      type: 'UPDATE_SELECTED_FILTER',
      filter: 'Got It!'
    };
    const expectedState = "Got It!";
    const result = selectedFilterReducer(testState, action);
    expect(result).toEqual(expectedState);
  })
})
