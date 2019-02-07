import React from 'react';
import { shallow } from 'enzyme';
import ColorList from './ColorList';
import toJson from 'enzyme-to-json';
import { COLORS } from '../ColorItem/Colors';

describe('ColorList', () => {
  it('is defined with a default value', () => {
    const component = shallow(<ColorList onClick={jest.fn()}/>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('receive a list of "selectedColors"', () => {
    const component = shallow(
      <ColorList 
        selectedColors={[COLORS.green, COLORS.yellow]} 
        onClick={jest.fn()}/>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('custom colors', () => {
    const component = shallow(
      <ColorList 
        colors={["purple", "blue"]} 
        onClick={jest.fn()}/>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});