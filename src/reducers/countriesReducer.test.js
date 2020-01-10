import { countriesReducer } from './countriesReducer';

describe('countriesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = countriesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the updated state if type is UPDATE_COUNTRIES', () => {
    const testState = [{name: "Algeria", capital: "Algiers", subregion: "Northern Africa"}];
    const action = {
      type: 'UPDATE_COUNTRIES',
      countries: [
        {name: "Algeria", capital: "Algiers", subregion: "Northern Africa"},
        {name: "Angola", capital: "Luanda", subregion: "Middle Africa"},
        {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa"},
        {name: "Botswana", capital: "Gaborone", subregion: "Southern Africa"}
      ]
    };
    const result = countriesReducer(testState, action);
    const expectedState = [
      {name: "Algeria", capital: "Algiers", subregion: "Northern Africa"},
      {name: "Angola", capital: "Luanda", subregion: "Middle Africa"},
      {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa"},
      {name: "Botswana", capital: "Gaborone", subregion: "Southern Africa"}
    ];
    expect(result).toEqual(expectedState);
  })
})
