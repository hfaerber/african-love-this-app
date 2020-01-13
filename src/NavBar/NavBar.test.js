import React from 'react';
import { NavBar } from './NavBar';
import { shallow } from 'enzyme';

describe('NavBar', () => {
  let wrapper;

  it('should match snapshot', () => {
    wrapper = shallow(<NavBar
      text='Quiz'
      link='./quiz'
    />);
    expect(wrapper).toMatchSnapshot();
  })
})
