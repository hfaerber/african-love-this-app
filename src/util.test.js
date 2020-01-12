import { cleanData, filter, getQueryCard } from './util';

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
  let mockCountries;
  beforeEach(() => {
    mockCountries = [
      {name: "Algeria", capital: "Algiers", subregion: "Northern Africa", needsStudied: true},
      {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa", needsStudied: false},
    ];
  });

  it('should return all needsStudied cards if selectedFilter is Still Learning',
    () => {
      const expected = [
        {name: "Algeria", capital: "Algiers", subregion: "Northern Africa", needsStudied: true},
      ];
      expect(filter(mockCountries, 'Still Learning')).toEqual(expected);
  });

  it('should return all cards that dont needsStudied if selectFilter is Got It!', () => {
    const expected = [
      {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa", needsStudied: false}
    ];
    expect(filter(mockCountries, 'Got It!')).toEqual(expected);
  });

  it('should return all cards if selectedFilter is All', () => {
    const expected = [
      {name: "Algeria", capital: "Algiers", subregion: "Northern Africa", needsStudied: true},
      {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa", needsStudied: false},
    ];
    expect(filter(mockCountries, 'All')).toEqual(expected);
  })
})

// describe('getQueryCard', () => {
//   it('should ')
// })
