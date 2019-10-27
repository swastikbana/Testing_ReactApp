import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttribute } from '../../../utils/index';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Componnt', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('Should render without error', () => {
    //console.log(component.debug());
    const wrapper = findByTestAttribute(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const logo = findByTestAttribute(component, 'logoIMG');
    expect(logo.length).toBe(1);
  });
});
