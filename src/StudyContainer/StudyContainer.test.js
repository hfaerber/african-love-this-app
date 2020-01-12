import React from 'react';
import { StudyContainer, mapStateToProps } from './StudyContainer';
import { shallow } from 'enzyme';

describe('StudyContainer', () => {
  describe('StudyContainer component', () => {
    let wrapper, mockCountries;

    beforeEach(() => {
      mockCountries = [
        {name: "Algeria", capital: "Algiers",
          subregion: "Northern Africa", needsStudied: true},
        {name: "Benin", capital: "Porto-Novo",
          subregion: "Western Africa", needsStudied: false},
      ];
      wrapper = shallow(<StudyContainer
        countries={mockCountries}
        selectedFilter='All'
        searchQuery=''
        error=''
        isLoading={false}
        />);
    });

    it('should match snapshot when not loading and no error', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should match snapshot when isLoading is true', () => {
      wrapper = shallow(<StudyContainer
        countries={mockCountries}
        selectedFilter='All'
        searchQuery=''
        error=''
        isLoading={true}
        />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should match snapshot when isLoading false and error true', () => {
      wrapper = shallow(<StudyContainer
        countries={mockCountries}
        selectedFilter='All'
        searchQuery=''
        error='There is an error'
        isLoading={false}
        />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should match snapshot when no cards found to display', () => {
      wrapper = shallow(<StudyContainer
        countries={[]}
        selectedFilter='All'
        searchQuery=''
        error=''
        isLoading={false}
        />);
      expect(wrapper).toMatchSnapshot();
    })
  });

  describe('mapStateToProps', () => {
    const mockCountries = [
      {name: "Algeria", capital: "Algiers",
        subregion: "Northern Africa", needsStudied: true},
      {name: "Benin", capital: "Porto-Novo",
        subregion: "Western Africa", needsStudied: true},
    ];

    it('should return an object with the correct props', () => {
      const mockState = {
        user: 'Ben',
        countries: mockCountries,
        selectedFilter: 'All',
        searchQuery: '',
        error: '',
        isLoading: false
      };
      const expected = {
        countries: mockCountries,
        selectedFilter: 'All',
        searchQuery: '',
        error: '',
        isLoading: false
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    })
  });
});
