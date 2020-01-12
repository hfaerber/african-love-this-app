import { fetchCountryData } from './apiCalls';

describe('fetchCountryData', () => {
  let mockResponse = [{
    name: "Algeria", topLevelDomain: ['test'], alpha2Code: "DZ",
    callingCodes: [777], capital: "Algiers",subregion: "Northern Africa"
  }];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockResponse);
        }
      });
    });
  });

  it('should be passed the correct URL', () => {
    fetchCountryData();
    expect(window.fetch).toHaveBeenCalledWith(
      'https://restcountries.eu/rest/v2/region/africa'
    );
  });

  it('should return an array of country data', () => {
    expect(fetchCountryData()).resolves.toEqual(mockResponse);
  });

  it('should return an error for a response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(fetchCountryData()).rejects.toEqual(Error('something went wrong'));
  })
});
