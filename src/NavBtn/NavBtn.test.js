import React from 'react';
import { NavBtn } from './NavBtn';
import { shallow } from 'enzyme';

describe('NavBtn Container', () => {
  describe('NavBar component', () => {
    let wrapper, mockText, mockLink;

    beforeEach(() => {
      mockText = 'Study';
      mockLink = '/study';
      wrapper = shallow(<NavBtn
          text={mockText}
          link={mockLink}
        />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
