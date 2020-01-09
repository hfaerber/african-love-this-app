import React from 'react';
import { NavBtn, mapDispatchToProps } from './NavBtn';
import { updateUser } from '../actions';
import { shallow } from 'enzyme';

describe('NavBtn Container', () => {
  describe('NavBar component', () => {
    let wrapper, mockUser, mockText, mockUpdateUser;

    beforeEach(() => {
      mockUser = 'Ben';
      mockText = 'Study';
      mockUpdateUser = jest.fn();
      wrapper = shallow(<NavBtn
          text={mockText}
          user={mockUser}
          updateUser={mockUpdateUser}
        />);
    })

// add snapshot tests

    // it('should invoke updateUser on click', () => {
    //
    // })
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
