import React from 'react';
import { StudyContainer, mapStateToProps } from './StudyContainer';
import { shallow } from 'enzyme';

describe('StudyContainer', () => {
  describe('StudyContainer component', () => {
    let wrapper, mockCountries;

    beforeEach(() => {
      mockCountries = [
        {name: "Algeria", capital: "Algiers", subregion: "Northern Africa", needsStudied: true},
        {name: "Benin", capital: "Porto-Novo", subregion: "Western Africa", needsStudied: true},
      ];
      wrapper = shallow(<StudyContainer
        countries={mockCountries}
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
// test that we only get the countries prop from the store
    it('should return an object with the countries array', () => {
      const mockState = {
        user: 'Ben',
        countries: mockCountries };
      const expected = {
        countries: mockCountries };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    })
  });
});
