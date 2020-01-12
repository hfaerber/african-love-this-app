import { cleanData, filter } from './util';

describe('cleanData', () => {
  it('should return an array of country objects', () => {
    let mockData = [{
      name: "Algeria", topLevelDomain: ['test'], alpha2Code: "DZ",
      callingCodes: [777], capital: "Algiers",subregion: "Northern Africa"
    }];
    let expected = [{
      name: "Algeria",
      capital: "Algiers",
      subregion: "Northern Africa",
      needsStudied: true
    }];
    expect(cleanData(mockData)).toEqual(expected);
  })
})

describe('filter', () => {
  it('should return all needsStudied cards if selectedFilter is Still Learning',
    () => {
      const mockCountries = [
        {name: "Algeria", capital: "Algiers", subregion: "Northern Africa", needsStudied: true},
        {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa", needsStudied: false},
      ];
      const expected = [
        {name: "Algeria", capital: "Algiers", subregion: "Northern Africa", needsStudied: true},
      ];
      filter(mockCountries, 'Still Learning');
      expect(filter(mockCountries, 'Still Learning')).toEqual(expected);
  })

})
