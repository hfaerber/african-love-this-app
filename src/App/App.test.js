import React from 'react';
import { App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { fetchCountryData } from '../apiCalls';
import { updateCountries, updateError, updateLoadingStatus } from '../actions';

jest.mock('../apiCalls');

describe('AppContainer', () => {
  describe('App component', () => {
    let wrapper, mockUpdateCountries, mockUpdateError, mockUpdateLoadingStatus;

    beforeEach(() => {
      mockUpdateCountries = jest.fn();
      mockUpdateError = jest.fn();
      mockUpdateLoadingStatus = jest.fn();
      fetchCountryData.mockImplementation(() => {
        return Promise.resolve( [{
          name: "Algeria", topLevelDomain: ['test'], alpha2Code: "DZ",
          callingCodes: [777], capital: "Algiers", subregion: "Northern Africa"
          }]
        );
      });
      wrapper = shallow(<App
        updateCountries={mockUpdateCountries}
        updateError={mockUpdateError}
        updateLoadingStatus={mockUpdateLoadingStatus}
      />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('should invoke fetchCountryData after component mounts', () => {
      expect(fetchCountryData).toHaveBeenCalled();
    });

    it('should invoke updateCountries and updateLoadingStatus props when fetchCountryData resolves', async () => {
      await fetchCountryData();
      expect(mockUpdateCountries).toHaveBeenCalled();
      expect(mockUpdateLoadingStatus).toHaveBeenCalledWith(false);
    });

    it('should invoke updateLoadingStatus and updateError if fetchCountryData rejects',
      async () => {
        fetchCountryData.mockImplementation(() => {
          return Promise.reject(Error('got an error'))
        });
        wrapper = await shallow(<App
          updateCountries={mockUpdateCountries}
          updateError={mockUpdateError}
          updateLoadingStatus={mockUpdateLoadingStatus}
        />);
        await wrapper.instance().forceUpdate();
        expect(mockUpdateError).toHaveBeenCalledWith('Error loading study cards. Please refresh to try again.');
        expect(mockUpdateLoadingStatus).toHaveBeenCalledWith(false);
    });

  });

  describe('mapDispatchToProps', () => {
    let mockDispatch, mappedProps;
    beforeEach(()=> {
      mockDispatch = jest.fn();
      mappedProps = mapDispatchToProps(mockDispatch);
    });

    it('should call dispatch with an updateCountries action when updateCountries is called', () => {
      const mockCountries = [
        {name: "Algeria", capital: "Algiers", subregion: "Northern Africa", needsStudied: true},
        {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa", needsStudied: true},
      ];
      const actionToDispatch = updateCountries(mockCountries);
      mappedProps.updateCountries(mockCountries);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with an updateError action when updateError is called', () => {
      const errorMessage = 'error';
      const actionToDispatch = updateError(errorMessage);
      mappedProps.updateError(errorMessage);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with an updateLoadingStatus action when updateLoadingStatus is called', () => {
      const status = false;
      const actionToDispatch = updateLoadingStatus(status);
      mappedProps.updateLoadingStatus(status);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})
