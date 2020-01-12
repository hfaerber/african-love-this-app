import React from 'react';
import { CountryCard, mapDispatchToProps } from './CountryCard';
import { toggleStudyStatus } from '../actions'
import { shallow } from 'enzyme';

describe('CountryCard', () => {
  let mockName;
  describe('CountryCard component', () => {
    let wrapper, mockToggleStudyStatus;
    beforeEach(() => {
      mockName = 'Benin';
      mockToggleStudyStatus = jest.fn();
      wrapper = shallow(<CountryCard
        name={mockName}
        capital='Capital of Benin'
        region='Region of Benin'
        needsStudied={true}
        toggleStudyStatus={mockToggleStudyStatus}
        />)
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('should match snapshot when needsStudied is false', () => {
      wrapper = shallow(<CountryCard
        needsStudied={false}
        />);
      expect(wrapper).toMatchSnapshot();
    })

    it('should invoke toggleStudyStatus prop on click', () => {
      wrapper.find('.button-study-status').simulate('click');
      expect(mockToggleStudyStatus).toHaveBeenCalledWith(mockName);
    })
  });

  describe('mapDispatchToProps', () => {
    mockName = 'Benin';
    it('should call dispatch with a toggleStudyStatus action when toggleStudyStatus is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = toggleStudyStatus('Benin');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.toggleStudyStatus('Benin');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  });
})
