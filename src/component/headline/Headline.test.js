import React from 'react';
import { shallow } from 'enzyme';
import Headeline from './index';
import { checkProps, findByTestAttribute } from '../../../utils';

const setup = (props = {}) => {
  const component = shallow(<Headeline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Checking prop types', () => {
    it('Should ot throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test desc',
        tempArr: [
          {
            fName: 'Test Fname',
            lName: 'Test Lname',
            email: 'Test email',
            age: 23,
            onlineStatus: false
          }
        ]
      };
      const propsErr = checkProps(Headeline, expectedProps);
      expect(propsErr).toBe(undefined);
    });
  });

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test description'
      };
      wrapper = setup(props);
    });

    it('Should render without error', () => {
      const component = findByTestAttribute(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });
    it('Should render a h1', () => {
      const component = findByTestAttribute(wrapper, 'Header');
      expect(component.length).toBe(1);
    });
    it('should render a description', () => {
      const component = findByTestAttribute(wrapper, 'Description');
      expect(component.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });

    it('Should not render', () => {
      const component = findByTestAttribute(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
