import React from 'react';
import { WelcomeForm } from './WelcomeForm';
import { shallow } from 'enzyme';

describe('WelcomeForm', () => {
  let wrapper, mockEvent, mockUpdateUser;

  beforeEach(() => {
    mockUpdateUser = jest.fn();
    wrapper = shallow(<WelcomeForm
      updateUser={mockUpdateUser}
    />);
    mockEvent = { target: { value: 'test value' } };
  });
  // add snapshot

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
})
