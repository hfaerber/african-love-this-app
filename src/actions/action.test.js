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
      {name: "Algeria", capital: "Algiers", subregion: "Northern Africa", needsStudied: true},
      {name: "Angola", capital: "Luanda", subregion: "Middle Africa", needsStudied: true},
      {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa", needsStudied: true},
      {name: "Botswana", capital: "Gaborone", subregion: "Southern Africa", needsStudied: true}
    ];
    const expectedAction = {
      type: 'UPDATE_COUNTRIES',
      countries: array
    };
    const result = actions.updateCountries(array);
    expect(result).toEqual(expectedAction);
  });

  it('should return an object with an array of countries and a type of TOGGLE_STUDY_STATUS',
    () => {
      const name = 'Angola';
      const expectedAction = {
        type: 'TOGGLE_STUDY_STATUS',
        name: 'Angola'
      };
      const result = actions.toggleStudyStatus(name);
      expect(result).toEqual(expectedAction);
  });

  it('should return an object with a filter string and a type of UPDATE_SELECTED_FILTER',
    () => {
      const filter = 'Still Learning';
      const expectedAction = {
        type: 'UPDATE_SELECTED_FILTER',
        filter: 'Still Learning'
      };
      const result = actions.updateSelectedFilter(filter);
      expect(result).toEqual(expectedAction);
  });

  it('should return an object with a query string and a type of UPDATE_SEARCH_QUERY', () => {
    const query = 'Benin';
    const expectedAction = {
      type: 'UPDATE_SEARCH_QUERY',
      query: 'Benin'
    };
    const result = actions.updateSearchQuery(query);
    expect(result).toEqual(expectedAction);
  })
})
