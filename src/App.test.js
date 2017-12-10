/* global it, expect, jest */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';
import { initialState } from './reducers';

configure({ adapter: new Adapter() });

it('App renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(<App
    state={initialState}
    submitTodo={mockFunction}
    todos={[]}
    deleteTodo={mockFunction}
    undeleteTodo={mockFunction}
  />);
  expect(component.exists()).toEqual(true);
});
