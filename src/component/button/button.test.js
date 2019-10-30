import React from 'react';
import { findByTestAttribute, checkProps } from '../../../utils/index';
import SharedButton from './index';
import { shallow } from 'enzyme';

describe('SharedButton Component', () => {
  describe('Chcking PropTypes', () => {
    it('Should not throw warning', () => {
      const expectedProps = {
        buttonText: 'Example button Test',
        emitEvent: () => {}
      };

      const propsError = checkProps(SharedButton, expectedProps);

      expect(propsError).toBe(undefined);
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'Example button text',
        emitEvent: () => {}
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it('Should render a button', () => {
      const button = findByTestAttribute(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});
