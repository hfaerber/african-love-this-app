
import React from 'react';
import NoMatch from './NoMatch';
import { shallow } from 'enzyme';

describe('NoMatch', () => {
  let wrapper;

  it('should match snapshot', () => {
    wrapper = shallow(<NoMatch />);
    expect(wrapper).toMatchSnapshot();
  });
});
