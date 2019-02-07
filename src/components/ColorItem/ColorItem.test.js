import React from 'react';
import { shallow } from 'enzyme';
import ColorItem from './ColorItem';
import toJson from 'enzyme-to-json';

describe('ColorItem', () => {
  it('if receive "red" color, will render a "red" component', () => {
    const component = shallow(<ColorItem color="red" onClick={jest.fn()} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('if receive "isSelected" prop, will render a bigger border', () => {
    const component = shallow(<ColorItem color="red" isSelected={true} onClick={jest.fn()} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});