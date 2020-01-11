import React from 'react';
import { StudyForm, mapDispatchToProps } from './StudyForm';
import { updateSelectedFilter, updateSearchQuery } from '../actions';
import { shallow } from 'enzyme';

describe('StudyForm', () => {
  describe('StudyForm component', () => {

    it('should matchSnapshot', () => {

    })

    it('should invoke handleSelection onChange within select element', () => {

    })

    it('should invoke handleSearch onChange within search input', () => {

    })

    it('should invoke clearSearch on click of Clear Search button', () => {

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
