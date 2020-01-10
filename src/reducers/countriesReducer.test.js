import { countriesReducer } from './countriesReducer';

describe('countriesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = countriesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the updated state if type is UPDATE_COUNTRIES', () => {
    const testState = [{name: "Algeria", capital: "Algiers", subregion: "Northern Africa", needsStudied: true}];
    const action = {
      type: 'UPDATE_COUNTRIES',
      countries: [
        {name: "Algeria", capital: "Algiers", subregion: "Northern Africa", needsStudied: true},
        {name: "Angola", capital: "Luanda", subregion: "Middle Africa", needsStudied: true},
        {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa", needsStudied: true},
        {name: "Botswana", capital: "Gaborone", subregion: "Southern Africa", needsStudied: true}
      ]
    };
    const result = countriesReducer(testState, action);
    const expectedState = [
      {name: "Algeria", capital: "Algiers", subregion: "Northern Africa", needsStudied: true},
      {name: "Angola", capital: "Luanda", subregion: "Middle Africa", needsStudied: true},
      {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa", needsStudied: true},
      {name: "Botswana", capital: "Gaborone", subregion: "Southern Africa", needsStudied: true}
    ];
    expect(result).toEqual(expectedState);
  })
})
