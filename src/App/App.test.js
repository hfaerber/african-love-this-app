import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { shallow } from 'enzyme';
import { fetchCountryData } from '../apiCalls';

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
    })
  })
})

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
