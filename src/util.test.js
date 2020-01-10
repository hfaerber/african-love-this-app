import {cleanData} from './util';

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
