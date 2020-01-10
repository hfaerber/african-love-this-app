import React from 'react';
import { NavBtn, mapDispatchToProps } from './NavBtn';
import { updateUser } from '../actions';
import { shallow } from 'enzyme';

describe('NavBtn Container', () => {
  describe('NavBar component', () => {
    let wrapper, mockUser, mockText, mockUpdateUser, mockLink;

    beforeEach(() => {
      mockUser = 'Ben';
      mockText = 'Study';
      mockLink = '/study';
      mockUpdateUser = jest.fn();
      wrapper = shallow(<NavBtn
          text={mockText}
          link={mockLink}
          user={mockUser}
          updateUser={mockUpdateUser}
        />);
    })

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('should invoke updateUser on click', () => {
      wrapper.find('#Study').simulate('click');
      expect(mockUpdateUser).toHaveBeenCalledWith(mockUser);
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with a user action when updateUser is called',
    () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateUser('Ben');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updateUser('Ben');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})
