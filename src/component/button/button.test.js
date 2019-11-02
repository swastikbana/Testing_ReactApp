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
    let mockFunc;

    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: 'Example button text',
        emitEvent: mockFunc
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it('Should render a button', () => {
      const button = findByTestAttribute(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });

    it('Should emit call back on click event', () => {
      const button = findByTestAttribute(wrapper, 'buttonComponent');
      button.simulate('click');
      const callBack = mockFunc.mock.calls.length;
      expect(callBack).toBe(1);
    });
  });
});
