import React from 'react';
import { WelcomeForm, mapDispatchToProps } from './WelcomeForm';
import { shallow } from 'enzyme';
import { updateUser } from '../actions';

describe('WelcomeForm', () => {
  let wrapper, mockEvent, mockUpdateUser;

  beforeEach(() => {
    mockUpdateUser = jest.fn();
    wrapper = shallow(<WelcomeForm
      updateUser={mockUpdateUser}
    />);
    mockEvent = { target: { value: 'test value' } };
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when user has entered their name', () => {
    wrapper.setState({ name: 'Ben' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke handleChange on change', () => {
    wrapper.instance().handleChange = jest.fn();
    wrapper.find('.input-name').simulate('change', mockEvent)
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
  });

  it('should update state when handleChange is invoked', () => {
    let initialState = { name: 'initial state value' };
    let expectedState = { name: 'test value' }
    wrapper.setState(initialState);
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should invoke updateUser prop when handleChange is invoked', () => {
    let initialState = { name: 'initial state value' };
    let expectedState = { name: 'test value' }
    wrapper.setState(initialState);
    wrapper.instance().handleChange(mockEvent);
    expect(mockUpdateUser).toHaveBeenCalledWith('test value');
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with an updateUser action when updateUser is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = updateUser('Ben');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updateUser('Ben');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
});
