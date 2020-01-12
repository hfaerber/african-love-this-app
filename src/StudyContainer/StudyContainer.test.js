import React from 'react';
import { StudyContainer, mapStateToProps } from './StudyContainer';
import { shallow } from 'enzyme';

describe('StudyContainer', () => {
  describe('StudyContainer component', () => {
    let wrapper, mockCountries;

    beforeEach(() => {
      mockCountries = [
        {name: "Algeria", capital: "Algiers", subregion: "Northern Africa", needsStudied: true},
        {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa", needsStudied: false},
      ];
      wrapper = shallow(<StudyContainer
        countries={mockCountries}
        selectedFilter='All'
        searchQuery=''
        />)
    })

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot;
    })

  });

  describe('mapStateToProps', () => {
    const mockCountries = [
      {name: "Algeria", capital: "Algiers", subregion: "Northern Africa", needsStudied: true},
      {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa", needsStudied: true},
    ];

    it('should return an object with the correct props', () => {
      const mockState = {
        user: 'Ben',
        countries: mockCountries,
        selectedFilter: 'All',
        searchQuery: ''
      };
      const expected = {
        countries: mockCountries,
        selectedFilter: 'All',
        searchQuery: ''
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    })
  });
});
