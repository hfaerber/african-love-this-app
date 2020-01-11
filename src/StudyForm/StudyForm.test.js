import React from 'react';
import { StudyForm, mapDispatchToProps } from './StudyForm';
import { updateSelectedFilter, updateSearchQuery } from '../actions';
import { shallow } from 'enzyme';

describe('StudyForm', () => {
  describe('StudyForm component', () => {
    let wrapper, mockEvent, mockUpdateSelectedFilter, mockUpdateSearchQuery;

    beforeEach(() => {
      wrapper = shallow(<StudyForm
        updateSelectedFilter={mockUpdateSelectedFilter}
        updateSearchQuery={mockUpdateSearchQuery}
      />);
      mockEvent = { target: { value: 'testValue' }};
    });

    it('should matchSnapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('should invoke handleSelection onChange within select element', () => {
      wrapper.instance().handleSelection = jest.fn();
      wrapper.find('.select-show').simulate('change', mockEvent);
      expect(wrapper.instance().handleSelection).toHaveBeenCalledWith(mockEvent);
    })

    it('should invoke handleSearch onChange within search input', () => {
      wrapper.instance().handleSearch = jest.fn();
      wrapper.find('.input-search').simulate('change', mockEvent);
      expect(wrapper.instance().handleSearch).toHaveBeenCalledWith(mockEvent);
    })

    it('should invoke clearSearch on click of Clear Search button', () => {
      wrapper.instance().clearSearch = jest.fn();
      wrapper.instance().forceUpdate();
      wrapper.find('.button-clear-search').simulate('click');
      expect(wrapper.instance().clearSearch).toHaveBeenCalled();
    })

    it('should update local state when handleSelection is invoked', () => {

    })

    it('should invoke updateSelectedFilter prop when handleSelection is invoked', () => {

    })

    it('should update local state when handleSearch is invoked', () => {

    })

    it('should invoke updateSearchQuery prop when handleSearch is invoked', () => {

    })

    it('should update local state when clearSearch is invoked', () => {

    })

    it('should invoke updateSearchQuery when clearSearch is invoked', () => {

    })

  });

  describe('mapDispatchToProps', () => {
    let mockDispatch, mappedProps;
    beforeEach(() => {
      mockDispatch = jest.fn();
      mappedProps = mapDispatchToProps(mockDispatch);
    });

    it('calls dispatch with a updateSelectedFilter action when updateSelectedFilter is called', () => {
      const actionToDispatch = updateSelectedFilter('Got It!');
      mappedProps.updateSelectedFilter('Got It!');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })

    it('calls dispatch with a updateSearchQuery action when updateSearchQuery is called', () => {
      const actionToDispatch = updateSearchQuery('Benin');
      mappedProps.updateSearchQuery('Benin');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  });
})
