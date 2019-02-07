import React from 'react';
import { shallow, mount } from 'enzyme';
import ColorListSelectMany from './ColorListSelectMany';
import toJson from 'enzyme-to-json';
import { COLORS } from '../ColorItem/Colors';
import ColorItem from '../ColorItem/ColorItem';

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
  
  it('many colors can be selected at the same time', () => {
    const component = mount(
      <ColorListSelectMany 
        setSelectedColors={jest.fn()}/>
    );
    
    component.find(`div.ColorItem[color="${COLORS.red}"]`).first().simulate('click');
    component.find(`div.ColorItem[color="${COLORS.yellow}"]`).first().simulate('click');

    expect(component.find('div.ColorItem.selected').length).toEqual(2);
  });

});