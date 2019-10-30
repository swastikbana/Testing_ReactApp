import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from '../../../utils';
import ListItem from './index';

describe('ListItem Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not through a warning', () => {
      const expectedProps = {
        title: 'Test title',
        desc: 'Test description'
      };

      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBe(undefined);
    });
  });

  describe('Component renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Test title',
        desc: 'Test description'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Should render without error', () => {
      const component = findByTestAttribute(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const component = findByTestAttribute(wrapper, 'componentTitle');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const component = findByTestAttribute(wrapper, 'componentDesc');
      expect(component.length).toBe(1);
    });
  });

  describe('Component is not rendered', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Test description'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Should is not rendere', () => {
      const component = findByTestAttribute(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
