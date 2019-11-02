import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttribute, testStore } from '../utils/index';
import React from 'react';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};
describe('App component testing', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: 'Example title 1', body: 'Some Text' },
        { title: 'Example title 2', body: 'Some Text' },
        { title: 'Example title 3', body: 'Some Text' }
      ]
    };
    wrapper = setUp(initialState);
  });

  it('Should render without error', () => {
    const component = findByTestAttribute(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
});
