import React from 'react';
import { shallow, mount } from 'enzyme';
import ColorListSelectMany from './ColorListSelectMany';
import toJson from 'enzyme-to-json';
import { COLORS } from '../ColorItem/Colors';

describe('ColorListSelectMany', () => {
  it('is defined with a default value', () => {
    const component = shallow(
      <ColorListSelectMany setSelectedColors={jest.fn()}/>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('receive a list of "selectedColors"', () => {
    const component = shallow(
      <ColorListSelectMany 
        selectedColors={[COLORS.yellow, COLORS.red]} 
        setSelectedColors={jest.fn()}/>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

});