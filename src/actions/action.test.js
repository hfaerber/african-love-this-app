import * as actions from '../actions';

describe('actions', () => {
  it('should return a string with the passed in name and a type of UPDATE_USER',
    () => {
      const name = 'Ben';
      const expectedAction = {
        type:'UPDATE_USER',
        user: 'Ben'
      }
      const result = actions.updateUser(name);
      expect(result).toEqual(expectedAction);
    })
})
