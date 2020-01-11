import React from 'react';
import { App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { fetchCountryData } from '../apiCalls';
import { updateCountries } from '../actions';

jest.mock('../apiCalls');

describe('AppContainer', () => {
  describe('App component', () => {
    let wrapper, mockUpdateCountries;

    beforeEach(() => {
      mockUpdateCountries = jest.fn();
      fetchCountryData.mockImplementation(() => {
        return Promise.resolve( [{
          name: "Algeria", topLevelDomain: ['test'], alpha2Code: "DZ",
          callingCodes: [777], capital: "Algiers", subregion: "Northern Africa"
          }]
        );
      });
      wrapper = shallow(<App
        updateCountries={mockUpdateCountries}
      />);
    });

    it('should invoke fetchCountryData after component mounts', () => {
      expect(fetchCountryData).toHaveBeenCalled();
    });

    it('should invoke updateCountries prop when fetchCountryData resolves', async () => {
      await fetchCountryData();
      expect(mockUpdateCountries).toHaveBeenCalled();
    })

    // it('should do something errorHandly if fetchCountryData rejects', () => {
    //   fetchCountryData.mockImplementation(() => {
    //     return Promise.reject((Error: 'got an error'))
    //   });
    //   fetchCountryData();
    //   expect(console.log).toHaveBeenCalled();
    // })

  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with an updateCountries action when updateCountries is called', () => {
      const mockCountries = [
        {name: "Algeria", capital: "Algiers", subregion: "Northern Africa", needsStudied: true},
        {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa", needsStudied: true},
      ];
      const mockDispatch = jest.fn();
      const actionToDispatch = updateCountries(mockCountries);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updateCountries(mockCountries);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})
