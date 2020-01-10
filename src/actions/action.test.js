import * as actions from '../actions';

describe('actions', () => {
  it('should return a string with the passed in name and a type of UPDATE_USER',
    () => {
      const name = 'Ben';
      const expectedAction = {
        type:'UPDATE_USER',
        user: 'Ben'
      };
      const result = actions.updateUser(name);
      expect(result).toEqual(expectedAction);
  });

  it('should return an object with an array of countries and type of UPDATE_COUNTRIES',
    () => {
    const array = [
      {name: "Algeria", capital: "Algiers", subregion: "Northern Africa"},
      {name: "Angola", capital: "Luanda", subregion: "Middle Africa"},
      {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa"},
      {name: "Botswana", capital: "Gaborone", subregion: "Southern Africa"}
    ];
    const expectedAction = {
      type: 'UPDATE_COUNTRIES',
      countries: array
    };
    const result = actions.updateCountries(array);
    expect(result).toEqual(expectedAction);
  });
})
